const expect = require('chai').use(require('dirty-chai')).expect;
const _ = require('lodash');
const pk6parse = require('..');
const expected_pkmn1 = require('./pkmn1_expected');

describe('pk6parse', () => {
  it('allows a file to be parsed', () => {
    expect(pk6parse.parseFile(`${__dirname}/pkmn1.pk6`)).to.eql(expected_pkmn1);
  });
  it('allows a buffer to be parsed directly', () => {
    const buf = require('fs').readFileSync(`${__dirname}/pkmn1.pk6`);
    expect(pk6parse.parseBuffer(buf)).to.eql(expected_pkmn1);
  });
  it('assigns additional properties if this option is set with a flag', () => {
    const parsed = pk6parse.parseFile(`${__dirname}/pkmn1.pk6`, {parseNames: true});
    _.forEach(expected_pkmn1, (value, key) => expect(parsed[key]).to.equal(value));
    expect(parsed.speciesName).to.equal('Pelipper');
    expect(parsed.level).to.equal(24);
    expect(parsed.expFromPreviousLevel).to.equal(495);
    expect(parsed.expToNextLevel).to.equal(1306);
    expect(parsed.heldItemName).to.be.null();
    expect(parsed.ballName).to.equal('Quick Ball');
    expect(parsed.abilityName).to.equal('Keen Eye');
    expect(parsed.natureName).to.equal('Modest');
    expect(parsed.move1Name).to.equal('Agility');
    expect(parsed.move2Name).to.equal('Water Pulse');
    expect(parsed.move3Name).to.equal('Payback');
    expect(parsed.move4Name).to.equal('Roost');
    expect(parsed.eggMove1Name).to.equal('Agility');
    expect(parsed.eggMove2Name).to.be.null();
    expect(parsed.eggMove3Name).to.be.null();
    expect(parsed.eggMove4Name).to.be.null();
    expect(parsed.medals).to.eql([]);
    expect(parsed.ribbons).to.eql([]);
    expect(parsed.eggLocationName).to.be.null();
    expect(parsed.metLocationName).to.equal('Route 118');
    expect(parsed.encounterTypeName).to.equal('Pal Park/Egg/Event');
    expect(parsed.otGameName).to.equal('Omega Ruby');
  });
  it('allows assignReadableNames to be called on its own', () => {
    const parsedWithNames = pk6parse.parseFile(`${__dirname}/pkmn1.pk6`, {parseNames: true});
    const expected = _.cloneDeep(expected_pkmn1);
    expect(pk6parse.assignReadableNames(expected)).to.eql(parsedWithNames);
  });
});
