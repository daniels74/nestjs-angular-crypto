"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoController = void 0;
const common_1 = require("@nestjs/common");
const crypto_service_1 = require("./crypto.service");
let CryptoController = exports.CryptoController = class CryptoController {
    constructor(cryptoservice) {
        this.cryptoservice = cryptoservice;
    }
    async trendingEight() {
        return await this.cryptoservice.trendingEight();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CryptoController.prototype, "trendingEight", null);
exports.CryptoController = CryptoController = __decorate([
    (0, common_1.Controller)('crypto'),
    __metadata("design:paramtypes", [crypto_service_1.CryptoService])
], CryptoController);
//# sourceMappingURL=crypto.controller.js.map