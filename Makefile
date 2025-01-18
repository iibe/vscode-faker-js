build: extension-build codegen-build

extension-build:
	tsup --config tsup.config.ts

extension-watch:
	tsup --config tsup.config.ts --watch

codegen-build:
	tsup --config tsup.config.codegen.ts --onSuccess "node ./.vscode-codegen.mjs"

codegen-watch:
	tsup --config tsup.config.codegen.ts --onSuccess "node ./.vscode-codegen.mjs" --watch
