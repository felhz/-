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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const fs = require("fs");
const path_1 = require("path");
const cats_service_1 = require("./cats/cats.service");
let AppController = class AppController {
    constructor(cat) {
        this.cat = cat;
    }
    getHello() {
        return 'ddd';
    }
    add(res) {
        const file = fs.readFileSync((0, path_1.join)(process.cwd(), 'carousel.html'));
        res.setHeader('Content-Type', 'text/html');
        return res.send(file);
    }
    upload(file) {
        console.log(file);
        return 'ok';
    }
    cookie(response, res) {
        console.log(res.cookies);
        response.header('Access-Control-Allow-Origin', 'http://staticlocal.eeo.im:5501');
        response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        response.header('Access-Control-Allow-Credentials', 'true');
        response.cookie('test1', 'test2221', {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
        });
        return 'cookie';
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('/download'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", common_1.StreamableFile)
], AppController.prototype, "add", null);
__decorate([
    (0, common_1.Post)('/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('files')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "upload", null);
__decorate([
    (0, common_1.Get)('/cookie'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "cookie", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)('/api'),
    __param(0, (0, common_1.Inject)(cats_service_1.CatsService)),
    __metadata("design:paramtypes", [Object])
], AppController);
//# sourceMappingURL=app.controller.js.map