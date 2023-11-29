import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Entities/user';
import { Observable } from 'rxjs';
const url="http://localhost:3000/users";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(url);
  }

  getUserById(id: string): Observable<User> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get<User>(`${url}/${id}`,{headers:reqHeader});
  }

  createUser(body: any): Observable<any> {
    return this.http.post<any>(url, body);
  }

  updateUser(id: string, body: any): Observable<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.put<any>(`${url}/${id}`, body,{headers:reqHeader});
  }

  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(`${url}/${id}`);
  }

  loginUser(body: any): Observable<any> {
    return this.http.post<any>(`${url}/loginUser`, body);
  }

  changePassword(id: string, body: any): Observable<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.put<any>(`${url}/changepass/${id}`, body,{headers:reqHeader});
  }


}
