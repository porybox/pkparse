const expect = require('chai').use(require('dirty-chai')).expect;
const pkparse = require('../..');
const abra_expected = require('./abra_expected');
const options = {gen: 7, parseNames: true};

describe('gen 7', () => {
  it('works with pre gen 7 pokemon', () => {
    const abra_actual = pkparse.parseFile(`${__dirname}/abra.pk7`, options);
    expect(abra_actual).to.eql(abra_expected);
  });

  it('contains old tid and sid', () => {
    const abra_actual = pkparse.parseFile(`${__dirname}/abra.pk7`, options);
    expect(abra_actual.tid).to.eql(14562);
    expect(abra_actual.sid).to.eql(39364);
  });

  it('contains tidFull', () => {
    const abra_actual = pkparse.parseFile(`${__dirname}/abra.pk7`, options);
    expect(abra_actual.tidFull).to.eql(2579773666);
  });

  it('contains 6 digit idNo', () => {
    const abra = pkparse.parseFile(`${__dirname}/abra.pk7`, options);
    expect(abra.idNo).to.eql(773666);
  });

  it('supports new languages', () => {
    const chs = pkparse.parseFile(`${__dirname}/CHS-rowlet.pk7`, options);
    const cht = pkparse.parseFile(`${__dirname}/CHT-rowlet.pk7`, options);
    const eng = pkparse.parseFile(`${__dirname}/rowlet.pk7`, options);
    expect(eng.language).to.eql('ENG');
    expect(cht.language).to.eql('CHT');
    expect(chs.language).to.eql('CHS');
  });

  it('converts Chinese characters to standard unicode', () => {
    const chs = pkparse.parseFile(`${__dirname}/CHS-rowlet.pk7`, options);
    const cht = pkparse.parseFile(`${__dirname}/CHT-rowlet.pk7`, options);
    expect(chs.nickname).to.eql('木木枭');
    expect(cht.nickname).to.eql('木木梟');
  });

  it('does not attempt to convert symbols', () => {
    const abra = pkparse.parseFile(`${__dirname}/symbol.pk7`, options);
    expect(abra.nickname).to.eql('\ue09fSleepy');
  });

  it('gets gen 7 pokemon/moves/abilities', () => {
    const rowlet = pkparse.parseFile(`${__dirname}/rowlet.pk7`, options);
    expect(rowlet.move2Name).to.eql('Leafage');
    expect(rowlet.speciesName).to.eql('Rowlet');

    const wimpod = pkparse.parseFile(`${__dirname}/wimpod.pk7`, options);
    expect(wimpod.abilityName).to.eql('Wimp Out');
    expect(wimpod.speciesName).to.eql('Wimpod');

    const snorlax = pkparse.parseFile(`${__dirname}/snorlax.pk7`, options);
    expect(snorlax.move1Name).to.eql('High Horsepower');
  });

  it('hyper training', () => {
    const hyper_training = pkparse.parseFile(`${__dirname}/hyper-training.pk7`, options);
    expect(hyper_training.hyperTrainedHP).to.eql(false);
    expect(hyper_training.hyperTrainedAtk).to.eql(false);
    expect(hyper_training.hyperTrainedDef).to.eql(false);
    expect(hyper_training.hyperTrainedSpAtk).to.eql(true);
    expect(hyper_training.hyperTrainedSpDef).to.eql(false);
    expect(hyper_training.hyperTrainedSpe).to.eql(true);

    expect(hyper_training.statHp).to.eql(312);
    expect(hyper_training.statAtk).to.eql(297);
    expect(hyper_training.statDef).to.eql(290);
    expect(hyper_training.statSpAtk).to.eql(336);
    expect(hyper_training.statSpDef).to.eql(214);
    expect(hyper_training.statSpe).to.eql(182);
  });

  it('correctly works out marks', () => {
    const blue_markings = pkparse.parseFile(`${__dirname}/blue-markings.pk7`, options);
    expect(blue_markings.hasBlueStarMarking).to.eql(true);
    expect(blue_markings.hasBlueTriangleMarking).to.eql(true);
    expect(blue_markings.hasBlueCircleMarking).to.eql(true);
    expect(blue_markings.hasBlueSquareMarking).to.eql(true);
    expect(blue_markings.hasBlueHeartMarking).to.eql(true);
    expect(blue_markings.hasBlueDiamondMarking).to.eql(true);

    expect(blue_markings.hasPinkStarMarking).to.eql(false);
    expect(blue_markings.hasPinkTriangleMarking).to.eql(false);
    expect(blue_markings.hasPinkSquareMarking).to.eql(false);
    expect(blue_markings.hasPinkHeartMarking).to.eql(false);
    expect(blue_markings.hasPinkDiamondMarking).to.eql(false);
    expect(blue_markings.hasPinkCircleMarking).to.eql(false);

    const pink_markings = pkparse.parseFile(`${__dirname}/pink-markings.pk7`, options);
    expect(pink_markings.hasBlueStarMarking).to.eql(false);
    expect(pink_markings.hasBlueTriangleMarking).to.eql(false);
    expect(pink_markings.hasBlueCircleMarking).to.eql(false);
    expect(pink_markings.hasBlueSquareMarking).to.eql(false);
    expect(pink_markings.hasBlueHeartMarking).to.eql(false);
    expect(pink_markings.hasBlueDiamondMarking).to.eql(false);

    expect(pink_markings.hasPinkStarMarking).to.eql(true);
    expect(pink_markings.hasPinkTriangleMarking).to.eql(true);
    expect(pink_markings.hasPinkSquareMarking).to.eql(true);
    expect(pink_markings.hasPinkHeartMarking).to.eql(true);
    expect(pink_markings.hasPinkDiamondMarking).to.eql(true);
    expect(pink_markings.hasPinkCircleMarking).to.eql(true);

    const mixed_markings = pkparse.parseFile(`${__dirname}/markings.pk7`, options);
    expect(mixed_markings.hasPinkCircleMarking).to.eql(true);
    expect(mixed_markings.hasBlueTriangleMarking).to.eql(true);
    expect(mixed_markings.hasBlueStarMarking).to.eql(true);

    expect(mixed_markings.hasBlueCircleMarking).to.eql(false);
    expect(mixed_markings.hasBlueSquareMarking).to.eql(false);
    expect(mixed_markings.hasBlueHeartMarking).to.eql(false);
    expect(mixed_markings.hasBlueDiamondMarking).to.eql(false);
    expect(mixed_markings.hasPinkStarMarking).to.eql(false);
    expect(mixed_markings.hasPinkTriangleMarking).to.eql(false);
    expect(mixed_markings.hasPinkSquareMarking).to.eql(false);
    expect(mixed_markings.hasPinkHeartMarking).to.eql(false);
    expect(mixed_markings.hasPinkDiamondMarking).to.eql(false);
  });

  it('contains 5 digit idNo for pokemon caught before gen 7', () => {
    const gen6_actual = pkparse.parseFile(`${__dirname}/gen6.pk7`, options);
    expect(gen6_actual.idNo).to.eql(6257);
  });

  it('gives correct form names', () => {
    const pom_pom_oricorio = pkparse.parseFile(`${__dirname}/pom_pom_oricorio.pk7`, options);
    expect(pom_pom_oricorio.formName).to.eql('Pom-Pom');
    const original_hat_pikachu = pkparse.parseFile(`${__dirname}/kanto_hat_pikachu.pk7`, options);
    expect(original_hat_pikachu.formName).to.eql('Original Cap');
  });
});
