import * as vscode from 'vscode';
import { setOfApiKeys } from './base/atoms.js';
import { getConfigOpt } from './extension-config.js';
import { getFakerFunction, importFaker } from './faker.js';
import { createStringify } from './syntax/factory.js';
import { IConfigOption } from './types/extension-config.js';
import type { ICommandId } from './types/extension-manifest.js';
import type { FakerLocale, IFakerFnName } from './types/faker.js';
import type { LanguageID } from './types/vscode.js';

function registerCommand(cmdName: IFakerFnName): vscode.Disposable {
    const cmd: ICommandId = `vscode-faker-js.${cmdName}`;

    return vscode.commands.registerCommand(cmd, async () => {
        const editor = vscode.window.activeTextEditor;

        if (!editor) {
            return;
        }

        const settings = getConfigurationAll();
        const faker = await importFaker(settings.locale);

        const fn = getFakerFunction(faker, cmdName);

        if (typeof fn !== 'function') {
            return;
        }

        const languageId = editor.document.languageId as LanguageID;
        const language = settings.syntax === '*' ? languageId : settings.syntax;
        const stringify = createStringify(language, settings);

        editor.edit((editBuilder) => {
            editor.selections.forEach(({ start, end }) => {
                const range = new vscode.Range(start, end);

                // @ts-ignore
                // [TS2349]: Signatures of union doesn't compatible with each other
                const data = fn();

                editBuilder.replace(range, stringify.from(data));
            });
        });
    });
}

const onDidChangeConfiguration = vscode.workspace.onDidChangeConfiguration(
    async (evt) => {
        if (evt.affectsConfiguration('faker-js.locale')) {
        }
    }
);

export function activate(ctx: vscode.ExtensionContext) {
    let config = vscode.workspace.getConfiguration('faker-js');
    let locale: FakerLocale = getConfigOpt<IConfigOption>(
        config,
        'locale',
        'en'
    );

    for (const atom of setOfApiKeys) {
        const command = registerCommand(atom);
        ctx.subscriptions.push(command);
    }

    ctx.subscriptions.push(onDidChangeConfiguration);
}

export function deactivate() {}
