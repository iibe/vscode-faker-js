import type { ExtensionContext } from 'vscode';
import { commands, Range, window } from 'vscode';
import { fakerApiAtoms } from './base/atoms';
import { createFakerAsync, getFakerFunction } from './faker';
import { createSettings } from './settings';
import { createStringify } from './syntax';
import { ICommandId } from './types/manifest';
import { LanguageIdentifier } from './types/vscode';

export function activate(context: ExtensionContext) {
    for (const atom of fakerApiAtoms) {
        const command: ICommandId = `vscode-faker-js.${atom}`;

        const disposable = commands.registerCommand(command, async () => {
            const editor = window.activeTextEditor;

            if (!editor) {
                return;
            }

            const settings = createSettings();
            const faker = await createFakerAsync(settings.locale);

            const procedure = getFakerFunction(faker, atom);

            if (typeof procedure !== 'function') {
                return;
            }

            const languageId = editor.document.languageId as LanguageIdentifier;
            const language = settings.syntax === '*' ? languageId : settings.syntax;
            const stringify = createStringify(language, settings);

            editor.edit((editBuilder) => {
                editor.selections.forEach(({ start, end }) => {
                    const range = new Range(start, end);
                    // @ts-ignore
                    // [TS2349]: Signatures of union doesn't compatible with each other
                    const data = procedure();

                    editBuilder.replace(range, stringify.from(data));
                });
            });
        });

        context.subscriptions.push(disposable);
    }
}

export function deactivate() {}
