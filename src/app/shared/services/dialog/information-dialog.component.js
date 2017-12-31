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
var material_1 = require("@angular/material");
var core_1 = require("@angular/core");
var InformationDialog = (function () {
    function InformationDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    InformationDialog = __decorate([
        core_1.Component({
            selector: 'information-dialog',
            template: "\n        <p><b>{{ title }}</b></p>\n        <p>{{ message }}</p>\n        <button type=\"button\"  md-raised-button style=\"float: right;\" \n            (click)=\"dialogRef.close(true)\">{{ button1 }}</button>\n   \n    ",
        }),
        __metadata("design:paramtypes", [material_1.MdDialogRef])
    ], InformationDialog);
    return InformationDialog;
}());
exports.InformationDialog = InformationDialog;
//# sourceMappingURL=information-dialog.component.js.map