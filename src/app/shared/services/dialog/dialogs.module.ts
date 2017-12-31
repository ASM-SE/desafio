import { DialogsService } from './dialogs.service';
import { MatDialogModule, MatButtonModule  } from '@angular/material';
import { NgModule } from '@angular/core';

import { ConfirmDialog }   from './confirm-dialog.component';
import { InformationDialog } from './information-dialog.component';

@NgModule({
    imports: [
        MatDialogModule,
        MatButtonModule,
    ],
    exports: [
        ConfirmDialog,
        InformationDialog,
    ],
    declarations: [
        ConfirmDialog,
        InformationDialog,
    ],
    providers: [
        DialogsService,
    ],
    entryComponents: [
        ConfirmDialog,
        InformationDialog
    ],
})
export class DialogsModule { }
