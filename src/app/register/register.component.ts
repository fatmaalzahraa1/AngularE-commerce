import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  RegisterForm : FormGroup;
   nonWhitespaceRegExp: RegExp = new RegExp("\\S");


  constructor(private fb : FormBuilder){
    this.RegisterForm = this.fb.group({
      Name: ['', [Validators.required, Validators.minLength(3) , Validators.maxLength(10)]],
      Username: ['' , [Validators.required , Validators.pattern(this.nonWhitespaceRegExp)]],
      Email : ['' , [Validators.required , Validators.email]],
      pass: ['',  [Validators.required , Validators.pattern("(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")]]

    });
  }

  ngOnInit() : void{

  }

  submit(){
    console.log(this.RegisterForm)

  }
}