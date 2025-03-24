import { Faker } from '@faker-js/faker';
import type {
    IFakerArrayAtom,
    IFakerAtom,
    IFakerBoundAtom,
    IFakerDateAtom,
    IFakerFunction,
    IFakerLocale,
    IFakerPrimitiveAtom,
    IFakerStructureAtom,
} from './types/faker';

enum Direction {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
}

/**
 * Note: With dynamic imports we get around 150 files after code splitting.
 */
export async function createFaker(atom: IFakerLocale): Promise<Faker> {
    let _module;

    // prettier-ignore
    switch (atom) {
        case 'af_ZA': _module = await import("@faker-js/faker/locale/af_ZA"); break;
        case 'ar': _module = await import("@faker-js/faker/locale/ar"); break;
        case 'az': _module = await import("@faker-js/faker/locale/az"); break;
        case 'base': _module = await import("@faker-js/faker/locale/base"); break;
        case 'cs_CZ': _module = await import("@faker-js/faker/locale/cs_CZ"); break;
        case 'da': _module = await import("@faker-js/faker/locale/da"); break;
        case 'de_AT': _module = await import("@faker-js/faker/locale/de_AT"); break;
        case 'de_CH': _module = await import("@faker-js/faker/locale/de_CH"); break;
        case 'de': _module = await import("@faker-js/faker/locale/de"); break;
        case 'dv': _module = await import("@faker-js/faker/locale/dv"); break;
        case 'el': _module = await import("@faker-js/faker/locale/el"); break;
        case 'en_AU_ocker': _module = await import("@faker-js/faker/locale/en_AU_ocker"); break;
        case 'en_AU': _module = await import("@faker-js/faker/locale/en_AU"); break;
        case 'en_BORK': _module = await import("@faker-js/faker/locale/en_BORK"); break;
        case 'en_CA': _module = await import("@faker-js/faker/locale/en_CA"); break;
        case 'en_GB': _module = await import("@faker-js/faker/locale/en_GB"); break;
        case 'en_GH': _module = await import("@faker-js/faker/locale/en_GH"); break;
        case 'en_HK': _module = await import("@faker-js/faker/locale/en_HK"); break;
        case 'en_IE': _module = await import("@faker-js/faker/locale/en_IE"); break;
        case 'en_IN': _module = await import("@faker-js/faker/locale/en_IN"); break;
        case 'en_NG': _module = await import("@faker-js/faker/locale/en_NG"); break;
        case 'en_US': _module = await import("@faker-js/faker/locale/en_US"); break;
        case 'en_ZA': _module = await import("@faker-js/faker/locale/en_ZA"); break;
        case 'en': _module = await import("@faker-js/faker/locale/en"); break;
        case 'eo': _module = await import("@faker-js/faker/locale/eo"); break;
        case 'es_MX': _module = await import("@faker-js/faker/locale/es_MX"); break;
        case 'es': _module = await import("@faker-js/faker/locale/es"); break;
        case 'fa': _module = await import("@faker-js/faker/locale/fa"); break;
        case 'fi': _module = await import("@faker-js/faker/locale/fi"); break;
        case 'fr_BE': _module = await import("@faker-js/faker/locale/fr_BE"); break;
        case 'fr_CA': _module = await import("@faker-js/faker/locale/fr_CA"); break;
        case 'fr_CH': _module = await import("@faker-js/faker/locale/fr_CH"); break;
        case 'fr_LU': _module = await import("@faker-js/faker/locale/fr_LU"); break;
        case 'fr_SN': _module = await import("@faker-js/faker/locale/fr_SN"); break;
        case 'fr': _module = await import("@faker-js/faker/locale/fr"); break;
        case 'he': _module = await import("@faker-js/faker/locale/he"); break;
        case 'hr': _module = await import("@faker-js/faker/locale/hr"); break;
        case 'hu': _module = await import("@faker-js/faker/locale/hu"); break;
        case 'hy': _module = await import("@faker-js/faker/locale/hy"); break;
        case 'id_ID': _module = await import("@faker-js/faker/locale/id_ID"); break;
        case 'it': _module = await import("@faker-js/faker/locale/it"); break;
        case 'ja': _module = await import("@faker-js/faker/locale/ja"); break;
        case 'ka_GE': _module = await import("@faker-js/faker/locale/ka_GE"); break;
        case 'ko': _module = await import("@faker-js/faker/locale/ko"); break;
        case 'lv': _module = await import("@faker-js/faker/locale/lv"); break;
        case 'mk': _module = await import("@faker-js/faker/locale/mk"); break;
        case 'nb_NO': _module = await import("@faker-js/faker/locale/nb_NO"); break;
        case 'ne': _module = await import("@faker-js/faker/locale/ne"); break;
        case 'nl_BE': _module = await import("@faker-js/faker/locale/nl_BE"); break;
        case 'nl': _module = await import("@faker-js/faker/locale/nl"); break;
        case 'pl': _module = await import("@faker-js/faker/locale/pl"); break;
        case 'pt_BR': _module = await import("@faker-js/faker/locale/pt_BR"); break;
        case 'pt_PT': _module = await import("@faker-js/faker/locale/pt_PT"); break;
        case 'ro_MD': _module = await import("@faker-js/faker/locale/ro_MD"); break;
        case 'ro': _module = await import("@faker-js/faker/locale/ro"); break;
        case 'ru': _module = await import("@faker-js/faker/locale/ru"); break;
        case 'sk': _module = await import("@faker-js/faker/locale/sk"); break;
        case 'sr_RS_latin': _module = await import("@faker-js/faker/locale/sr_RS_latin"); break;
        case 'sv': _module = await import("@faker-js/faker/locale/sv"); break;
        case 'th': _module = await import("@faker-js/faker/locale/th"); break;
        case 'tr': _module = await import("@faker-js/faker/locale/tr"); break;
        case 'uk': _module = await import("@faker-js/faker/locale/uk"); break;
        case 'ur': _module = await import("@faker-js/faker/locale/ur"); break;
        case 'uz_UZ_latin': _module = await import("@faker-js/faker/locale/uz_UZ_latin"); break;
        case 'vi': _module = await import("@faker-js/faker/locale/vi"); break;
        case 'yo_NG': _module = await import("@faker-js/faker/locale/yo_NG"); break;
        case 'zh_CN': _module = await import("@faker-js/faker/locale/zh_CN"); break;
        case 'zh_TW': _module = await import("@faker-js/faker/locale/zh_TW"); break;
        case 'zu_ZA': _module = await import("@faker-js/faker/locale/zu_ZA"); break;
        default: _module = await import("@faker-js/faker"); break;
    }

    return _module.faker as unknown as Faker;
}

