import type { ExtensionContext } from 'vscode';
import { commands, Range, window } from 'vscode';
import { getFakerFunction, getFakerInstanceAsync } from './faker';
import { getSettings } from './settings';
import { getStringifyInstance } from './syntax';
import { ICommandId } from './types/manifest';
import { LanguageIdentifier } from './types/vscode';
import { fakerApiAtoms } from './utils/atoms';

export function activate(context: ExtensionContext) {
    for (const atom of fakerApiAtoms) {
        const command: ICommandId = `vscode-faker-js.${atom}`;

        const disposable = commands.registerCommand(command, async () => {
            const editor = window.activeTextEditor;

            if (!editor) {
                return;
            }

            const settings = getSettings();
            const faker = await getFakerInstanceAsync(settings.locale);
            const method = getFakerFunction(faker, atom);

            if (typeof method !== 'function') {
                return;
            }

            const languageId =
                settings.language === '*'
                    ? (editor.document.languageId as LanguageIdentifier)
                    : settings.language;

            const stringify = getStringifyInstance(languageId, settings);

            editor.edit((editBuilder) => {
                editor.selections.forEach(({ start, end }) => {
                    const range = new Range(start, end);
                    // @ts-ignore
                    // [TS2349]: Signatures of union doesn't compatible with each other
                    const data = method();

                    editBuilder.replace(range, stringify.from(data));
                });
            });
        });

        context.subscriptions.push(disposable);
    }
}

export function deactivate() {}
