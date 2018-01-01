import { Observable } from 'rxjs/Rx';
import { ConfirmDialog } from './confirm-dialog.component';
import { ConfirmInputDialog } from './confirm-input-dialog.component';
import { InformationDialog } from './information-dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class DialogsService {

    private name : string;

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

    public confirmInput(title: string, message: string,  button1: string, button2: string): Observable<boolean> {
        let dialogRef: MatDialogRef<ConfirmInputDialog>;
        dialogRef = this.dialog.open(ConfirmInputDialog, {
            width: '250px',
            autoFocus: false,
            data: { name: this.name }
          });
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
            {height: '280px',width: '500px'}
        );
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        return dialogRef.afterClosed();
    }
}
