import * as vscode from 'vscode';
import type { IConfigOption } from './types/extension-config.js';

export function getConfigOpt<T>(
    configRef: vscode.WorkspaceConfiguration,
    option: IConfigOption,
    fallback: T
): T {
    return configRef.get<T>(option, fallback);
}

// export function getConfigurationAll(): ISettings {
//     return {
//         locale: getOption('locale', 'en'),
//         syntax: getOption('syntax', 'javascript'),
//         go: {
//             bigint: {
//                 insertMode: getOption('go.bigint.insertMode', 'inline')
//             },
//             string: {
//                 insertMode: getOption('go.string.insertMode', 'literal'),
//                 quotationMark: getOption('go.string.quotationMark', 'double')
//             },
//             array: {
//                 insertMode: getOption('go.array.insertMode', 'short')
//             }
//         },
//         javascript: {
//             bigint: {
//                 insertMode: getOption('javascript.bigint.insertMode', 'literal')
//             },
//             string: {
//                 insertMode: getOption(
//                     'javascript.string.insertMode',
//                     'literal'
//                 ),
//                 quotationMark: getOption(
//                     'javascript.string.quotationMark',
//                     'single'
//                 )
//             }
//         },
//         php: {
//             null: {
//                 insertMode: getOption('php.null.insertMode', 'uppercase')
//             },
//             boolean: {
//                 insertMode: getOption('php.boolean.insertMode', 'uppercase')
//             },
//             bigint: {
//                 insertMode: getOption('php.bigint.insertMode', 'unsafe')
//             },
//             string: {
//                 insertMode: getOption('php.string.insertMode', 'literal'),
//                 quotationMark: getOption('php.string.quotationMark', 'double')
//             },
//             array: {
//                 insertMode: getOption('php.array.insertMode', 'short')
//             }
//         },
//         python: {
//             bigint: {
//                 insertMode: getOption('python.bigint.insertMode', 'inline')
//             },
//             string: {
//                 insertMode: getOption('python.string.insertMode', 'literal'),
//                 quotationMark: getOption(
//                     'python.string.quotationMark',
//                     'double'
//                 )
//             }
//         },
//         ruby: {
//             bigint: {
//                 insertMode: getOption('ruby.bigint.insertMode', 'inline')
//             },
//             string: {
//                 insertMode: getOption('ruby.string.insertMode', 'literal'),
//                 quotationMark: getOption('ruby.string.quotationMark', 'single')
//             }
//         }
//     };
// }
