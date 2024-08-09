"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const platform_ws_1 = require("@nestjs/platform-ws");
const app_module_1 = require("./app.module");
const error_interceptor_1 = require("./error/error.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalInterceptors(new error_interceptor_1.ErrorInterceptor());
    app.useWebSocketAdapter(new platform_ws_1.WsAdapter(app));
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map