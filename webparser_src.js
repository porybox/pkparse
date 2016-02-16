'use strict';
window.parseFile = fileList => {
  require('blob-to-buffer')(fileList[0].slice(0), (err, result) => {
    document.getElementById('output').innerHTML = JSON.stringify(err || require('.').parseBuffer(result), null, 4);
  });
};
