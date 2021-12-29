import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from '@firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = '';
  password = '';

  constructor(
    private readonly auth: Auth
  ) { }

  ngOnInit() {
  }
  async logar(){
    console.log(this.email);
    console.log(this.password)
    const result = await signInWithEmailAndPassword(this.auth, this.email, this.password);
    console.log(result);
  }
}
