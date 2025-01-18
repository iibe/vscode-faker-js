[images]: https://raw.githubusercontent.com/iibe/vscode-faker-js/main/images

# Faker.js for Visual Studio Code

<p align="center">
    <img
        src="https://raw.githubusercontent.com/iibe/vscode-faker-js/main/images/logo128x128.png"
        height="64"
    />
</p>

<p align="center" >
    Generate massive amounts of fake (but realistic) data for testing and development with <a src="https://github.com/faker-js/faker">Faker.js</a>.
</p>

## Usage

1. Type `CTRL+SHIFT+P` for Windows or `CMD+SHIFT+P` for MacOS to launch command palette;
1. Type `Faker.js: <command>` and press `Enter` to run Faker.js method.

<p align="center">
    <img
        src="https://raw.githubusercontent.com/iibe/vscode-faker-js/main/images/usage.gif"
        style="max-width: 500px"
    />
</p>

## Installation

1. Type `CTRL+SHIFT+P` for Windows or `CMD+SHIFT+P` for MacOS to launch command palette;
1. Type `Extensions: Install Extensions` and press `Enter` to open marketplace (a.k.a extension view);
1. Search `Faker.js` extension and install it.

<p align="center">
    <img
        src="https://raw.githubusercontent.com/iibe/vscode-faker-js/main/images/install.gif"
        style="max-width: 500px"
    />
</p>

## Faker.js Locales

