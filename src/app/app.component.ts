import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'home' },
    { title: 'Perfil', url: '/folder/Perfil', icon: 'person' },
    { title: 'Cadastro de médicos', url: '/folder/Cadastro', icon: 'heart' },
    { title: 'Sair', url: '/folder/', icon: 'exit' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
