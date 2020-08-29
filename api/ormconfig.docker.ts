// TODO: this file might need rework. Why are there two of them?
//@ts-ignore
var entityContext = require.context('./src', true, /\.schema\.ts$/);

//@ts-ignore
var migrationContext = require.context('./src/migrations', true, /\*\.ts$/);
;

console.log('found entities', entityContext.keys().length);
console.log('found migrations', entityContext.keys().length);

const config = {
    "type": "postgres",
    "host": "localhost",
    "port": 4281,
    "username": "dev",
    "password": "HeronDev",
    "database": "heron",
    "syncronize": true,
    "logging": ['info', 'schema', 'error', 'warn'],
    "entities": [
        "src/modules/heros/hero.schema.ts"
        // ...entityContext.keys().map(id => {
        //     const entityModule = entityContext(id);
        //     // We must get entity from module (commonjs)
        //     // Get first exported value from module (which should be entity class)
        //     const [entity] = Object.values(entityModule);
        //     return entity;
        // }),
    ],
    "migrations": [
        "src/migrations/1598507390911-CreateHeroTable.ts"
        // ...migrationContext.keys().map(id => {
        //     const entityModule = migrationContext(id);
        //     // We must get entity from module (commonjs)
        //     // Get first exported value from module (which should be entity class)
        //     const [entity] = Object.values(entityModule);
        //     return entity;
        // }),
    ],
    "migrationsRun": true
 }

 export default config;