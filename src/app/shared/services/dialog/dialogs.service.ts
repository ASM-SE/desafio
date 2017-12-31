import { Observable } from 'rxjs/Rx';
import { ConfirmDialog } from './confirm-dialog.component';
import { InformationDialog } from './information-dialog.component';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class DialogsService {

    constructor(private dialog: MatDialog) { }

    public confirm(title: string, message: string,  button1: string, button2: string): Observable<boolean> {
        let dialogRef: MatDialogRef<ConfirmDialog>;
        dialogRef = this.dialog.open(ConfirmDialog);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        dialogRef.componentInstance.button1 = button1;
        dialogRef.componentInstance.button2 = button2;
        return dialogRef.afterClosed();
    }

    public information(title: string, message: string): Observable<boolean> {
        let dialogRef: MatDialogRef<InformationDialog>;
        dialogRef = this.dialog.open(
            InformationDialog , 
            {height: '280px',width: '500px', autoFocus: false}
        );
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        return dialogRef.afterClosed();
    }
}
