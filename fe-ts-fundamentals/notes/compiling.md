# 08 - 19 -23
## Compiling
- First time writing a ts program and using complier (tsc) via cli
- learn how understand how js language level and module type impact output of complier
- see type info that can be published along with code using declaration file

## project structure
- /package.json ( package manifest )
    * ```
       {
        'name':'hello-ts',
        'license': 'NOLICENSE',
        'devDependencies':{
            // only one dev dependency
            'typescript':'^4.3.2'
        },
            'scripts':{
                // enable npm script to do yarn/npm dev
                // keep console output
                'dev':'tsc --watch --preserveWatchOutput'
            }
       }
      ```

- /tsconfig.json ( ts complier settings ) * contains instructions, options passed to complier
    * ```
        {
            'compilerOptions': {
                // where to put TS files
                'outDir' : 'dist',
                // level of js support to target
                'target' : 'ES3'
            },
            // where to find source code
            'include' : ['src']
        }
      ```


- /src/index.ts ( 'the program' - source code )
    * makes changes to 'target' in tsconfig.json obvious
        - use of built in Promise constructor
        - use of async, await
    * [project folder](../project/src/index.ts)
    - __GETTING IT TO ACTUALLY RUN__
        1. cd /src -> `npm install -g yarn`
        2. `yarn add typescript --dev` -> `npm install -g typescript` -> `yarn dev`
    - __After running above commands__
        1. generates a dist/ with index.js
            - has polyfills, async, await, promises
        2. generate a node_modules
    - index.d.t.s (generated via `declaration:true` in [ts-config](../project/tsconfig.json))
        * contains types stripped from source code
        * complier creates js file that runs and ts file with types describing constraints  = typescript
    - nodejs predates standardized js modules
        * running node with index.js, results in error with export
