'use strict';
// Reference: https://projectpokemon.org/wiki/Pokemon_X/Y_3DS_Structure
function stripNullChars (str) {
  return str.replace(/\0.*/, '');
}
function parseMap (data, map) {
  const parsedData = {};
  for (let i = 0; i < map.length; i++, data = Math.floor(data / 2)) {
    if (map[i]) {
      parsedData[map[i]] = data % 2 !== 0;
    }
  }
  return parsedData;
}

exports.parseBuffer = buf => {
  const data = {};
  data.species = buf.readUInt16LE(0x08);
  data.heldItem = buf.readUInt16LE(0x0a);
  data.tid = buf.readUInt16LE(0x0c);
  data.sid = buf.readUInt16LE(0x0e);
  data.exp = buf.readUInt32LE(0x10);
  data.ability = buf.readUInt8(0x14);
  data.abilityNum = buf.readUInt8(0x15);
  data.superTrainingHitsRemaining = buf.readUInt8(0x16);
  data.superTrainingBag = buf.readUInt8(0x17);
  data.pid = buf.readUInt32LE(0x18);
  data.nature = buf.readUInt8(0x1c);

  const genderByte = buf.readUInt8(0x1d);
  data.isFatefulEncounter = !!(genderByte & 0x01);
  const isFemale = genderByte & 0x02;
  const isGenderless = genderByte & 0x04;
  data.gender = isFemale ? 'F' : isGenderless ? null : 'M';
  data.form = genderByte >> 3;

  data.evHp = buf.readUInt8(0x1e);
  data.evAtk = buf.readUInt8(0x1f);
  data.evDef = buf.readUInt8(0x20);
  data.evSpe = buf.readUInt8(0x21);
  data.evSpAtk = buf.readUInt8(0x22);
  data.evSpDef = buf.readUInt8(0x23);

  data.contestStatCool = buf.readUInt8(0x24);
  data.contestStatBeauty = buf.readUInt8(0x25);
  data.contestStatCute = buf.readUInt8(0x26);
  data.contestStatSmart = buf.readUInt8(0x27);
  data.contestStatTough = buf.readUInt8(0x28);
  data.contestStatSheen = buf.readUInt8(0x29);

  const markingByte = buf.readUInt8(0x2a);
  data.hasCircleMarking = !!(markingByte & 0x01);
  data.hasTriangleMarking = !!(markingByte & 0x02);
  data.hasSquareMarking = !!(markingByte & 0x04);
  data.hasHeartMarking = !!(markingByte & 0x08);
  data.hasStarMarking = !!(markingByte & 0x10);
  data.hasDiamondMarking = !!(markingByte & 0x20);

  const pokerusByte = buf.readUInt8(0x2b);
  data.pkrsDuration = pokerusByte & 16;
  data.pkrsStrain = pokerusByte >> 4;

  data.medalData = buf.readUInt32LE(0x2c);
  data.ribbonData = buf.readUIntLE(0x30, 6);
  data.distributionSuperTrainingFlags = buf.readUInt8(0x3a); // Not sure what these are
  data.nickname = stripNullChars(buf.toString('utf16le', 0x40, 0x58));

  data.move1Id = buf.readUInt16LE(0x5a);
  data.move2Id = buf.readUInt16LE(0x5c);
  data.move3Id = buf.readUInt16LE(0x5e);
  data.move4Id = buf.readUInt16LE(0x60);
  data.move1Pp = buf.readUInt8(0x62);
  data.move2Pp = buf.readUInt8(0x63);
  data.move3Pp = buf.readUInt8(0x64);
  data.move4Pp = buf.readUInt8(0x65);
  data.move1Ppu = buf.readUInt8(0x66);
  data.move2Ppu = buf.readUInt8(0x67);
  data.move3Ppu = buf.readUInt8(0x68);
  data.move4Ppu = buf.readUInt8(0x69);
  data.eggMove1Id = buf.readUInt16LE(0x6a);
  data.eggMove2Id = buf.readUInt16LE(0x6c);
  data.eggMove3Id = buf.readUInt16LE(0x6e);
  data.eggMove4Id = buf.readUInt16LE(0x70);

  data.canDoSecretSuperTraining = !!(buf.readUInt8(0x72));

  const ivBytes = buf.readUInt32LE(0x74);
  data.ivHp = ivBytes & 0x1f;
  data.ivAtk = ivBytes >> 5 & 0x1f;
  data.ivDef = ivBytes >> 10 & 0x1f;
  data.ivSpe = ivBytes >> 15 & 0x1f;
  data.ivSpAtk = ivBytes >> 20 & 0x1f;
  data.ivSpDef = ivBytes >> 25 & 0x1f;
  data.isEgg = ivBytes >> 30 & 1;
  data.isNicknamed = ivBytes >> 31 & 1;

  data.notOt = stripNullChars(buf.toString('utf16le', 0x78, 0x90));
  data.notOtGender = buf.readUInt8(0x92) ? 'F' : 'M';

  data.currentHandlerIsOt = !buf.readUInt8(0x93);

  data.geoLocation1 = buf.readUInt16LE(0x94); // TODO: Figure out how to parse these
  data.geoLocation2 = buf.readUInt16LE(0x96);
  data.geoLocation3 = buf.readUInt16LE(0x98);
  data.geoLocation4 = buf.readUInt16LE(0x9a);
  data.geoLocation5 = buf.readUInt16LE(0x9c);

  data.notOtFriendship = buf.readUInt8(0xa2);
  data.notOtAffection = buf.readUInt8(0xa3);
  data.notOtMemoryIntensity = buf.readUInt8(0xa4);
  data.notOtMemoryLine = buf.readUInt8(0xa5);
  data.notOtMemoryFeeling = buf.readUInt8(0xa6);
  data.notOtMemoryTextVar = buf.readUInt16LE(0xa8);

  data.fullness = buf.readUInt8(0xae);
  data.enjoyment = buf.readUInt8(0xaf);

  data.ot = stripNullChars(buf.toString('utf16le', 0xb0, 0xc8));
  data.otFriendship = buf.readUInt8(0xca);
  data.otAffection = buf.readUInt8(0xcb);
  data.otMemoryIntensity = buf.readUInt8(0xcc);
  data.otMemoryLine = buf.readUInt8(0xcd);
  data.otMemoryTextVar = buf.readUInt16LE(0xce);
  data.otMemoryFeeling = buf.readUInt8(0xd0);

  const eggDateBytes = buf.readUIntLE(0xd1, 3);
  data.eggDate = eggDateBytes ? {
    year: 2000 + (eggDateBytes & 0xff),
    month: eggDateBytes >> 8 & 0xff,
    day: eggDateBytes >> 16 & 0xff
  } : null;

  const metDateBytes = buf.readUIntLE(0xd4, 3);
  data.metDate = metDateBytes ? {
    year: 2000 + (metDateBytes & 0xff),
    month: buf.readUInt8(0xd5),
    day: buf.readUInt8(0xd6)
  } : null;

  data.eggLocation = buf.readUInt16LE(0xd8);
  data.metLocation = buf.readUInt32LE(0xda);
  data.ballId = buf.readUInt8(0xdc);

  const encounterLevelByte = buf.readUInt8(0xdd);
  data.levelMet = encounterLevelByte & 0x7f;
  data.otGender = encounterLevelByte >> 7 ? 'F' : 'M';

  data.encounterType = buf.readUInt8(0xde);
  data.otGameId = buf.readUInt8(0xdf);
  data.countryId = buf.readUInt8(0xe0);
  data.regionId = buf.readUInt8(0xe1);
  data.consoleRegionId = buf.readUInt8(0xe2);
  data.otLang = buf.readUInt8(0xe3);

  return data;
};

exports.parseFile = path => {
  return exports.parseBuffer(require('fs').readFileSync(path));
};

exports.parseMoveId = id => {
  return require('./movesById')[id];
};

exports.parseRibbonData = ribbonData => {
  return parseMap(ribbonData, require('./ribbonsByOrder'));
};

exports.parseMedalData = medalData => {
  return parseMap(medalData, require('./medalsByOrder'));
};