export function getFakerFunction(instance: Faker, atom: IFakerAtom): IFakerFunction | undefined {
    // prettier-ignore
    switch (atom as IFakerPrimitiveAtom) {
        case 'airline.aircraftType': return instance.airline.aircraftType;
        case 'airline.flightNumber': return instance.airline.flightNumber;
        case 'airline.recordLocator': return instance.airline.recordLocator;
        case 'airline.seat': return instance.airline.seat;
        case 'animal.bear': return instance.animal.bear;
        case 'animal.bird': return instance.animal.bird;
        case 'animal.cat': return instance.animal.cat;
        case 'animal.cetacean': return instance.animal.cetacean;
        case 'animal.cow': return instance.animal.cow;
        case 'animal.crocodilia': return instance.animal.crocodilia;
        case 'animal.dog': return instance.animal.dog;
        case 'animal.fish': return instance.animal.fish;
        case 'animal.horse': return instance.animal.horse;
        case 'animal.insect': return instance.animal.insect;
        case 'animal.lion': return instance.animal.lion;
        case 'animal.petName': return instance.animal.petName;
        case 'animal.rabbit': return instance.animal.rabbit;
        case 'animal.rodent': return instance.animal.rodent;
        case 'animal.snake': return instance.animal.snake;
        case 'animal.type': return instance.animal.type;
        case 'book.author': return instance.book.author;
        case 'book.format': return instance.book.format;
        case 'book.genre': return instance.book.genre;
        case 'book.publisher': return instance.book.publisher;
        case 'book.series': return instance.book.series;
        case 'book.title': return instance.book.title;
        case 'color.cmyk': return instance.color.cmyk;
        case 'color.colorByCSSColorSpace': return instance.color.colorByCSSColorSpace;
        case 'color.cssSupportedFunction': return instance.color.cssSupportedFunction;
        case 'color.cssSupportedSpace': return instance.color.cssSupportedSpace;
        case 'color.hsl': return instance.color.hsl;
        case 'color.human': return instance.color.human;
        case 'color.hwb': return instance.color.hwb;
        case 'color.lab': return instance.color.lab;
        case 'color.lch': return instance.color.lch;
        case 'color.rgb': return instance.color.rgb;
        case 'color.space': return instance.color.space;
        case 'commerce.department': return instance.commerce.department;
        case 'commerce.isbn': return instance.commerce.isbn;
        case 'commerce.price': return instance.commerce.price;
        case 'commerce.product': return instance.commerce.product;
        case 'commerce.productAdjective': return instance.commerce.productAdjective;
        case 'commerce.productDescription': return instance.commerce.productDescription;
        case 'commerce.productMaterial': return instance.commerce.productMaterial;
        case 'commerce.productName': return instance.commerce.productName;
        case 'company.buzzAdjective': return instance.company.buzzAdjective;
        case 'company.buzzNoun': return instance.company.buzzNoun;
        case 'company.buzzPhrase': return instance.company.buzzPhrase;
        case 'company.buzzVerb': return instance.company.buzzVerb;
        case 'company.catchPhrase': return instance.company.catchPhrase;
        case 'company.catchPhraseAdjective': return instance.company.catchPhraseAdjective;
        case 'company.catchPhraseDescriptor': return instance.company.catchPhraseDescriptor;
        case 'company.catchPhraseNoun': return instance.company.catchPhraseNoun;
        case 'company.name': return instance.company.name;
        case 'database.collation': return instance.database.collation;
        case 'database.column': return instance.database.column;
        case 'database.engine': return instance.database.engine;
        case 'database.mongodbObjectId': return instance.database.mongodbObjectId;
        case 'database.type': return instance.database.type;
        case 'datatype.boolean': return instance.datatype.boolean;
        case 'date.month': return instance.date.month;
        case 'date.timeZone': return instance.date.timeZone;
        case 'date.weekday': return instance.date.weekday;
        case 'finance.accountName': return instance.finance.accountName;
        case 'finance.accountNumber': return instance.finance.accountNumber;
        case 'finance.amount': return instance.finance.amount;
        case 'finance.bic': return instance.finance.bic;
        case 'finance.bitcoinAddress': return instance.finance.bitcoinAddress;
        case 'finance.creditCardCVV': return instance.finance.creditCardCVV;
        case 'finance.creditCardIssuer': return instance.finance.creditCardIssuer;
        case 'finance.creditCardNumber': return instance.finance.creditCardNumber;
        case 'finance.currencyCode': return instance.finance.currencyCode;
        case 'finance.currencyName': return instance.finance.currencyName;
        case 'finance.currencyNumericCode': return instance.finance.currencyNumericCode;
        case 'finance.currencySymbol': return instance.finance.currencySymbol;
        case 'finance.ethereumAddress': return instance.finance.ethereumAddress;
        case 'finance.iban': return instance.finance.iban;
        case 'finance.litecoinAddress': return instance.finance.litecoinAddress;
        case 'finance.maskedNumber': return instance.finance.maskedNumber;
        case 'finance.pin': return instance.finance.pin;
        case 'finance.routingNumber': return instance.finance.routingNumber;
        case 'finance.transactionDescription': return instance.finance.transactionDescription;
        case 'finance.transactionType': return instance.finance.transactionType;
        case 'food.adjective': return instance.food.adjective;
        case 'food.description': return instance.food.description;
        case 'food.dish': return instance.food.dish;
        case 'food.ethnicCategory': return instance.food.ethnicCategory;
        case 'food.fruit': return instance.food.fruit;
        case 'food.ingredient': return instance.food.ingredient;
        case 'food.meat': return instance.food.meat;
        case 'food.spice': return instance.food.spice;
        case 'food.vegetable': return instance.food.vegetable;
        case 'git.branch': return instance.git.branch;
        case 'git.commitDate': return instance.git.commitDate;
        case 'git.commitEntry': return instance.git.commitEntry;
        case 'git.commitMessage': return instance.git.commitMessage;
        case 'git.commitSha': return instance.git.commitSha;
        case 'hacker.abbreviation': return instance.hacker.abbreviation;
        case 'hacker.adjective': return instance.hacker.adjective;
        case 'hacker.ingverb': return instance.hacker.ingverb;
        case 'hacker.noun': return instance.hacker.noun;
        case 'hacker.phrase': return instance.hacker.phrase;
        case 'hacker.verb': return instance.hacker.verb;
        case 'helpers.replaceCreditCardSymbols': return instance.helpers.replaceCreditCardSymbols;
        case 'helpers.replaceSymbols': return instance.helpers.replaceSymbols;
        case 'helpers.slugify': return instance.helpers.slugify;
        case 'image.avatar': return instance.image.avatar;
        case 'image.avatarGitHub': return instance.image.avatarGitHub;
        case 'image.avatarLegacy': return instance.image.avatarLegacy;
        case 'image.dataUri': return instance.image.dataUri;
        case 'image.personPortrait': return instance.image.personPortrait;
        case 'image.url': return instance.image.url;
        case 'image.urlLoremFlickr': return instance.image.urlLoremFlickr;
        case 'image.urlPicsumPhotos': return instance.image.urlPicsumPhotos;
        case 'image.urlPlaceholder': return instance.image.urlPlaceholder;
        case 'internet.color': return instance.internet.color;
        case 'internet.displayName': return instance.internet.displayName;
        case 'internet.domainName': return instance.internet.domainName;
        case 'internet.domainSuffix': return instance.internet.domainSuffix;
        case 'internet.domainWord': return instance.internet.domainWord;
        case 'internet.email': return instance.internet.email;
        case 'internet.emoji': return instance.internet.emoji;
        case 'internet.exampleEmail': return instance.internet.exampleEmail;
        case 'internet.httpMethod': return instance.internet.httpMethod;
        case 'internet.httpStatusCode': return instance.internet.httpStatusCode;
        case 'internet.ip': return instance.internet.ip;
        case 'internet.ipv4': return instance.internet.ipv4;
        case 'internet.ipv6': return instance.internet.ipv6;
        case 'internet.jwt': return instance.internet.jwt;
        case 'internet.jwtAlgorithm': return instance.internet.jwtAlgorithm;
        case 'internet.mac': return instance.internet.mac;
        case 'internet.password': return instance.internet.password;
        case 'internet.port': return instance.internet.port;
        case 'internet.protocol': return instance.internet.protocol;
        case 'internet.url': return instance.internet.url;
        case 'internet.userAgent': return instance.internet.userAgent;
        case 'internet.username': return instance.internet.username;
        case 'internet.userName': return instance.internet.userName;
        case 'location.buildingNumber': return instance.location.buildingNumber;
        case 'location.cardinalDirection': return instance.location.cardinalDirection;
        case 'location.city': return instance.location.city;
        case 'location.continent': return instance.location.continent;
        case 'location.country': return instance.location.country;
        case 'location.countryCode': return instance.location.countryCode;
        case 'location.county': return instance.location.county;
        case 'location.direction': return instance.location.direction;
        case 'location.latitude': return instance.location.latitude;
        case 'location.longitude': return instance.location.longitude;
        case 'location.ordinalDirection': return instance.location.ordinalDirection;
        case 'location.secondaryAddress': return instance.location.secondaryAddress;
        case 'location.state': return instance.location.state;
        case 'location.street': return instance.location.street;
        case 'location.streetAddress': return instance.location.streetAddress;
        case 'location.timeZone': return instance.location.timeZone;
        case 'location.zipCode': return instance.location.zipCode;
        case 'lorem.lines': return instance.lorem.lines;
        case 'lorem.paragraph': return instance.lorem.paragraph;
        case 'lorem.paragraphs': return instance.lorem.paragraphs;
        case 'lorem.sentence': return instance.lorem.sentence;
        case 'lorem.sentences': return instance.lorem.sentences;
        case 'lorem.slug': return instance.lorem.slug;
        case 'lorem.text': return instance.lorem.text;
        case 'lorem.word': return instance.lorem.word;
        case 'lorem.words': return instance.lorem.words;
        case 'music.album': return instance.music.album;
        case 'music.artist': return instance.music.artist;
        case 'music.genre': return instance.music.genre;
        case 'music.songName': return instance.music.songName;
        case 'number.bigInt': return instance.number.bigInt;
        case 'number.binary': return instance.number.binary;
        case 'number.float': return instance.number.float;
        case 'number.hex': return instance.number.hex;
        case 'number.int': return instance.number.int;
        case 'number.octal': return instance.number.octal;
        case 'number.romanNumeral': return instance.number.romanNumeral;
        case 'person.bio': return instance.person.bio;
        case 'person.firstName': return instance.person.firstName;
        case 'person.fullName': return instance.person.fullName;
        case 'person.gender': return instance.person.gender;
        case 'person.jobArea': return instance.person.jobArea;
        case 'person.jobDescriptor': return instance.person.jobDescriptor;
        case 'person.jobTitle': return instance.person.jobTitle;
        case 'person.jobType': return instance.person.jobType;
        case 'person.lastName': return instance.person.lastName;
        case 'person.middleName': return instance.person.middleName;
        case 'person.prefix': return instance.person.prefix;
        case 'person.sex': return instance.person.sex;
        case 'person.sexType': return instance.person.sexType;
        case 'person.suffix': return instance.person.suffix;
        case 'person.zodiacSign': return instance.person.zodiacSign;
        case 'phone.imei': return instance.phone.imei;
        case 'phone.number': return instance.phone.number;
        case 'string.alpha': return instance.string.alpha;
        case 'string.alphanumeric': return instance.string.alphanumeric;
        case 'string.binary': return instance.string.binary;
        case 'string.hexadecimal': return instance.string.hexadecimal;
        case 'string.nanoid': return instance.string.nanoid;
        case 'string.numeric': return instance.string.numeric;
        case 'string.octal': return instance.string.octal;
        case 'string.sample': return instance.string.sample;
        case 'string.symbol': return instance.string.symbol;
        case 'string.ulid': return instance.string.ulid;
        case 'string.uuid': return instance.string.uuid;
        case 'system.commonFileExt': return instance.system.commonFileExt;
        case 'system.commonFileName': return instance.system.commonFileName;
        case 'system.commonFileType': return instance.system.commonFileType;
        case 'system.cron': return instance.system.cron;
        case 'system.directoryPath': return instance.system.directoryPath;
        case 'system.fileExt': return instance.system.fileExt;
        case 'system.fileName': return instance.system.fileName;
        case 'system.filePath': return instance.system.filePath;
        case 'system.fileType': return instance.system.fileType;
        case 'system.mimeType': return instance.system.mimeType;
        case 'system.networkInterface': return instance.system.networkInterface;
        case 'system.semver': return instance.system.semver;
        case 'vehicle.bicycle': return instance.vehicle.bicycle;
        case 'vehicle.color': return instance.vehicle.color;
        case 'vehicle.fuel': return instance.vehicle.fuel;
        case 'vehicle.manufacturer': return instance.vehicle.manufacturer;
        case 'vehicle.model': return instance.vehicle.model;
        case 'vehicle.type': return instance.vehicle.type;
        case 'vehicle.vehicle': return instance.vehicle.vehicle;
        case 'vehicle.vin': return instance.vehicle.vin;
        case 'vehicle.vrm': return instance.vehicle.vrm;
        case 'word.adjective': return instance.word.adjective;
        case 'word.adverb': return instance.word.adverb;
        case 'word.conjunction': return instance.word.conjunction;
        case 'word.interjection': return instance.word.interjection;
        case 'word.noun': return instance.word.noun;
        case 'word.preposition': return instance.word.preposition;
        case 'word.sample': return instance.word.sample;
        case 'word.verb': return instance.word.verb;
        case 'word.words': return instance.word.words;
        default: break; // needed for the next switch
    }

    // prettier-ignore
    switch (atom as IFakerDateAtom) {
        case 'date.anytime': return instance.date.anytime;
        case 'date.birthdate': return instance.date.birthdate;
        case 'date.future': return instance.date.future;
        case 'date.past': return instance.date.past;
        case 'date.recent': return instance.date.recent;
        case 'date.soon': return instance.date.soon;
        default: break; // needed for the next switch
    }

    // prettier-ignore
    switch (atom as IFakerArrayAtom) {
        case 'location.nearbyGPSCoordinate': return instance.location.nearbyGPSCoordinate;
        default: break; // needed for the next switch
    }

    // prettier-ignore
    switch (atom as IFakerStructureAtom) {
        case 'airline.airline': return instance.airline.airline;
        case 'airline.airplane': return instance.airline.airplane;
        case 'airline.airport': return instance.airline.airport;
        case 'finance.currency': return instance.finance.currency;
        case 'location.language': return instance.location.language;
        case 'science.chemicalElement': return instance.science.chemicalElement;
        case 'science.unit': return instance.science.unit;
        default: break; // needed for the next switch
    }

    switch (atom as IFakerBoundAtom) {
        case 'date.between': {
            return instance.date.between.bind(null, {
                from: '2000-01-01T00:00:00.000Z',
                to: '2030-01-01T00:00:00.000Z',
            });
        }
        case 'date.betweens': {
            return instance.date.betweens.bind(null, {
                from: '2000-01-01T00:00:00.000Z',
                to: '2030-01-01T00:00:00.000Z',
            });
        }
        case 'helpers.arrayElement': {
            const method = instance.helpers.arrayElement<string>;
            return method.bind(null, ['cat', 'dog', 'mouse']);
        }
        case 'helpers.arrayElements': {
            return instance.helpers.arrayElements.bind(null, [1, 2, 3, 4, 5], {
                min: 2,
                max: 4,
            });
        }
        case 'helpers.enumValue': {
            const method = instance.helpers.enumValue<typeof Direction>;
            return method.bind(null, Direction);
        }
        case 'helpers.fake': {
            return instance.helpers.fake.bind(
                globalThis,
                '{{person.lastName}}, {{person.firstName}} {{person.suffix}}'
            );
        }
        case 'helpers.fromRegExp': {
            return instance.helpers.fromRegExp.bind(null, /[A-Z0-9]{4}-[A-Z0-9]{4}/);
        }
        case 'helpers.maybe': {
            // can't resolve with `string` (to bypass use `any`)
            const method = instance.helpers.maybe<any>;
            return method.bind(null, () => '50% chance', {
                probability: 0.5,
            });
        }
        case 'helpers.multiple': {
            const method = instance.helpers.multiple<string>;
            return method.bind(null, (_, index) => `#${index + 1}) ${instance.number.int()}`, {
                count: { min: 2, max: 3 },
            });
        }
        case 'helpers.mustache': {
            return instance.helpers.mustache.bind(null, 'Random number is {{count}}', {
                count: () => instance.number.int().toString(),
            });
        }
        case 'helpers.objectEntry': {
            return instance.helpers.objectEntry.bind(null, {
                One: 1,
                Two: 2,
                Three: 3,
                Nine: 9,
            });
        }
        case 'helpers.objectKey': {
            return instance.helpers.objectKey.bind(null, { One: 1, Two: 2, Three: 3, Nine: 9 });
        }
        case 'helpers.objectValue': {
            const method = instance.helpers.objectValue<{ [key: string]: number }>;
            return method.bind(null, { One: 1, Two: 2, Three: 3, Nine: 9 });
        }
        case 'helpers.rangeToNumber': {
            return instance.helpers.rangeToNumber.bind(null, { min: 1, max: 10 });
        }
        case 'helpers.shuffle': {
            return instance.helpers.shuffle.bind(null, ['a', 'b', 'c'], { inplace: false });
        }
        case 'helpers.uniqueArray': {
            return instance.helpers.uniqueArray.bind(null, instance.word.sample, 3);
        }
        case 'helpers.weightedArrayElement': {
            const method = instance.helpers.weightedArrayElement<string>;
            return method.bind(null, [
                { weight: 5, value: 'sunny' },
                { weight: 4, value: 'rainy' },
                { weight: 1, value: 'snowy' },
            ]);
        }
        case 'string.fromCharacters': {
            return instance.string.fromCharacters.bind(null, 'abc', { min: 5, max: 10 });
        }
        default:
            break; // needed for the next switch
    }

    return undefined;
}
