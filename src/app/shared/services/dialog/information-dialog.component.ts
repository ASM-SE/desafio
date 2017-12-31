import { MatDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'information-dialog',
    template: `
        <div class="content-center-align">
        <b>{{ title }}</b>
        <hr>
        {{ message }}
        <hr>
        <button type="button" class="close" (click)="dialogRef.close(true)">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>
    `,
})
export class InformationDialog {

    public title: string;
    public message: string;
    public button1: string;

    constructor(public dialogRef: MatDialogRef<InformationDialog>) {

    }
}
