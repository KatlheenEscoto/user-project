import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'environments/environment';
import { of } from 'rxjs';

/* No olvidar inyectar el servicio */
@Injectable({
    providedIn: 'root'
})
export class ApiClass {
    public url = environment.uri;
    public isProduction = environment.production;

    constructor(
        protected http: HttpClient
    ) {

    }

    error(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return of({error: true, msg: errorMessage, data: null});
    }

}