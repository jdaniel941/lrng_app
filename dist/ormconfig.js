"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormConfigFile = void 0;
const user_entity_1 = require("./src/entities/user.entity");
exports.ormConfigFile = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT, 10),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    synchronize: true,
    logging: true,
    entities: [user_entity_1.User],
    migrations: [__dirname + '/**/*.ts'],
    cli: {
        entitiesDir: 'dist/entities',
        migrationsDir: 'dist/migration',
    },
};
//# sourceMappingURL=ormconfig.js.map