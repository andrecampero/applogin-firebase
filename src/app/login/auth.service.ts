import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient) { }

  public loginApiRequestFirebase(email: any, password: any) 
  {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let options = {
        headers: headers
    }
  
    const data = {"email":email,"password":password,"returnSecureToken":true};

    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=api_key',data, options)
    .pipe(
      map((response: Response) => JSON.stringify(response))
    );
  }

}
