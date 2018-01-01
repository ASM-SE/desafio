import {Component, Inject} from '@angular/core';
import {MatDialog, MatFormFieldModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'confirm-input-dialog',
    template: `
    <div class="content-center-align">
    <p><b>{{ title }}</b></p>
    <p>{{ message }}</p>
    <p><input autofocus [(ngModel)]="data.name"></p>
    <button type="button" class="btn btn-danger" (click)="dialogRef.close(data)">{{ button1 }}</button>
    <button type="button" class="btn btn-success" (click)="dialogRef.close(false)">{{ button2 }}</button> 
    </div>
    `,
})
export class ConfirmInputDialog {

    public title: string;
    public message: string;
    public button1: string;
    public button2: string;
    constructor(public dialogRef: MatDialogRef<ConfirmInputDialog>,
                @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }                
}
