#!/usr/bin/env sh

set -eu

__getting_started() {
    pnpm i -g yo generator-code
    yo code ./extension --extensionId="foobar" --pkgManager "pnpm"
}

__build_tsc() {
    rm -rf ./generated ./dist
    npx tsc
}

__tests_tsc() {
    rm -rf ./generated ./dist
    npx tsc
    npx mocha && npx vscode-test
}

__watch_tsc() {
    npx tsc --watch
}

__build_tsup() {
    rm -rf ./generated ./out
    npx tsup
}

__tests_tsup() {
    rm -rf ./generated ./out
    npx tsup
}

__deliver() {
    rm -rf ./generated

    npx tsup --config tsup.config.codegen.ts && node ./generated/codegen.cjs
    npx vsce package --no-dependencies --no-git-tag-version --out="./generated"

    code --install-extension ./generated/vscode-faker-js-10.4.0.vsix

    npx vsce publish --no-dependencies

    # npx vsce unpublish iibe.vscode-faker-js
}
