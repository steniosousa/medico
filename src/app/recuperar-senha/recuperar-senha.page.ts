import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.page.html',
  styleUrls: ['./recuperar-senha.page.scss'],
})
export class RecuperarSenhaPage implements OnInit {


  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  cadastrar(){
    this.router.navigate(['/'])
  }
  sair(){
    this.router.navigate(['/'])
  }

}