[url-faker]: https://github.com/faker-js/faker
[url-faker-locales]: https://github.com/faker-js/faker/blob/next/docs/guide/localization.md#available-locales

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

<p align="center">
    <img
        src="https://raw.githubusercontent.com/iibe/vscode-faker-js/main/images/usage.gif"
        style="max-width: 500px"
    />
</p>

## Installation

1. Type `CTRL+SHIPT+P` for Windows or `CMD+SHIFT+P` for Windows to launch command palette;
1. Type `Extensions: Install Extensions` and press `Enter` to open marketplace (a.k.a extension view);
1. Search `Faker.js` extension and install it.

<p align="center">
    <img
        src="https://raw.githubusercontent.com/iibe/vscode-faker-js/main/images/install.gif"
        style="max-width: 500px"
    />
</p>

## Faker.js Locales

1. Type `CTRL+SHIPT+P` for Windows or `CMD+SHIFT+P` for Windows to launch command palette;
1. Type `Preferences: Open User Settings (JSON)` and press `Enter` to open `setting.json` file;
1. Pick available [locale][url-faker-locales]:

```json
{
    "faker-js.locale": "en" // by default
}
```

## Faker.js API

1. Type `CTRL+SHIPT+P` for Windows or `CMD+SHIFT+P` for Windows to launch command palette;
1. Type `Faker: <faker-js-function>` and press `Enter` to run Faker.js method;

Following `<faker-js-function>` methods are available:

-   `airline.aircraftType`
-   `airline.airline`
-   `airline.airplane`
-   `airline.airport`
-   `airline.flightNumber`
-   `airline.recordLocator`
-   `airline.seat`
-   `animal.bear`
-   `animal.bird`
-   `animal.cat`
-   `animal.cetacean`
-   `animal.cow`
-   `animal.crocodilia`
-   `animal.dog`
-   `animal.fish`
-   `animal.horse`
-   `animal.insect`
-   `animal.lion`
-   `animal.petName`
-   `animal.rabbit`
-   `animal.rodent`
-   `animal.snake`
-   `animal.type`
-   `book.author`
-   `book.format`
-   `book.genre`
-   `book.publisher`
-   `book.series`
-   `book.title`
-   `color.cmyk`
-   `color.colorByCSSColorSpace`
-   `color.cssSupportedFunction`
-   `color.cssSupportedSpace`
-   `color.hsl`
-   `color.human`
-   `color.hwb`
-   `color.lab`
-   `color.lch`
-   `color.rgb`
-   `color.space`
-   `commerce.department`
-   `commerce.isbn`
-   `commerce.price`
-   `commerce.product`
-   `commerce.productAdjective`
-   `commerce.productDescription`
-   `commerce.productMaterial`
-   `commerce.productName`
-   `company.buzzAdjective`
-   `company.buzzNoun`
-   `company.buzzPhrase`
-   `company.buzzVerb`
-   `company.catchPhrase`
-   `company.catchPhraseAdjective`
-   `company.catchPhraseDescriptor`
-   `company.catchPhraseNoun`
-   `company.name`
-   `database.collation`
-   `database.column`
-   `database.engine`
-   `database.mongodbObjectId`
-   `database.type`
-   `datatype.boolean`
-   `date.anytime`
-   `date.between`
-   `date.betweens`
-   `date.birthdate`
-   `date.future`
-   `date.month`
-   `date.past`
-   `date.recent`
-   `date.soon`
-   `date.timeZone`
-   `date.weekday`
-   `finance.accountName`
-   `finance.accountNumber`
-   `finance.amount`
-   `finance.bic`
-   `finance.bitcoinAddress`
-   `finance.creditCardCVV`
-   `finance.creditCardIssuer`
-   `finance.creditCardNumber`
-   `finance.currency`
-   `finance.currencyCode`
-   `finance.currencyName`
-   `finance.currencySymbol`
-   `finance.ethereumAddress`
-   `finance.iban`
-   `finance.litecoinAddress`
-   `finance.maskedNumber`
-   `finance.pin`
-   `finance.routingNumber`
-   `finance.transactionDescription`
-   `finance.transactionType`
-   `food.adjective`
-   `food.description`
-   `food.dish`
-   `food.ethnicCategory`
-   `food.fruit`
-   `food.ingredient`
-   `food.meat`
-   `food.spice`
-   `food.vegetable`
-   `git.branch`
-   `git.commitDate`
-   `git.commitEntry`
-   `git.commitMessage`
-   `git.commitSha`
-   `hacker.abbreviation`
-   `hacker.adjective`
-   `hacker.ingverb`
-   `hacker.noun`
-   `hacker.phrase`
-   `hacker.verb`
-   `helpers.arrayElement`
-   `helpers.arrayElements`
-   `helpers.enumValue`
-   `helpers.fake`
-   `helpers.fromRegExp`
-   `helpers.maybe`
-   `helpers.multiple`
-   `helpers.mustache`
-   `helpers.objectEntry`
-   `helpers.objectKey`
-   `helpers.objectValue`
-   `helpers.rangeToNumber`
-   `helpers.replaceCreditCardSymbols`
-   `helpers.replaceSymbols`
-   `helpers.shuffle`
-   `helpers.slugify`
-   `helpers.uniqueArray`
-   `helpers.weightedArrayElement`
-   `image.avatar`
-   `image.avatarGitHub`
-   `image.avatarLegacy`
-   `image.dataUri`
-   `image.url`
-   `image.urlLoremFlickr`
-   `image.urlPicsumPhotos`
-   `image.urlPlaceholder`
-   `internet.color`
-   `internet.displayName`
-   `internet.domainName`
-   `internet.domainSuffix`
-   `internet.domainWord`
-   `internet.email`
-   `internet.emoji`
-   `internet.exampleEmail`
-   `internet.httpMethod`
-   `internet.httpStatusCode`
-   `internet.ip`
-   `internet.ipv4`
-   `internet.ipv6`
-   `internet.jwt`
-   `internet.jwtAlgorithm`
-   `internet.mac`
-   `internet.password`
-   `internet.port`
-   `internet.protocol`
-   `internet.url`
-   `internet.userAgent`
-   `internet.username`
-   `internet.userName`
-   `location.buildingNumber`
-   `location.cardinalDirection`
-   `location.city`
-   `location.continent`
-   `location.country`
-   `location.countryCode`
-   `location.county`
-   `location.direction`
-   `location.latitude`
-   `location.longitude`
-   `location.nearbyGPSCoordinate`
-   `location.ordinalDirection`
-   `location.secondaryAddress`
-   `location.state`
-   `location.street`
-   `location.streetAddress`
-   `location.timeZone`
-   `location.zipCode`
-   `lorem.lines`
-   `lorem.paragraph`
-   `lorem.paragraphs`
-   `lorem.sentence`
-   `lorem.sentences`
-   `lorem.slug`
-   `lorem.text`
-   `lorem.word`
-   `lorem.words`
-   `music.album`
-   `music.artist`
-   `music.genre`
-   `music.songName`
-   `number.bigInt`
-   `number.binary`
-   `number.float`
-   `number.hex`
-   `number.int`
-   `number.octal`
-   `number.romanNumeral`
-   `person.bio`
-   `person.firstName`
-   `person.fullName`
-   `person.gender`
-   `person.jobArea`
-   `person.jobDescriptor`
-   `person.jobTitle`
-   `person.jobType`
-   `person.lastName`
-   `person.middleName`
-   `person.prefix`
-   `person.sex`
-   `person.sexType`
-   `person.suffix`
-   `person.zodiacSign`
-   `phone.imei`
-   `phone.number`
-   `science.chemicalElement`
-   `science.unit`
-   `string.alpha`
-   `string.alphanumeric`
-   `string.binary`
-   `string.fromCharacters`
-   `string.hexadecimal`
-   `string.nanoid`
-   `string.numeric`
-   `string.octal`
-   `string.sample`
-   `string.symbol`
-   `string.ulid`
-   `string.uuid`
-   `system.commonFileExt`
-   `system.commonFileName`
-   `system.commonFileType`
-   `system.cron`
-   `system.directoryPath`
-   `system.fileExt`
-   `system.fileName`
-   `system.filePath`
-   `system.fileType`
-   `system.mimeType`
-   `system.networkInterface`
-   `system.semver`
-   `vehicle.bicycle`
-   `vehicle.color`
-   `vehicle.fuel`
-   `vehicle.manufacturer`
-   `vehicle.model`
-   `vehicle.type`
-   `vehicle.vehicle`
-   `vehicle.vin`
-   `vehicle.vrm`
-   `word.adjective`
-   `word.adverb`
-   `word.conjunction`
-   `word.interjection`
-   `word.noun`
-   `word.preposition`
-   `word.sample`
-   `word.verb`
-   `word.words`

## Resources

-   [Azure: Project Page](https://my-visual-studio-code.visualstudio.com/vscode)
-   [VSCode Marketplace: Management Page](https://marketplace.visualstudio.com/manage/publishers/iibe)
-   [VSCode API: Extension Manifest](https://code.visualstudio.com/api/references/extension-manifest)
-   [VSCode API: Contribution Points](https://code.visualstudio.com/api/references/contribution-points)