1. Type `CTRL+SHIFT+P` for Windows or `CMD+SHIFT+P` for MacOS to launch command palette;
1. Type `Preferences: Open User Settings (JSON)` and press `Enter` to open `setting.json` file;
1. Pick available [locale][https://fakerjs.dev/guide/localization.html#available-locales]:

```json
{
    "faker-js.locale": "en"
}
```

## Content Options

These options provide additional control over how to insert data. This can be useful if you use a particular language syntax or code formatting preference. For example, in some versions of ECMAScript, the big integer literal `123n` is not allowed, but the syntax `BigInt(123)` is fine.

```json
{
    "faker-js.bigint.insert": {
        "type": "string",
        "enum": ["literal", "inline", "wrapper"],
        "default": "literal",
        "description": "Either literal `123n` (by default), or wrapper object `BigInt(123)`."
    },
    "faker-js.string.insert": {
        "type": "string",
        "enum": ["literal", "inline"],
        "default": "literal",
        "description": "Either literal `\"string\"` (by default), or inline `string`."
    },
    "faker-js.string.quotes": {
        "type": "string",
        "enum": ["single", "double", "backticks"],
        "default": "single",
        "description": "Specify string quotes type."
    },
    "faker-js.symbol.quotes": {
        "type": "string",
        "enum": ["single", "double", "backticks"],
        "default": "single",
        "description": "Specify symbol quotes type."
    }
}
```

## Faker.js API

1. `airline.aircraftType`
1. `airline.airline`
1. `airline.airplane`
1. `airline.airport`
1. `airline.flightNumber`
1. `airline.recordLocator`
1. `airline.seat`
1. `animal.bear`
1. `animal.bird`
1. `animal.cat`
1. `animal.cetacean`
1. `animal.cow`
1. `animal.crocodilia`
1. `animal.dog`
1. `animal.fish`
1. `animal.horse`
1. `animal.insect`
1. `animal.lion`
1. `animal.petName`
1. `animal.rabbit`
1. `animal.rodent`
1. `animal.snake`
1. `animal.type`
1. `book.author`
1. `book.format`
1. `book.genre`
1. `book.publisher`
1. `book.series`
1. `book.title`
1. `color.cmyk`
1. `color.colorByCSSColorSpace`
1. `color.cssSupportedFunction`
1. `color.cssSupportedSpace`
1. `color.hsl`
1. `color.human`
1. `color.hwb`
1. `color.lab`
1. `color.lch`
1. `color.rgb`
1. `color.space`
1. `commerce.department`
1. `commerce.isbn`
1. `commerce.price`
1. `commerce.product`
1. `commerce.productAdjective`
1. `commerce.productDescription`
1. `commerce.productMaterial`
1. `commerce.productName`
1. `company.buzzAdjective`
1. `company.buzzNoun`
1. `company.buzzPhrase`
1. `company.buzzVerb`
1. `company.catchPhrase`
1. `company.catchPhraseAdjective`
1. `company.catchPhraseDescriptor`
1. `company.catchPhraseNoun`
1. `company.name`
1. `database.collation`
1. `database.column`
1. `database.engine`
1. `database.mongodbObjectId`
1. `database.type`
1. `datatype.boolean`
1. `date.anytime`
1. `date.between`
1. `date.betweens`
1. `date.birthdate`
1. `date.future`
1. `date.month`
1. `date.past`
1. `date.recent`
1. `date.soon`
1. `date.timeZone`
1. `date.weekday`
1. `finance.accountName`
1. `finance.accountNumber`
1. `finance.amount`
1. `finance.bic`
1. `finance.bitcoinAddress`
1. `finance.creditCardCVV`
1. `finance.creditCardIssuer`
1. `finance.creditCardNumber`
1. `finance.currency`
1. `finance.currencyCode`
1. `finance.currencyName`
1. `finance.currencySymbol`
1. `finance.ethereumAddress`
1. `finance.iban`
1. `finance.litecoinAddress`
1. `finance.maskedNumber`
1. `finance.pin`
1. `finance.routingNumber`
1. `finance.transactionDescription`
1. `finance.transactionType`
1. `food.adjective`
1. `food.description`
1. `food.dish`
1. `food.ethnicCategory`
1. `food.fruit`
1. `food.ingredient`
1. `food.meat`
1. `food.spice`
1. `food.vegetable`
1. `git.branch`
1. `git.commitDate`
1. `git.commitEntry`
1. `git.commitMessage`
1. `git.commitSha`
1. `hacker.abbreviation`
1. `hacker.adjective`
1. `hacker.ingverb`
1. `hacker.noun`
1. `hacker.phrase`
1. `hacker.verb`
1. `helpers.arrayElement`
1. `helpers.arrayElements`
1. `helpers.enumValue`
1. `helpers.fake`
1. `helpers.fromRegExp`
1. `helpers.maybe`
1. `helpers.multiple`
1. `helpers.mustache`
1. `helpers.objectEntry`
1. `helpers.objectKey`
1. `helpers.objectValue`
1. `helpers.rangeToNumber`
1. `helpers.replaceCreditCardSymbols`
1. `helpers.replaceSymbols`
1. `helpers.shuffle`
1. `helpers.slugify`
1. `helpers.uniqueArray`
1. `helpers.weightedArrayElement`
1. `image.avatar`
1. `image.avatarGitHub`
1. `image.avatarLegacy`
1. `image.dataUri`
1. `image.url`
1. `image.urlLoremFlickr`
1. `image.urlPicsumPhotos`
1. `image.urlPlaceholder`
1. `internet.color`
1. `internet.displayName`
1. `internet.domainName`
1. `internet.domainSuffix`
1. `internet.domainWord`
1. `internet.email`
1. `internet.emoji`
1. `internet.exampleEmail`
1. `internet.httpMethod`
1. `internet.httpStatusCode`
1. `internet.ip`
1. `internet.ipv4`
1. `internet.ipv6`
1. `internet.jwt`
1. `internet.jwtAlgorithm`
1. `internet.mac`
1. `internet.password`
1. `internet.port`
1. `internet.protocol`
1. `internet.url`
1. `internet.userAgent`
1. `internet.username`
1. `internet.userName`
1. `location.buildingNumber`
1. `location.cardinalDirection`
1. `location.city`
1. `location.continent`
1. `location.country`
1. `location.countryCode`
1. `location.county`
1. `location.direction`
1. `location.latitude`
1. `location.longitude`
1. `location.nearbyGPSCoordinate`
1. `location.ordinalDirection`
1. `location.secondaryAddress`
1. `location.state`
1. `location.street`
1. `location.streetAddress`
1. `location.timeZone`
1. `location.zipCode`
1. `lorem.lines`
1. `lorem.paragraph`
1. `lorem.paragraphs`
1. `lorem.sentence`
1. `lorem.sentences`
1. `lorem.slug`
1. `lorem.text`
1. `lorem.word`
1. `lorem.words`
1. `music.album`
1. `music.artist`
1. `music.genre`
1. `music.songName`
1. `number.bigInt`
1. `number.binary`
1. `number.float`
1. `number.hex`
1. `number.int`
1. `number.octal`
1. `number.romanNumeral`
1. `person.bio`
1. `person.firstName`
1. `person.fullName`
1. `person.gender`
1. `person.jobArea`
1. `person.jobDescriptor`
1. `person.jobTitle`
1. `person.jobType`
1. `person.lastName`
1. `person.middleName`
1. `person.prefix`
1. `person.sex`
1. `person.sexType`
1. `person.suffix`
1. `person.zodiacSign`
1. `phone.imei`
1. `phone.number`
1. `science.chemicalElement`
1. `science.unit`
1. `string.alpha`
1. `string.alphanumeric`
1. `string.binary`
1. `string.fromCharacters`
1. `string.hexadecimal`
1. `string.nanoid`
1. `string.numeric`
1. `string.octal`
1. `string.sample`
1. `string.symbol`
1. `string.ulid`
1. `string.uuid`
1. `system.commonFileExt`
1. `system.commonFileName`
1. `system.commonFileType`
1. `system.cron`
1. `system.directoryPath`
1. `system.fileExt`
1. `system.fileName`
1. `system.filePath`
1. `system.fileType`
1. `system.mimeType`
1. `system.networkInterface`
1. `system.semver`
1. `vehicle.bicycle`
1. `vehicle.color`
1. `vehicle.fuel`
1. `vehicle.manufacturer`
1. `vehicle.model`
1. `vehicle.type`
1. `vehicle.vehicle`
1. `vehicle.vin`
1. `vehicle.vrm`
1. `word.adjective`
1. `word.adverb`
1. `word.conjunction`
1. `word.interjection`
1. `word.noun`
1. `word.preposition`
1. `word.sample`
1. `word.verb`
1. `word.words`
