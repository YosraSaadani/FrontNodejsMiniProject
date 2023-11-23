import { HttpClient } from '@angular/common/http';
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
    return this.http.get<User>(`${url}/${id}`);
  }

  createUser(body: any): Observable<any> {
    return this.http.post<any>(url, body);
  }

  updateUser(id: string, body: any): Observable<User> {
    return this.http.put<User>(`${url}/${id}`, body);
  }

  deleteUser(id: string): Observable<User> {
    return this.http.delete<User>(`${url}/${id}`);
  }

  loginUser(body: any): Observable<any> {
    return this.http.post<any>(`${url}/loginUser`, body);
  }
}
