// TODO: load creds from .env even though this is only for dev.
const config = {
    "type": "postgres",
    "host": "localhost",
    "port": 4281,
    "username": "dev",
    "password": "HeronDev",
    "database": "heron",
    "syncronize": false,
    "logging": true,
    "entities": [
        "src/modules/heros/hero.schema.ts"
    ],
    "migrations": [
        "src/migrations/1598507390911-CreateHeroTable.ts"
    ],
    "migrationsRun": true
 }
export default config;
