import { MatDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'confirm-dialog',
    template: `
        <div class="content-center-align">
        <p autofocus><b>{{ title }}</b></p>
        <p>{{ message }}</p>
        <button type="button" class="btn btn-danger" (click)="dialogRef.close(true)">{{ button1 }}</button>
        <button type="button" class="btn btn-success" (click)="dialogRef.close(false)">{{ button2 }}</button> 
        </div>    
    `,
})
export class ConfirmDialog {

    public title: string;
    public message: string;
    public button1: string;
    public button2: string;
    public name: string;
    constructor(public dialogRef: MatDialogRef<ConfirmDialog>) {

    }
}
