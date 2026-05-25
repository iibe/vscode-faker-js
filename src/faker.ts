import { Faker } from '@faker-js/faker';
import type {
    FakerLocale,
    FakerLocaleModule,
    IApiArrayKey,
    IApiDateKey,
    IApiMethodKey,
    IApiPrimitiveKey,
    IApiStructureKey,
    IFakerFn,
    IFakerFnName
} from './types/faker.js';

/**
 * Imports locale-specific Faker.js module.
 * Note that we get around 150 files after code splitting.
 */
export async function importFaker(locale: FakerLocale): Promise<Faker> {
    let module: FakerLocaleModule;

    // eslint-enable @typescript-eslint/switch-exhaustiveness-check
    switch (locale) {
        case 'af_ZA':
            module = await import('@faker-js/faker/locale/af_ZA');
            break;
        case 'ar':
            module = await import('@faker-js/faker/locale/ar');
            break;
        case 'az':
            module = await import('@faker-js/faker/locale/az');
            break;
        case 'base':
            module = await import('@faker-js/faker/locale/base');
            break;
        case 'bn_BD':
            module = await import('@faker-js/faker/locale/bn_BD');
            break;
        case 'cs_CZ':
            module = await import('@faker-js/faker/locale/cs_CZ');
            break;
        case 'cy':
            module = await import('@faker-js/faker/locale/cy');
            break;
        case 'da':
            module = await import('@faker-js/faker/locale/da');
            break;
        case 'de_AT':
            module = await import('@faker-js/faker/locale/de_AT');
            break;
        case 'de_CH':
            module = await import('@faker-js/faker/locale/de_CH');
            break;
        case 'de':
            module = await import('@faker-js/faker/locale/de');
            break;
        case 'dv':
            module = await import('@faker-js/faker/locale/dv');
            break;
        case 'el':
            module = await import('@faker-js/faker/locale/el');
            break;
        case 'en_AU_ocker':
            module = await import('@faker-js/faker/locale/en_AU_ocker');
            break;
        case 'en_AU':
            module = await import('@faker-js/faker/locale/en_AU');
            break;
        case 'en_BORK':
            module = await import('@faker-js/faker/locale/en_BORK');
            break;
        case 'en_CA':
            module = await import('@faker-js/faker/locale/en_CA');
            break;
        case 'en_GB':
            module = await import('@faker-js/faker/locale/en_GB');
            break;
        case 'en_GH':
            module = await import('@faker-js/faker/locale/en_GH');
            break;
        case 'en_HK':
            module = await import('@faker-js/faker/locale/en_HK');
            break;
        case 'en_IE':
            module = await import('@faker-js/faker/locale/en_IE');
            break;
        case 'en_IN':
            module = await import('@faker-js/faker/locale/en_IN');
            break;
        case 'en_NG':
            module = await import('@faker-js/faker/locale/en_NG');
            break;
        case 'en_US':
            module = await import('@faker-js/faker/locale/en_US');
            break;
        case 'en_ZA':
            module = await import('@faker-js/faker/locale/en_ZA');
            break;
        case 'en':
            module = await import('@faker-js/faker/locale/en');
            break;
        case 'eo':
            module = await import('@faker-js/faker/locale/eo');
            break;
        case 'es_MX':
            module = await import('@faker-js/faker/locale/es_MX');
            break;
        case 'es':
            module = await import('@faker-js/faker/locale/es');
            break;
        case 'fa':
            module = await import('@faker-js/faker/locale/fa');
            break;
        case 'fi':
            module = await import('@faker-js/faker/locale/fi');
            break;
        case 'fr_BE':
            module = await import('@faker-js/faker/locale/fr_BE');
            break;
        case 'fr_CA':
            module = await import('@faker-js/faker/locale/fr_CA');
            break;
        case 'fr_CH':
            module = await import('@faker-js/faker/locale/fr_CH');
            break;
        case 'fr_LU':
            module = await import('@faker-js/faker/locale/fr_LU');
            break;
        case 'fr_SN':
            module = await import('@faker-js/faker/locale/fr_SN');
            break;
        case 'fr':
            module = await import('@faker-js/faker/locale/fr');
            break;
        case 'he':
            module = await import('@faker-js/faker/locale/he');
            break;
        case 'hr':
            module = await import('@faker-js/faker/locale/hr');
            break;
        case 'hu':
            module = await import('@faker-js/faker/locale/hu');
            break;
        case 'hy':
            module = await import('@faker-js/faker/locale/hy');
            break;
        case 'id_ID':
            module = await import('@faker-js/faker/locale/id_ID');
            break;
        case 'it':
            module = await import('@faker-js/faker/locale/it');
            break;
        case 'ja':
            module = await import('@faker-js/faker/locale/ja');
            break;
        case 'ka_GE':
            module = await import('@faker-js/faker/locale/ka_GE');
            break;
        case 'ko':
            module = await import('@faker-js/faker/locale/ko');
            break;
        case 'ku_ckb':
            module = await import('@faker-js/faker/locale/ku_ckb');
            break;
        case 'ku_kmr_latin':
            module = await import('@faker-js/faker/locale/ku_kmr_latin');
            break;
        case 'lv':
            module = await import('@faker-js/faker/locale/lv');
            break;
        case 'mk':
            module = await import('@faker-js/faker/locale/mk');
            break;
        case 'nb_NO':
            module = await import('@faker-js/faker/locale/nb_NO');
            break;
        case 'ne':
            module = await import('@faker-js/faker/locale/ne');
            break;
        case 'nl_BE':
            module = await import('@faker-js/faker/locale/nl_BE');
            break;
        case 'nl':
            module = await import('@faker-js/faker/locale/nl');
            break;
        case 'pl':
            module = await import('@faker-js/faker/locale/pl');
            break;
        case 'pt_BR':
            module = await import('@faker-js/faker/locale/pt_BR');
            break;
        case 'pt_PT':
            module = await import('@faker-js/faker/locale/pt_PT');
            break;
        case 'ro_MD':
            module = await import('@faker-js/faker/locale/ro_MD');
            break;
        case 'ro':
            module = await import('@faker-js/faker/locale/ro');
            break;
        case 'ru':
            module = await import('@faker-js/faker/locale/ru');
            break;
        case 'sk':
            module = await import('@faker-js/faker/locale/sk');
            break;
        case 'sl_SI':
            module = await import('@faker-js/faker/locale/sl_SI');
            break;
        case 'sr_RS_latin':
            module = await import('@faker-js/faker/locale/sr_RS_latin');
            break;
        case 'sv':
            module = await import('@faker-js/faker/locale/sv');
            break;
        case 'ta_IN':
            module = await import('@faker-js/faker/locale/ta_IN');
            break;
        case 'th':
            module = await import('@faker-js/faker/locale/th');
            break;
        case 'tr':
            module = await import('@faker-js/faker/locale/tr');
            break;
        case 'uk':
            module = await import('@faker-js/faker/locale/uk');
            break;
        case 'ur':
            module = await import('@faker-js/faker/locale/ur');
            break;
        case 'uz_UZ_latin':
            module = await import('@faker-js/faker/locale/uz_UZ_latin');
            break;
        case 'vi':
            module = await import('@faker-js/faker/locale/vi');
            break;
        case 'yo_NG':
            module = await import('@faker-js/faker/locale/yo_NG');
            break;
        case 'zh_CN':
            module = await import('@faker-js/faker/locale/zh_CN');
            break;
        case 'zh_TW':
            module = await import('@faker-js/faker/locale/zh_TW');
            break;
        case 'zu_ZA':
            module = await import('@faker-js/faker/locale/zu_ZA');
            break;
        default:
            module = await import('@faker-js/faker');
    }

    return module.faker; // as unknown as Faker
}

