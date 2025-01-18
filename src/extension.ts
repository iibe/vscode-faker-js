import { Faker } from '@faker-js/faker';
import type { ExtensionContext } from 'vscode';
import { commands, Range, window, workspace } from 'vscode';
import { fakerApiAtoms } from './core/atoms';
import { getFakerFunction, getFakerInstance } from './core/faker';
import { Stringify } from './stringify';
import type { IFakerCommandId, IFakerConfigType } from './types/faker';

const settings = workspace.getConfiguration('faker-js'); // from settings.json

const config: IFakerConfigType = {
    locale: settings.get('locale') ?? 'en',
    bigint: {
        insert: settings.get('bigint.insert') ?? 'literal',
    },
    string: {
        insert: settings.get('string.insert') ?? 'literal',
        quotes: settings.get('string.quotes') ?? 'single',
    },
    symbol: {
        quotes: settings.get('symbol.quotes') ?? 'single',
    },
};

const stringify = new Stringify(config);

export async function activate(context: ExtensionContext) {
    try {
        const faker = (await getFakerInstance(config.locale)) as unknown as Faker;

        for (const atom of fakerApiAtoms) {
            const commandId: IFakerCommandId = `vscode-faker-js.run.${atom}`;

            const disposable = commands.registerCommand(commandId, () => {
                const editor = window.activeTextEditor;

                if (!editor) {
                    return;
                }

                const method = getFakerFunction(faker, atom);

                if (typeof method !== 'function') {
                    window.showErrorMessage(
                        `Error: faker.${atom} doesn't exists in '${config.locale}' locale`
                    );
                    return;
                }

                const selections = editor.selections;

                editor.edit((editBuilder) => {
                    selections.forEach(({ start, end }) => {
                        const range = new Range(start, end);

                        //@ts-ignore [TS2349] Signatures of union doesn't compatible with each other
                        const content = method();

                        editBuilder.replace(range, stringify.from(content));
                    });
                });
            });

            context.subscriptions.push(disposable);
        }
    } catch (error) {
        window.showErrorMessage(`Faker: ${error}`);
    }
}

export function deactivate() {}
