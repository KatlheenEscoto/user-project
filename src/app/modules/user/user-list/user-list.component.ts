import { Component, OnInit } from '@angular/core';
import { ITitleH1 } from '../../../shared/components/title/title-h1/ititle-h1.metadata';
import { ICardUser } from '../../../shared/components/card/card-user/icard-user.metadata';
import { USERS_DATA } from '../../../data/constants/user.const';
import { UsersService } from '../../../data/services/api/users.service';
import { ICarouselItem } from '../../../shared/components/carousel/icarousel-item.metadata';
import { CAROUSEL_DATA_ITEMS } from '../../../data/constants/carousel.const';

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

  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;

  public tasks:{ title: string }[] = [
    {
      title: 'Primer tarea'
    },
    {
      title: 'Segunda tarea'
    },
    {
      title: 'Tercer tarea'
    }
  ];

  public options: string[] = [
    'un',
    'dos',
    'tres',
    'cuatro', 
    'cinco',
    'ningún'
  ]

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


  trackByUserId(index, item) {
    return item.id;
  }

  addUser() {
    this.users.push(
      {
        id: 100,
        name: 'RosaElena Montano',
        age: 45,
        description: 'Madre',
        work: 'Directora Ejecutiva',
        avatar: 'https://www.edarabia.com/wp-content/uploads/2015/11/7-ways-to-become-the-person-everyone-respects.jpg'
      }
    );
  }

}
