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
 * With dynamic imports we get come code splitting in bundle (around 150 files).
 */
export async function getFakerInstanceAsync(atom: IFakerLocale): Promise<Faker> {
    let mod;

    // prettier-ignore
    switch (atom) {
        case 'af_ZA': mod = await import("@faker-js/faker/locale/af_ZA"); break;
        case 'ar': mod = await import("@faker-js/faker/locale/ar"); break;
        case 'az': mod = await import("@faker-js/faker/locale/az"); break;
        case 'base': mod = await import("@faker-js/faker/locale/base"); break;
        case 'cs_CZ': mod = await import("@faker-js/faker/locale/cs_CZ"); break;
        case 'da': mod = await import("@faker-js/faker/locale/da"); break;
        case 'de_AT': mod = await import("@faker-js/faker/locale/de_AT"); break;
        case 'de_CH': mod = await import("@faker-js/faker/locale/de_CH"); break;
        case 'de': mod = await import("@faker-js/faker/locale/de"); break;
        case 'dv': mod = await import("@faker-js/faker/locale/dv"); break;
        case 'el': mod = await import("@faker-js/faker/locale/el"); break;
        case 'en_AU_ocker': mod = await import("@faker-js/faker/locale/en_AU_ocker"); break;
        case 'en_AU': mod = await import("@faker-js/faker/locale/en_AU"); break;
        case 'en_BORK': mod = await import("@faker-js/faker/locale/en_BORK"); break;
        case 'en_CA': mod = await import("@faker-js/faker/locale/en_CA"); break;
        case 'en_GB': mod = await import("@faker-js/faker/locale/en_GB"); break;
        case 'en_GH': mod = await import("@faker-js/faker/locale/en_GH"); break;
        case 'en_HK': mod = await import("@faker-js/faker/locale/en_HK"); break;
        case 'en_IE': mod = await import("@faker-js/faker/locale/en_IE"); break;
        case 'en_IN': mod = await import("@faker-js/faker/locale/en_IN"); break;
        case 'en_NG': mod = await import("@faker-js/faker/locale/en_NG"); break;
        case 'en_US': mod = await import("@faker-js/faker/locale/en_US"); break;
        case 'en_ZA': mod = await import("@faker-js/faker/locale/en_ZA"); break;
        case 'en': mod = await import("@faker-js/faker/locale/en"); break;
        case 'eo': mod = await import("@faker-js/faker/locale/eo"); break;
        case 'es_MX': mod = await import("@faker-js/faker/locale/es_MX"); break;
        case 'es': mod = await import("@faker-js/faker/locale/es"); break;
        case 'fa': mod = await import("@faker-js/faker/locale/fa"); break;
        case 'fi': mod = await import("@faker-js/faker/locale/fi"); break;
        case 'fr_BE': mod = await import("@faker-js/faker/locale/fr_BE"); break;
        case 'fr_CA': mod = await import("@faker-js/faker/locale/fr_CA"); break;
        case 'fr_CH': mod = await import("@faker-js/faker/locale/fr_CH"); break;
        case 'fr_LU': mod = await import("@faker-js/faker/locale/fr_LU"); break;
        case 'fr_SN': mod = await import("@faker-js/faker/locale/fr_SN"); break;
        case 'fr': mod = await import("@faker-js/faker/locale/fr"); break;
        case 'he': mod = await import("@faker-js/faker/locale/he"); break;
        case 'hr': mod = await import("@faker-js/faker/locale/hr"); break;
        case 'hu': mod = await import("@faker-js/faker/locale/hu"); break;
        case 'hy': mod = await import("@faker-js/faker/locale/hy"); break;
        case 'id_ID': mod = await import("@faker-js/faker/locale/id_ID"); break;
        case 'it': mod = await import("@faker-js/faker/locale/it"); break;
        case 'ja': mod = await import("@faker-js/faker/locale/ja"); break;
        case 'ka_GE': mod = await import("@faker-js/faker/locale/ka_GE"); break;
        case 'ko': mod = await import("@faker-js/faker/locale/ko"); break;
        case 'lv': mod = await import("@faker-js/faker/locale/lv"); break;
        case 'mk': mod = await import("@faker-js/faker/locale/mk"); break;
        case 'nb_NO': mod = await import("@faker-js/faker/locale/nb_NO"); break;
        case 'ne': mod = await import("@faker-js/faker/locale/ne"); break;
        case 'nl_BE': mod = await import("@faker-js/faker/locale/nl_BE"); break;
        case 'nl': mod = await import("@faker-js/faker/locale/nl"); break;
        case 'pl': mod = await import("@faker-js/faker/locale/pl"); break;
        case 'pt_BR': mod = await import("@faker-js/faker/locale/pt_BR"); break;
        case 'pt_PT': mod = await import("@faker-js/faker/locale/pt_PT"); break;
        case 'ro_MD': mod = await import("@faker-js/faker/locale/ro_MD"); break;
        case 'ro': mod = await import("@faker-js/faker/locale/ro"); break;
        case 'ru': mod = await import("@faker-js/faker/locale/ru"); break;
        case 'sk': mod = await import("@faker-js/faker/locale/sk"); break;
        case 'sr_RS_latin': mod = await import("@faker-js/faker/locale/sr_RS_latin"); break;
        case 'sv': mod = await import("@faker-js/faker/locale/sv"); break;
        case 'th': mod = await import("@faker-js/faker/locale/th"); break;
        case 'tr': mod = await import("@faker-js/faker/locale/tr"); break;
        case 'uk': mod = await import("@faker-js/faker/locale/uk"); break;
        case 'ur': mod = await import("@faker-js/faker/locale/ur"); break;
        case 'uz_UZ_latin': mod = await import("@faker-js/faker/locale/uz_UZ_latin"); break;
        case 'vi': mod = await import("@faker-js/faker/locale/vi"); break;
        case 'yo_NG': mod = await import("@faker-js/faker/locale/yo_NG"); break;
        case 'zh_CN': mod = await import("@faker-js/faker/locale/zh_CN"); break;
        case 'zh_TW': mod = await import("@faker-js/faker/locale/zh_TW"); break;
        case 'zu_ZA': mod = await import("@faker-js/faker/locale/zu_ZA"); break;
        default: mod = await import("@faker-js/faker"); break;
    }

    return mod.faker as unknown as Faker;
}

