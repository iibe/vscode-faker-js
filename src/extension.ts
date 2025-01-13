import { Faker } from '@faker-js/faker';
import type { ExtensionContext } from 'vscode';
import { commands, Range, window, workspace } from 'vscode';
import { fakerAtoms } from './constants';
import { getFakerAsync, getFakerFunc } from './faker';
import type { ICommandId } from './types/extension';
import type { IFakerLocale } from './types/faker';

export async function activate(context: ExtensionContext) {
    const config = workspace.getConfiguration('faker-js');

    // We need to make sure, that `package.json` extension-specific key `configuration.properties` satisfies to `IFakerLocale` definition.
    const locale = config.get('locale') as IFakerLocale;

    try {
        const imported = await getFakerAsync(locale);
        const faker = imported.faker as unknown as Faker;

        for (const atom of fakerAtoms) {
            const commandId: ICommandId = `vscode-faker-js.run.${atom}`;

            const disposable = commands.registerCommand(commandId, () => {
                const editor = window.activeTextEditor;

                if (!editor) {
                    return;
                }

                const func = getFakerFunc(faker, atom);

                if (typeof func !== 'function') {
                    window.showErrorMessage(
                        `Error: faker.${atom} doesn't exists in '${locale}' locale`
                    );

                    return;
                }

                const selections = editor.selections;

                editor.edit((editBuilder) => {
                    selections.forEach(({ start, end }) => {
                        const range = new Range(start, end);

                        const result = func();
                        const string = stringify(result);

                        editBuilder.replace(range, string);
                    });
                });
            });

            context.subscriptions.push(disposable);
        }
    } catch (error) {
        window.showErrorMessage('Error: Faker activation is failed');
    }
}

export function deactivate() {}

/**
 * @private
 */
function stringify(entity: any): string {
    // prettier-ignore
    switch (true) {
        // case typeof entity === 'function': return stringify(entity());
        case typeof entity === 'object': return JSON.stringify(entity, null, 2);
        case typeof entity === 'string': return entity;
        case typeof entity === 'symbol': return entity.toString();
        default: return String(entity); // typeof null === 'object'
    }
}
