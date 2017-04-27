import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "app/auth/auth.service";
import { User } from "app/auth/user.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public signinForm: FormGroup

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit () {
    const user = new User(this.signinForm.value.email, this.signinForm.value.password)
    this.authService.signIn(user)
      .subscribe(
        data => {
          this.authService.setCredentails(data)
          this.router.navigateByUrl('/')
       },
       error => console.error(error))
    this.signinForm.reset()
  }

  ngOnInit() {
    this.signinForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]),
      password: new FormControl(null, Validators.required)
    })
  }

}
