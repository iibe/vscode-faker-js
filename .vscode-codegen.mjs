import { fileURLToPath } from 'url';
import path2 from 'path';
import { copyFileSync, readFileSync, writeFileSync } from 'fs';

// node_modules/.pnpm/tsup@8.3.5_tsx@4.19.2_typescript@5.7.3/node_modules/tsup/assets/esm_shims.js
var getFilename = () => fileURLToPath(import.meta.url);
var getDirname = () => path2.dirname(getFilename());
var __dirname = /* @__PURE__ */ getDirname();

// src/core/atoms.ts
function exhaustive() {
  return function(...array) {
    return array;
  };
}
var fakerLocaleAtoms = exhaustive()(
  "af_ZA",
  "ar",
  "az",
  "base",
  "cs_CZ",
  "da",
  "de_AT",
  "de_CH",
  "de",
  "dv",
  "el",
  "en_AU_ocker",
  "en_AU",
  "en_BORK",
  "en_CA",
  "en_GB",
  "en_GH",
  "en_HK",
  "en_IE",
  "en_IN",
  "en_NG",
  "en_US",
  "en_ZA",
  "en",
  "eo",
  "es_MX",
  "es",
  "fa",
  "fi",
  "fr_BE",
  "fr_CA",
  "fr_CH",
  "fr_LU",
  "fr_SN",
  "fr",
  "he",
  "hr",
  "hu",
  "hy",
  "id_ID",
  "it",
  "ja",
  "ka_GE",
  "ko",
  "lv",
  "mk",
  "nb_NO",
  "ne",
  "nl_BE",
  "nl",
  "pl",
  "pt_BR",
  "pt_PT",
  "ro_MD",
  "ro",
  "ru",
  "sk",
  "sr_RS_latin",
  "sv",
  "th",
  "tr",
  "uk",
  "ur",
  "uz_UZ_latin",
  "vi",
  "yo_NG",
  "zh_CN",
  "zh_TW",
  "zu_ZA"
);
var fakerApiPrimitiveAtoms = exhaustive()(
  "airline.aircraftType",
  "airline.flightNumber",
  "airline.recordLocator",
  "airline.seat",
  "animal.bear",
  "animal.bird",
  "animal.cat",
  "animal.cetacean",
  "animal.cow",
  "animal.crocodilia",
  "animal.dog",
  "animal.fish",
  "animal.horse",
  "animal.insect",
  "animal.lion",
  "animal.petName",
  "animal.rabbit",
  "animal.rodent",
  "animal.snake",
  "animal.type",
  "book.author",
  "book.format",
  "book.genre",
  "book.publisher",
  "book.series",
  "book.title",
  "color.cmyk",
  "color.colorByCSSColorSpace",
  "color.cssSupportedFunction",
  "color.cssSupportedSpace",
  "color.hsl",
  "color.human",
  "color.hwb",
  "color.lab",
  "color.lch",
  "color.rgb",
  "color.space",
  "commerce.department",
  "commerce.isbn",
  "commerce.price",
  "commerce.product",
  "commerce.productAdjective",
  "commerce.productDescription",
  "commerce.productMaterial",
  "commerce.productName",
  "company.buzzAdjective",
  "company.buzzNoun",
  "company.buzzPhrase",
  "company.buzzVerb",
  "company.catchPhrase",
  "company.catchPhraseAdjective",
  "company.catchPhraseDescriptor",
  "company.catchPhraseNoun",
  "company.name",
  "database.collation",
  "database.column",
  "database.engine",
  "database.mongodbObjectId",
  "database.type",
  "datatype.boolean",
  "date.month",
  "date.timeZone",
  "date.weekday",
  "finance.accountName",
  "finance.accountNumber",
  "finance.amount",
  "finance.bic",
  "finance.bitcoinAddress",
  "finance.creditCardCVV",
  "finance.creditCardIssuer",
  "finance.creditCardNumber",
  "finance.currencyCode",
  "finance.currencyName",
  "finance.currencySymbol",
  "finance.ethereumAddress",
  "finance.iban",
  "finance.litecoinAddress",
  "finance.maskedNumber",
  "finance.pin",
  "finance.routingNumber",
  "finance.transactionDescription",
  "finance.transactionType",
  "food.adjective",
  "food.description",
  "food.dish",
  "food.ethnicCategory",
  "food.fruit",
  "food.ingredient",
  "food.meat",
  "food.spice",
  "food.vegetable",
  "git.branch",
  "git.commitDate",
  "git.commitEntry",
  "git.commitMessage",
  "git.commitSha",
  "hacker.abbreviation",
  "hacker.adjective",
  "hacker.ingverb",
  "hacker.noun",
  "hacker.phrase",
  "hacker.verb",
  "helpers.replaceCreditCardSymbols",
  "helpers.replaceSymbols",
  "helpers.slugify",
  "image.avatar",
  "image.avatarGitHub",
  "image.avatarLegacy",
  "image.dataUri",
  "image.url",
  "image.urlLoremFlickr",
  "image.urlPicsumPhotos",
  "image.urlPlaceholder",
  "internet.color",
  "internet.displayName",
  "internet.domainName",
  "internet.domainSuffix",
  "internet.domainWord",
  "internet.email",
  "internet.emoji",
  "internet.exampleEmail",
  "internet.httpMethod",
  "internet.httpStatusCode",
  "internet.ip",
  "internet.ipv4",
  "internet.ipv6",
  "internet.jwt",
  "internet.jwtAlgorithm",
  "internet.mac",
  "internet.password",
  "internet.port",
  "internet.protocol",
  "internet.url",
  "internet.userAgent",
  "internet.username",
  "internet.userName",
  "location.buildingNumber",
  "location.cardinalDirection",
  "location.city",
  "location.continent",
  "location.country",
  "location.countryCode",
  "location.county",
  "location.direction",
  "location.latitude",
  "location.longitude",
  "location.ordinalDirection",
  "location.secondaryAddress",
  "location.state",
  "location.street",
  "location.streetAddress",
  "location.timeZone",
  "location.zipCode",
  "lorem.lines",
  "lorem.paragraph",
  "lorem.paragraphs",
  "lorem.sentence",
  "lorem.sentences",
  "lorem.slug",
  "lorem.text",
  "lorem.word",
  "lorem.words",
  "music.album",
  "music.artist",
  "music.genre",
  "music.songName",
  "number.bigInt",
  "number.binary",
  "number.float",
  "number.hex",
  "number.int",
  "number.octal",
  "number.romanNumeral",
  "person.bio",
  "person.firstName",
  "person.fullName",
  "person.gender",
  "person.jobArea",
  "person.jobDescriptor",
  "person.jobTitle",
  "person.jobType",
  "person.lastName",
  "person.middleName",
  "person.prefix",
  "person.sex",
  "person.sexType",
  "person.suffix",
  "person.zodiacSign",
  "phone.imei",
  "phone.number",
  "string.alpha",
  "string.alphanumeric",
  "string.binary",
  "string.hexadecimal",
  "string.nanoid",
  "string.numeric",
  "string.octal",
  "string.sample",
  "string.symbol",
  "string.ulid",
  "string.uuid",
  "system.commonFileExt",
  "system.commonFileName",
  "system.commonFileType",
  "system.cron",
  "system.directoryPath",
  "system.fileExt",
  "system.fileName",
  "system.filePath",
  "system.fileType",
  "system.mimeType",
  "system.networkInterface",
  "system.semver",
  "vehicle.bicycle",
  "vehicle.color",
  "vehicle.fuel",
  "vehicle.manufacturer",
  "vehicle.model",
  "vehicle.type",
  "vehicle.vehicle",
  "vehicle.vin",
  "vehicle.vrm",
  "word.adjective",
  "word.adverb",
  "word.conjunction",
  "word.interjection",
  "word.noun",
  "word.preposition",
  "word.sample",
  "word.verb",
  "word.words"
);
var fakerApiDateAtoms = exhaustive()(
  "date.anytime",
  "date.birthdate",
  "date.future",
  "date.past",
  "date.recent",
  "date.soon"
);
var fakerApiArrayAtoms = exhaustive()("location.nearbyGPSCoordinate");
var fakerApiStructureAtoms = exhaustive()(
  "airline.airline",
  "airline.airplane",
  "airline.airport",
  "finance.currency",
  "location.language",
  "science.chemicalElement",
  "science.unit"
);
var fakerApiBoundAtoms = exhaustive()(
  "date.between",
  "date.betweens",
  "helpers.arrayElement",
  "helpers.arrayElements",
  "helpers.enumValue",
  "helpers.fake",
  "helpers.fromRegExp",
  "helpers.maybe",
  "helpers.multiple",
  "helpers.mustache",
  "helpers.objectEntry",
  "helpers.objectKey",
  "helpers.objectValue",
  "helpers.rangeToNumber",
  "helpers.shuffle",
  "helpers.uniqueArray",
  "helpers.weightedArrayElement",
  "string.fromCharacters"
);
[
  ...fakerApiPrimitiveAtoms,
  ...fakerApiArrayAtoms,
  ...fakerApiDateAtoms,
  ...fakerApiStructureAtoms,
  ...fakerApiBoundAtoms
];

