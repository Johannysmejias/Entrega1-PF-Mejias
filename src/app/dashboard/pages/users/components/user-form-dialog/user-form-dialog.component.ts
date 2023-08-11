import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { noHomeroValidator } from 'src/app/shared/utils/form-validators';

@Component({
  selector: 'app-user-form-dialog',
  templateUrl: './user-form-dialog.component.html',
  styleUrls: ['./user-form-dialog.component.scss']
})
export class UserFormDialogComponent {
  nameControl = new FormControl(null, [Validators.required, Validators.minLength(2), noHomeroValidator()]);
  surnameControl = new FormControl();
  emailControl = new FormControl();
  edadControl = new FormControl();
  cumpleaniosControl = new FormControl();
  cursoControl = new FormControl();
  top10Control = new FormControl(false);
 

  userForm = new FormGroup({
    Nombre: this.nameControl,
    Apellido:this.surnameControl,
    email:this.emailControl,
    edad:this.edadControl,
    cumpleanios:this.cumpleaniosControl,
    curso: this.cursoControl,
    top10: this.top10Control
  });


  constructor(private dialogRef : MatDialogRef<UserFormDialogComponent>){

  }
  onSubmit():void {
    this.dialogRef.close(this.userForm.value)

  }
}




