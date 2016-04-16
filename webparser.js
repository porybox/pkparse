/* eslint-env browser */
'use strict';
function setOutput (obj) {
  document.getElementById('output').innerHTML = obj instanceof Error ? obj : JSON.stringify(obj, null, 4);
}
window.parseFile = fileList => {
  require('blob-to-buffer')(fileList[0].slice(0), (blobErr, result) => {
    try {
      setOutput(blobErr || require('.').parseBuffer(result), null, 4);
    } catch (parseErr) {
      setOutput(parseErr);
    }
  });
};
