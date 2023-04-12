"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunicatorService = void 0;
const tslib_1 = require("tslib");
const http_1 = require("@angular/common/http");
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let CommunicatorService = class CommunicatorService {
    constructor(http, loadingService) {
        this.http = http;
        this.loadingService = loadingService;
        this.isShowLoad = false;
        this.counterLoading = 0;
        this.requests = [];
    }
    http_post(url, body, tokenService) {
        const headers = new http_1.HttpHeaders({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: (tokenService === null || tokenService === undefined) ? '' : tokenService
        });
        this.showLoad();
        return this.http.post(url, body, { headers }).pipe(operators_1.tap(() => {
            this.hideLoad();
        }, error => {
            this.hideLoad();
            rxjs_1.throwError(error);
        }));
    }
    http_get(url, tokenService) {
        const headers = new http_1.HttpHeaders({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: (tokenService === null || tokenService === undefined) ? '' : tokenService
        });
        this.showLoad();
        return this.http.get(url, { headers }).pipe(operators_1.tap(() => {
            this.hideLoad();
        }, error => {
            this.hideLoad();
            rxjs_1.throwError(error);
        }));
    }
    http_put(url, tokenService, data) {
        const headers = new http_1.HttpHeaders({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: (tokenService === null || tokenService === undefined) ? '' : tokenService
        });
        this.showLoad();
        return this.http.put(url, data, { headers }).pipe(operators_1.tap(() => {
            this.hideLoad();
        }, error => {
            this.hideLoad();
            rxjs_1.throwError(error);
        }));
    }
    showLoad() {
        this.counterLoading++;
        if (this.isShowLoad) {
            return;
        }
        this.isShowLoad = true;
        this.loadingService.setStateLoading(true);
        this.requests.push(this.isShowLoad);
    }
    hideLoad() {
        this.counterLoading--;
        this.requests.splice(0, 1);
        if (this.requests.length === 0 && this.counterLoading === 0) {
            this.isShowLoad = false;
            this.loadingService.setStateLoading(false);
        }
    }
};
CommunicatorService = tslib_1.__decorate([
    core_1.Injectable()
], CommunicatorService);
exports.CommunicatorService = CommunicatorService;
//# sourceMappingURL=communicator.service.js.map