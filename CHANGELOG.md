# Changelog

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
