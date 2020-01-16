import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup ({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  
  send() {
    if (this.form.valid) {
      const isAuth = this.authService.login(
        this.form.get('login').value,
        this.form.get('password').value
      );
      if (isAuth) {
            this.router.navigate(['/products']);

      } else {
        alert('wrong password');
      }
    }
  }

}
