# pkparse

Parses a .pk6 file into a javascript object. This also works in the browser; see [here](https://porybox.github.io/pkparse/) for an example.

## Installation

To install:

```bash
npm install pkparse
```
```js
var pkparse = require('pkparse');
```
## API

* `pkparse.parseBuffer(buf, [options])`
* `buf` *(Buffer)*: A Buffer in .pk6 format
* `options` *(object)*: If `options.parseNames` is set to `true`, assigns readable names to the returned data in addition to property IDs. `options.gen` defines the generation to use. Defaults to gen 6, supports gen 6 and 7.
* Returns *(object)*: An object containing the parsed information from the buffer.

---

* `pkparse.parseFile(filepath, [options])`
* `filepath` *(string)*: The path to a .pk6 file
* Parses the pk6 data in a given file. This is an alias for:

```js
pkparse.parseBuffer(require('fs').readFileSync(filepath, options))
```
---
While most of the information in the parsed object will be in a readable format, some information (such as move data) will still be represented by an ID Number. This is because the string representation of this data can vary depending on game and language. The data can be exposed by setting `options.parseNames` to `true`, or by using these helper functions:

* `pkparse.assignReadableNames(data)`
* `data` *(object)* Parsed data, in the format of data returned by `pkparse.parseBuffer`
* Mutates the given `data` object by all supported "name" properties to it. For example, the `abilityName` property will be added based on the existing `abilityId` property. Note that future updates may support more names than are currently available.
* Returns *(object)*: The mutated object

---

* `pkparse.getPokemonData(dexNo)`
* `dexNo` *(number)*: The national dex number of the desired species
* Returns *(object)*: An object containing various information on this species, such as its name, egg groups, etc.

---

* `pkparse.getItemData(itemId)`
* `itemId` *(number)*: The item ID of the desired item
* Returns *(object)*: An object containing information about the given item

---

* `pkparse.getMoveData(moveId)`
* `moveId` *(number)*: The move ID of the desired move
* Returns *(object)*: An object containing information about the given move

---

* `pkparse.getAbilityData(abilityId)`
* `abilityId` *(number)*: The ability ID of the desired ability
* Returns *(object)*: An object containing information about the given ability

---

* `pkparse.getNatureData(natureId)`
* `natureId` *(number)*: The nature ID of the desired nature
* Returns *(object)*: An object containing information about the given nature

---

* `pkparse.getMedalData(medalData)`
* `medalData` *(number)*: A bitmap representing data on super training medals. In most cases, this will be directly passed from the `medalData` property which is exposed from a parsed pk6 file.
* Returns *(Array[String])*: An array of medal names represented by the bitmap

---

* `pkparse.getRibbonData(ribbonData)`
* `ribbonData` *(number)*: A bitmap representing data on super training medals. In most cases, this will be directly passed from the `ribbonData` property which is exposed from a parsed pk6 file.
* Returns *(Array[String])*: An array of ribbon names represented by the bitmap

---

* `pkparse.SUPPORTED_GENS`
* *(Array[number])*: An array of generations that the current version of pkparse supports

---

Most of the raw data for these functions was collected from [Pokeapi](http://pokeapi.co/), without which this project would have been substantially harder.
