"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 24:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.configService = void 0;
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
        return {
            type: "postgres",
            host: this.getValue("POSTGRES_HOST"),
            port: parseInt(this.getValue("POSTGRES_PORT")),
            username: this.getValue("POSTGRES_USER"),
            password: this.getValue("POSTGRES_PASSWORD"),
            database: this.getValue("POSTGRES_DATABASE"),
            entities: ["**/*.entity{.ts,.js}"],
            migrationsTableName: "migration",
            migrations: ["src/migrations/*.ts"],
            cli: {
                migrationsDir: "src/migration",
            },
            ssl: false,
        };
    }
}
const configService = new ConfigService(process.env).ensureValues([
    "POSTGRES_HOST",
    "POSTGRES_PORT",
    "POSTGRES_USER",
    "POSTGRES_PASSWORD",
    "POSTGRES_DATABASE",
]);
exports.configService = configService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("262605e93c25d67c4f28")
/******/ })();
/******/ 
/******/ }
;