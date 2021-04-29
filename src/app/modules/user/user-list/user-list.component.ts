import { Component, OnInit } from '@angular/core';
import { ITitleH1 } from '../../../shared/components/title/title-h1/ititle-h1.metadata';
import { ICardUser } from '../../../shared/components/card/card-user/icard-user.metadata';
import { USERS_DATA } from '../../../data/constants/user.const';
import { UsersService } from '../../../data/services/api/users.service';

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
  // public users: ICardUser[] = USERS_DATA;
  public users: ICardUser[];

  constructor(
    private usersService: UsersService
  ) { 
    this.getAllUsers();
  }

  ngOnInit(): void {

  }

  /*
    GET All Users.
  */

  getAllUsers() {
    this.usersService.getAllUsers().subscribe(
      response => {
        if ( !response.error ) {
          this.users = response.data;
        } else {
          console.log( response.msg );
        }
      }
    )
  }

}
