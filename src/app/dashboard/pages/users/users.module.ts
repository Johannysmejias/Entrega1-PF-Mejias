import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { PipesModule } from "../../../shared/pipes/pipes.module";
import {MatSelectModule} from '@angular/material/select';



@NgModule({
    declarations: [
        UsersComponent,
        UserFormDialogComponent,

    ],
    exports: [
        UsersComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        MatDialogModule,
        MatFormFieldModule,
        MatTableModule,
        PipesModule,
        MatSelectModule,
    ],
})
export class UsersModule { }
