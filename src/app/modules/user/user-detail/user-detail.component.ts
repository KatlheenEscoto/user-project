import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICardUser } from '../../../shared/components/card/card-user/icard-user.metadata';
import { USERS_DATA } from '../../../data/constants/user.const';
import { UsersService } from '../../../data/services/api/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public id: number;
  public users: ICardUser[] = USERS_DATA;
  public currentUser: ICardUser;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService
  ) { 
    this.id = +this.route.snapshot.params.id;

  }

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById() {
    this.userService.getUserById(this.id).subscribe(
      response => {
        if ( !response.error ) {
          this.currentUser = response.data;
        } else {
          console.log(response.msg);
        }
      }
    );
  }

}
