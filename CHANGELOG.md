# Changelog

## v0.10.16 (2016-08-07)

* Fixed an issue where the memoryLine of certain Pokémon was incorrect, which could cause errors to be thrown

## v0.10.15 (2016-07-12)

* Fixed an issue where some encounter types were missing

## v0.10.14 (2016-07-11)

* Added `hiddenPowerType` and `hiddenPowerPower` keys

## v0.10.13 (2016-07-10)

* Fixed an issue where Magikarp's data file was incorrectly formatted
* Fixed an issue where certain memories would cause parsing failures
* Fixed an issue where item data for Latiasite/Latiosite was missing
* Fixed an issue where item data for the ORAS "Bike" item was missing

## v0.10.12 (2016-07-10)

* Fixed an issue where data for ORAS moves was missing

## v0.10.11 (2016-07-09)

* Fixed an issue where Unown forms weren't getting parsed

## v0.10.10 (2016-07-08)

* Fixed an issue where the Hardy nature couldn't be parsed

## v0.10.9 (2016-07-04)

* Fixed an issue where some item IDs were not parsed correctly

## v0.10.8 (2016-07-03)

* Fixed an issue where some memories were not parsed correctly

## v0.10.7 (2016-07-03)

* Added support for parsing memories (`otMemory` and `notOtMemory` keys)

## v0.10.6 (2016-07-02)

* Fixed an issue where country names would not get parsed if region IDs were not present

## v0.10.5 (2016-06-30)

* Added the ability to parse country and region IDs. The new keys are `countryName`, `regionName`, `geoLocation[1-5]RegionName`, and `geoLocation[1-5]CountryName`.

## v0.10.4 (2016-06-29)

* Fixed an issue where a finite `expToNextLevel` would be returned at level 100; now `Infinity` is returned instead.

## v0.10.3 (2016-06-25)

* Added `move1Power`, `move2Power`, `move3Power`, and `move4Power` keys

## v0.10.2 (2016-06-23)

* Fixed an issue where `eggLocationName` would be incorrect for pre-gen5 pk6 files

## v0.10.1 (2016-06-22)

* Added `types` key (array of strings indicating elemental types)
* Added `baseStatHp`, `baseStatAtk`, `baseStatDef`, `baseStatSpAtk`, `baseStatSpDef`, `baseStatSpe` keys
* Added `statHp`, `statAtk`, `statDef`, `statSpAtk`, `statSpDef`, `statSpe` keys
* Added `move1Type`, `move2Type`, `move3Type`, `move4Type` keys
* Fixed an issue where Pokérus duration was parsed incorrectly

## v0.10.0 (2016-06-18)

* **[breaking]**: Split `geoLocation1`, `geoLocation2`, etc. into `geoLocation1RegionId`, `geoLocation1CountryId`, `geoLocation2RegionId`, `geoLocation2CountryId`

## v0.9.5 (2016-06-16)

* Fixed an issue where ORAS items could not be parsed from their IDs

## v0.9.4 (2016-06-16)

* Fixed an issue where past-gen location IDs were parsed incorrectly

## v0.9.3 (2016-06-14)

* Fixed a bug where pk6 files with neutral natures could cause TypeErrors

## v0.9.2 (2016-06-12)

* Added `formName` key

## v0.9.1 (2016-06-01)

* Added `increasedStat` and `decreasedStat` keys

## v0.9.0 (2016-06-01)

* Added `tsv`, `esv`, and `isShiny` keys which appear when using the `parseNames` option or `assignReadableNames`.

## v0.8.3 (2016-05-31)

* Fixed an issue where Dream Balls were misidentified as Park Balls.

## v0.8.2 (2016-05-30)

* Fixed an issue where most `natureName` properties were incorrect.

## v0.8.1 (2016-05-30)

* Fixed an issue where `ballName` would be incorrect for apricorn balls.

## v0.8.0 (2016-05-26)

* Added a `ballName` key, which appears when using the `parseNames` option or `assignReadableNames`.

## v0.7.0 (2016-05-23)

* Added `growthRate`, `level`, `expFromPreviousLevel`, and `expToNextLevel` keys, which appear when using the `parseNames` option or `assignReadableNames`.

*This changelog does not cover versions before v0.7.0.*
