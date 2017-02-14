'use strict';
const common = require('./common');

exports.parseBuffer = (buf, {parseNames = false, language} = {}) => {
  const data = common.parseBuffer(buf, {parseNames, language});

  data.gen = 7;

  if (data.gameId < 30) {
    data.idNo = data.tid;
  } else {
    data.idNo = data.tidFull % 1000000;
  }

  const hyperTraining = buf.readUInt16LE(0xDE);
  data.hyperTrainedHP = Boolean(hyperTraining & 0x01);
  data.hyperTrainedAtk = Boolean(hyperTraining & 0x02);
  data.hyperTrainedDef = Boolean(hyperTraining & 0x04);
  data.hyperTrainedSpAtk = Boolean(hyperTraining & 0x08);
  data.hyperTrainedSpDef = Boolean(hyperTraining & 0x10);
  data.hyperTrainedSpe = Boolean(hyperTraining & 0x20);

  const markingByte = buf.readUInt16LE(0x16);
  data.hasBlueCircleMarking = Boolean(markingByte & 0x01);
  data.hasBlueTriangleMarking = Boolean(markingByte & 0x04);
  data.hasBlueSquareMarking = Boolean(markingByte & 0x10);
  data.hasBlueHeartMarking = Boolean(markingByte & 0x40);
  data.hasBlueStarMarking = Boolean(markingByte & 0x100);
  data.hasBlueDiamondMarking = Boolean(markingByte & 0x400);

  data.hasPinkCircleMarking = Boolean(markingByte & 0x02);
  data.hasPinkTriangleMarking = Boolean(markingByte & 0x08);
  data.hasPinkSquareMarking = Boolean(markingByte & 0x20);
  data.hasPinkHeartMarking = Boolean(markingByte & 0x80);
  data.hasPinkStarMarking = Boolean(markingByte & 0x200);
  data.hasPinkDiamondMarking = Boolean(markingByte & 0x800);

  data.language = [null, 'JPN', 'ENG', 'FRE', 'ITA', 'GER', '???', 'SPA', 'KOR', 'CHS', 'CHT'][buf.readUInt8(0xe3)];

  if (parseNames) {
    common.assignReadableNames(data, language);
  }

  return data;
};
