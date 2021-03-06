declare const config: {
    "type": string;
    "host": string;
    "port": number;
    "username": string;
    "password": string;
    "database": string;
    "syncronize": boolean;
    "logging": boolean;
    "entities": string[];
    "migrations": string[];
    "migrationsRun": boolean;
};
export default config;
