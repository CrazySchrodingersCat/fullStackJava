import { FormControl } from '@angular/forms';

export function validateFileLocation(control: FormControl){
   if(control.value.includes('assets')){
        return null;
   }else{
       return { validateFileLocation: {valid: false} };
   }
}