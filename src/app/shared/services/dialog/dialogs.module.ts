import { DialogsService } from './dialogs.service';
import { MatDialogModule, MatButtonModule  } from '@angular/material';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ConfirmDialog }   from './confirm-dialog.component';
import { InformationDialog } from './information-dialog.component';
import { ConfirmInputDialog } from './confirm-input-dialog.component';

@NgModule({
    imports: [
        MatDialogModule,
        MatButtonModule,
        FormsModule,
        MatFormFieldModule,
        MatFormFieldModule
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
