import type { ExtensionContext } from 'vscode';
import { commands, Range, window } from 'vscode';
import { createFakerInstanceAsync, getFakerFunction } from './faker';
import { createSettings } from './settings';
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

            const settings = createSettings();
            const faker = await createFakerInstanceAsync(settings.locale);
            const method = getFakerFunction(faker, atom);

            if (typeof method !== 'function') {
                return;
            }

            const languageId = editor.document.languageId as LanguageIdentifier;
            const language = settings.syntax === '*' ? languageId : settings.syntax;
            const stringify = getStringifyInstance(language, settings);

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