// src/codegen.ts
codegen();
function codegen() {
  const configurationPath = path2.join(__dirname, "package.json");
  const snapshotPath = path2.join(__dirname, "package.snapshot.json");
  copyFileSync(configurationPath, snapshotPath);
  const packageJson = JSON.parse(readFileSync(configurationPath, "utf-8"));
  const packageJsonProps = {
    activationEvents: getActivationEvents(),
    contributes: {
      configuration: {
        type: "object",
        title: "Faker.js",
        properties: getConfigProps()
      },
      commands: getCommands()
    }
  };
  writeFileSync(
    configurationPath,
    JSON.stringify({ ...packageJson, ...packageJsonProps }, null, 4),
    {
      encoding: "utf-8"
    }
  );
}
function getActivationEvents() {
  const events = [];
  return events;
}
function getCommands() {
  const commands = [];
  for (const atom of fakerApiPrimitiveAtoms) {
    commands.push({
      command: `vscode-faker-js.run.${atom}`,
      title: atom,
      category: "Faker.js"
    });
  }
  for (const atom of fakerApiDateAtoms) {
    commands.push({
      command: `vscode-faker-js.run.${atom}`,
      title: `${atom} (date)`,
      category: "Faker.js"
    });
  }
  for (const atom of fakerApiArrayAtoms) {
    commands.push({
      command: `vscode-faker-js.run.${atom}`,
      title: `${atom} (array)`,
      category: "Faker.js"
    });
  }
  for (const atom of fakerApiStructureAtoms) {
    commands.push({
      command: `vscode-faker-js.run.${atom}`,
      title: `${atom} (object)`,
      category: "Faker.js"
    });
  }
  for (const atom of fakerApiBoundAtoms) {
    commands.push({
      command: `vscode-faker-js.run.${atom}`,
      title: `${atom} (binding)`,
      category: "Faker.js"
    });
  }
  return commands;
}
function getConfigProps() {
  const props = {
    "faker-js.locale": {
      type: "string",
      enum: fakerLocaleAtoms,
      default: "en",
      description: "Specifies Faker.js locale."
    },
    "faker-js.bigint.insert": {
      type: "string",
      enum: ["literal", "inline", "wrapper"],
      default: "literal",
      description: "Either literal `123n` (by default), or wrapper object `BigInt(123)`."
    },
    "faker-js.string.insert": {
      type: "string",
      enum: ["literal", "inline"],
      default: "literal",
      description: 'Either literal `"string"` (by default), or inline `string`.'
    },
    "faker-js.string.quotes": {
      type: "string",
      enum: ["single", "double", "backticks"],
      default: "single",
      description: "Specify string quotes type."
    },
    "faker-js.symbol.quotes": {
      type: "string",
      enum: ["single", "double", "backticks"],
      default: "single",
      description: "Specify symbol quotes type."
    }
  };
  return props;
}
