import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserFormDialogComponent } from './components/user-form-dialog/user-form-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    UsersComponent,
    UserFormDialogComponent,

  ],
  imports: [
    CommonModule,
    SharedModule,

  ],
  exports:[
    UsersComponent,
  ]
})
export class UsersModule { }
