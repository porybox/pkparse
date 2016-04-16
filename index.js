'use strict';
// Reference: https://projectpokemon.org/wiki/Pokemon_X/Y_3DS_Structure
function stripNullChars (str) {
  return str.replace(/\0.*/, '');
}

function parseMap (data, map) {
  const parsedData = [];
  for (let i = 0; i < map.length; i++, data = Math.floor(data / 2)) {
    if (map[i] && data % 2) {
      parsedData.push(map[i]);
    }
  }
  return parsedData;
}

function checksumIsValid (buf) {
  let sum = 0;
  for (let i = 8; i < 232; i += 2) {
    sum += buf.readUInt16LE(i);
  }
  return (sum & 0xffff) === buf.readUInt16LE(0x06);
}

function getDateFromInt (dateStorage) {
  return dateStorage ? Date.UTC((dateStorage & 0xff) + 2000, (dateStorage >>> 8 & 0xff) - 1, dateStorage >>> 16 & 0xff) : null;
}

exports.parseBuffer = (buf, options) => {
  if (buf.readUInt16LE(0x04) || !checksumIsValid(buf) || [232, 260].indexOf(buf.length) === -1 || buf.readUInt8(0x58) ||
      buf.readUInt8(0x90) || buf.readUInt8(0xc8)) {
    throw new TypeError('The provided buffer is not valid pk6 data');
  }
  options = options || {};
  options.parseNames = !!options.parseNames;
  options.language = options.language || 'ENG';

  const data = {};
  data.encryptionConstant = buf.readUInt32LE(0x00);
  data.dexNo = buf.readUInt16LE(0x08);
  data.heldItemId = buf.readUInt16LE(0x0a);
  data.tid = buf.readUInt16LE(0x0c);
  data.sid = buf.readUInt16LE(0x0e);
  data.exp = buf.readUInt32LE(0x10);
  data.abilityId = buf.readUInt8(0x14);
  data.abilityNum = buf.readUInt8(0x15);
  data.superTrainingHitsRemaining = buf.readUInt8(0x16);
  data.superTrainingBag = buf.readUInt8(0x17);
  data.pid = buf.readUInt32LE(0x18);
  data.natureId = buf.readUInt8(0x1c);

  const genderByte = buf.readUInt8(0x1d);
  data.isFatefulEncounter = !!(genderByte & 0x01);
  const isFemale = genderByte & 0x02;
  const isGenderless = genderByte & 0x04;
  data.gender = isFemale ? 'F' : isGenderless ? '' : 'M';
  data.formId = genderByte >>> 3;

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
  data.pokerusDuration = pokerusByte & 16;
  data.pokerusStrain = pokerusByte >>> 4;

  data.medalData = buf.readUInt32LE(0x2c);
  data.ribbonData = buf.readUIntLE(0x30, 6);
  data.distributionSuperTrainingFlags = buf.readUInt8(0x3a); // TODO: Figure out what these are
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

  data.canDoSecretSuperTraining = !!buf.readUInt8(0x72);

  const ivBytes = buf.readUInt32LE(0x74);
  data.ivHp = ivBytes & 0x1f;
  data.ivAtk = ivBytes >>> 5 & 0x1f;
  data.ivDef = ivBytes >>> 10 & 0x1f;
  data.ivSpe = ivBytes >>> 15 & 0x1f;
  data.ivSpAtk = ivBytes >>> 20 & 0x1f;
  data.ivSpDef = ivBytes >>> 25 & 0x1f;
  data.isEgg = (ivBytes >>> 30) % 2 !== 0;
  data.isNicknamed = (ivBytes >>> 31) % 2 !== 0;

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
  data.notOtMemoryIntensity = buf.readUInt8(0xa4); // TODO: Parse
  data.notOtMemoryLine = buf.readUInt8(0xa5);
  data.notOtMemoryFeeling = buf.readUInt8(0xa6);
  data.notOtMemoryTextVar = buf.readUInt16LE(0xa8);

  data.fullness = buf.readUInt8(0xae);
  data.enjoyment = buf.readUInt8(0xaf);

  data.ot = stripNullChars(buf.toString('utf16le', 0xb0, 0xc8));
  data.otFriendship = buf.readUInt8(0xca);
  data.otAffection = buf.readUInt8(0xcb);
  data.otMemoryIntensity = buf.readUInt8(0xcc); // TODO: Parse
  data.otMemoryLine = buf.readUInt8(0xcd);
  data.otMemoryTextVar = buf.readUInt16LE(0xce);
  data.otMemoryFeeling = buf.readUInt8(0xd0);

  data.eggDate = getDateFromInt(buf.readUIntLE(0xd1, 3));
  data.metDate = getDateFromInt(buf.readUIntLE(0xd4, 3));

  data.eggLocationId = buf.readUInt16LE(0xd8);
  data.metLocationId = buf.readUInt16LE(0xda);
  data.ballId = buf.readUInt8(0xdc);

  const encounterLevelByte = buf.readUInt8(0xdd);
  data.levelMet = encounterLevelByte & 0x7f;
  data.otGender = encounterLevelByte >>> 7 ? 'F' : 'M';

  data.encounterTypeId = buf.readUInt8(0xde);
  data.otGameId = buf.readUInt8(0xdf);
  data.countryId = buf.readUInt8(0xe0); // TODO: Parse
  data.regionId = buf.readUInt8(0xe1); // TODO: Parse
  data.consoleRegion = ['J', 'U', 'E', '?', 'C', 'K', 'T'][buf.readUInt8(0xe2)];
  data.language = [null, 'JPN', 'ENG', 'FRE', 'ITA', 'GER', '???', 'SPA', 'KOR'][buf.readUInt8(0xe3)];
  data._rawPk6 = buf.toString('base64');

  if (options.parseNames) {
    exports.assignReadableNames(data, options.language);
  }

  return data;
};

