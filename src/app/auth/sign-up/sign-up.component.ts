import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "app/auth/auth.service";
import { User } from "app/auth/user.model";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  private signupForm: FormGroup

  constructor(private authService: AuthService) { }

  onSubmit () {
    const user = new User(this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.firstName)
    this.authService.signUp(user)
      .subscribe(
        data => console.log(data),
        error => console.error(error))
    this.signupForm.reset()
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]),
      password: new FormControl(null, Validators.required)
    })
  }

}