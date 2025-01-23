import { Faker } from '@faker-js/faker';
import type {
    IFakerArrayAtom,
    IFakerArrayFunction,
    IFakerAtom,
    IFakerBoundAtom,
    IFakerBoundFunction,
    IFakerDateAtom,
    IFakerDateFunction,
    IFakerFunction,
    IFakerLocale,
    IFakerPrimitiveAtom,
    IFakerPrimitiveFunction,
    IFakerStructureAtom,
    IFakerStructureFunction,
} from '../types/faker';

enum Direction {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

export async function getFakerInstance(locale: IFakerLocale) {
    // prettier-ignore
    switch (locale) {
        case 'af_ZA': return (await import('@faker-js/faker/locale/af_ZA')).faker;
        case 'ar': return (await import('@faker-js/faker/locale/ar')).faker;
        case 'az': return (await import('@faker-js/faker/locale/az')).faker;
        case 'base': return (await import('@faker-js/faker/locale/base')).faker;
        case 'cs_CZ': return (await import('@faker-js/faker/locale/cs_CZ')).faker;
        case 'da': return (await import('@faker-js/faker/locale/da')).faker;
        case 'de_AT': return (await import('@faker-js/faker/locale/de_AT')).faker;
        case 'de_CH': return (await import('@faker-js/faker/locale/de_CH')).faker;
        case 'de': return (await import('@faker-js/faker/locale/de')).faker;
        case 'dv': return (await import('@faker-js/faker/locale/dv')).faker;
        case 'el': return (await import('@faker-js/faker/locale/el')).faker;
        case 'en_AU_ocker': return (await import('@faker-js/faker/locale/en_AU_ocker')).faker;
        case 'en_AU': return (await import('@faker-js/faker/locale/en_AU')).faker;
        case 'en_BORK': return (await import('@faker-js/faker/locale/en_BORK')).faker;
        case 'en_CA': return (await import('@faker-js/faker/locale/en_CA')).faker;
        case 'en_GB': return (await import('@faker-js/faker/locale/en_GB')).faker;
        case 'en_GH': return (await import('@faker-js/faker/locale/en_GH')).faker;
        case 'en_HK': return (await import('@faker-js/faker/locale/en_HK')).faker;
        case 'en_IE': return (await import('@faker-js/faker/locale/en_IE')).faker;
        case 'en_IN': return (await import('@faker-js/faker/locale/en_IN')).faker;
        case 'en_NG': return (await import('@faker-js/faker/locale/en_NG')).faker;
        case 'en_US': return (await import('@faker-js/faker/locale/en_US')).faker;
        case 'en_ZA': return (await import('@faker-js/faker/locale/en_ZA')).faker;
        case 'en': return (await import('@faker-js/faker/locale/en')).faker;
        case 'eo': return (await import('@faker-js/faker/locale/eo')).faker;
        case 'es_MX': return (await import('@faker-js/faker/locale/es_MX')).faker;
        case 'es': return (await import('@faker-js/faker/locale/es')).faker;
        case 'fa': return (await import('@faker-js/faker/locale/fa')).faker;
        case 'fi': return (await import('@faker-js/faker/locale/fi')).faker;
        case 'fr_BE': return (await import('@faker-js/faker/locale/fr_BE')).faker;
        case 'fr_CA': return (await import('@faker-js/faker/locale/fr_CA')).faker;
        case 'fr_CH': return (await import('@faker-js/faker/locale/fr_CH')).faker;
        case 'fr_LU': return (await import('@faker-js/faker/locale/fr_LU')).faker;
        case 'fr_SN': return (await import('@faker-js/faker/locale/fr_SN')).faker;
        case 'fr': return (await import('@faker-js/faker/locale/fr')).faker;
        case 'he': return (await import('@faker-js/faker/locale/he')).faker;
        case 'hr': return (await import('@faker-js/faker/locale/hr')).faker;
        case 'hu': return (await import('@faker-js/faker/locale/hu')).faker;
        case 'hy': return (await import('@faker-js/faker/locale/hy')).faker;
        case 'id_ID': return (await import('@faker-js/faker/locale/id_ID')).faker;
        case 'it': return (await import('@faker-js/faker/locale/it')).faker;
        case 'ja': return (await import('@faker-js/faker/locale/ja')).faker;
        case 'ka_GE': return (await import('@faker-js/faker/locale/ka_GE')).faker;
        case 'ko': return (await import('@faker-js/faker/locale/ko')).faker;
        case 'lv': return (await import('@faker-js/faker/locale/lv')).faker;
        case 'mk': return (await import('@faker-js/faker/locale/mk')).faker;
        case 'nb_NO': return (await import('@faker-js/faker/locale/nb_NO')).faker;
        case 'ne': return (await import('@faker-js/faker/locale/ne')).faker;
        case 'nl_BE': return (await import('@faker-js/faker/locale/nl_BE')).faker;
        case 'nl': return (await import('@faker-js/faker/locale/nl')).faker;
        case 'pl': return (await import('@faker-js/faker/locale/pl')).faker;
        case 'pt_BR': return (await import('@faker-js/faker/locale/pt_BR')).faker;
        case 'pt_PT': return (await import('@faker-js/faker/locale/pt_PT')).faker;
        case 'ro_MD': return (await import('@faker-js/faker/locale/ro_MD')).faker;
        case 'ro': return (await import('@faker-js/faker/locale/ro')).faker;
        case 'ru': return (await import('@faker-js/faker/locale/ru')).faker;
        case 'sk': return (await import('@faker-js/faker/locale/sk')).faker;
        case 'sr_RS_latin': return (await import('@faker-js/faker/locale/sr_RS_latin')).faker;
        case 'sv': return (await import('@faker-js/faker/locale/sv')).faker;
        case 'th': return (await import('@faker-js/faker/locale/th')).faker;
        case 'tr': return (await import('@faker-js/faker/locale/tr')).faker;
        case 'uk': return (await import('@faker-js/faker/locale/uk')).faker;
        case 'ur': return (await import('@faker-js/faker/locale/ur')).faker;
        case 'uz_UZ_latin': return (await import('@faker-js/faker/locale/uz_UZ_latin')).faker;
        case 'vi': return (await import('@faker-js/faker/locale/vi')).faker;
        case 'yo_NG': return (await import('@faker-js/faker/locale/yo_NG')).faker;
        case 'zh_CN': return (await import('@faker-js/faker/locale/zh_CN')).faker;
        case 'zh_TW': return (await import('@faker-js/faker/locale/zh_TW')).faker;
        case 'zu_ZA': return (await import('@faker-js/faker/locale/zu_ZA')).faker;
        default: return (await import('@faker-js/faker')).faker;
    }
}

export function getFakerFunction(
    faker: Faker,
    atom: IFakerAtom
): IFakerFunction | (() => undefined) {
    return (
        getFakerPrimitiveFunction(faker, atom as IFakerPrimitiveAtom) ??
        getFakerDateFunction(faker, atom as IFakerDateAtom) ??
        getFakerArrayFunction(faker, atom as IFakerArrayAtom) ??
        getFakerStructureFunction(faker, atom as IFakerStructureAtom) ??
        getFakerBoundFunction(faker, atom as IFakerBoundAtom) ??
        (() => undefined)
    );
}

export function getFakerPrimitiveFunction(
    faker: Faker,
    atom: IFakerPrimitiveAtom
): IFakerPrimitiveFunction {
    // prettier-ignore
    switch (atom) {
        case 'airline.aircraftType': return faker.airline.aircraftType;
        case 'airline.flightNumber': return faker.airline.flightNumber;
        case 'airline.recordLocator': return faker.airline.recordLocator;
        case 'airline.seat': return faker.airline.seat;
        case 'animal.bear': return faker.animal.bear;
        case 'animal.bird': return faker.animal.bird;
        case 'animal.cat': return faker.animal.cat;
        case 'animal.cetacean': return faker.animal.cetacean;
        case 'animal.cow': return faker.animal.cow;
        case 'animal.crocodilia': return faker.animal.crocodilia;
        case 'animal.dog': return faker.animal.dog;
        case 'animal.fish': return faker.animal.fish;
        case 'animal.horse': return faker.animal.horse;
        case 'animal.insect': return faker.animal.insect;
        case 'animal.lion': return faker.animal.lion;
        case 'animal.petName': return faker.animal.petName;
        case 'animal.rabbit': return faker.animal.rabbit;
        case 'animal.rodent': return faker.animal.rodent;
        case 'animal.snake': return faker.animal.snake;
        case 'animal.type': return faker.animal.type;
        case 'book.author': return faker.book.author;
        case 'book.format': return faker.book.format;
        case 'book.genre': return faker.book.genre;
        case 'book.publisher': return faker.book.publisher;
        case 'book.series': return faker.book.series;
        case 'book.title': return faker.book.title;
        case 'color.cmyk': return faker.color.cmyk;
        case 'color.colorByCSSColorSpace': return faker.color.colorByCSSColorSpace;
        case 'color.cssSupportedFunction': return faker.color.cssSupportedFunction;
        case 'color.cssSupportedSpace': return faker.color.cssSupportedSpace;
        case 'color.hsl': return faker.color.hsl;
        case 'color.human': return faker.color.human;
        case 'color.hwb': return faker.color.hwb;
        case 'color.lab': return faker.color.lab;
        case 'color.lch': return faker.color.lch;
        case 'color.rgb': return faker.color.rgb;
        case 'color.space': return faker.color.space;
        case 'commerce.department': return faker.commerce.department;
        case 'commerce.isbn': return faker.commerce.isbn;
        case 'commerce.price': return faker.commerce.price;
        case 'commerce.product': return faker.commerce.product;
        case 'commerce.productAdjective': return faker.commerce.productAdjective;
        case 'commerce.productDescription': return faker.commerce.productDescription;
        case 'commerce.productMaterial': return faker.commerce.productMaterial;
        case 'commerce.productName': return faker.commerce.productName;
        case 'company.buzzAdjective': return faker.company.buzzAdjective;
        case 'company.buzzNoun': return faker.company.buzzNoun;
        case 'company.buzzPhrase': return faker.company.buzzPhrase;
        case 'company.buzzVerb': return faker.company.buzzVerb;
        case 'company.catchPhrase': return faker.company.catchPhrase;
        case 'company.catchPhraseAdjective': return faker.company.catchPhraseAdjective;
        case 'company.catchPhraseDescriptor': return faker.company.catchPhraseDescriptor;
        case 'company.catchPhraseNoun': return faker.company.catchPhraseNoun;
        case 'company.name': return faker.company.name;
        case 'database.collation': return faker.database.collation;
        case 'database.column': return faker.database.column;
        case 'database.engine': return faker.database.engine;
        case 'database.mongodbObjectId': return faker.database.mongodbObjectId;
        case 'database.type': return faker.database.type;
        case 'datatype.boolean': return faker.datatype.boolean;
        case 'date.month': return faker.date.month;
        case 'date.timeZone': return faker.date.timeZone;
        case 'date.weekday': return faker.date.weekday;
        case 'finance.accountName': return faker.finance.accountName;
        case 'finance.accountNumber': return faker.finance.accountNumber;
        case 'finance.amount': return faker.finance.amount;
        case 'finance.bic': return faker.finance.bic;
        case 'finance.bitcoinAddress': return faker.finance.bitcoinAddress;
        case 'finance.creditCardCVV': return faker.finance.creditCardCVV;
        case 'finance.creditCardIssuer': return faker.finance.creditCardIssuer;
        case 'finance.creditCardNumber': return faker.finance.creditCardNumber;
        case 'finance.currencyCode': return faker.finance.currencyCode;
        case 'finance.currencyName': return faker.finance.currencyName;
        case 'finance.currencySymbol': return faker.finance.currencySymbol;
        case 'finance.ethereumAddress': return faker.finance.ethereumAddress;
        case 'finance.iban': return faker.finance.iban;
        case 'finance.litecoinAddress': return faker.finance.litecoinAddress;
        case 'finance.maskedNumber': return faker.finance.maskedNumber;
        case 'finance.pin': return faker.finance.pin;
        case 'finance.routingNumber': return faker.finance.routingNumber;
        case 'finance.transactionDescription': return faker.finance.transactionDescription;
        case 'finance.transactionType': return faker.finance.transactionType;
        case 'food.adjective': return faker.food.adjective;
        case 'food.description': return faker.food.description;
        case 'food.dish': return faker.food.dish;
        case 'food.ethnicCategory': return faker.food.ethnicCategory;
        case 'food.fruit': return faker.food.fruit;
        case 'food.ingredient': return faker.food.ingredient;
        case 'food.meat': return faker.food.meat;
        case 'food.spice': return faker.food.spice;
        case 'food.vegetable': return faker.food.vegetable;
        case 'git.branch': return faker.git.branch;
        case 'git.commitDate': return faker.git.commitDate;
        case 'git.commitEntry': return faker.git.commitEntry;
        case 'git.commitMessage': return faker.git.commitMessage;
        case 'git.commitSha': return faker.git.commitSha;
        case 'hacker.abbreviation': return faker.hacker.abbreviation;
        case 'hacker.adjective': return faker.hacker.adjective;
        case 'hacker.ingverb': return faker.hacker.ingverb;
        case 'hacker.noun': return faker.hacker.noun;
        case 'hacker.phrase': return faker.hacker.phrase;
        case 'hacker.verb': return faker.hacker.verb;
        case 'helpers.replaceCreditCardSymbols': return faker.helpers.replaceCreditCardSymbols;
        case 'helpers.replaceSymbols': return faker.helpers.replaceSymbols;
        case 'helpers.slugify': return faker.helpers.slugify;
        case 'image.avatar': return faker.image.avatar;
        case 'image.avatarGitHub': return faker.image.avatarGitHub;
        case 'image.avatarLegacy': return faker.image.avatarLegacy;
        case 'image.dataUri': return faker.image.dataUri;
        case 'image.url': return faker.image.url;
        case 'image.urlLoremFlickr': return faker.image.urlLoremFlickr;
        case 'image.urlPicsumPhotos': return faker.image.urlPicsumPhotos;
        case 'image.urlPlaceholder': return faker.image.urlPlaceholder;
        case 'internet.color': return faker.internet.color;
        case 'internet.displayName': return faker.internet.displayName;
        case 'internet.domainName': return faker.internet.domainName;
        case 'internet.domainSuffix': return faker.internet.domainSuffix;
        case 'internet.domainWord': return faker.internet.domainWord;
        case 'internet.email': return faker.internet.email;
        case 'internet.emoji': return faker.internet.emoji;
        case 'internet.exampleEmail': return faker.internet.exampleEmail;
        case 'internet.httpMethod': return faker.internet.httpMethod;
        case 'internet.httpStatusCode': return faker.internet.httpStatusCode;
        case 'internet.ip': return faker.internet.ip;
        case 'internet.ipv4': return faker.internet.ipv4;
        case 'internet.ipv6': return faker.internet.ipv6;
        case 'internet.jwt': return faker.internet.jwt;
        case 'internet.jwtAlgorithm': return faker.internet.jwtAlgorithm;
        case 'internet.mac': return faker.internet.mac;
        case 'internet.password': return faker.internet.password;
        case 'internet.port': return faker.internet.port;
        case 'internet.protocol': return faker.internet.protocol;
        case 'internet.url': return faker.internet.url;
        case 'internet.userAgent': return faker.internet.userAgent;
        case 'internet.username': return faker.internet.username;
        case 'internet.userName': return faker.internet.userName;
        case 'location.buildingNumber': return faker.location.buildingNumber;
        case 'location.cardinalDirection': return faker.location.cardinalDirection;
        case 'location.city': return faker.location.city;
        case 'location.continent': return faker.location.continent;
        case 'location.country': return faker.location.country;
        case 'location.countryCode': return faker.location.countryCode;
        case 'location.county': return faker.location.county;
        case 'location.direction': return faker.location.direction;
        case 'location.latitude': return faker.location.latitude;
        case 'location.longitude': return faker.location.longitude;
        case 'location.ordinalDirection': return faker.location.ordinalDirection;
        case 'location.secondaryAddress': return faker.location.secondaryAddress;
        case 'location.state': return faker.location.state;
        case 'location.street': return faker.location.street;
        case 'location.streetAddress': return faker.location.streetAddress;
        case 'location.timeZone': return faker.location.timeZone;
        case 'location.zipCode': return faker.location.zipCode;
        case 'lorem.lines': return faker.lorem.lines;
        case 'lorem.paragraph': return faker.lorem.paragraph;
        case 'lorem.paragraphs': return faker.lorem.paragraphs;
        case 'lorem.sentence': return faker.lorem.sentence;
        case 'lorem.sentences': return faker.lorem.sentences;
        case 'lorem.slug': return faker.lorem.slug;
        case 'lorem.text': return faker.lorem.text;
        case 'lorem.word': return faker.lorem.word;
        case 'lorem.words': return faker.lorem.words;
        case 'music.album': return faker.music.album;
        case 'music.artist': return faker.music.artist;
        case 'music.genre': return faker.music.genre;
        case 'music.songName': return faker.music.songName;
        case 'number.bigInt': return faker.number.bigInt;
        case 'number.binary': return faker.number.binary;
        case 'number.float': return faker.number.float;
        case 'number.hex': return faker.number.hex;
        case 'number.int': return faker.number.int;
        case 'number.octal': return faker.number.octal;
        case 'number.romanNumeral': return faker.number.romanNumeral;
        case 'person.bio': return faker.person.bio;
        case 'person.firstName': return faker.person.firstName;
        case 'person.fullName': return faker.person.fullName;
        case 'person.gender': return faker.person.gender;
        case 'person.jobArea': return faker.person.jobArea;
        case 'person.jobDescriptor': return faker.person.jobDescriptor;
        case 'person.jobTitle': return faker.person.jobTitle;
        case 'person.jobType': return faker.person.jobType;
        case 'person.lastName': return faker.person.lastName;
        case 'person.middleName': return faker.person.middleName;
        case 'person.prefix': return faker.person.prefix;
        case 'person.sex': return faker.person.sex;
        case 'person.sexType': return faker.person.sexType;
        case 'person.suffix': return faker.person.suffix;
        case 'person.zodiacSign': return faker.person.zodiacSign;
        case 'phone.imei': return faker.phone.imei;
        case 'phone.number': return faker.phone.number;
        case 'string.alpha': return faker.string.alpha;
        case 'string.alphanumeric': return faker.string.alphanumeric;
        case 'string.binary': return faker.string.binary;
        case 'string.hexadecimal': return faker.string.hexadecimal;
        case 'string.nanoid': return faker.string.nanoid;
        case 'string.numeric': return faker.string.numeric;
        case 'string.octal': return faker.string.octal;
        case 'string.sample': return faker.string.sample;
        case 'string.symbol': return faker.string.symbol;
        case 'string.ulid': return faker.string.ulid;
        case 'string.uuid': return faker.string.uuid;
        case 'system.commonFileExt': return faker.system.commonFileExt;
        case 'system.commonFileName': return faker.system.commonFileName;
        case 'system.commonFileType': return faker.system.commonFileType;
        case 'system.cron': return faker.system.cron;
        case 'system.directoryPath': return faker.system.directoryPath;
        case 'system.fileExt': return faker.system.fileExt;
        case 'system.fileName': return faker.system.fileName;
        case 'system.filePath': return faker.system.filePath;
        case 'system.fileType': return faker.system.fileType;
        case 'system.mimeType': return faker.system.mimeType;
        case 'system.networkInterface': return faker.system.networkInterface;
        case 'system.semver': return faker.system.semver;
        case 'vehicle.bicycle': return faker.vehicle.bicycle;
        case 'vehicle.color': return faker.vehicle.color;
        case 'vehicle.fuel': return faker.vehicle.fuel;
        case 'vehicle.manufacturer': return faker.vehicle.manufacturer;
        case 'vehicle.model': return faker.vehicle.model;
        case 'vehicle.type': return faker.vehicle.type;
        case 'vehicle.vehicle': return faker.vehicle.vehicle;
        case 'vehicle.vin': return faker.vehicle.vin;
        case 'vehicle.vrm': return faker.vehicle.vrm;
        case 'word.adjective': return faker.word.adjective;
        case 'word.adverb': return faker.word.adverb;
        case 'word.conjunction': return faker.word.conjunction;
        case 'word.interjection': return faker.word.interjection;
        case 'word.noun': return faker.word.noun;
        case 'word.preposition': return faker.word.preposition;
        case 'word.sample': return faker.word.sample;
        case 'word.verb': return faker.word.verb;
        case 'word.words': return faker.word.words;
    }
}

export function getFakerDateFunction(faker: Faker, atom: IFakerDateAtom): IFakerDateFunction {
    // prettier-ignore
    switch (atom) {
        case 'date.anytime': return faker.date.anytime;
        case 'date.birthdate': return faker.date.birthdate;
        case 'date.future': return faker.date.future;
        case 'date.past': return faker.date.past;
        case 'date.recent': return faker.date.recent;
        case 'date.soon': return faker.date.soon;
    }
}

export function getFakerArrayFunction(faker: Faker, atom: IFakerArrayAtom): IFakerArrayFunction {
    // prettier-ignore
    switch (atom) {
        case 'location.nearbyGPSCoordinate': return faker.location.nearbyGPSCoordinate;
    }
}

export function getFakerStructureFunction(
    faker: Faker,
    atom: IFakerStructureAtom
): IFakerStructureFunction {
    // prettier-ignore
    switch (atom) {
        case 'airline.airline': return faker.airline.airline;
        case 'airline.airplane': return faker.airline.airplane;
        case 'airline.airport': return faker.airline.airport;
        case 'finance.currency': return faker.finance.currency;
        case 'location.language': return faker.location.language;
        case 'science.chemicalElement': return faker.science.chemicalElement;
        case 'science.unit': return faker.science.unit;
    }
}

export function getFakerBoundFunction(faker: Faker, atom: IFakerBoundAtom): IFakerBoundFunction {
    switch (atom) {
        case 'date.between': {
            return faker.date.between.bind(undefined, {
                from: '2000-01-01T00:00:00.000Z',
                to: '2030-01-01T00:00:00.000Z',
            });
        }
        case 'date.betweens': {
            return faker.date.betweens.bind(undefined, {
                from: '2000-01-01T00:00:00.000Z',
                to: '2030-01-01T00:00:00.000Z',
            });
        }
        case 'helpers.arrayElement': {
            const method = faker.helpers.arrayElement<string>;
            return method.bind(undefined, ['cat', 'dog', 'mouse']);
        }
        case 'helpers.arrayElements': {
            return faker.helpers.arrayElements.bind(undefined, [1, 2, 3, 4, 5], { min: 2, max: 4 });
        }
        case 'helpers.enumValue': {
            const method = faker.helpers.enumValue<typeof Direction>;
            return method.bind(undefined, Direction);
        }
        case 'helpers.fake': {
            return faker.helpers.fake.bind(
                undefined,
                '{{person.lastName}}, {{person.firstName}} {{person.suffix}}'
            );
        }
        case 'helpers.fromRegExp': {
            return faker.helpers.fromRegExp.bind(undefined, /[A-Z0-9]{4}-[A-Z0-9]{4}/);
        }
        case 'helpers.maybe': {
            // can't resolve with `string` (to bypass use `any`)
            const method = faker.helpers.maybe<any>;
            return method.bind(undefined, () => '50% chance, or undefined', {
                probability: 0.5,
            });
        }
        case 'helpers.multiple': {
            const method = faker.helpers.multiple<string>;
            return method.bind(undefined, (_, index) => `#${index + 1}) ${faker.number.int()}`, {
                count: { min: 2, max: 3 },
            });
        }
        case 'helpers.mustache': {
            return faker.helpers.mustache.bind(undefined, 'Random number is {{count}}', {
                count: () => `${faker.number.int()}`,
            });
        }
        case 'helpers.objectEntry': {
            return faker.helpers.objectEntry.bind(undefined, { One: 1, Two: 2, Three: 3, Nine: 9 });
        }
        case 'helpers.objectKey': {
            return faker.helpers.objectKey.bind(undefined, { One: 1, Two: 2, Three: 3, Nine: 9 });
        }
        case 'helpers.objectValue': {
            const method = faker.helpers.objectValue<{ [key: string]: number }>;
            return method.bind(undefined, { One: 1, Two: 2, Three: 3, Nine: 9 });
        }
        case 'helpers.rangeToNumber': {
            return faker.helpers.rangeToNumber.bind(undefined, { min: 1, max: 10 });
        }
        case 'helpers.shuffle': {
            return faker.helpers.shuffle.bind(undefined, ['a', 'b', 'c'], { inplace: false });
        }
        case 'helpers.uniqueArray': {
            return faker.helpers.uniqueArray.bind(undefined, faker.word.sample, 3);
        }
        case 'helpers.weightedArrayElement': {
            const method = faker.helpers.weightedArrayElement<string>;
            return method.bind(undefined, [
                { weight: 5, value: 'sunny' },
                { weight: 4, value: 'rainy' },
                { weight: 1, value: 'snowy' },
            ]);
        }
        case 'string.fromCharacters': {
            return faker.string.fromCharacters.bind(undefined, 'abc', { min: 5, max: 10 });
        }
    }
}
