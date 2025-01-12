build: extension-build codegen-build

extension-build:
	tsup --config tsup.config.extension.ts

extension-watch:
	tsup --config tsup.config.extension.ts --watch

codegen-build:
	tsup --config tsup.config.codegen.ts --onSuccess "node ./dist/codegen.js"

codegen-watch:
	tsup --config tsup.config.codegen.ts --onSuccess "node ./dist/codegen.js" --watch
