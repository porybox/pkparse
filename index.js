'use strict';
const gen6 = require('./gen6');
const gen7 = require('./gen7');
const common = require('./common');

exports.parseBuffer = (buf, {parseNames = false, gen = 6, language} = {}) => {
  let parsed;
  if (gen === 6) {
    parsed = gen6.parseBuffer(buf, {parseNames, language});
  } else if (gen === 7) {
    parsed = gen7.parseBuffer(buf, {parseNames, language});
  } else {
    throw new Error('Unsupported gen');
  }
  return parsed;
};

exports.parseFile = (path, options) => {
  return exports.parseBuffer(require('fs').readFileSync(path), options);
};

exports.SUPPORTED_GENS = [6, 7];

exports.assignReadableNames = common.assignReadableNames;
exports.getPokemonData = common.getPokemonData;
exports.getItemData = common.getItemData;
exports.getMoveData = common.getMoveData;
exports.getAbilityData = common.getAbilityData;
exports.getNatureData = common.getNatureData;
exports.getMedalData = common.getMedalData;
exports.getRibbonData = common.getRibbonData;
