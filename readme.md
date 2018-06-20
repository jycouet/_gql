# _gql

Simple example of how to you gql!

## How to start

1. `yarn`
1. `yarn _gql-all`
1. `yarn api`
1. **WoW that's it?!**
1. yes! //have fun
1. `yarn build` is linting and building (check that there is **no any**!!!)

## How to create a new gql_modules

1. add a folder under `gql_modules` with the name of your module
1. create 2 folders `types` and `resolvers` (todo: generate resolvers)
1. create a file `.gitignore` to exclude `_gql/*` from git
1. add files for types and resolvers
1. generate files with `yarn _gql-all`

## Benefits

- You write only `types` and `resolvers-typed`
- All the rest to manage resolvers, schemas, is handle in the generation step!

## tips: 

To remove all .gitignore files like _gql... do: `git clean -xdf`

Generate only models `yarn _gql-models`