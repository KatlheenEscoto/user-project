import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError} from 'rxjs/operators'
import { ApiClass } from '../../schema/ApiClass.class';
import { ICardUser } from '../../../shared/components/card/card-user/icard-user.metadata';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends ApiClass {

  /**
   * Get All Users.
   * @returns 
   */
  getAllUsers(): Observable<{
    error: boolean,
    msg: string,
    data: ICardUser[]
  }> {
    const response = {error: false, msg: '', data: null};
    return this.http.get<ICardUser[]>(`${this.url}users`)
    .pipe(
      map( r => {
        response.data = r;
        return response;
      }),
      catchError(this.error)
    );
  }

  /**
   * Get one user by id.
   * @param id 
   * @returns 
   */
  getUserById(id: number): Observable<{
    error: boolean,
    msg: string,
    data: ICardUser
  }> {
    const response = { error: false, msg: '', data: null };
    return this.http.get<ICardUser>(`${this.url}users/${id}`)
    .pipe(
      map( r => {
        response.data = r;
        return response;
      }),
      catchError(this.error)
    );
  }

}
