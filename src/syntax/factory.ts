import type { ISettings } from '../types/extension-config.js';
import type { LanguageID } from '../types/vscode.js';
import type { Stringify } from './base.js';
import {
    StringifyGo,
    StringifyJavaScript,
    StringifyPhp,
    StringifyPython,
    StringifyRuby
} from './syntax.js';

export function createStringify(
    language: LanguageID,
    settings: ISettings
): Stringify {
    switch (language) {
        case 'go':
            return new StringifyGo(settings.go);
        case 'javascript':
        case 'javascriptreact':
        case 'json':
        case 'jsonc':
        case 'svelte':
        case 'typescript':
        case 'typescriptreact':
        case 'vue':
            return new StringifyJavaScript(settings.javascript);
        case 'php':
            return new StringifyPhp(settings.php);
        case 'python':
            return new StringifyPython(settings.python);
        case 'ruby':
            return new StringifyRuby(settings.ruby);
        default:
            return new StringifyJavaScript(settings.javascript);
    }
}
