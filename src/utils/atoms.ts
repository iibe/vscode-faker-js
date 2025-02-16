import type {
    IFakerArrayAtom,
    IFakerAtom,
    IFakerBoundAtom,
    IFakerDateAtom,
    IFakerLocale,
    IFakerPrimitiveAtom,
    IFakerStructureAtom,
} from '../types/faker';
import { LanguageIdentifier } from '../types/vscode';
import { exhaustiveArray } from './exhaustive';

export const vscodeLanguageIdAtoms = exhaustiveArray<LanguageIdentifier>()(
    'abap',
    'bat',
    'bibtex',
    'clojure',
    'coffeescript',
    'c',
    'cpp',
    'csharp',
    'dockercompose',
    'css',
    'cuda-cpp',
    'd',
    'dart',
    'pascal',
    'diff',
    'dockerfile',
    'erlang',
    'fsharp',
    'git-commit',
    'git-rebase',
    'go',
    'groovy',
    'handlebars',
    'haml',
    'haskell',
    'html',
    'ini',
    'java',
    'javascript',
    'javascriptreact',
    'json',
    'jsonc',
    'julia',
    'latex',
    'less',
    'lua',
    'makefile',
    'markdown',
    'objective-c',
    'objective-cpp',
    'ocaml',
    'pascal',
    'perl',
    'perl6',
    'php',
    'plaintext',
    'powershell',
    'jade',
    'pug',
    'python',
    'r',
    'razor',
    'ruby',
    'rust',
    'sass',
    'scss',
    'shaderlab',
    'shellscript',
    'slim',
    'sql',
    'stylus',
    'svelte',
    'swift',
    'typescript',
    'typescriptreact',
    'tex',
    'vb',
    'vue',
    'vue-html',
    'xml',
    'xsl',
    'yaml'
);

export const fakerLocaleAtoms = exhaustiveArray<IFakerLocale>()(
    'af_ZA',
    'ar',
    'az',
    'base',
    'cs_CZ',
    'da',
    'de_AT',
    'de_CH',
    'de',
    'dv',
    'el',
    'en_AU_ocker',
    'en_AU',
    'en_BORK',
    'en_CA',
    'en_GB',
    'en_GH',
    'en_HK',
    'en_IE',
    'en_IN',
    'en_NG',
    'en_US',
    'en_ZA',
    'en',
    'eo',
    'es_MX',
    'es',
    'fa',
    'fi',
    'fr_BE',
    'fr_CA',
    'fr_CH',
    'fr_LU',
    'fr_SN',
    'fr',
    'he',
    'hr',
    'hu',
    'hy',
    'id_ID',
    'it',
    'ja',
    'ka_GE',
    'ko',
    'lv',
    'mk',
    'nb_NO',
    'ne',
    'nl_BE',
    'nl',
    'pl',
    'pt_BR',
    'pt_PT',
    'ro_MD',
    'ro',
    'ru',
    'sk',
    'sr_RS_latin',
    'sv',
    'th',
    'tr',
    'uk',
    'ur',
    'uz_UZ_latin',
    'vi',
    'yo_NG',
    'zh_CN',
    'zh_TW',
    'zu_ZA'
);

