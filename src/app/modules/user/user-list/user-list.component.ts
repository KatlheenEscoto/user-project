import { Component, OnInit } from '@angular/core';
import { ITitleH1 } from '../../../shared/components/title/title-h1/ititle-h1.metadata';
import { ICardUser } from '../../../shared/components/card/card-user/icard-user.metadata';
import { USERS_DATA } from '../../../data/constants/user.const';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  /* Titulo */
  title: ITitleH1 = {
    type: 'primary',
    text: 'Lista de Usuarios'
  }

  /* */
  public users: ICardUser[] = USERS_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
