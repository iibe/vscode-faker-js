make := $(MAKE)

# See `name` and `version` in `package.json`
project_name := vscode-faker-js
project_version := 9.6.3

cspell := cspell --gitignore --words-only --unique
vsce := vsce package --out="./artifacts/" --no-dependencies --no-git-tag-version

# ------------------------------------------------------------------------------
# CORE
# ------------------------------------------------------------------------------

.DEFAULT_GOAL := help
.PHONY: help
help: _usage

.PHONY: init
init: deps-install

.PHONY: ci
ci: format lint typos test build

.PHONY: cd
cd: release deploy

# ------------------------------------------------------------------------------
# ARTIFACTS
# ------------------------------------------------------------------------------

.PHONY: deps-install
deps-install:
	pnpm install

.PHONY: deps-update
deps-update:
	npx npm-check-updates

.PHONY: deps-uninstall
deps-uninstall:
	rm -rf ./node_modules

.PHONY: clean
clean:
	rm -rf ./.vscode-test ./artifacts ./dist ./out

.PHONY: fresh
fresh: deps-uninstall clean deps-install

.PHONY: nuke
nuke:
	rm -rf ./pnpm-lock.yaml && $(make) fresh

# ------------------------------------------------------------------------------
# SYNTAX AND SEMANTIC
# ------------------------------------------------------------------------------

.PHONY: format
format:
	npx prettier --check ./

.PHONY: format-fix
format-fix:
	npx prettier --write ./

.PHONY: lint
lint:
	npx eslint ./src

.PHONY: lint-fix
lint-fix:
	npx eslint --fix ./src

.PHONY: typos
typos:
	npx $(cspell) ./ | sort --ignore-case > .cspell.txt

.PHONY: typecheck
typecheck:
	npx tsc --noEmit

# ------------------------------------------------------------------------------
# CONTINUOUS INTEGRATION
# ------------------------------------------------------------------------------

.PHONY: dev
dev: ;

.PHONY: build
build: _tsup_build

.PHONY: run
run: ;

.PHONY: test
test: test-unit test-integration test-functional test-e2e test-smoke

.PHONY: test-unit
test-unit: ;

.PHONY: test-integration
test-integration: ;

.PHONY: test-functional
test-functional: ;

.PHONY: test-e2e
test-e2e: ;

.PHONY: test-smoke
test-smoke: ;

.PHONY: docs
docs: ;

.PHONY: coverage
coverage: ;

.PHONY: performance
performance: ;

.PHONY: bandwidth
bandwidth: ;

.PHONY: profile
profile: ;

# ------------------------------------------------------------------------------
# CONTINUOUS DELIVERY
# ------------------------------------------------------------------------------

.PHONY: release
release: format-fix lint typos test build
	rm -rf ./artifacts/$(project_name)-$(project_version).vsix && \
	npx $(vsce) $(project_version)

.PHONY: staging
staging: release
	code --install-extension $(project_name)-$(project_version).vsix

.PHONY: production
production: release

.PHONY: deploy
deploy:
	npx vsce publish --no-dependencies

.PHONY: undeploy
undeploy:
	npx vsce unpublish iibe.$(project_name)

.PHONY: operate
operate: ;

.PHONY: monitor
monitor: ;

# ------------------------------------------------------------------------------
# INTERNAL TARGETS
# ------------------------------------------------------------------------------

.PHONY: _yeoman_dev
_yeoman_dev:
	npx tsc --watch

.PHONY: _yeoman_build
_yeoman_build:
	rm -rf ./dist && npx tsc

# TODO: Seems it doesn't work in WSL. Try it on Windows.
.PHONY: _yeoman_test
_yeoman_test: _yeoman_build
	npx mocha && npx vscode-test --label integration

.PHONY: _tsup_build
_tsup_build: _tsup_extension_build _tsup_codegen_build
	node ./artifacts/codegen.js

.PHONY: _tsup_codegen_dev
_tsup_codegen_dev:
	npx tsup --config tsup.config.codegen.ts \
	--silent --watch --onSuccess "node ./artifacts/codegen.js"

.PHONY: _tsup_codegen_build
_tsup_codegen_build:
	npx tsup --config tsup.config.codegen.ts

.PHONY: _tsup_extension_dev
_tsup_extension_dev:
	npx tsup --silent --watch --onSuccess "node ./out/extension.js"

.PHONY: _tsup_extension_build
_tsup_extension_build:
	npx tsup

.PHONY: _test_lifecycle
_test_lifecycle:
	npx tsx watch ./src/test/lifecycle.ts

# ------------------------------------------------------------------------------
# USAGE
# ------------------------------------------------------------------------------

.PHONY: _usage
_usage:
	@ printf '\033[1m%s\033[0m\n' 'PROJECT'
	@ printf '  $(project_name) v$(project_version)\n'

	@ printf '\n\033[1m%s\033[0m\n' 'USAGE'
	@ printf '  make <target>\n'
	@ printf '  make              Shows Makefile targets\n'
	@ printf '  make help         Shows Makefile targets\n'

	@ printf '\n\033[1m%s\033[0m\n' 'TARGETS: CORE'
	@ printf '  init              Prepares project for CI\n'
	@ printf '  ci                Runs CI\n'
	@ printf '  cd                Runs CD (delivery)\n'

	@ printf '\n\033[1m%s\033[0m\n' 'TARGETS: ARTIFACTS'
	@ printf '  deps-install      Installs local dependencies\n'
	@ printf '  deps-update       Updates local dependencies\n'
	@ printf '  deps-uninstall    Uninstalls local dependencies\n'
	@ printf '  clean             Removes artifacts (soft)\n'
	@ printf '  fresh             Runs "clean" and "deps-install"\n'
	@ printf '  nuke              Removes artifacts (hard) and runs "fresh"\n'

	@ printf '\n\033[1m%s\033[0m\n' 'TARGETS: SYNTAX AND SEMANTIC'
	@ printf '  format            Runs syntax check\n'
	@ printf '  format-fix        Runs syntax fix\n'
	@ printf '  lint              Runs semantic check\n'
	@ printf '  lint-fix          Runs semantic fix\n'
	@ printf '  typos             Runs spell checker\n'
	@ printf '  typecheck         Runs type checker\n'

	@ printf '\n\033[1m%s\033[0m\n' 'TARGETS: CONTINUOUS INTEGRATION'
	@ printf '  dev               Runs development mode\n'
	@ printf '  build             Generates production-ready app\n'
	@ printf '  run               Runs production-ready app\n'
	@ printf '  test              Runs "test-" targets\n'
	@ printf '  test-unit         Runs unit tests\n'
	@ printf '  test-integration  Runs integration tests\n'
	@ printf '  test-functional   Runs functional tests\n'
	@ printf '  test-e2e          Runs end-to-end tests\n'
	@ printf '  test-smoke        Runs smoke tests\n'
	@ printf '  docs              Generates documentation\n'
	@ printf '  coverage          Generates test coverage report\n'
	@ printf '  performance       Runs runtime benchmarks\n'
	@ printf '  bandwidth         Runs network benchmarks\n'
	@ printf '  profile           Generates time-space usage report\n'

	@ printf '\n\033[1m%s\033[0m\n' 'TARGETS: CONTINUOUS DELIVERY'
	@ printf '  release           Prepares new app version for deployment\n'
	@ printf '  staging           Delivers release to stage env\n'
	@ printf '  production        Delivers release to production env\n'
	@ printf '  deploy            Runs release in target env\n'
	@ printf '  operate           Manages release after deployment\n'
	@ printf '  monitor           Monitors release metrics\n'
