import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
let LoginService = class LoginService {
    constructor(communicatorService) {
        this.communicatorService = communicatorService;
        this._user = '';
        this._password = '';
        this._tokenSecret = '';
        this._rol = '';
    }
    login() {
        const body = {
            email: this.user,
            password: this.password
        };
        return this.communicatorService.http_post(environment.URL_PRODUCTION + 'login/', body);
    }
    register(email, password) {
        const body = {
            email,
            password
        };
        return this.communicatorService.http_post(environment.URL_PRODUCTION + 'register/', body);
    }
    forgetPassword(email) {
        const body = {
            email
        };
        return this.communicatorService.http_post(environment.URL_PRODUCTION + 'forgetPassword/', body);
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
LoginService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LoginService);
export { LoginService };
//# sourceMappingURL=login.service.js.map