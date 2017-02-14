'use strict';
const _ = require('lodash');

// Reference: https://projectpokemon.org/wiki/Pokemon_X/Y_3DS_Structure

const hanzi = require('fs').readFileSync(`${__dirname}/data/hanzi.bin`);
const HANZI_OFFSET = 0xE800;

function getHanziChar (offset) {
  return hanzi.toString('ucs2', (offset - HANZI_OFFSET) * 2, (offset - HANZI_OFFSET + 1) * 2);
}

function getString (str) {
  return str.replace(/\0.*/, '').replace(/[\ue000-\uee1d]/g, match => getHanziChar(match.charCodeAt()));
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

const TYPES = [
  'fighting',
  'flying',
  'poison',
  'ground',
  'rock',
  'bug',
  'ghost',
  'steel',
  'fire',
  'water',
  'grass',
  'electric',
  'psychic',
  'ice',
  'dragon',
  'dark'
];

const calculateHiddenPower = (hp, atk, def, spa, spd, spe) => ({
  type: TYPES[Math.floor((hp % 2 + 2 * (atk % 2) + 4 * (def % 2) + 8 * (spe % 2) + 16 * (spa % 2) + 32 * (spd % 2)) * 5 / 21)],
  power: 30 + Math.floor(((hp & 2) + 2 * (atk & 2) + 4 * (def & 2) + 8 * (spe & 2) + 16 * (spa & 2) + 32 * (spd & 2)) * 20 / 63)
});

function getBitflagData (buf, start, length) {
  if (length > 53) {
    throw new TypeError('The bitflag array provided is too large to return a safe integer.');
  }
  let res = 0, add = 1;
  for (let i = 0; i < length; i++) {
    if (buf[start + (i >>> 3)] >>> (i & 7) & 1) {
      res += add;
    }
    add *= 2;
  }
  return res;
}

exports.parseBuffer = buf => {
  if (buf.readUInt16LE(0x04) || [232, 260].indexOf(buf.length) === -1 || !checksumIsValid(buf) || buf.readUInt8(0x58) ||
      buf.readUInt8(0x90) || buf.readUInt8(0xc8)) {
    throw new TypeError('The provided buffer is not valid pk6 data');
  }

  const data = {};
  data.encryptionConstant = buf.readUInt32LE(0x00);
  data.dexNo = buf.readUInt16LE(0x08);
  data.heldItemId = buf.readUInt16LE(0x0a);
  data.tid = buf.readUInt16LE(0x0c);
  data.sid = buf.readUInt16LE(0x0e);
  data.tidFull = buf.readUInt32LE(0x0c);
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

  const pokerusByte = buf.readUInt8(0x2b);
  data.pokerusDuration = pokerusByte & 15;
  data.pokerusStrain = pokerusByte >>> 4;

  data.medalData = buf.readUInt32LE(0x2c);
  data.ribbonData = getBitflagData(buf, 0x30, require('./data/ribbons.json').length);
  data.contestMemoryRibbonCount = buf.readUInt8(0x38);
  data.battleMemoryRibbonCount = buf.readUInt8(0x39);
  data.distributionSuperTrainingFlags = buf.readUInt8(0x3a); // TODO: Figure out what these are
  data.nickname = getString(buf.toString('utf16le', 0x40, 0x58));

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

  data.notOt = getString(buf.toString('utf16le', 0x78, 0x90));
  data.notOtGender = buf.readUInt8(0x92) ? 'F' : 'M';

  data.currentHandlerIsOt = !buf.readUInt8(0x93);

  data.geoLocation1RegionId = buf.readUInt8(0x94);
  data.geoLocation1CountryId = buf.readUInt8(0x95);
  data.geoLocation2RegionId = buf.readUInt8(0x96);
  data.geoLocation2CountryId = buf.readUInt8(0x97);
  data.geoLocation3RegionId = buf.readUInt8(0x98);
  data.geoLocation3CountryId = buf.readUInt8(0x99);
  data.geoLocation4RegionId = buf.readUInt8(0x9a);
  data.geoLocation4CountryId = buf.readUInt8(0x9b);
  data.geoLocation5RegionId = buf.readUInt8(0x9c);
  data.geoLocation5CountryId = buf.readUInt8(0x9d);

  data.notOtFriendship = buf.readUInt8(0xa2);
  data.notOtAffection = buf.readUInt8(0xa3);
  data.notOtMemoryIntensity = buf.readUInt8(0xa4);
  data.notOtMemoryLine = buf.readUInt8(0xa5);
  data.notOtMemoryFeeling = buf.readUInt8(0xa6);
  data.notOtMemoryTextVar = buf.readUInt16LE(0xa8);

  data.fullness = buf.readUInt8(0xae);
  data.enjoyment = buf.readUInt8(0xaf);

  data.ot = getString(buf.toString('utf16le', 0xb0, 0xc8));
  data.otFriendship = buf.readUInt8(0xca);
  data.otAffection = buf.readUInt8(0xcb);
  data.otMemoryIntensity = buf.readUInt8(0xcc);
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
  data.countryId = buf.readUInt8(0xe0);
  data.regionId = buf.readUInt8(0xe1);
  data.consoleRegion = ['J', 'U', 'E', '?', 'C', 'K', 'T'][buf.readUInt8(0xe2)];
  data._rawFile = buf.toString('base64');

  return data;
};

const levelToExperienceCache = {
  'slow-then-very-fast': {},
  fast: {},
  medium: {},
  'medium-slow': {},
  slow: {},
  'fast-then-very-slow': {}
};

function _baseLevelToExperience (level, growthRate) {
  // Reference: http://bulbapedia.bulbagarden.net/wiki/Experience
  if (level > 100) {
    return Infinity;
  }
  if (growthRate === 'slow-then-very-fast') {
    if (level < 50) {
      return Math.pow(level, 3) * (100 - level) / 50;
    }
    if (level < 68) {
      return Math.pow(level, 3) * (150 - level) / 100;
    }
    if (level < 98) {
      return Math.pow(level, 3) * Math.floor((1911 - 10 * level) / 3) / 500;
    }
    return Math.pow(level, 3) * (160 - level) / 100;
  }
  if (growthRate === 'fast') {
    return 4 / 5 * Math.pow(level, 3);
  }
  if (growthRate === 'medium') {
    return Math.pow(level, 3);
  }
  if (growthRate === 'medium-slow') {
    return 6 / 5 * Math.pow(level, 3) - 15 * Math.pow(level, 2) + 100 * level - 140;
  }
  if (growthRate === 'slow') {
    return 5 / 4 * Math.pow(level, 3);
  }
  if (growthRate === 'fast-then-very-slow') {
    if (level < 15) {
      return Math.pow(level, 3) * (Math.floor((level + 1) / 3) + 24) / 50;
    }
    if (level < 36) {
      return Math.pow(level, 3) * (level + 14) / 50;
    }
    return Math.pow(level, 3) * (Math.floor(level / 2) + 32) / 50;
  }
  return NaN;
}
function convertLevelToExperience (level, growthRate) {
  // Reference: http://bulbapedia.bulbagarden.net/wiki/Experience
  if (!levelToExperienceCache[growthRate]) {
    throw new TypeError(`Unrecognized growth rate '${growthRate}'`);
  }
  if (levelToExperienceCache[growthRate][level] === undefined) {
    levelToExperienceCache[growthRate][level] = Math.floor(_baseLevelToExperience(level, growthRate));
  }
  return levelToExperienceCache[growthRate][level];
}

const experienceToLevelCache = {
  'slow-then-very-fast': {},
  fast: {},
  medium: {},
  'medium-slow': {},
  slow: {},
  'fast-then-very-slow': {}
};

function _baseConvertExperienceToLevelData (exp, growthRate) {
  let i = 1;
  let currentLevelExperience = 0;
  let previousLevelExperience = 0;
  /* Checks all of the levels from 1-100 to find the correct one.
  In theory this could also be done by (a) solving cubic equations to find the level analytically, or (b) using binary search.
  However, given that there are always exactly 100 possible options, any performance improvement from using those would
  be minimal anyway. */
  while (currentLevelExperience <= exp && i <= 100) {
    previousLevelExperience = currentLevelExperience;
    currentLevelExperience = convertLevelToExperience(++i, growthRate);
  }
  return {level: i - 1, expFromPreviousLevel: exp - previousLevelExperience, expToNextLevel: currentLevelExperience - exp};
}

function convertExperienceToLevelData (exp, growthRate) {
  if (!experienceToLevelCache[growthRate]) {
    throw new TypeError(`Unrecognized growth rate '${growthRate}'`);
  }
  if (experienceToLevelCache[growthRate][exp] === undefined) {
    experienceToLevelCache[growthRate][exp] = _baseConvertExperienceToLevelData(exp, growthRate);
  }
  return experienceToLevelCache[growthRate][exp];
}

function abbreviateStat (name) {
  return {
    hp: 'Hp',
    attack: 'Atk',
    defense: 'Def',
    'special-attack': 'SpAtk',
    'special-defense': 'SpDef',
    speed: 'Spe',
    null: null
  }[name];
}

function calculateStat (baseStat, level, iv, ev, natureMultiplier, isHp) {
  if (isHp && baseStat === 1) {
    // shedinja hp
    return 1;
  }
  if (isHp) {
    return Math.floor((2 * baseStat + iv + Math.floor(ev / 4)) * level / 100) + level + 10;
  }
  return Math.floor((Math.floor((2 * baseStat + iv + Math.floor(ev / 4)) * level / 100) + 5) * natureMultiplier);
}

function assignCalculatedStat (data, statName) {
  data[`stat${statName}`] = calculateStat(
    data[`baseStat${statName}`],
    data.level,
    data[`iv${statName}`],
    data[`ev${statName}`],
    data.increasedStat === statName ? 1.1 : data.decreasedStat === statName ? 0.9 : 1,
    statName === 'Hp'
  );
}

function assignRegionAndCountryNames (data, locationNum, language) {
  const regionId = data[`geoLocation${locationNum}RegionId`];
  const countryId = data[`geoLocation${locationNum}CountryId`];
  const regionNameKey = `geoLocation${locationNum}RegionName`;
  const countryNameKey = `geoLocation${locationNum}CountryName`;
  data[regionNameKey] = regionId ? data[regionNameKey] = exports.getSubregionName(countryId, regionId, language) : null;
  data[countryNameKey] = countryId ? data[countryNameKey] = exports.getCountryName(countryId, language) : null;
}

const langMap = {ENG: 'en', SPA: 'es', FRE: 'fr', GER: 'de', ITA: 'it', JPN: 'ja', KOR: 'ko', CHS: 'zh-CN', CHT: 'zh-TW'};
exports.assignReadableNames = (data, language, params = {gen: 6}) => {
  const gen = params.gen;
  language = language || 'ENG';
  const shortLang = langMap[language];
  if (!shortLang) {
    throw new TypeError(`Invalid language '${language}'`);
  }
  const findName = specificData => specificData && specificData.names[shortLang];

  const pkmnData = exports.getPokemonData(data.dexNo, {gen});
  data.speciesName = findName(pkmnData);
  data.growthRate = pkmnData.growth_rate;
  Object.assign(data, convertExperienceToLevelData(data.exp, data.growthRate));
  const natureData = exports.getNatureData(data.natureId);
  data.natureName = findName(natureData);
  const alternateForms = require(gen > 6 ? './data/alternate_forms_gen7' : './data/alternate_forms_gen6');
  data.formName = alternateForms[data.dexNo] && alternateForms[data.dexNo][data.formId];
  data.increasedStat = abbreviateStat(natureData.increased_stat && natureData.increased_stat.name);
  data.decreasedStat = abbreviateStat(natureData.decreased_stat && natureData.decreased_stat.name);
  data.types = pkmnData.types;

  data.baseStatHp = pkmnData.base_stats.hp;
  data.baseStatAtk = pkmnData.base_stats.attack;
  data.baseStatDef = pkmnData.base_stats.defense;
  data.baseStatSpAtk = pkmnData.base_stats['special-attack'];
  data.baseStatSpDef = pkmnData.base_stats['special-defense'];
  data.baseStatSpe = pkmnData.base_stats.speed;

  ['Hp', 'Atk', 'Def', 'SpAtk', 'SpDef', 'Spe'].forEach(statName => assignCalculatedStat(data, statName));

  data.heldItemName = findName(exports.getItemData(data.heldItemId));
  /* For all the pokeballs obtainable in gen 6 (ball IDs 1-16), the ball ID is the same as the item ID for that ball.
  For johto balls (apricorn/sport), the ball IDs are 17-24 and the corresponding item IDs are 492-499, in the same order.
  For dream balls, the ball ID is 25 and the corresponding item ID is 576.
  For beast balls, the ball ID is 26 and the corresponding item ID is 851. */
  const correctedBallId = data.ballId < 17 ? data.ballId : data.ballId === 25 ? 576 :
                          data.ballId === 26 ? 851 : data.ballId + 475;
  data.ballName = findName(exports.getItemData(correctedBallId, {gen}));
  data.abilityName = findName(exports.getAbilityData(data.abilityId, {gen}));

  const move1Data = exports.getMoveData(data.move1Id, {gen});
  data.move1Name = move1Data && findName(move1Data);
  data.move1Type = move1Data && move1Data.type;
  data.move1Power = move1Data && move1Data.power;

  const move2Data = exports.getMoveData(data.move2Id, {gen});
  data.move2Name = move2Data && findName(move2Data);
  data.move2Type = move2Data && move2Data.type;
  data.move2Power = move2Data && move2Data.power;

  const move3Data = exports.getMoveData(data.move3Id, {gen});
  data.move3Name = move3Data && findName(move3Data);
  data.move3Type = move3Data && move3Data.type;
  data.move3Power = move3Data && move3Data.power;

  const move4Data = exports.getMoveData(data.move4Id, {gen});
  data.move4Name = move4Data && findName(move4Data);
  data.move4Type = move4Data && move4Data.type;
  data.move4Power = move4Data && move4Data.power;

  data.eggMove1Name = findName(exports.getMoveData(data.eggMove1Id, {gen}));
  data.eggMove2Name = findName(exports.getMoveData(data.eggMove2Id, {gen}));
  data.eggMove3Name = findName(exports.getMoveData(data.eggMove3Id, {gen}));
  data.eggMove4Name = findName(exports.getMoveData(data.eggMove4Id, {gen}));

  [1, 2, 3, 4, 5].forEach(num => assignRegionAndCountryNames(data, num, language));

  data.notOtMemory = exports.parseMemoryData(
    data.notOtMemoryIntensity,
    data.notOtMemoryLine,
    data.notOtMemoryFeeling,
    data.notOtMemoryTextVar,
    data.nickname,
    data.notOt,
    language
  );

  data.otMemory = exports.parseMemoryData(
    data.otMemoryIntensity,
    data.otMemoryLine,
    data.otMemoryFeeling,
    data.otMemoryTextVar,
    data.nickname,
    data.ot,
    language
  );

  data.medals = exports.getMedalData(data.medalData);
  data.ribbons = exports.getRibbonData(data.ribbonData);

  if (data.contestMemoryRibbonCount === 40) {
    data.ribbons.push('Contest Memory Ribbon (Gold)');
  } else if (data.contestMemoryRibbonCount) {
    data.ribbons.push('Contest Memory Ribbon');
  }

  if (data.battleMemoryRibbonCount === 8) {
    data.ribbons.push('Battle Memory Ribbon (Gold)');
  } else if (data.battleMemoryRibbonCount) {
    data.ribbons.push('Battle Memory Ribbon');
  }

  data.eggLocationName = exports.getLocationData(data.eggLocationId, data.otGameId, true);
  data.metLocationName = exports.getLocationData(data.metLocationId, data.otGameId);
  data.encounterTypeName = exports.getEncounterTypeData(data.encounterTypeId);
  data.otGameName = exports.getGameData(data.otGameId, data.language);

  data.countryName = exports.getCountryName(data.countryId, language);
  data.regionName = data.regionId ? exports.getSubregionName(data.countryId, data.regionId, language) : null;
  data.tsv = (data.tid ^ data.sid) >>> 4;
  data.esv = (data.pid & 0xffff ^ data.pid >>> 16) >>> 4;
  data.isShiny = !data.isEgg && data.tsv === data.esv;

  const hp = calculateHiddenPower(data.ivHp, data.ivAtk, data.ivDef, data.ivSpAtk, data.ivSpDef, data.ivSpe);
  data.hiddenPowerType = hp.type;
  data.hiddenPowerPower = hp.power;

  return data;
};

exports.parseFile = (path, options) => {
  return exports.parseBuffer(require('fs').readFileSync(path), options);
};

function parseForGen (gen, data) {
  const result = JSON.parse(JSON.stringify(data));
  const genMap = {6: 30}; // Maps gen numbers to the first game NOT in that gen
  if (gen in genMap && 'past_values' in data) {
    for (let i = 0; i < data.past_values.length; i++) {
      if (data.past_values[i].changed_in >= genMap[gen]) {
        _.merge(result, data.past_values[i].prior_values);
      } else {
        break;
      }
    }
  }
  return result;
}

function tryRequire (path, errorMessage) {
  try {
    return require(path);
  } catch (err) {
    throw errorMessage ? new TypeError(errorMessage) : err;
  }
  // TODO: Handle memory better if the process is running for a long time
}

exports.getPokemonData = (dexNo, params = {gen: 6}) =>
  parseForGen(params.gen, tryRequire(`./data/pokemon/${dexNo}`, `Invalid dex number: ${dexNo}`));
exports.getItemData = (itemId, params = {gen: 6}) =>
  itemId ? parseForGen(params.gen, tryRequire(`./data/item/${itemId}`, `Invalid item ID: ${itemId}`)) : null;
exports.getMoveData = (moveId, params = {gen: 6}) =>
  moveId ? parseForGen(params.gen, tryRequire(`./data/move/${moveId}`, `Invalid move ID: ${moveId}`)) : null;
exports.getAbilityData = (abilId, params = {gen: 6}) =>
  abilId ? parseForGen(params.gen, tryRequire(`./data/ability/${abilId}`, `Invalid ability ID: ${abilId}`)) : null;
exports.getNatureData = natureId =>
  tryRequire(`./data/nature/${natureId}`, `Invalid nature ID: ${natureId}`);

exports.getLocationData = (locationId, otGameId, isEggLocation) => {
  if (!locationId && isEggLocation) {
    return null;
  }
  if (otGameId >= 30) {
    return require('./data/location_gen7.json')[locationId] || null;
  }
  if (otGameId >= 24 && otGameId <= 29 || otGameId === undefined) {
    return require('./data/location_gen6.json')[locationId] || null;
  }
  if (otGameId >= 20 && otGameId <= 23) {
    return require('./data/location_gen5.json')[locationId] || null;
  }
  if (!isEggLocation) {
    return 'Poké Transfer';
  }
  if (otGameId >= 7 && otGameId <= 12) {
    return require('./data/location_gen4.json')[locationId] || null;
  }
  if (otGameId >= 1 && otGameId <= 5 || otGameId === 15) {
    return require('./data/location_gen3.json')[locationId] || null;
  }
  return null;
};

exports.getRibbonData = ribbonData => {
  return parseMap(ribbonData, require('./data/ribbons.json'));
};

exports.getMedalData = medalData => {
  return parseMap(medalData, require('./data/medals.json'));
};

exports.getEncounterTypeData = encounterTypeId => {
  return require('./data/encounterTypes')[encounterTypeId];
};

exports.getGameData = (gameId, language) => {
  // Special case handling for gameId 36, which is Japanese Green/International Blue
  if (gameId === 36 && language !== 'JPN') {
    return require('./data/games.json')[gameId + 1];
  }
  return require('./data/games.json')[gameId];
};

exports.getCountryName = (countryId, language) => require('./data/countries')[countryId][language];

exports.getSubregionName = (countryId, subregionId, language) => {
  const countryData = tryRequire(`./data/subregions/${countryId}`, `Invalid country ID ${countryId}`);
  try {
    return countryData[subregionId][language];
  } catch (err) {
    throw new TypeError(`Invalid subregion ID ${subregionId}`);
  }
};

function getTextVar (lineId, textVarId, language) {
  const shortLang = langMap[language];
  if ([5, 15, 26, 34, 40, 51].indexOf(lineId) !== -1) {
    return exports.getItemData(textVarId).names[shortLang];
  }
  if ([7, 9, 13, 14, 17, 18, 21, 25, 29, 44, 45, 50, 60].indexOf(lineId) !== -1) {
    return exports.getPokemonData(textVarId).names[shortLang];
  }
  if ([12, 16, 48, 49].indexOf(lineId) !== -1) {
    return exports.getMoveData(textVarId).names[shortLang];
  }
  if (lineId === 6) {
    return require('./data/location_gen6.json')[textVarId];
  }
  try {
    return require('./data/memories/memoryTextVars')[textVarId][language];
  } catch (err) {
    throw new TypeError(`Invalid memory textVar ID: ${textVarId}`);
  }
}

exports.parseMemoryData = (intensityId, lineId, feelingId, textVarId, nickname, trainerName, language) => {
  let intensity, line, feeling;
  const textVar = getTextVar(lineId, textVarId, language);
  try {
    line = require('./data/memories/memoryLines')[lineId][language];
  } catch (err) {
    throw new TypeError(`Invalid memory line ID: ${lineId}`);
  }
  if (lineId) {
    try {
      intensity = require('./data/memories/memoryIntensities')[intensityId][language];
    } catch (err) {
      throw new TypeError(`Invalid memory intensity ID: ${intensityId}`);
    }
    try {
      feeling = require('./data/memories/memoryFeelings')[feelingId][language];
    } catch (err) {
      throw new TypeError(`Invalid memory feeling ID: ${feelingId}`);
    }
  }
  return line
    .replace(/\{0\}/g, nickname)
    .replace(/\{1\}/g, trainerName)
    .replace(/\{2\}/g, textVar)
    .replace(/\{3\}/g, feeling)
    .replace(/\{4\}/g, intensity);
};
