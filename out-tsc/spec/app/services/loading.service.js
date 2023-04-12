"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let LoadingService = class LoadingService {
    constructor() {
        this.state = false;
    }
    setStateLoading(state) {
        this.state = state;
    }
    getStateLoading() {
        return this.state;
    }
};
LoadingService = tslib_1.__decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], LoadingService);
exports.LoadingService = LoadingService;
//# sourceMappingURL=loading.service.js.map