import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function noHomeroValidator(): ValidatorFn{
  return(control: AbstractControl): ValidationErrors | null =>{
    if(control instanceof FormControl){
      if(typeof control.value === control.value?.toLowerCase().includes('homero')){
        return{
          noHomero: true,
        }
      }
    }
    return null;
  };
}

