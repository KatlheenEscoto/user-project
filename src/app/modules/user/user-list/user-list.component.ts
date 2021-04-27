import { Component, OnInit } from '@angular/core';
import { ITitleH1 } from '../../../shared/components/title-h1/title-h1.metadata';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  title: ITitleH1 = {
    type: 'primary',
    text: 'Lista de Usuarios'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
