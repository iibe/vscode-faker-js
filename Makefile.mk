make := $(MAKE) --silent

# ------------------------------------------------------------------------------
# GLOBALS
# ------------------------------------------------------------------------------

app_name := $(strip $(app_name))
app_version := $(strip $(app_version))

ifeq ($(app_name),)
    $(error <app_name> is unset)
endif

ifeq ($(app_version),)
    $(error <app_version> is unset)
endif

ifeq ($(shell echo '$(app_version)' | grep -E '^[0-9]+\.[0-9]+\.[0-9]+$$'),)
    $(error <app_version> doesn't follow SemVer format)
endif

# ------------------------------------------------------------------------------
# USAGE
# ------------------------------------------------------------------------------

help_header := printf "\n\033[1m%s\033[0m\n"
help_option := printf "  %-20s %s\n"

.DEFAULT_GOAL := help
.SILENT: help
.PHONY: help
help:
	printf '$(app_name) v$(app_version)\n'

	$(help_header) 'TARGETS'
	$(help_option) 'help'  'Shows documentation'
	$(help_option) 'begin' 'Run setup pipeline'
	$(help_option) 'end'   'Run cleanup pipeline'
	$(help_option) 'ci'    'Run CI pipeline'
	$(help_option) 'cd'    'Run CD pipeline (delivery)'
	$(help_option) 'test'  'Run all tests'

	$(help_header) 'ARTIFACTS AND DEPENDENCIES'
	$(help_option) 'setup'     'Setup environment'
	$(help_option) 'install'   'Install dependencies'
	$(help_option) 'update'    'Update dependencies'
	$(help_option) 'uninstall' 'Delete dependencies'
	$(help_option) 'clean'     'Delete artifacts'

	$(help_header) 'SYNTAX AND SEMANTIC'
	$(help_option) 'format'     'Run syntax check'
	$(help_option) 'format-fix' 'Run syntax fix'
	$(help_option) 'lint'       'Run semantic check'
	$(help_option) 'lint-fix'   'Run semantic fix'
	$(help_option) 'typos'      'Run spell checker'
	$(help_option) 'typecheck'  'Run type checker'

	$(help_header) 'CONTINUOUS INTEGRATION'
	$(help_option) 'dev'              'Build app in development mode'
	$(help_option) 'build'            'Build release-ready app'
	$(help_option) 'run'              'Run release-ready app'
	$(help_option) 'test-unit'        'Run unit tests'
	$(help_option) 'test-integration' 'Run integration tests'
	$(help_option) 'test-functional'  'Run functional tests'
	$(help_option) 'test-e2e'         'Run end-to-end tests'
	$(help_option) 'test-smoke'       'Run smoke tests'
	$(help_option) 'performance'      'Run runtime benchmarks'
	$(help_option) 'bandwidth'        'Run network benchmarks'
	$(help_option) 'docs'             'Generate documentation'
	$(help_option) 'coverage'         'Generate test coverage report'
	$(help_option) 'profile'          'Generate time-space usage report'

	$(help_header) 'CONTINUOUS DELIVERY'
	$(help_option) 'release'    'Prepare app for deployment'
	$(help_option) 'staging'    'Deliver app to stage environment'
	$(help_option) 'production' 'Deliver app to production environment'
	$(help_option) 'deploy'     'Deploy app in target environment'
	$(help_option) 'operate'    'Manage app after deployment'
	$(help_option) 'monitor'    'Monitor app metrics'
	$(help_option) 'analyze'    'Analyze app metrics'

# ------------------------------------------------------------------------------
# TARGETS
# ------------------------------------------------------------------------------

.PHONY: begin end ci cd test
.PHONY: setup install update uninstall clean
.PHONY: format format-fix lint lint-fix typos typecheck
.PHONY: dev build run
.PHONY: test-unit test-integration test-functional test-e2e test-smoke
.PHONY: performance bandwidth
.PHONY: docs coverage profile
.PHONY: release staging production deploy
.PHONY: operate monitor analyze

begin: setup install
end: uninstall clean
ci: format-fix lint typos typecheck test build
cd: release deploy
test: test-unit test-integration test-functional test-e2e test-smoke

