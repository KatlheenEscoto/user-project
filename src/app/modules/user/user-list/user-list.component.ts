import { Component, OnInit } from '@angular/core';
import { ITitleH1 } from '../../../shared/components/title/title-h1/ititle-h1.metadata';
import { ICardUser } from '../../../shared/components/card/card-user/icard-user.metadata';

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
  public users: ICardUser[] = [
    {
      id: 1,
      name: 'Rosa Montano',
      age: 45,
      description: 'Madre',
      work: 'Directora Ejecutiva',
      avatar: 'https://www.edarabia.com/wp-content/uploads/2015/11/7-ways-to-become-the-person-everyone-respects.jpg'
    },
    {
      id: 2,
      name: 'Diana Escoto',
      age: 29,
      description: 'Administradora de Empresas',
      avatar: 'https://blog.ucq.edu.mx/hs-fs/hubfs/Imagenes%20de%20blog/7C/iStock-638748420.jpg?width=600&name=iStock-638748420.jpg'
    },
    {
      id: 3,
      name: 'Kevin Escoto',
      age: 28,
      description: 'Hermano',
      work: 'Médico',
      avatar: 'https://static.diariofemenino.com/media/1447/significadosuenoseroticosmedico.png'
    },
    {
      id: 4,
      name: 'Reynaldo Escoto',
      age: 53,
      description: 'N/D',
      avatar: 'https://static.diariofemenino.com/media/1447/significadosuenoseroticosmedico.png'
    },
    {
      id: 5,
      name: 'Rosa Montano',
      age: 45,
      description: 'Directora Ejecutiva',
      avatar: 'https://www.edarabia.com/wp-content/uploads/2015/11/7-ways-to-become-the-person-everyone-respects.jpg'
    },
    {
      id: 6,
      name: 'Diana Escoto',
      age: 29,
      description: 'Administradora de Empresas',
      avatar: 'https://blog.ucq.edu.mx/hs-fs/hubfs/Imagenes%20de%20blog/7C/iStock-638748420.jpg?width=600&name=iStock-638748420.jpg'
    },
    {
      id: 7,
      name: 'Kevin Escoto',
      age: 28,
      description: 'Médico',
      avatar: 'https://static.diariofemenino.com/media/1447/significadosuenoseroticosmedico.png'
    },
    {
      id: 7,
      name: 'Reynaldo Escoto',
      age: 53,
      description: 'N/D',
      avatar: 'https://static.diariofemenino.com/media/1447/significadosuenoseroticosmedico.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
