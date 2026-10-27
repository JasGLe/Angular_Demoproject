import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm {
login = new FormControl('', Validators.required);
pwd = new FormControl('',Validators.required);

FormUser = new FormGroup({
  name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  email: new FormControl('', [Validators.required, Validators.email]),
  cin: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{8}$/)]),
  tel: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{8}$/)]),
  adresse: new FormControl('', [Validators.required]),
});
save(){ 
  console.log(this.login);}

}
