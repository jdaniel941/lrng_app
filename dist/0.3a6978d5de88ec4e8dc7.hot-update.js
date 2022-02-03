"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 24:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigService = void 0;
const users_entity_1 = __webpack_require__(25);
(__webpack_require__(4).config)();
class ConfigService {
    constructor(env) {
        this.env = env;
    }
    getValue(key, throwOnMissing = true) {
        const value = this.env[key];
        if (!value && throwOnMissing) {
            throw new Error(`config error - missing env.${key}`);
        }
        return value;
    }
    ensureValues(keys) {
        keys.forEach((k) => this.getValue(k, true));
        return this;
    }
    getPort() {
        return this.getValue("PORT", true);
    }
    isProduction() {
        const mode = this.getValue("MODE", false);
        return mode != "DEV";
    }
    getTypeOrmConfig() {
        console.log({
            host: process.env.POSTGRES_HOST,
            port: parseInt(process.env.POSTGRES_PORT, 10),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DATABASE,
        });
        return {
            type: "postgres",
            host: process.env.POSTGRES_HOST,
            port: parseInt(process.env.POSTGRES_PORT, 10),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DATABASE,
            entities: [users_entity_1.Users],
            migrationsTableName: "migrations",
            migrations: ["src/migrations/*.ts"],
            cli: {
                migrationsDir: "src/migrations",
            },
            ssl: false,
        };
    }
}
exports.ConfigService = ConfigService;
exports["default"] = ConfigService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8f24bac1d618a5291f8e")
/******/ })();
/******/ 
/******/ }
;