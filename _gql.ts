/// <reference types="node" />
import * as fs from 'fs';
import * as path from 'path';
import * as rimraf from 'rimraf';
import * as shell from 'shelljs';

const MODULES_DIR = './src/gql_modules/';
const INIT_CMD = 'cross-env TS_NODE_PROJECT=../../../tsconfig.json gql-gen --require ts-node/register --require tsconfig-paths/register --template graphql-codegen-typescript-mongodb-template --schema ./_gql/schema.ts --out ./_gql/models.ts';
const dirs = (p: string) => fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory());
const allModules = dirs(MODULES_DIR);
const baseDir = shell.pwd().toString();

console.log('_gql - Start');
const argAll = process.argv[2] === '--all'
const argModel = process.argv[2] === '--models'

if (argAll || argModel) {
  for (const moduleDir of allModules) {
    // 1 - delete _gql folder or models.ts
    shell.cd(baseDir);
    const dir = path.join(MODULES_DIR, moduleDir);
    if (argAll) {
      rimraf.sync(path.join(dir, '_gql'));
    } else {
      rimraf.sync(path.join(dir, '_gql', 'models.ts'));
    }

    if (argAll) {
      // 2 - create the directory _gql
      fs.mkdirSync(path.join(dir, '_gql'));

      // 3 - write all _gql static files
      writeModuleFiles(dir);
    }

    // 4 - generate graphql models
    shell.cd(dir);
    console.log('Initializing module: ' + shell.pwd().toString());
    shell.exec(INIT_CMD);
  }

  if (argAll) {
    writeGlobalFiles(baseDir, allModules);
  }
} else {
  console.error('you need arg --models or --all to use this script');
}

console.log('_gql - End');

function writeModuleFiles(dir: string) {
  const moduleContent = `import resolvers from './resolvers';
import typesDefs from './types';

export default {
  resolvers,
  typesDefs,
};
  `;
  fs.writeFileSync(path.join(dir, '_gql', 'module.ts'), moduleContent);

  const resolversContent = `import { fileLoader, mergeResolvers } from 'merge-graphql-schemas-temp';
import * as path from 'path';

const resolversArray = fileLoader(path.join(__dirname, '../resolvers'));

export default mergeResolvers(resolversArray);
`;
  fs.writeFileSync(path.join(dir, '_gql', 'resolvers.ts'), resolversContent);

  const schemaContent = `import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';
import typeDefs from './types';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs
})

export default schema;
`;
  fs.writeFileSync(path.join(dir, '_gql', 'schema.ts'), schemaContent);

  const typesContent = `import { fileLoader, mergeTypes } from 'merge-graphql-schemas-temp';
import * as path from 'path';

const typesArray = fileLoader(path.join(__dirname, '../types'));

export default mergeTypes(typesArray);
`;
  fs.writeFileSync(path.join(dir, '_gql', 'types.ts'), typesContent);
}

function writeGlobalFiles(dir: string, allModules: string[]) {
  const srcDir = path.join(dir, 'src');
  shell.cd(srcDir);
  rimraf.sync(path.join(srcDir, '_gql'));
  fs.mkdirSync(path.join(srcDir, '_gql'));

  const schemasContent = `import { makeExecutableSchema, mergeSchemas } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';
import resolvers from './resolvers';
import typeDefs from './typedefs';

const schemas: GraphQLSchema = mergeSchemas({
  schemas: [
    makeExecutableSchema({
      typeDefs
    })
  ],
  resolvers
});

export default schemas;
  `;
  fs.writeFileSync(path.join(srcDir, '_gql', 'schemas.ts'), schemasContent);

  let strImportModule = ``;
  let strModuleResolvers = ``;
  let strModuleType = ``;
  for (const moduleDir of allModules) {
    strImportModule += `import ${moduleDir}Module from '@${moduleDir}/_gql/module';
    `
    strModuleResolvers += `  ${moduleDir}Module.resolvers,
    `
    strModuleType += `  ${moduleDir}Module.typesDefs,
    `
  }
  const resolversContent = `import { mergeResolvers } from 'merge-graphql-schemas-temp';
${strImportModule}
export default mergeResolvers([
  ${strModuleResolvers}]);
  `;
  fs.writeFileSync(path.join(srcDir, '_gql', 'resolvers.ts'), resolversContent);

  const typeDefsContent = `import { mergeTypes } from 'merge-graphql-schemas-temp';
${strImportModule}
export default mergeTypes([
  ${strModuleType}]);
  `;
  fs.writeFileSync(path.join(srcDir, '_gql', 'typeDefs.ts'), typeDefsContent);

  let paths = ``
  for (const moduleDir of allModules) {
    paths += `"@${moduleDir}/*": ["./src/gql_modules/${moduleDir}/*"]
    `
  }
  console.log('you need to add in your tsconfig.json:', `
    "paths": 
    {
      "@graphql-global/*": ["./src/_gql/*"],
      ${paths}
    }`
  );
}