export function getFakerFunction(
    faker: Faker,
    atom: IFakerFnName
): IFakerFn | undefined {
    switch (atom as IApiPrimitiveKey) {
        case 'airline.aircraftType':
            return faker.airline.aircraftType;
        case 'airline.flightNumber':
            return faker.airline.flightNumber;
        case 'airline.recordLocator':
            return faker.airline.recordLocator;
        case 'airline.seat':
            return faker.airline.seat;
        case 'animal.bear':
            return faker.animal.bear;
        case 'animal.bird':
            return faker.animal.bird;
        case 'animal.cat':
            return faker.animal.cat;
        case 'animal.cetacean':
            return faker.animal.cetacean;
        case 'animal.cow':
            return faker.animal.cow;
        case 'animal.crocodilia':
            return faker.animal.crocodilia;
        case 'animal.dog':
            return faker.animal.dog;
        case 'animal.fish':
            return faker.animal.fish;
        case 'animal.horse':
            return faker.animal.horse;
        case 'animal.insect':
            return faker.animal.insect;
        case 'animal.lion':
            return faker.animal.lion;
        case 'animal.petName':
            return faker.animal.petName;
        case 'animal.rabbit':
            return faker.animal.rabbit;
        case 'animal.rodent':
            return faker.animal.rodent;
        case 'animal.snake':
            return faker.animal.snake;
        case 'animal.type':
            return faker.animal.type;
        case 'book.author':
            return faker.book.author;
        case 'book.format':
            return faker.book.format;
        case 'book.genre':
            return faker.book.genre;
        case 'book.publisher':
            return faker.book.publisher;
        case 'book.series':
            return faker.book.series;
        case 'book.title':
            return faker.book.title;
        case 'color.cmyk':
            return faker.color.cmyk;
        case 'color.colorByCSSColorSpace':
            return faker.color.colorByCSSColorSpace;
        case 'color.cssSupportedFunction':
            return faker.color.cssSupportedFunction;
        case 'color.cssSupportedSpace':
            return faker.color.cssSupportedSpace;
        case 'color.hsl':
            return faker.color.hsl;
        case 'color.human':
            return faker.color.human;
        case 'color.hwb':
            return faker.color.hwb;
        case 'color.lab':
            return faker.color.lab;
        case 'color.lch':
            return faker.color.lch;
        case 'color.rgb':
            return faker.color.rgb;
        case 'color.space':
            return faker.color.space;
        case 'commerce.department':
            return faker.commerce.department;
        case 'commerce.isbn':
            return faker.commerce.isbn;
        case 'commerce.price':
            return faker.commerce.price;
        case 'commerce.product':
            return faker.commerce.product;
        case 'commerce.productAdjective':
            return faker.commerce.productAdjective;
        case 'commerce.productDescription':
            return faker.commerce.productDescription;
        case 'commerce.productMaterial':
            return faker.commerce.productMaterial;
        case 'commerce.productName':
            return faker.commerce.productName;
        case 'company.buzzAdjective':
            return faker.company.buzzAdjective;
        case 'company.buzzNoun':
            return faker.company.buzzNoun;
        case 'company.buzzPhrase':
            return faker.company.buzzPhrase;
        case 'company.buzzVerb':
            return faker.company.buzzVerb;
        case 'company.catchPhrase':
            return faker.company.catchPhrase;
        case 'company.catchPhraseAdjective':
            return faker.company.catchPhraseAdjective;
        case 'company.catchPhraseDescriptor':
            return faker.company.catchPhraseDescriptor;
        case 'company.catchPhraseNoun':
            return faker.company.catchPhraseNoun;
        case 'company.name':
            return faker.company.name;
        case 'database.collation':
            return faker.database.collation;
        case 'database.column':
            return faker.database.column;
        case 'database.engine':
            return faker.database.engine;
        case 'database.mongodbObjectId':
            return faker.database.mongodbObjectId;
        case 'database.type':
            return faker.database.type;
        case 'datatype.boolean':
            return faker.datatype.boolean;
        case 'date.month':
            return faker.date.month;
        case 'date.timeZone':
            return faker.date.timeZone;
        case 'date.weekday':
            return faker.date.weekday;
        case 'finance.accountName':
            return faker.finance.accountName;
        case 'finance.accountNumber':
            return faker.finance.accountNumber;
        case 'finance.amount':
            return faker.finance.amount;
        case 'finance.bic':
            return faker.finance.bic;
        case 'finance.bitcoinAddress':
            return faker.finance.bitcoinAddress;
        case 'finance.creditCardCVV':
            return faker.finance.creditCardCVV;
        case 'finance.creditCardIssuer':
            return faker.finance.creditCardIssuer;
        case 'finance.creditCardNumber':
            return faker.finance.creditCardNumber;
        case 'finance.currencyCode':
            return faker.finance.currencyCode;
        case 'finance.currencyName':
            return faker.finance.currencyName;
        case 'finance.currencyNumericCode':
            return faker.finance.currencyNumericCode;
        case 'finance.currencySymbol':
            return faker.finance.currencySymbol;
        case 'finance.ethereumAddress':
            return faker.finance.ethereumAddress;
        case 'finance.iban':
            return faker.finance.iban;
        case 'finance.litecoinAddress':
            return faker.finance.litecoinAddress;
        case 'finance.pin':
            return faker.finance.pin;
        case 'finance.routingNumber':
            return faker.finance.routingNumber;
        case 'finance.transactionDescription':
            return faker.finance.transactionDescription;
        case 'finance.transactionType':
            return faker.finance.transactionType;
        case 'food.adjective':
            return faker.food.adjective;
        case 'food.description':
            return faker.food.description;
        case 'food.dish':
            return faker.food.dish;
        case 'food.ethnicCategory':
            return faker.food.ethnicCategory;
        case 'food.fruit':
            return faker.food.fruit;
        case 'food.ingredient':
            return faker.food.ingredient;
        case 'food.meat':
            return faker.food.meat;
        case 'food.spice':
            return faker.food.spice;
        case 'food.vegetable':
            return faker.food.vegetable;
        case 'git.branch':
            return faker.git.branch;
        case 'git.commitDate':
            return faker.git.commitDate;
        case 'git.commitEntry':
            return faker.git.commitEntry;
        case 'git.commitMessage':
            return faker.git.commitMessage;
        case 'git.commitSha':
            return faker.git.commitSha;
        case 'hacker.abbreviation':
            return faker.hacker.abbreviation;
        case 'hacker.adjective':
            return faker.hacker.adjective;
        case 'hacker.ingverb':
            return faker.hacker.ingverb;
        case 'hacker.noun':
            return faker.hacker.noun;
        case 'hacker.phrase':
            return faker.hacker.phrase;
        case 'hacker.verb':
            return faker.hacker.verb;
        case 'helpers.replaceCreditCardSymbols':
            return faker.helpers.replaceCreditCardSymbols;
        case 'helpers.replaceSymbols':
            return faker.helpers.replaceSymbols;
        case 'helpers.slugify':
            return faker.helpers.slugify;
        case 'image.avatar':
            return faker.image.avatar;
        case 'image.avatarGitHub':
            return faker.image.avatarGitHub;
        case 'image.dataUri':
            return faker.image.dataUri;
        case 'image.personPortrait':
            return faker.image.personPortrait;
        case 'image.url':
            return faker.image.url;
        case 'image.urlLoremFlickr':
            return faker.image.urlLoremFlickr;
        case 'image.urlPicsumPhotos':
            return faker.image.urlPicsumPhotos;
        case 'internet.displayName':
            return faker.internet.displayName;
        case 'internet.domainName':
            return faker.internet.domainName;
        case 'internet.domainSuffix':
            return faker.internet.domainSuffix;
        case 'internet.domainWord':
            return faker.internet.domainWord;
        case 'internet.email':
            return faker.internet.email;
        case 'internet.emoji':
            return faker.internet.emoji;
        case 'internet.exampleEmail':
            return faker.internet.exampleEmail;
        case 'internet.httpMethod':
            return faker.internet.httpMethod;
        case 'internet.httpStatusCode':
            return faker.internet.httpStatusCode;
        case 'internet.ip':
            return faker.internet.ip;
        case 'internet.ipv4':
            return faker.internet.ipv4;
        case 'internet.ipv6':
            return faker.internet.ipv6;
        case 'internet.jwt':
            return faker.internet.jwt;
        case 'internet.jwtAlgorithm':
            return faker.internet.jwtAlgorithm;
        case 'internet.mac':
            return faker.internet.mac;
        case 'internet.password':
            return faker.internet.password;
        case 'internet.port':
            return faker.internet.port;
        case 'internet.protocol':
            return faker.internet.protocol;
        case 'internet.url':
            return faker.internet.url;
        case 'internet.userAgent':
            return faker.internet.userAgent;
        case 'internet.username':
            return faker.internet.username;
        case 'location.buildingNumber':
            return faker.location.buildingNumber;
        case 'location.cardinalDirection':
            return faker.location.cardinalDirection;
        case 'location.city':
            return faker.location.city;
        case 'location.continent':
            return faker.location.continent;
        case 'location.country':
            return faker.location.country;
        case 'location.countryCode':
            return faker.location.countryCode;
        case 'location.county':
            return faker.location.county;
        case 'location.direction':
            return faker.location.direction;
        case 'location.latitude':
            return faker.location.latitude;
        case 'location.longitude':
            return faker.location.longitude;
        case 'location.ordinalDirection':
            return faker.location.ordinalDirection;
        case 'location.secondaryAddress':
            return faker.location.secondaryAddress;
        case 'location.state':
            return faker.location.state;
        case 'location.street':
            return faker.location.street;
        case 'location.streetAddress':
            return faker.location.streetAddress;
        case 'location.timeZone':
            return faker.location.timeZone;
        case 'location.zipCode':
            return faker.location.zipCode;
        case 'lorem.lines':
            return faker.lorem.lines;
        case 'lorem.paragraph':
            return faker.lorem.paragraph;
        case 'lorem.paragraphs':
            return faker.lorem.paragraphs;
        case 'lorem.sentence':
            return faker.lorem.sentence;
        case 'lorem.sentences':
            return faker.lorem.sentences;
        case 'lorem.slug':
            return faker.lorem.slug;
        case 'lorem.text':
            return faker.lorem.text;
        case 'lorem.word':
            return faker.lorem.word;
        case 'lorem.words':
            return faker.lorem.words;
        case 'music.album':
            return faker.music.album;
        case 'music.artist':
            return faker.music.artist;
        case 'music.genre':
            return faker.music.genre;
        case 'music.songName':
            return faker.music.songName;
        case 'number.bigInt':
            return faker.number.bigInt;
        case 'number.binary':
            return faker.number.binary;
        case 'number.float':
            return faker.number.float;
        case 'number.hex':
            return faker.number.hex;
        case 'number.int':
            return faker.number.int;
        case 'number.octal':
            return faker.number.octal;
        case 'number.romanNumeral':
            return faker.number.romanNumeral;
        case 'person.bio':
            return faker.person.bio;
        case 'person.firstName':
            return faker.person.firstName;
        case 'person.fullName':
            return faker.person.fullName;
        case 'person.gender':
            return faker.person.gender;
        case 'person.jobArea':
            return faker.person.jobArea;
        case 'person.jobDescriptor':
            return faker.person.jobDescriptor;
        case 'person.jobTitle':
            return faker.person.jobTitle;
        case 'person.jobType':
            return faker.person.jobType;
        case 'person.lastName':
            return faker.person.lastName;
        case 'person.middleName':
            return faker.person.middleName;
        case 'person.prefix':
            return faker.person.prefix;
        case 'person.sex':
            return faker.person.sex;
        case 'person.sexType':
            return faker.person.sexType;
        case 'person.suffix':
            return faker.person.suffix;
        case 'person.zodiacSign':
            return faker.person.zodiacSign;
        case 'phone.imei':
            return faker.phone.imei;
        case 'phone.number':
            return faker.phone.number;
        case 'string.alpha':
            return faker.string.alpha;
        case 'string.alphanumeric':
            return faker.string.alphanumeric;
        case 'string.binary':
            return faker.string.binary;
        case 'string.hexadecimal':
            return faker.string.hexadecimal;
        case 'string.nanoid':
            return faker.string.nanoid;
        case 'string.numeric':
            return faker.string.numeric;
        case 'string.octal':
            return faker.string.octal;
        case 'string.sample':
            return faker.string.sample;
        case 'string.symbol':
            return faker.string.symbol;
        case 'string.ulid':
            return faker.string.ulid;
        case 'string.uuid':
            return faker.string.uuid;
        case 'system.commonFileExt':
            return faker.system.commonFileExt;
        case 'system.commonFileName':
            return faker.system.commonFileName;
        case 'system.commonFileType':
            return faker.system.commonFileType;
        case 'system.cron':
            return faker.system.cron;
        case 'system.directoryPath':
            return faker.system.directoryPath;
        case 'system.fileExt':
            return faker.system.fileExt;
        case 'system.fileName':
            return faker.system.fileName;
        case 'system.filePath':
            return faker.system.filePath;
        case 'system.fileType':
            return faker.system.fileType;
        case 'system.mimeType':
            return faker.system.mimeType;
        case 'system.networkInterface':
            return faker.system.networkInterface;
        case 'system.semver':
            return faker.system.semver;
        case 'vehicle.bicycle':
            return faker.vehicle.bicycle;
        case 'vehicle.color':
            return faker.vehicle.color;
        case 'vehicle.fuel':
            return faker.vehicle.fuel;
        case 'vehicle.manufacturer':
            return faker.vehicle.manufacturer;
        case 'vehicle.model':
            return faker.vehicle.model;
        case 'vehicle.type':
            return faker.vehicle.type;
        case 'vehicle.vehicle':
            return faker.vehicle.vehicle;
        case 'vehicle.vin':
            return faker.vehicle.vin;
        case 'vehicle.vrm':
            return faker.vehicle.vrm;
        case 'word.adjective':
            return faker.word.adjective;
        case 'word.adverb':
            return faker.word.adverb;
        case 'word.conjunction':
            return faker.word.conjunction;
        case 'word.interjection':
            return faker.word.interjection;
        case 'word.noun':
            return faker.word.noun;
        case 'word.preposition':
            return faker.word.preposition;
        case 'word.sample':
            return faker.word.sample;
        case 'word.verb':
            return faker.word.verb;
        case 'word.words':
            return faker.word.words;
        default:
            break;
    }

    switch (atom as IApiDateKey) {
        case 'date.anytime':
            return faker.date.anytime;
        case 'date.birthdate':
            return faker.date.birthdate;
        case 'date.future':
            return faker.date.future;
        case 'date.past':
            return faker.date.past;
        case 'date.recent':
            return faker.date.recent;
        case 'date.soon':
            return faker.date.soon;
        default:
            break;
    }

    switch (atom as IApiArrayKey) {
        case 'location.nearbyGPSCoordinate':
            return faker.location.nearbyGPSCoordinate;
        default:
            break;
    }

    switch (atom as IApiStructureKey) {
        case 'airline.airline':
            return faker.airline.airline;
        case 'airline.airplane':
            return faker.airline.airplane;
        case 'airline.airport':
            return faker.airline.airport;
        case 'finance.currency':
            return faker.finance.currency;
        case 'location.language':
            return faker.location.language;
        case 'science.chemicalElement':
            return faker.science.chemicalElement;
        case 'science.unit':
            return faker.science.unit;
        default:
            break;
    }

    switch (atom as IApiMethodKey) {
        case 'date.between': {
            const res = faker.date.between({
                from: '2000-01-01T00:00:00.000Z',
                to: '2030-01-01T00:00:00.000Z'
            });
            return () => res;
        }
        case 'date.betweens': {
            const res = faker.date.betweens({
                from: '2000-01-01T00:00:00.000Z',
                to: '2030-01-01T00:00:00.000Z'
            });
            return () => res;
        }
        case 'helpers.arrayElement': {
            const res = faker.helpers.arrayElement(['cat', 'dog', 'mouse']);
            return () => res;
        }
        case 'helpers.arrayElements': {
            const res = faker.helpers.arrayElements([1, 2, 3, 4, 5], {
                min: 2,
                max: 4
            });
            return () => res;
        }
        case 'helpers.enumValue': {
            const res = faker.helpers.enumValue({
                Up: 'Up',
                Down: 'Down',
                Left: 'Left',
                Right: 'Right'
            });
            return () => res;
        }
        case 'helpers.fake': {
            const res = faker.helpers.fake(
                '{{person.lastName}}, {{person.firstName}} {{person.suffix}}'
            );
            return () => res;
        }
        case 'helpers.fromRegExp': {
            const res = faker.helpers.fromRegExp(/[A-Z0-9]{4}-[A-Z0-9]{4}/);
            return () => res;
        }
        case 'helpers.maybe': {
            const res = faker.helpers.maybe(() => '50% chance', {
                probability: 0.5
            });
            return (() => res) as IFakerFn;
        }
        case 'helpers.multiple': {
            const res = faker.helpers.multiple(
                (_, index) => `#${index + 1}) ${faker.number.int()}`,
                {
                    count: { min: 2, max: 3 }
                }
            );
            return () => res;
        }
        case 'helpers.mustache': {
            const res = faker.helpers.mustache('Random number is {{count}}', {
                count: () => faker.number.int().toString()
            });
            return () => res;
        }
        case 'helpers.objectEntry': {
            const res = faker.helpers.objectEntry({
                One: 1,
                Two: 2,
                Three: 3,
                Nine: 9
            });
            return () => res;
        }
        case 'helpers.objectKey': {
            const res = faker.helpers.objectKey({
                One: 1,
                Two: 2,
                Three: 3,
                Nine: 9
            });
            return () => res;
        }
        case 'helpers.objectValue': {
            const res = faker.helpers.objectValue({
                One: 1,
                Two: 2,
                Three: 3,
                Nine: 9
            });
            return () => res;
        }
        case 'helpers.rangeToNumber': {
            const res = faker.helpers.rangeToNumber({
                min: 1,
                max: 10
            });
            return () => res;
        }
        case 'helpers.shuffle': {
            const res = faker.helpers.shuffle(['a', 'b', 'c'], {
                inplace: false
            });
            return () => res;
        }
        case 'helpers.uniqueArray': {
            const res = faker.helpers.uniqueArray(faker.word.sample, 3);
            return () => res;
        }
        case 'helpers.weightedArrayElement': {
            const res = faker.helpers.weightedArrayElement([
                { weight: 5, value: 'sunny' },
                { weight: 4, value: 'rainy' },
                { weight: 1, value: 'snowy' }
            ]);
            return () => res;
        }
        case 'string.fromCharacters': {
            const res = faker.string.fromCharacters('abc', {
                min: 5,
                max: 10
            });
            return () => res;
        }
        default:
            break;
    }

    return undefined;
}
