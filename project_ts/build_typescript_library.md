# 04 - 17 - 24
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

## configure eslint
## setup jest testing
## setup test + watch script
## api reporting
## api documentation
## tsconfig strictness