export function getFakerFunction(fakerApi: Faker, atom: IFakerAtom): IFakerFunction | undefined {
    // prettier-ignore
    switch (atom as IFakerPrimitiveAtom) {
        case 'airline.aircraftType': return fakerApi.airline.aircraftType;
        case 'airline.flightNumber': return fakerApi.airline.flightNumber;
        case 'airline.recordLocator': return fakerApi.airline.recordLocator;
        case 'airline.seat': return fakerApi.airline.seat;
        case 'animal.bear': return fakerApi.animal.bear;
        case 'animal.bird': return fakerApi.animal.bird;
        case 'animal.cat': return fakerApi.animal.cat;
        case 'animal.cetacean': return fakerApi.animal.cetacean;
        case 'animal.cow': return fakerApi.animal.cow;
        case 'animal.crocodilia': return fakerApi.animal.crocodilia;
        case 'animal.dog': return fakerApi.animal.dog;
        case 'animal.fish': return fakerApi.animal.fish;
        case 'animal.horse': return fakerApi.animal.horse;
        case 'animal.insect': return fakerApi.animal.insect;
        case 'animal.lion': return fakerApi.animal.lion;
        case 'animal.petName': return fakerApi.animal.petName;
        case 'animal.rabbit': return fakerApi.animal.rabbit;
        case 'animal.rodent': return fakerApi.animal.rodent;
        case 'animal.snake': return fakerApi.animal.snake;
        case 'animal.type': return fakerApi.animal.type;
        case 'book.author': return fakerApi.book.author;
        case 'book.format': return fakerApi.book.format;
        case 'book.genre': return fakerApi.book.genre;
        case 'book.publisher': return fakerApi.book.publisher;
        case 'book.series': return fakerApi.book.series;
        case 'book.title': return fakerApi.book.title;
        case 'color.cmyk': return fakerApi.color.cmyk;
        case 'color.colorByCSSColorSpace': return fakerApi.color.colorByCSSColorSpace;
        case 'color.cssSupportedFunction': return fakerApi.color.cssSupportedFunction;
        case 'color.cssSupportedSpace': return fakerApi.color.cssSupportedSpace;
        case 'color.hsl': return fakerApi.color.hsl;
        case 'color.human': return fakerApi.color.human;
        case 'color.hwb': return fakerApi.color.hwb;
        case 'color.lab': return fakerApi.color.lab;
        case 'color.lch': return fakerApi.color.lch;
        case 'color.rgb': return fakerApi.color.rgb;
        case 'color.space': return fakerApi.color.space;
        case 'commerce.department': return fakerApi.commerce.department;
        case 'commerce.isbn': return fakerApi.commerce.isbn;
        case 'commerce.price': return fakerApi.commerce.price;
        case 'commerce.product': return fakerApi.commerce.product;
        case 'commerce.productAdjective': return fakerApi.commerce.productAdjective;
        case 'commerce.productDescription': return fakerApi.commerce.productDescription;
        case 'commerce.productMaterial': return fakerApi.commerce.productMaterial;
        case 'commerce.productName': return fakerApi.commerce.productName;
        case 'company.buzzAdjective': return fakerApi.company.buzzAdjective;
        case 'company.buzzNoun': return fakerApi.company.buzzNoun;
        case 'company.buzzPhrase': return fakerApi.company.buzzPhrase;
        case 'company.buzzVerb': return fakerApi.company.buzzVerb;
        case 'company.catchPhrase': return fakerApi.company.catchPhrase;
        case 'company.catchPhraseAdjective': return fakerApi.company.catchPhraseAdjective;
        case 'company.catchPhraseDescriptor': return fakerApi.company.catchPhraseDescriptor;
        case 'company.catchPhraseNoun': return fakerApi.company.catchPhraseNoun;
        case 'company.name': return fakerApi.company.name;
        case 'database.collation': return fakerApi.database.collation;
        case 'database.column': return fakerApi.database.column;
        case 'database.engine': return fakerApi.database.engine;
        case 'database.mongodbObjectId': return fakerApi.database.mongodbObjectId;
        case 'database.type': return fakerApi.database.type;
        case 'datatype.boolean': return fakerApi.datatype.boolean;
        case 'date.month': return fakerApi.date.month;
        case 'date.timeZone': return fakerApi.date.timeZone;
        case 'date.weekday': return fakerApi.date.weekday;
        case 'finance.accountName': return fakerApi.finance.accountName;
        case 'finance.accountNumber': return fakerApi.finance.accountNumber;
        case 'finance.amount': return fakerApi.finance.amount;
        case 'finance.bic': return fakerApi.finance.bic;
        case 'finance.bitcoinAddress': return fakerApi.finance.bitcoinAddress;
        case 'finance.creditCardCVV': return fakerApi.finance.creditCardCVV;
        case 'finance.creditCardIssuer': return fakerApi.finance.creditCardIssuer;
        case 'finance.creditCardNumber': return fakerApi.finance.creditCardNumber;
        case 'finance.currencyCode': return fakerApi.finance.currencyCode;
        case 'finance.currencyName': return fakerApi.finance.currencyName;
        case 'finance.currencySymbol': return fakerApi.finance.currencySymbol;
        case 'finance.ethereumAddress': return fakerApi.finance.ethereumAddress;
        case 'finance.iban': return fakerApi.finance.iban;
        case 'finance.litecoinAddress': return fakerApi.finance.litecoinAddress;
        case 'finance.maskedNumber': return fakerApi.finance.maskedNumber;
        case 'finance.pin': return fakerApi.finance.pin;
        case 'finance.routingNumber': return fakerApi.finance.routingNumber;
        case 'finance.transactionDescription': return fakerApi.finance.transactionDescription;
        case 'finance.transactionType': return fakerApi.finance.transactionType;
        case 'food.adjective': return fakerApi.food.adjective;
        case 'food.description': return fakerApi.food.description;
        case 'food.dish': return fakerApi.food.dish;
        case 'food.ethnicCategory': return fakerApi.food.ethnicCategory;
        case 'food.fruit': return fakerApi.food.fruit;
        case 'food.ingredient': return fakerApi.food.ingredient;
        case 'food.meat': return fakerApi.food.meat;
        case 'food.spice': return fakerApi.food.spice;
        case 'food.vegetable': return fakerApi.food.vegetable;
        case 'git.branch': return fakerApi.git.branch;
        case 'git.commitDate': return fakerApi.git.commitDate;
        case 'git.commitEntry': return fakerApi.git.commitEntry;
        case 'git.commitMessage': return fakerApi.git.commitMessage;
        case 'git.commitSha': return fakerApi.git.commitSha;
        case 'hacker.abbreviation': return fakerApi.hacker.abbreviation;
        case 'hacker.adjective': return fakerApi.hacker.adjective;
        case 'hacker.ingverb': return fakerApi.hacker.ingverb;
        case 'hacker.noun': return fakerApi.hacker.noun;
        case 'hacker.phrase': return fakerApi.hacker.phrase;
        case 'hacker.verb': return fakerApi.hacker.verb;
        case 'helpers.replaceCreditCardSymbols': return fakerApi.helpers.replaceCreditCardSymbols;
        case 'helpers.replaceSymbols': return fakerApi.helpers.replaceSymbols;
        case 'helpers.slugify': return fakerApi.helpers.slugify;
        case 'image.avatar': return fakerApi.image.avatar;
        case 'image.avatarGitHub': return fakerApi.image.avatarGitHub;
        case 'image.avatarLegacy': return fakerApi.image.avatarLegacy;
        case 'image.dataUri': return fakerApi.image.dataUri;
        case 'image.url': return fakerApi.image.url;
        case 'image.urlLoremFlickr': return fakerApi.image.urlLoremFlickr;
        case 'image.urlPicsumPhotos': return fakerApi.image.urlPicsumPhotos;
        case 'image.urlPlaceholder': return fakerApi.image.urlPlaceholder;
        case 'internet.color': return fakerApi.internet.color;
        case 'internet.displayName': return fakerApi.internet.displayName;
        case 'internet.domainName': return fakerApi.internet.domainName;
        case 'internet.domainSuffix': return fakerApi.internet.domainSuffix;
        case 'internet.domainWord': return fakerApi.internet.domainWord;
        case 'internet.email': return fakerApi.internet.email;
        case 'internet.emoji': return fakerApi.internet.emoji;
        case 'internet.exampleEmail': return fakerApi.internet.exampleEmail;
        case 'internet.httpMethod': return fakerApi.internet.httpMethod;
        case 'internet.httpStatusCode': return fakerApi.internet.httpStatusCode;
        case 'internet.ip': return fakerApi.internet.ip;
        case 'internet.ipv4': return fakerApi.internet.ipv4;
        case 'internet.ipv6': return fakerApi.internet.ipv6;
        case 'internet.jwt': return fakerApi.internet.jwt;
        case 'internet.jwtAlgorithm': return fakerApi.internet.jwtAlgorithm;
        case 'internet.mac': return fakerApi.internet.mac;
        case 'internet.password': return fakerApi.internet.password;
        case 'internet.port': return fakerApi.internet.port;
        case 'internet.protocol': return fakerApi.internet.protocol;
        case 'internet.url': return fakerApi.internet.url;
        case 'internet.userAgent': return fakerApi.internet.userAgent;
        case 'internet.username': return fakerApi.internet.username;
        case 'internet.userName': return fakerApi.internet.userName;
        case 'location.buildingNumber': return fakerApi.location.buildingNumber;
        case 'location.cardinalDirection': return fakerApi.location.cardinalDirection;
        case 'location.city': return fakerApi.location.city;
        case 'location.continent': return fakerApi.location.continent;
        case 'location.country': return fakerApi.location.country;
        case 'location.countryCode': return fakerApi.location.countryCode;
        case 'location.county': return fakerApi.location.county;
        case 'location.direction': return fakerApi.location.direction;
        case 'location.latitude': return fakerApi.location.latitude;
        case 'location.longitude': return fakerApi.location.longitude;
        case 'location.ordinalDirection': return fakerApi.location.ordinalDirection;
        case 'location.secondaryAddress': return fakerApi.location.secondaryAddress;
        case 'location.state': return fakerApi.location.state;
        case 'location.street': return fakerApi.location.street;
        case 'location.streetAddress': return fakerApi.location.streetAddress;
        case 'location.timeZone': return fakerApi.location.timeZone;
        case 'location.zipCode': return fakerApi.location.zipCode;
        case 'lorem.lines': return fakerApi.lorem.lines;
        case 'lorem.paragraph': return fakerApi.lorem.paragraph;
        case 'lorem.paragraphs': return fakerApi.lorem.paragraphs;
        case 'lorem.sentence': return fakerApi.lorem.sentence;
        case 'lorem.sentences': return fakerApi.lorem.sentences;
        case 'lorem.slug': return fakerApi.lorem.slug;
        case 'lorem.text': return fakerApi.lorem.text;
        case 'lorem.word': return fakerApi.lorem.word;
        case 'lorem.words': return fakerApi.lorem.words;
        case 'music.album': return fakerApi.music.album;
        case 'music.artist': return fakerApi.music.artist;
        case 'music.genre': return fakerApi.music.genre;
        case 'music.songName': return fakerApi.music.songName;
        case 'number.bigInt': return fakerApi.number.bigInt;
        case 'number.binary': return fakerApi.number.binary;
        case 'number.float': return fakerApi.number.float;
        case 'number.hex': return fakerApi.number.hex;
        case 'number.int': return fakerApi.number.int;
        case 'number.octal': return fakerApi.number.octal;
        case 'number.romanNumeral': return fakerApi.number.romanNumeral;
        case 'person.bio': return fakerApi.person.bio;
        case 'person.firstName': return fakerApi.person.firstName;
        case 'person.fullName': return fakerApi.person.fullName;
        case 'person.gender': return fakerApi.person.gender;
        case 'person.jobArea': return fakerApi.person.jobArea;
        case 'person.jobDescriptor': return fakerApi.person.jobDescriptor;
        case 'person.jobTitle': return fakerApi.person.jobTitle;
        case 'person.jobType': return fakerApi.person.jobType;
        case 'person.lastName': return fakerApi.person.lastName;
        case 'person.middleName': return fakerApi.person.middleName;
        case 'person.prefix': return fakerApi.person.prefix;
        case 'person.sex': return fakerApi.person.sex;
        case 'person.sexType': return fakerApi.person.sexType;
        case 'person.suffix': return fakerApi.person.suffix;
        case 'person.zodiacSign': return fakerApi.person.zodiacSign;
        case 'phone.imei': return fakerApi.phone.imei;
        case 'phone.number': return fakerApi.phone.number;
        case 'string.alpha': return fakerApi.string.alpha;
        case 'string.alphanumeric': return fakerApi.string.alphanumeric;
        case 'string.binary': return fakerApi.string.binary;
        case 'string.hexadecimal': return fakerApi.string.hexadecimal;
        case 'string.nanoid': return fakerApi.string.nanoid;
        case 'string.numeric': return fakerApi.string.numeric;
        case 'string.octal': return fakerApi.string.octal;
        case 'string.sample': return fakerApi.string.sample;
        case 'string.symbol': return fakerApi.string.symbol;
        case 'string.ulid': return fakerApi.string.ulid;
        case 'string.uuid': return fakerApi.string.uuid;
        case 'system.commonFileExt': return fakerApi.system.commonFileExt;
        case 'system.commonFileName': return fakerApi.system.commonFileName;
        case 'system.commonFileType': return fakerApi.system.commonFileType;
        case 'system.cron': return fakerApi.system.cron;
        case 'system.directoryPath': return fakerApi.system.directoryPath;
        case 'system.fileExt': return fakerApi.system.fileExt;
        case 'system.fileName': return fakerApi.system.fileName;
        case 'system.filePath': return fakerApi.system.filePath;
        case 'system.fileType': return fakerApi.system.fileType;
        case 'system.mimeType': return fakerApi.system.mimeType;
        case 'system.networkInterface': return fakerApi.system.networkInterface;
        case 'system.semver': return fakerApi.system.semver;
        case 'vehicle.bicycle': return fakerApi.vehicle.bicycle;
        case 'vehicle.color': return fakerApi.vehicle.color;
        case 'vehicle.fuel': return fakerApi.vehicle.fuel;
        case 'vehicle.manufacturer': return fakerApi.vehicle.manufacturer;
        case 'vehicle.model': return fakerApi.vehicle.model;
        case 'vehicle.type': return fakerApi.vehicle.type;
        case 'vehicle.vehicle': return fakerApi.vehicle.vehicle;
        case 'vehicle.vin': return fakerApi.vehicle.vin;
        case 'vehicle.vrm': return fakerApi.vehicle.vrm;
        case 'word.adjective': return fakerApi.word.adjective;
        case 'word.adverb': return fakerApi.word.adverb;
        case 'word.conjunction': return fakerApi.word.conjunction;
        case 'word.interjection': return fakerApi.word.interjection;
        case 'word.noun': return fakerApi.word.noun;
        case 'word.preposition': return fakerApi.word.preposition;
        case 'word.sample': return fakerApi.word.sample;
        case 'word.verb': return fakerApi.word.verb;
        case 'word.words': return fakerApi.word.words;
        default: break; // needed for the next switch
    }

    // prettier-ignore
    switch (atom as IFakerDateAtom) {
        case 'date.anytime': return fakerApi.date.anytime;
        case 'date.birthdate': return fakerApi.date.birthdate;
        case 'date.future': return fakerApi.date.future;
        case 'date.past': return fakerApi.date.past;
        case 'date.recent': return fakerApi.date.recent;
        case 'date.soon': return fakerApi.date.soon;
        default: break; // needed for the next switch
    }

    // prettier-ignore
    switch (atom as IFakerArrayAtom) {
        case 'location.nearbyGPSCoordinate': return fakerApi.location.nearbyGPSCoordinate;
        default: break; // needed for the next switch
    }

    // prettier-ignore
    switch (atom as IFakerStructureAtom) {
        case 'airline.airline': return fakerApi.airline.airline;
        case 'airline.airplane': return fakerApi.airline.airplane;
        case 'airline.airport': return fakerApi.airline.airport;
        case 'finance.currency': return fakerApi.finance.currency;
        case 'location.language': return fakerApi.location.language;
        case 'science.chemicalElement': return fakerApi.science.chemicalElement;
        case 'science.unit': return fakerApi.science.unit;
        default: break; // needed for the next switch
    }

    switch (atom as IFakerBoundAtom) {
        case 'date.between': {
            return fakerApi.date.between.bind(null, {
                from: '2000-01-01T00:00:00.000Z',
                to: '2030-01-01T00:00:00.000Z',
            });
        }
        case 'date.betweens': {
            return fakerApi.date.betweens.bind(null, {
                from: '2000-01-01T00:00:00.000Z',
                to: '2030-01-01T00:00:00.000Z',
            });
        }
        case 'helpers.arrayElement': {
            const generic = fakerApi.helpers.arrayElement<string>;
            return generic.bind(null, ['cat', 'dog', 'mouse']);
        }
        case 'helpers.arrayElements': {
            return fakerApi.helpers.arrayElements.bind(null, [1, 2, 3, 4, 5], {
                min: 2,
                max: 4,
            });
        }
        case 'helpers.enumValue': {
            const generic = fakerApi.helpers.enumValue<typeof Direction>;
            return generic.bind(null, Direction);
        }
        case 'helpers.fake': {
            return fakerApi.helpers.fake.bind(
                globalThis,
                '{{person.lastName}}, {{person.firstName}} {{person.suffix}}'
            );
        }
        case 'helpers.fromRegExp': {
            return fakerApi.helpers.fromRegExp.bind(null, /[A-Z0-9]{4}-[A-Z0-9]{4}/);
        }
        case 'helpers.maybe': {
            // can't resolve with `string` (to bypass use `any`)
            const generic = fakerApi.helpers.maybe<any>;
            return generic.bind(null, () => '50% chance', {
                probability: 0.5,
            });
        }
        case 'helpers.multiple': {
            const generic = fakerApi.helpers.multiple<string>;
            return generic.bind(null, (_, index) => `#${index + 1}) ${fakerApi.number.int()}`, {
                count: { min: 2, max: 3 },
            });
        }
        case 'helpers.mustache': {
            return fakerApi.helpers.mustache.bind(null, 'Random number is {{count}}', {
                count: () => fakerApi.number.int().toString(),
            });
        }
        case 'helpers.objectEntry': {
            return fakerApi.helpers.objectEntry.bind(null, {
                One: 1,
                Two: 2,
                Three: 3,
                Nine: 9,
            });
        }
        case 'helpers.objectKey': {
            return fakerApi.helpers.objectKey.bind(null, { One: 1, Two: 2, Three: 3, Nine: 9 });
        }
        case 'helpers.objectValue': {
            const generic = fakerApi.helpers.objectValue<{ [key: string]: number }>;
            return generic.bind(null, { One: 1, Two: 2, Three: 3, Nine: 9 });
        }
        case 'helpers.rangeToNumber': {
            return fakerApi.helpers.rangeToNumber.bind(null, { min: 1, max: 10 });
        }
        case 'helpers.shuffle': {
            return fakerApi.helpers.shuffle.bind(null, ['a', 'b', 'c'], { inplace: false });
        }
        case 'helpers.uniqueArray': {
            return fakerApi.helpers.uniqueArray.bind(null, fakerApi.word.sample, 3);
        }
        case 'helpers.weightedArrayElement': {
            const generic = fakerApi.helpers.weightedArrayElement<string>;
            return generic.bind(null, [
                { weight: 5, value: 'sunny' },
                { weight: 4, value: 'rainy' },
                { weight: 1, value: 'snowy' },
            ]);
        }
        case 'string.fromCharacters': {
            return fakerApi.string.fromCharacters.bind(null, 'abc', { min: 5, max: 10 });
        }
        default:
            break; // needed for the next switch
    }

    return undefined;
}
