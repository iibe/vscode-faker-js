import { Stringify, StringifyJavaScript, StringifyPhp, StringifyPython, StringifyRuby } from '.';
import { ISettingsType } from '../types/settings';
import { LanguageIdentifier } from '../types/vscode';

export function getStringifyInstance(
    language: LanguageIdentifier,
    settings: ISettingsType
): Stringify {
    switch (language) {
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
