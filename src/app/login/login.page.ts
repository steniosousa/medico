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
    console.log(result);
    this.router.navigate(['/folder/Inbox'])
  }
  cadastro(){
    this.router.navigate(['/cadastro'])
  }

}
