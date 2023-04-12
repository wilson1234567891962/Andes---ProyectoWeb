"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
const environment_prod_1 = require("../../environments/environment.prod");
const environment_dev_1 = require("../../environments/environment.dev");
let LoginService = class LoginService {
    constructor(communicatorService) {
        this.communicatorService = communicatorService;
        this._user = '';
        this._password = '';
        this._tokenSecret = '';
        this._rol = '';
        this.URL_SERVICES = window.location.host.includes('localhost') ? environment_dev_1.environmentDev.URL_BACKEND_LOCAL : environment_prod_1.environmentProd.URL_PRODUCTION;
    }
    login() {
        const body = {
            email: this.user,
            password: this.password
        };
        return this.communicatorService.http_post(this.URL_SERVICES + 'login/', body);
    }
    register(email, password) {
        const body = {
            email,
            password
        };
        return this.communicatorService.http_post(this.URL_SERVICES + 'register/', body);
    }
    forgetPassword(email) {
        const body = {
            email
        };
        return this.communicatorService.http_post(this.URL_SERVICES + 'forgetPassword/', body);
    }
    get user() {
        return this._user;
    }
    set user(value) {
        this._user = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    get tokenSecret() {
        return this._tokenSecret;
    }
    set tokenSecret(value) {
        this._tokenSecret = value;
    }
    get rol() {
        return this._rol;
    }
    set rol(value) {
        this._rol = value;
    }
};
LoginService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map