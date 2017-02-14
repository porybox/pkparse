'use strict';
const common = require('./common');

exports.parseBuffer = (buf, {parseNames = false, language} = {}) => {
  const data = common.parseBuffer(buf, {parseNames, language});

  data.gen = 6;

  data.idNo = data.tid;

  const markingByte = buf.readUInt8(0x2a);
  data.hasCircleMarking = !!(markingByte & 0x01);
  data.hasTriangleMarking = !!(markingByte & 0x02);
  data.hasSquareMarking = !!(markingByte & 0x04);
  data.hasHeartMarking = !!(markingByte & 0x08);
  data.hasStarMarking = !!(markingByte & 0x10);
  data.hasDiamondMarking = !!(markingByte & 0x20);

  data.language = [null, 'JPN', 'ENG', 'FRE', 'ITA', 'GER', '???', 'SPA', 'KOR'][buf.readUInt8(0xe3)];

  if (parseNames) {
    common.assignReadableNames(data, language);
  }

  return data;
};
