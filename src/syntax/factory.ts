import { Stringify, StringifyJavaScript, StringifyPhp, StringifyPython, StringifyRuby } from '.';
import { ISettings } from '../types/settings';
import { LanguageIdentifier } from '../types/vscode';
import { StringifyGo } from './go';

export function createStringify(language: LanguageIdentifier, settings: ISettings): Stringify {
    switch (language) {
        case 'go':
            return new StringifyGo(settings.go);
        case 'javascript':
        case 'javascriptreact':
        case 'typescript':
        case 'typescriptreact':
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
