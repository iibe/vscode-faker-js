/**
 * Mechanism to avoid circular dependencies.
 * @see https://medium.com/visual-development/how-to-fix-nasty-circular-dependency-issues-once-and-for-all-in-javascript-typescript-a04c987cf0de
 *
 * 1. The main `./src/syntax/index.ts` file imports and exports everything in `./src/syntax/**`;
 * 1. Other modules in the project only import from `./src/syntax/index.ts`, and never directly from other `./src/syntax/**` files.
 * 1. Note: this step only matters if you are publishing a library that is used by others. So in our case we skipped this step. But still, usually `./src/index.ts` is the main entry point and imports and exports everything from `./src/syntax/index.ts` to expose it to the outside world.
 */

export * from './syntax';

export * from './javascript';
export * from './python';

export * from './api';

// NOTE: New lines are required to preserve an order of exports (doesn't triggers "source.organizeImports" action).
