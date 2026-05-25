# Faker.js for Visual Studio Code

<p align="center">
    <img
        src="https://raw.githubusercontent.com/iibe/vscode-faker-js/main/images/logo128x128.png"
        alt="logo128x128.png"
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
        alt="usage.gif"
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
        alt="install.gif"
        style="max-width: 500px"
    />
</p>

## Locale

1. Type `CTRL+SHIFT+P` for Windows or `CMD+SHIFT+P` for MacOS to launch command palette;
1. Type `Preferences: Open User Settings (JSON)` and press `Enter` to open `setting.json` file;
1. Pick [locale](https://fakerjs.dev/guide/localization.html#available-locales):

```json
{
    "faker-js.locale": "en"
}
```

## Syntax

Specifies a syntax of fake data. If set to `*`, the serialization changes dynamically depending on a programming language. Otherwise (if set to a particular language), a fixed serialization will be used for all languages. If no serialization class was found, then it uses JavaScript syntax for everything.

```json
{
    "faker-js.syntax": "*"
}
```

## Language-specific settings

Following options provide additional control over how to insert data. This can be useful if you use a particular language version or formatter options. For example, in some versions of ECMAScript, big integer `123n` (as literal) is not allowed, but `BigInt(123)` (as object wrapper) is permitted.

```json
{
    "faker-js.go.bigint.insertMode": "...",
    "faker-js.go.string.quotationMark": "...",
    "faker-js.go.string.insertMode": "...",
    "faker-js.go.array.insertMode": "...",
    "faker-js.javascript.bigint.insertMode": "...",
    "faker-js.javascript.string.quotationMark": "...",
    "faker-js.javascript.string.insertMode": "...",
    "faker-js.php.null.insertMode": "...",
    "faker-js.php.boolean.insertMode": "...",
    "faker-js.php.bigint.insertMode": "...",
    "faker-js.php.string.quotationMark": "...",
    "faker-js.php.string.insertMode": "...",
    "faker-js.php.array.insertMode": "...",
    "faker-js.python.bigint.insertMode": "...",
    "faker-js.python.string.quotationMark": "...",
    "faker-js.python.string.insertMode": "...",
    "faker-js.ruby.bigint.insertMode": "...",
    "faker-js.ruby.string.quotationMark": "...",
    "faker-js.ruby.string.insertMode": "..."
}
```

## Faker.js API

| No. | Function                         | Return type |
| --- | -------------------------------- | ----------- |
| 1   | airline.aircraftType             | Primitive   |
| 2   | airline.airline                  | Structure   |
| 3   | airline.airplane                 | Structure   |
| 4   | airline.airport                  | Structure   |
| 5   | airline.flightNumber             | Primitive   |
| 6   | airline.recordLocator            | Primitive   |
| 7   | airline.seat                     | Primitive   |
| 8   | animal.bear                      | Primitive   |
| 9   | animal.bird                      | Primitive   |
| 10  | animal.cat                       | Primitive   |
| 11  | animal.cetacean                  | Primitive   |
| 12  | animal.cow                       | Primitive   |
| 13  | animal.crocodilia                | Primitive   |
| 14  | animal.dog                       | Primitive   |
| 15  | animal.fish                      | Primitive   |
| 16  | animal.horse                     | Primitive   |
| 17  | animal.insect                    | Primitive   |
| 18  | animal.lion                      | Primitive   |
| 19  | animal.petName                   | Primitive   |
| 20  | animal.rabbit                    | Primitive   |
| 21  | animal.rodent                    | Primitive   |
| 22  | animal.snake                     | Primitive   |
| 23  | animal.type                      | Primitive   |
| 24  | book.author                      | Primitive   |
| 25  | book.format                      | Primitive   |
| 26  | book.genre                       | Primitive   |
| 27  | book.publisher                   | Primitive   |
| 28  | book.series                      | Primitive   |
| 29  | book.title                       | Primitive   |
| 30  | color.cmyk                       | Primitive   |
| 31  | color.colorByCSSColorSpace       | Primitive   |
| 32  | color.cssSupportedFunction       | Primitive   |
| 33  | color.cssSupportedSpace          | Primitive   |
| 34  | color.hsl                        | Primitive   |
| 35  | color.human                      | Primitive   |
| 36  | color.hwb                        | Primitive   |
| 37  | color.lab                        | Primitive   |
| 38  | color.lch                        | Primitive   |
| 39  | color.rgb                        | Primitive   |
| 40  | color.space                      | Primitive   |
| 41  | commerce.department              | Primitive   |
| 42  | commerce.isbn                    | Primitive   |
| 43  | commerce.price                   | Primitive   |
| 44  | commerce.product                 | Primitive   |
| 45  | commerce.productAdjective        | Primitive   |
| 46  | commerce.productDescription      | Primitive   |
| 47  | commerce.productMaterial         | Primitive   |
| 48  | commerce.productName             | Primitive   |
| 49  | commerce.upc                     | Primitive   |
| 50  | company.buzzAdjective            | Primitive   |
| 51  | company.buzzNoun                 | Primitive   |
| 52  | company.buzzPhrase               | Primitive   |
| 53  | company.buzzVerb                 | Primitive   |
| 54  | company.catchPhrase              | Primitive   |
| 55  | company.catchPhraseAdjective     | Primitive   |
| 56  | company.catchPhraseDescriptor    | Primitive   |
| 57  | company.catchPhraseNoun          | Primitive   |
| 58  | company.name                     | Primitive   |
| 59  | database.collation               | Primitive   |
| 60  | database.column                  | Primitive   |
| 61  | database.engine                  | Primitive   |
| 62  | database.mongodbObjectId         | Primitive   |
| 63  | database.type                    | Primitive   |
| 64  | datatype.boolean                 | Primitive   |
| 65  | date.anytime                     | Date        |
| 66  | date.between                     | Function    |
| 67  | date.betweens                    | Function    |
| 68  | date.birthdate                   | Date        |
| 69  | date.future                      | Date        |
| 70  | date.month                       | Primitive   |
| 71  | date.past                        | Date        |
| 72  | date.recent                      | Date        |
| 73  | date.soon                        | Date        |
| 74  | date.timeZone                    | Primitive   |
| 75  | date.weekday                     | Primitive   |
| 76  | finance.accountName              | Primitive   |
| 77  | finance.accountNumber            | Primitive   |
| 78  | finance.amount                   | Primitive   |
| 79  | finance.bic                      | Primitive   |
| 80  | finance.bitcoinAddress           | Primitive   |
| 81  | finance.creditCardCVV            | Primitive   |
| 82  | finance.creditCardIssuer         | Primitive   |
| 83  | finance.creditCardNumber         | Primitive   |
| 84  | finance.currency                 | Structure   |
| 85  | finance.currencyCode             | Primitive   |
| 86  | finance.currencyName             | Primitive   |
| 87  | finance.currencyNumericCode      | Primitive   |
| 88  | finance.currencySymbol           | Primitive   |
| 89  | finance.ethereumAddress          | Primitive   |
| 90  | finance.iban                     | Primitive   |
| 91  | finance.litecoinAddress          | Primitive   |
| 92  | finance.pin                      | Primitive   |
| 93  | finance.routingNumber            | Primitive   |
| 94  | finance.transactionDescription   | Primitive   |
| 95  | finance.transactionType          | Primitive   |
| 96  | food.adjective                   | Primitive   |
| 97  | food.description                 | Primitive   |
| 98  | food.dish                        | Primitive   |
| 99  | food.ethnicCategory              | Primitive   |
| 100 | food.fruit                       | Primitive   |
| 101 | food.ingredient                  | Primitive   |
| 102 | food.meat                        | Primitive   |
| 103 | food.spice                       | Primitive   |
| 104 | food.vegetable                   | Primitive   |
| 105 | git.branch                       | Primitive   |
| 106 | git.commitDate                   | Primitive   |
| 107 | git.commitEntry                  | Primitive   |
| 108 | git.commitMessage                | Primitive   |
| 109 | git.commitSha                    | Primitive   |
| 110 | hacker.abbreviation              | Primitive   |
| 111 | hacker.adjective                 | Primitive   |
| 112 | hacker.ingverb                   | Primitive   |
| 113 | hacker.noun                      | Primitive   |
| 114 | hacker.phrase                    | Primitive   |
| 115 | hacker.verb                      | Primitive   |
| 116 | helpers.arrayElement             | Function    |
| 117 | helpers.arrayElements            | Function    |
| 118 | helpers.enumValue                | Function    |
| 119 | helpers.fake                     | Function    |
| 120 | helpers.fromRegExp               | Function    |
| 121 | helpers.maybe                    | Function    |
| 122 | helpers.multiple                 | Function    |
| 123 | helpers.mustache                 | Function    |
| 124 | helpers.objectEntry              | Function    |
| 125 | helpers.objectKey                | Function    |
| 126 | helpers.objectValue              | Function    |
| 127 | helpers.rangeToNumber            | Function    |
| 128 | helpers.replaceCreditCardSymbols | Primitive   |
| 129 | helpers.replaceSymbols           | Primitive   |
| 130 | helpers.shuffle                  | Function    |
| 131 | helpers.slugify                  | Primitive   |
| 132 | helpers.uniqueArray              | Function    |
| 133 | helpers.weightedArrayElement     | Function    |
| 134 | image.avatar                     | Primitive   |
| 135 | image.avatarGitHub               | Primitive   |
| 136 | image.dataUri                    | Primitive   |
| 137 | image.personPortrait             | Primitive   |
| 138 | image.url                        | Primitive   |
| 139 | image.urlLoremFlickr             | Primitive   |
| 140 | image.urlPicsumPhotos            | Primitive   |
| 141 | internet.displayName             | Primitive   |
| 142 | internet.domainName              | Primitive   |
| 143 | internet.domainSuffix            | Primitive   |
| 144 | internet.domainWord              | Primitive   |
| 145 | internet.email                   | Primitive   |
| 146 | internet.emoji                   | Primitive   |
| 147 | internet.exampleEmail            | Primitive   |
| 148 | internet.httpMethod              | Primitive   |
| 149 | internet.httpStatusCode          | Primitive   |
| 150 | internet.ip                      | Primitive   |
| 151 | internet.ipv4                    | Primitive   |
| 152 | internet.ipv6                    | Primitive   |
| 153 | internet.jwt                     | Primitive   |
| 154 | internet.jwtAlgorithm            | Primitive   |
| 155 | internet.mac                     | Primitive   |
| 156 | internet.password                | Primitive   |
| 157 | internet.port                    | Primitive   |
| 158 | internet.protocol                | Primitive   |
| 159 | internet.url                     | Primitive   |
| 160 | internet.userAgent               | Primitive   |
| 161 | internet.username                | Primitive   |
| 162 | location.buildingNumber          | Primitive   |
| 163 | location.cardinalDirection       | Primitive   |
| 164 | location.city                    | Primitive   |
| 165 | location.continent               | Primitive   |
| 166 | location.country                 | Primitive   |
| 167 | location.countryCode             | Primitive   |
| 168 | location.county                  | Primitive   |
| 169 | location.direction               | Primitive   |
| 170 | location.language                | Structure   |
| 171 | location.latitude                | Primitive   |
| 172 | location.longitude               | Primitive   |
| 173 | location.nearbyGPSCoordinate     | Array       |
| 174 | location.ordinalDirection        | Primitive   |
| 175 | location.secondaryAddress        | Primitive   |
| 176 | location.state                   | Primitive   |
| 177 | location.street                  | Primitive   |
| 178 | location.streetAddress           | Primitive   |
| 179 | location.timeZone                | Primitive   |
| 180 | location.zipCode                 | Primitive   |
| 181 | lorem.lines                      | Primitive   |
| 182 | lorem.paragraph                  | Primitive   |
| 183 | lorem.paragraphs                 | Primitive   |
| 184 | lorem.sentence                   | Primitive   |
| 185 | lorem.sentences                  | Primitive   |
| 186 | lorem.slug                       | Primitive   |
| 187 | lorem.text                       | Primitive   |
| 188 | lorem.word                       | Primitive   |
| 189 | lorem.words                      | Primitive   |
| 190 | music.album                      | Primitive   |
| 191 | music.artist                     | Primitive   |
| 192 | music.genre                      | Primitive   |
| 193 | music.songName                   | Primitive   |
| 194 | number.bigInt                    | Primitive   |
| 195 | number.binary                    | Primitive   |
| 196 | number.float                     | Primitive   |
| 197 | number.hex                       | Primitive   |
| 198 | number.int                       | Primitive   |
| 199 | number.octal                     | Primitive   |
| 200 | number.romanNumeral              | Primitive   |
| 201 | person.bio                       | Primitive   |
| 202 | person.firstName                 | Primitive   |
| 203 | person.fullName                  | Primitive   |
| 204 | person.gender                    | Primitive   |
| 205 | person.jobArea                   | Primitive   |
| 206 | person.jobDescriptor             | Primitive   |
| 207 | person.jobTitle                  | Primitive   |
| 208 | person.jobType                   | Primitive   |
| 209 | person.lastName                  | Primitive   |
| 210 | person.middleName                | Primitive   |
| 211 | person.prefix                    | Primitive   |
| 212 | person.sex                       | Primitive   |
| 213 | person.sexType                   | Primitive   |
| 214 | person.suffix                    | Primitive   |
| 215 | person.zodiacSign                | Primitive   |
| 216 | phone.imei                       | Primitive   |
| 217 | phone.number                     | Primitive   |
| 218 | science.chemicalElement          | Structure   |
| 219 | science.unit                     | Structure   |
| 220 | string.alpha                     | Primitive   |
| 221 | string.alphanumeric              | Primitive   |
| 222 | string.binary                    | Primitive   |
| 223 | string.fromCharacters            | Function    |
| 224 | string.hexadecimal               | Primitive   |
| 225 | string.nanoid                    | Primitive   |
| 226 | string.numeric                   | Primitive   |
| 227 | string.octal                     | Primitive   |
| 228 | string.sample                    | Primitive   |
| 229 | string.symbol                    | Primitive   |
| 230 | string.ulid                      | Primitive   |
| 231 | string.uuid                      | Primitive   |
| 232 | system.commonFileExt             | Primitive   |
| 233 | system.commonFileName            | Primitive   |
| 234 | system.commonFileType            | Primitive   |
| 235 | system.cron                      | Primitive   |
| 236 | system.directoryPath             | Primitive   |
| 237 | system.fileExt                   | Primitive   |
| 238 | system.fileName                  | Primitive   |
| 239 | system.filePath                  | Primitive   |
| 240 | system.fileType                  | Primitive   |
| 241 | system.mimeType                  | Primitive   |
| 242 | system.networkInterface          | Primitive   |
| 243 | system.semver                    | Primitive   |
| 244 | vehicle.bicycle                  | Primitive   |
| 245 | vehicle.color                    | Primitive   |
| 246 | vehicle.fuel                     | Primitive   |
| 247 | vehicle.manufacturer             | Primitive   |
| 248 | vehicle.model                    | Primitive   |
| 249 | vehicle.type                     | Primitive   |
| 250 | vehicle.vehicle                  | Primitive   |
| 251 | vehicle.vin                      | Primitive   |
| 252 | vehicle.vrm                      | Primitive   |
| 253 | word.adjective                   | Primitive   |
| 254 | word.adverb                      | Primitive   |
| 255 | word.conjunction                 | Primitive   |
| 256 | word.interjection                | Primitive   |
| 257 | word.noun                        | Primitive   |
| 258 | word.preposition                 | Primitive   |
| 259 | word.sample                      | Primitive   |
| 260 | word.verb                        | Primitive   |
| 261 | word.words                       | Primitive   |
