# 04 - 17 - 24
# REFER TO THIS [ENTERPRISE JS](https://www.typescript-training.com/course/enterprise-v2/02-ts-library-zero-to-one/)
## gitignore + package.json
- Making a dir called `chat-stdlib`
    * going to be eventually imported into chat app and contains code, tests, linting
- `npx gitignore node` -> npx invokes bin for specified node package w/o package.json
    * npx is useful when running npm package that has an executable script
    * above command provides a gitignore for specified language/framework
- created package using `yarn init --yes` -> given name, packageManager with its version
    * indicate entry point using 'main', setting private to true (npm refuses to publish project)
        - in package.json, build -> build project, lint for best practices, test for running jest
        - use latest lts not latest node version in production -> `volta pin node@^18.18.2 yarn@^3.0.0`
            * manually inserted
            ```json
                "volta": {
                    "node": "18.18.2",
                    "yarn": "3.6.4"
                },
            ```
            * in order to upgrade node version, test node versions locally -> operate locally and validate then proceed to do so incrementally globally

## install ts, configure tsconfig.json
1. ts complier installation -> `yarn add -D typescript@~5.3.0` then tsconfig file (configure how ts compiles code) `yarn tsc --init`
2. in tsconfig.json, changed `target` with more up to date ES version -> defined `rootDir` as `src` -> types (specify types package in project) to `[]` -> enabled declarations `declaration:true` (ts source code compiles out to runnable js with given types), build output directory w/ `outDir:'dist'`
    - `stripInternal` (anything marked as @internal has types stripped out)
    - `esModuleInterop` set to true (requires all users of code to set to true for types to compile)
    - `skipLibCheck` set to false (want to make sure types being written are correct for all intended users)

* other configured settings,
    - set to true: strict, noImplicitAny, noImplicitThis, useUnknownInCatchVariables, noUnusedLocals, noUnusedParameters, exactOptionalPropertyTypes, noImplicitReturns, noUncheckedIndexAccess, noImplicitOverride, noPropertyAccessFromIndexSignature

* put 'include' at bottom of `tsconfig.json` in order to describe code we want to be type checked

## install eslint
- copied and pasted starter code into a new folder `src` into new file `index.ts`from [site](https://www.typescript-training.com/course/enterprise-v2/02-ts-library-zero-to-one/)
    - Function : take instance of error class -> string representation
    - Class: access to promise object (resolve, reject)

- then for `dir/package.json`, I performed (1) `yarn add -D eslint`, (2) `yarn add -D @types/eslint@8.0.0`, (3) `yarn` [ install linter and linting types ]

* had to change package.json @ `devDependencies`, set `eslint` and `@types/eslint` to `8.0.0` -> (run) `yarn` -> `yarn eslint --init`
    - for linter config, `yarn eslint --init` | `npm init @eslint/config`
        1. `check syntax and find problems` -> avoid error fatigue, provide good enough constraints
        2. using `js modules (import/export)` as commonJS is build output
        3. code runs in both browser and node (check both)
        4. config file format: js

* npm doesn't like `"http-error":"workspace:*"` in `chat/package.json` as its yarn based

## configure eslint
- in `.eslintrc.js`, changed content of module.exports[extends] to include
    ```js
        'plugin:@typescript-eslint/recommended',
        // include rules with types to perform linting
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ```
* also confirmed, that in parserOptions, `rootDir` is set to `__dirname`, and `project` set to `true`
* overrides checks in order as they appear, included a new override with files including new dir `tests`, env with node, jest set to true

- wasn't getting errors using `yarn lint` -> had to mod 'lint' rule to `yarn eslint src` v `"lint": "yarn eslint src --ext=.js --ext=.ts"`
    * silenced blockers
- Going to just look on, had to restart ESLint Extension after installing

## setup jest testing
- installing jest and babel, want to run .ts files on fly -> babel transpile to js, jest run tests

- install jest and babel, `yarn add -D jest @types/jest @babel/core @babel/preset-env @babel/preset-typescript`
- added test dir containing `index.tests.ts`
- in `tsconfig.json` changed `composite` to be true, option allows for prebuilt types and info that apply to specified parts of project
- in tests dir create a [tsconfig.json](./typescript-courses/packages/chat-stdlib/tsconfig.json) and new [.babelrc file](./typescript-courses/packages/chat-stdlib)
    * had to change import statement for `index.test.ts` and fixed spacing for `index.ts` for stringifyErrorValue -> (run) yarn build -> yarn test
- use babel, transform ts -> js once seamless (jest -> babe)

## setup test + watch script
- adding build script prior to build step in package.json -> `'test':'yarn build && yarn jest'`
- test watching
    * changed `package.json` to include watch commands via `--watch` flag and installed concurrently (`yarn add -D concurrently`) to have watch commands be running simultaneously `"watch": "yarn concurrently --names 'TS,JEST' -c 'red,blue' 'yarn watch-build' 'yarn watch-tests' ",`

## api reporting
## api documentation
## tsconfig strictness
