# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change.

Please note we have a code of conduct, please follow it in all your interactions with the project.

## Debugging

1. Open `./src/extension.ts` file;
1. Press `F5` or type `Debug: Start Debugging` in command palette.

## Testing

1. Run VSCode as administrator to avoid permission issues. To do this, right-click the Visual Studio Code icon and select `Run as administrator`.
1. Run `test` command.

## Coding

1. Make changes to the code in the `./src` directory.
1. Run `format:fix`, `lint:check` and `typecheck` commands to make sure everything is fine with types and appearance of the codebase.
1. Run `release` command to create new release. It automatically generates and overrides extension-specific `package.json` fields such as `contributes`, `activationEvents`, etc.
1. Run `production` command to deploy extension to Azure.

## Deployment

Before running the `production` command, it is best to test extension in local environment.
To do this, either run the `staging` command (for non-insider/portable versions of VS Code) or install the extension manually:

1. Press `CTRL+SHIFT+P` to launch command palette;
2. Type `Extensions: Install from VSIX...`;
3. Select `*.vsix` extension.

If everything is working great, then run `production`.

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a
   build.
2. Update the README.md with details of changes to the interface, this includes new environment
   variables, exposed ports, useful file locations and container parameters.
3. Increase the version numbers in any examples files and the README.md to the new version that this
   Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
4. You may merge the Pull Request in once you have the sign-off of two other developers, or if you
   do not have permission to do that, you may request the second reviewer.

## Resources

A bunch of resources that might be useful during development process.

-   [VSCode API: Extension Manifest](https://code.visualstudio.com/api/references/extension-manifest)
-   [VSCode API: Contribution Points](https://code.visualstudio.com/api/references/contribution-points)
-   [Azure: Project Page](https://my-visual-studio-code.visualstudio.com/vscode)
-   [VSCode Marketplace: Management Page](https://marketplace.visualstudio.com/manage/publishers/iibe)
