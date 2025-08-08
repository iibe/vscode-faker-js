import type { ExtensionContext } from 'vscode';
import { commands, Range, window } from 'vscode';
import { fakerApiAtoms } from './base/atoms';
import { createFaker, getFakerFunction } from './faker';
import { getSettings } from './settings';
import { createStringify } from './syntax';
import type { ICommandId } from './types/manifest';
import type { VscodeLanguageIdentifier } from './types/vscode';

export function activate(context: ExtensionContext) {
    for (const atom of fakerApiAtoms) {
        const command: ICommandId = `vscode-faker-js.${atom}`;

        const disposable = commands.registerCommand(command, async () => {
            const editor = window.activeTextEditor;

            if (!editor) {
                return;
            }

            const settings = getSettings();
            const faker = await createFaker(settings.locale);

            const fn = getFakerFunction(faker, atom);

            if (typeof fn !== 'function') {
                return;
            }

            const languageId = editor.document
                .languageId as VscodeLanguageIdentifier;
            const language =
                settings.syntax === '*' ? languageId : settings.syntax;
            const stringify = createStringify(language, settings);

            editor.edit((editBuilder) => {
                editor.selections.forEach(({ start, end }) => {
                    const range = new Range(start, end);
                    // @ts-ignore
                    // [TS2349]: Signatures of union doesn't compatible with each other
                    const data = fn();

                    editBuilder.replace(range, stringify.from(data));
                });
            });
        });

        context.subscriptions.push(disposable);
    }
}

export function deactivate() {}
