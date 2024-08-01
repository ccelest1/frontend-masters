# 04.18.24
- ts great for shape, api semantics
- course: understand wide range of utility types, aid in understanding challenging type information
-  using volta in order to be up to date for both node and yarn
    * ran `volta install node@lts yarn@^3`-> (ran) `yarn` -> cd notes-intermediate-ts-v2

## overview
2. declaration merging - stacking to create importable, exportable
3. top and bottom types - accept any values, accept no values
4. nullish values - values that may or may not be present
5. modules, cjs interop - native es modules (mjs) ran in browser, nodejs
6. generics, type params - applying constraints, scopes
7. conditional types - make types more reusable
8. inference w/ conditional types - transform types
9. mapped types - array.map for types, take interface and prod alt interface with different keys/classes/properties
10. type registry: revisited - based on passed in arguments have proper return type -> index access types
11. type param variance - covariance, contravariance, bivariance, invariance
