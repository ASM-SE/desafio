import { DialogsService } from './dialogs.service';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmDialog }   from './confirm-dialog.component';
import { InformationDialog } from './information-dialog.component';
import { ConfirmInputDialog } from './confirm-input-dialog.component';

@NgModule({
    imports: [
        FormsModule,
        MatDialogModule
    ],
    exports: [
        ConfirmDialog,
        InformationDialog,
        ConfirmInputDialog
    ],
    declarations: [
        ConfirmDialog,
        InformationDialog,
        ConfirmInputDialog
    ],
    providers: [
        DialogsService,
    ],
    entryComponents: [
        ConfirmDialog,
        InformationDialog,
        ConfirmInputDialog
    ],
})
export class DialogsModule { }
