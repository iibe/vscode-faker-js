import { Stringify, StringifyJavaScript, StringifyPython } from '.';
import { ISettingsType } from '../types/settings';
import { LanguageIdentifier } from '../types/vscode';

export function getStringifyInstance(atom: LanguageIdentifier, settings: ISettingsType): Stringify {
    switch (atom) {
        case 'javascript':
        case 'javascriptreact':
        case 'typescript':
        case 'typescriptreact':
            return new StringifyJavaScript(settings.javascript);
        case 'python':
            return new StringifyPython(settings.python);
        default:
            return new StringifyJavaScript(settings.javascript);
    }
}