exports.assignReadableNames = (data, language) => {
  const langMap = {ENG: 'en', SPA: 'es', FRE: 'fr', GER: 'de', ITA: 'it', JPN: 'ja', KOR: 'ko'};
  const shortLang = langMap[language];
  if (!shortLang) {
    throw new TypeError(`Invalid language '${language}'`);
  }
  const findName = specificData => specificData && specificData.names.find(d => d.language === shortLang).name;
  data.speciesName = findName(exports.getPokemonData(data.dexNo));
  data.heldItemName = findName(exports.getItemData(data.heldItemId));
  data.abilityName = findName(exports.getAbilityData(data.abilityId));
  data.natureName = findName(exports.getNatureData(data.natureId));
  data.move1Name = findName(exports.getMoveData(data.move1Id));
  data.move2Name = findName(exports.getMoveData(data.move2Id));
  data.move3Name = findName(exports.getMoveData(data.move3Id));
  data.move4Name = findName(exports.getMoveData(data.move4Id));
  data.eggMove1Name = findName(exports.getMoveData(data.eggMove1Id));
  data.eggMove2Name = findName(exports.getMoveData(data.eggMove2Id));
  data.eggMove3Name = findName(exports.getMoveData(data.eggMove3Id));
  data.eggMove4Name = findName(exports.getMoveData(data.eggMove4Id));
  data.medals = exports.getMedalData(data.medalData);
  data.ribbons = exports.getRibbonData(data.ribbonData);
  data.eggLocationName = exports.getLocationData(data.eggLocationId);
  data.metLocationName = exports.getLocationData(data.metLocationId);
  data.encounterTypeName = exports.getEncounterTypeData(data.encounterTypeId);
  data.otGameName = exports.getGameData(data.otGameId);
  return data;
};

exports.parseFile = (path, options) => {
  return exports.parseBuffer(require('fs').readFileSync(path), options);
};

exports.getPokemonData = dexNo => {
  try {
    return require(`./data/pokemon/${dexNo}.json`);
  } catch (e) {
    throw new TypeError(`Invalid dex number: ${dexNo}`);
  }
};

exports.getItemData = itemId => {
  if (itemId === 0) {
    return null;
  }
  try {
    return require(`./data/item_gen6/${itemId}.json`);
  } catch (e) {
    throw new TypeError(`Invalid item ID: ${itemId}`);
  }
};

exports.getMoveData = moveId => {
  if (moveId === 0) {
    return null;
  }
  try {
    return require(`./data/move/${moveId}.json`);
  } catch (e) {
    throw new TypeError(`Invalid move ID: ${moveId}`);
  }
};

exports.getAbilityData = abilityId => {
  if (abilityId === 0) {
    return null;
  }
  try {
    return require(`./data/ability/${abilityId}.json`);
  } catch (e) {
    throw new TypeError(`Invalid ability ID: ${abilityId}`);
  }
};

exports.getNatureData = natureId => {
  if (natureId === 0) {
    return null;
  }
  try {
    return require(`./data/nature/${natureId}.json`);
  } catch (e) {
    throw new TypeError(`Invalid nature ID: ${natureId}`);
  }
};

exports.getLocationData = locationId => require('./data/location_gen6.json')[locationId] || null;

exports.getRibbonData = ribbonData => {
  return parseMap(ribbonData, require('./data/ribbons.json'));
};

exports.getMedalData = medalData => {
  return parseMap(medalData, require('./data/medals.json'));
};

exports.getEncounterTypeData = encounterTypeId => {
  return [
    'Pal Park/Egg/Event',
    null,
    'Tall Grass',
    null,
    'Sinjoh Ruins Event',
    'Cave/Hall of Origin',
    null,
    'Surfing/Fishing',
    null,
    'Building',
    'Great Marsh/Safari Zone',
    null,
    'Starter/Gift/Fossil'
  ][encounterTypeId];
};

exports.getGameData = gameId => require('./data/games.json')[gameId];