export const fakerApiPrimitiveAtoms = exhaustiveArray<IFakerPrimitiveAtom>()(
    'airline.aircraftType',
    'airline.flightNumber',
    'airline.recordLocator',
    'airline.seat',
    'animal.bear',
    'animal.bird',
    'animal.cat',
    'animal.cetacean',
    'animal.cow',
    'animal.crocodilia',
    'animal.dog',
    'animal.fish',
    'animal.horse',
    'animal.insect',
    'animal.lion',
    'animal.petName',
    'animal.rabbit',
    'animal.rodent',
    'animal.snake',
    'animal.type',
    'book.author',
    'book.format',
    'book.genre',
    'book.publisher',
    'book.series',
    'book.title',
    'color.cmyk',
    'color.colorByCSSColorSpace',
    'color.cssSupportedFunction',
    'color.cssSupportedSpace',
    'color.hsl',
    'color.human',
    'color.hwb',
    'color.lab',
    'color.lch',
    'color.rgb',
    'color.space',
    'commerce.department',
    'commerce.isbn',
    'commerce.price',
    'commerce.product',
    'commerce.productAdjective',
    'commerce.productDescription',
    'commerce.productMaterial',
    'commerce.productName',
    'company.buzzAdjective',
    'company.buzzNoun',
    'company.buzzPhrase',
    'company.buzzVerb',
    'company.catchPhrase',
    'company.catchPhraseAdjective',
    'company.catchPhraseDescriptor',
    'company.catchPhraseNoun',
    'company.name',
    'database.collation',
    'database.column',
    'database.engine',
    'database.mongodbObjectId',
    'database.type',
    'datatype.boolean',
    'date.month',
    'date.timeZone',
    'date.weekday',
    'finance.accountName',
    'finance.accountNumber',
    'finance.amount',
    'finance.bic',
    'finance.bitcoinAddress',
    'finance.creditCardCVV',
    'finance.creditCardIssuer',
    'finance.creditCardNumber',
    'finance.currencyCode',
    'finance.currencyName',
    'finance.currencySymbol',
    'finance.ethereumAddress',
    'finance.iban',
    'finance.litecoinAddress',
    'finance.maskedNumber',
    'finance.pin',
    'finance.routingNumber',
    'finance.transactionDescription',
    'finance.transactionType',
    'food.adjective',
    'food.description',
    'food.dish',
    'food.ethnicCategory',
    'food.fruit',
    'food.ingredient',
    'food.meat',
    'food.spice',
    'food.vegetable',
    'git.branch',
    'git.commitDate',
    'git.commitEntry',
    'git.commitMessage',
    'git.commitSha',
    'hacker.abbreviation',
    'hacker.adjective',
    'hacker.ingverb',
    'hacker.noun',
    'hacker.phrase',
    'hacker.verb',
    'helpers.replaceCreditCardSymbols',
    'helpers.replaceSymbols',
    'helpers.slugify',
    'image.avatar',
    'image.avatarGitHub',
    'image.avatarLegacy',
    'image.dataUri',
    'image.personPortrait',
    'image.url',
    'image.urlLoremFlickr',
    'image.urlPicsumPhotos',
    'image.urlPlaceholder',
    'internet.color',
    'internet.displayName',
    'internet.domainName',
    'internet.domainSuffix',
    'internet.domainWord',
    'internet.email',
    'internet.emoji',
    'internet.exampleEmail',
    'internet.httpMethod',
    'internet.httpStatusCode',
    'internet.ip',
    'internet.ipv4',
    'internet.ipv6',
    'internet.jwt',
    'internet.jwtAlgorithm',
    'internet.mac',
    'internet.password',
    'internet.port',
    'internet.protocol',
    'internet.url',
    'internet.userAgent',
    'internet.username',
    'internet.userName',
    'location.buildingNumber',
    'location.cardinalDirection',
    'location.city',
    'location.continent',
    'location.country',
    'location.countryCode',
    'location.county',
    'location.direction',
    'location.latitude',
    'location.longitude',
    'location.ordinalDirection',
    'location.secondaryAddress',
    'location.state',
    'location.street',
    'location.streetAddress',
    'location.timeZone',
    'location.zipCode',
    'lorem.lines',
    'lorem.paragraph',
    'lorem.paragraphs',
    'lorem.sentence',
    'lorem.sentences',
    'lorem.slug',
    'lorem.text',
    'lorem.word',
    'lorem.words',
    'music.album',
    'music.artist',
    'music.genre',
    'music.songName',
    'number.bigInt',
    'number.binary',
    'number.float',
    'number.hex',
    'number.int',
    'number.octal',
    'number.romanNumeral',
    'person.bio',
    'person.firstName',
    'person.fullName',
    'person.gender',
    'person.jobArea',
    'person.jobDescriptor',
    'person.jobTitle',
    'person.jobType',
    'person.lastName',
    'person.middleName',
    'person.prefix',
    'person.sex',
    'person.sexType',
    'person.suffix',
    'person.zodiacSign',
    'phone.imei',
    'phone.number',
    'string.alpha',
    'string.alphanumeric',
    'string.binary',
    'string.hexadecimal',
    'string.nanoid',
    'string.numeric',
    'string.octal',
    'string.sample',
    'string.symbol',
    'string.ulid',
    'string.uuid',
    'system.commonFileExt',
    'system.commonFileName',
    'system.commonFileType',
    'system.cron',
    'system.directoryPath',
    'system.fileExt',
    'system.fileName',
    'system.filePath',
    'system.fileType',
    'system.mimeType',
    'system.networkInterface',
    'system.semver',
    'vehicle.bicycle',
    'vehicle.color',
    'vehicle.fuel',
    'vehicle.manufacturer',
    'vehicle.model',
    'vehicle.type',
    'vehicle.vehicle',
    'vehicle.vin',
    'vehicle.vrm',
    'word.adjective',
    'word.adverb',
    'word.conjunction',
    'word.interjection',
    'word.noun',
    'word.preposition',
    'word.sample',
    'word.verb',
    'word.words'
);

export const fakerApiDateAtoms = exhaustiveArray<IFakerDateAtom>()(
    'date.anytime',
    'date.birthdate',
    'date.future',
    'date.past',
    'date.recent',
    'date.soon'
);

export const fakerApiArrayAtoms = exhaustiveArray<IFakerArrayAtom>()(
    'location.nearbyGPSCoordinate'
);

export const fakerApiStructureAtoms = exhaustiveArray<IFakerStructureAtom>()(
    'airline.airline',
    'airline.airplane',
    'airline.airport',
    'finance.currency',
    'location.language',
    'science.chemicalElement',
    'science.unit'
);

export const fakerApiBoundAtoms = exhaustiveArray<IFakerBoundAtom>()(
    'date.between',
    'date.betweens',
    'helpers.arrayElement',
    'helpers.arrayElements',
    'helpers.enumValue',
    'helpers.fake',
    'helpers.fromRegExp',
    'helpers.maybe',
    'helpers.multiple',
    'helpers.mustache',
    'helpers.objectEntry',
    'helpers.objectKey',
    'helpers.objectValue',
    'helpers.rangeToNumber',
    'helpers.shuffle',
    'helpers.uniqueArray',
    'helpers.weightedArrayElement',
    'string.fromCharacters'
);

export const fakerApiAtoms: IFakerAtom[] = [
    ...fakerApiPrimitiveAtoms,
    ...fakerApiArrayAtoms,
    ...fakerApiDateAtoms,
    ...fakerApiStructureAtoms,
    ...fakerApiBoundAtoms,
];
