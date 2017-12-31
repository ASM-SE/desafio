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
var confirm_dialog_component_1 = require("./confirm-dialog.component");
var information_dialog_component_1 = require("./information-dialog.component");
var material_1 = require("@angular/material");
var core_1 = require("@angular/core");
var DialogsService = (function () {
    function DialogsService(dialog) {
        this.dialog = dialog;
    }
    DialogsService.prototype.confirm = function (title, message, button1, button2) {
        var dialogRef;
        dialogRef = this.dialog.open(confirm_dialog_component_1.ConfirmDialog);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        dialogRef.componentInstance.button1 = button1;
        dialogRef.componentInstance.button2 = button2;
        return dialogRef.afterClosed();
    };
    DialogsService.prototype.information = function (title, message, button1) {
        var dialogRef;
        dialogRef = this.dialog.open(information_dialog_component_1.InformationDialog);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        dialogRef.componentInstance.button1 = button1;
        return dialogRef.afterClosed();
    };
    DialogsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [material_1.MdDialog])
    ], DialogsService);
    return DialogsService;
}());
exports.DialogsService = DialogsService;
//# sourceMappingURL=dialogs.service.js.map