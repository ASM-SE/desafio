"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dialogs_service_1 = require("./dialogs.service");
var material_1 = require("@angular/material");
var core_1 = require("@angular/core");
var confirm_dialog_component_1 = require("./confirm-dialog.component");
var information_dialog_component_1 = require("./information-dialog.component");
var DialogsModule = (function () {
    function DialogsModule() {
    }
    DialogsModule = __decorate([
        core_1.NgModule({
            imports: [
                material_1.MdDialogModule,
                material_1.MdButtonModule,
            ],
            exports: [
                confirm_dialog_component_1.ConfirmDialog,
                information_dialog_component_1.InformationDialog,
            ],
            declarations: [
                confirm_dialog_component_1.ConfirmDialog,
                information_dialog_component_1.InformationDialog,
            ],
            providers: [
                dialogs_service_1.DialogsService,
            ],
            entryComponents: [
                confirm_dialog_component_1.ConfirmDialog,
                information_dialog_component_1.InformationDialog
            ],
        })
    ], DialogsModule);
    return DialogsModule;
}());
exports.DialogsModule = DialogsModule;
//# sourceMappingURL=dialogs.module.js.map