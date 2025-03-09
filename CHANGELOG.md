# Change Log

All notable changes to the "vscode-faker-js" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [9.6.0] - 2025-03-09

### Added

- New atoms:
  - `finance.currencyNumericCode`;
- New markers for Faker.js functions:
  - `deprecated` stands for deprecated methods;

### Changed

- Faker version has been updated to 9.6.0;

## [9.5.4] - 2025-03-04

### Added

- New configuration options: PHP;

### Changed

- Faker version has been updated to 9.5.1;

## [9.5.3] - 2025-02-20

### Added

- New language support: Go;

### Changed

- Refactor: `Stringify` implements common methods of child classes;
- Refactor: Improved type completions in `./src/types/settings.ts`;

## [9.5.2] - 2025-02-16

### Added

- New atoms:
  - `image.personPortrait`;
- New language support: PHP, Ruby;

### Changed

- Faker version has been updated to 9.5.0;
- Due to confusion between `faker-js.locale` and `faker-js.language`, the latter has been changed to `faker-js.syntax`;

## [9.5.0] - 2025-02-07

### Added

- Data output is adjusted to the syntax of the current programming language (`"faker-js.language": "*"`); or you can use fixed syntax for all languages (`"faker-js.language": "python"`).
- `settings.json` options:
  - `faker-js.locale`;
  - `faker-js.language`;
  - `faker-js.javascript.bigint.insertMode` (`faker-js.bigint.insert` before);
  - `faker-js.javascript.string.insertMode` (`faker-js.string.insert` before);
  - `faker-js.javascript.string.quotes` (`faker-js.string.quotes` before);
  - `faker-js.python.bigint.insertMode`;
  - `faker-js.python.string.insertMode`;
  - `faker-js.python.string.quotes`;
- For now, only 2 language syntax (`faker-js.language`) are present: JavaScript and Python.

### Removed

- `settings.json` options:
  - `faker-js.symbol.quotes`;

## [9.4.0] - 2025-01-23

### Added

- New atoms:
  - `location.language`;
- New markers for Faker.js functions:
  - `date` stands for return type is instance of `Date` class;
  - `array` stands for return type is indexed collection;

### Changed

- Faker version has been updated to 9.4.0;

## [9.3.9] - 2025-01-18

### Added

- New markers for Faker.js functions:
  - `object` stands for function return type is any structure (arrays, object, functions, and even classes);
  - `binding` stands for bound function with some default parameters;
  - Unmarked methods returns primitive: undefined, null, boolean, string, symbol, number, bigint;
- Additional parameters for quoting and content insertions setting;

> Functions marked as `object` and `binding` error-prone.
> They are not recommended to use, but in most cases everything is fine.

## [9.3.5] - 2025-01-13

### Added

- Better GIF's.
- Added atoms from `SimpleFaker`:
  - `datatype.boolean`
  - `date.anytime`
  - `date.between`
  - `date.betweens`
  - `date.birthdate`
  - `date.future`
  - `date.month`
  - `date.past`
  - `date.recent`
  - `date.soon`
  - `date.timeZone`
  - `date.weekday`
  - `helpers.arrayElement`
  - `helpers.arrayElements`
  - `helpers.enumValue`
  - `helpers.fake`
  - `helpers.fromRegExp`
  - `helpers.maybe`
  - `helpers.multiple`
  - `helpers.mustache`
  - `helpers.objectEntry`
  - `helpers.objectKey`
  - `helpers.objectValue`
  - `helpers.rangeToNumber`
  - `helpers.replaceCreditCardSymbols`
  - `helpers.replaceSymbols`
  - `helpers.shuffle`
  - `helpers.slugify`
  - `helpers.uniqueArray`
  - `helpers.weightedArrayElement`
  - `number.bigInt`
  - `number.binary`
  - `number.float`
  - `number.hex`
  - `number.int`
  - `number.octal`
  - `number.romanNumeral`
  - `string.alpha`
  - `string.alphanumeric`
  - `string.binary`
  - `string.fromCharacters`
  - `string.hexadecimal`
  - `string.nanoid`
  - `string.numeric`
  - `string.octal`
  - `string.sample`
  - `string.symbol`
  - `string.ulid`
  - `string.uuid`

### Fixed

Nothing has been fixed.

### Changed

Nothing has been changed.

### Removed

Nothing has been changed.

## [9.3.0] - 2025-01-13

### Added

- First commit.

<!-- [Unreleased]: https://github.com/iibe/vscode-faker-js/compare/v9.6.0...HEAD -->

[9.6.0]: https://github.com/iibe/vscode-faker-js/compare/v9.5.4...v9.6.0
[9.5.4]: https://github.com/iibe/vscode-faker-js/compare/v9.5.3...v9.5.4
[9.5.3]: https://github.com/iibe/vscode-faker-js/compare/v9.5.2...v9.5.3
[9.5.2]: https://github.com/iibe/vscode-faker-js/compare/v9.5.0...v9.5.2
[9.5.0]: https://github.com/iibe/vscode-faker-js/compare/v9.4.0...v9.5.0
[9.4.0]: https://github.com/iibe/vscode-faker-js/releases/tag/v9.4.0
[9.3.9]: https://github.com/iibe/vscode-faker-js/releases/
[9.3.5]: https://github.com/iibe/vscode-faker-js/releases/
[9.3.0]: https://github.com/iibe/vscode-faker-js/releases/
