Parses a .pk6 file (represented as a Buffer) into a javascript object.

To use:

```javascript
var parse = require('pk6parse');
var pk6_buffer = require('fs').readFileSync('path/to/pk6/file.pk6');
var parsed_thing = parse(pk6_buffer);
```
