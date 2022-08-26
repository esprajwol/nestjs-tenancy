"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectTenancyConnection = exports.InjectTenancyModel = void 0;
const common_1 = require("@nestjs/common");
const utils_1 = require("../utils");
exports.InjectTenancyModel = (model) => common_1.Inject(utils_1.getTenantModelToken(model));
exports.InjectTenancyConnection = (name) => common_1.Inject(utils_1.getTenantConnectionToken(name));
