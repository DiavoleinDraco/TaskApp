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
exports.TaskSchema = exports.Task1 = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Task1 = exports.Task1 = class Task1 {
};
__decorate([
    (0, mongoose_1.Prop)({
        unique: true,
        required: true,
        trim: true,
    }),
    __metadata("design:type", String)
], Task1.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        trim: true
    }),
    __metadata("design:type", String)
], Task1.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Task1.prototype, "done", void 0);
exports.Task1 = Task1 = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
    })
], Task1);
exports.TaskSchema = mongoose_1.SchemaFactory.createForClass(Task1);
//# sourceMappingURL=task-schema.js.map