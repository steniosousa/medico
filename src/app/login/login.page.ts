import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from '@firebase/auth';

import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = '';
  result = '';
  password = '';

  acessar:boolean = true;


  constructor(
    private readonly auth: Auth,
    private router: Router,

  ) { }

  ngOnInit() {
  }
  async logar(){
    const result = await signInWithEmailAndPassword(this.auth, this.email, this.password);
    this.router.navigate(['/folder/home'])
  }
  cadastro(){
    this.router.navigate(['./cadastro'])
  }
  recuperar(){
    this.router.navigate(['/recuperar-senha'])
  }

}
