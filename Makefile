app_name := vscode-faker-js
app_version := 10.4.0

include Makefile.mk

cspell := npx cspell --gitignore --words-only --unique
eslint := eslint
prettier := npx prettier
tsc := tsc
vsce_package := npx vsce package --no-dependencies --no-git-tag-version

# ------------------------------------------------------------------------------
# ARTIFACTS AND DEPENDENCIES
# ------------------------------------------------------------------------------

setup: ;

install:
	pnpm install

update:
	pnpm dlx npm-check-updates

uninstall: ;

clean:
	git clean -Xdff

# ------------------------------------------------------------------------------
# SYNTAX AND SEMANTIC
# ------------------------------------------------------------------------------

format:
	$(prettier) --check ./

format-fix:
	$(prettier) --write ./

lint:
	$(eslint) ./

lint-fix:
	$(eslint) --fix ./

typos:
	$(cspell) ./ | sort --ignore-case > ./.cspell.txt

typecheck:
	$(tsc) --noEmit

# ------------------------------------------------------------------------------
# CONTINUOUS INTEGRATION
# ------------------------------------------------------------------------------

dev: ;

build: _build

run: ;

test-unit: ;

test-integration: ;

test-functional: ;

test-e2e: ;

test-smoke: ;

docs: ;

coverage: ;

performance: ;

bandwidth: ;

profile: ;

# ------------------------------------------------------------------------------
# CONTINUOUS DELIVERY
# ------------------------------------------------------------------------------

release:
	rm -rf ./generated/$(app_name)-$(app_version).vsix && \
	$(vsce_package) --out="./generated/" $(app_version)

staging: release
	code --install-extension ./generated/$(app_name)-$(app_version).vsix

production: ;

deploy:
	npx vsce publish --no-dependencies

undeploy:
	npx vsce unpublish iibe.$(app_name)

operate: ;

monitor: ;

analyze: ;

# ------------------------------------------------------------------------------
# INTERNAL TARGETS
# ------------------------------------------------------------------------------

.PHONY: _build
_build: _tsup_extension_build _tsup_codegen_build
	node ./generated/codegen.js

.PHONY: _tsup_extension_dev
_tsup_extension_dev:
	npx tsup --silent --watch --onSuccess "node ./out/extension.js"

.PHONY: _tsup_extension_build
_tsup_extension_build:
	npx tsup

.PHONY: _tsup_codegen_dev
_tsup_codegen_dev:
	npx tsup --silent --watch --onSuccess "node ./generated/codegen.js" \
	--config tsup.config.codegen.ts

.PHONY: _tsup_codegen_build
_tsup_codegen_build:
	npx tsup --config tsup.config.codegen.ts

.PHONY: _test_lifecycle
_test_lifecycle:
	npx tsx watch ./src/test/lifecycle.ts
