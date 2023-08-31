import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private readonly loginService: LoginService, private readonly router: Router) {

  }
  login({ email, password }: any) {
    this.loginService.login({ email, password }).subscribe(() => {
      this.router.navigate(['/'])
    });
  }
}
