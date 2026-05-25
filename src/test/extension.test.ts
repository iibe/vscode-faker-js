import { strictEqual as expect } from 'node:assert';

import * as vscode from 'vscode';

suite('Extension Test Suite', () => {
    vscode.window.showInformationMessage('Start all tests.');

    test('Sample test', () => {
        expect(-1, [1, 2, 3].indexOf(5));
        expect(-1, [1, 2, 3].indexOf(0));
    });
});
