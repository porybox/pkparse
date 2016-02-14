Parses a .pk6 file (represented as a Buffer) into a javascript object.

To use:

```javascript
var pk6parse = require('pk6parse');

// Parsing a file
var parsed_thing1 = pk6parse.parseFile('path/to/pk6/file.pk6');

// Parsing a buffer
var parsed_thing2 = pk6parse.parseBuffer(some_buffer);

/* For some things (ribbons, medals, and moves), the parsed object will contain ID numbers instead of string names.
This is because the names can vary depending on factors such as language and game, so it's better to use the IDs for
any kind of storage. There are a few exposed methods for getting the string representation of these IDs: */

pk6parse.parseMoveId(5) // "Mega Punch"
pk6parse.parseRibbonData(4294967296) // An object that maps {(ribbon name): (boolean indicating whether the ribbon is present)}
pk6parse.parseMedalData(0) // An object that maps {(medal name): (boolean indicating whether the medal is present)}

```
