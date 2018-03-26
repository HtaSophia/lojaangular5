import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb:FormBuilder, 
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      email:    ['', Validators.required],
      password: ['', Validators.required]
    });    
  }

  login() {
    const val = this.form.value;

    if (val.email && val.password) {
        this.authService.login(val.email, val.password)
            .subscribe(
                () => {
                    console.log('Usuário logado com sucesso');
                    this.router.navigate(['/interna']);
                }
            );
    }
  }
}
