import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Favorite } from '../Entities/favorite';
import { Observable } from 'rxjs';
const apiUrl = 'http://localhost:3000/favorites';
@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private http: HttpClient) { }

  getAllFavorites(): Observable<Favorite[]> {
    return this.http.get<Favorite[]>(apiUrl);
  }

  getFavoriteById(id: string): Observable<Favorite> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get<Favorite>(`${apiUrl}/${id}`,{headers:reqHeader});
  }

  createFavorite(body: any): Observable<Favorite> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.post<Favorite>(apiUrl, body,{headers:reqHeader});
  }

  updateFavorite(id: string, body: any): Observable<Favorite> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.put<Favorite>(`${apiUrl}/${id}`, body,{headers:reqHeader});
  }

  deleteFavorite(id: string): Observable<Favorite> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.delete<Favorite>(`${apiUrl}/${id}`,{headers:reqHeader});
  }

  addBookToFavorite(id: string, body: any): Observable<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.put<any>(`${apiUrl}/addBook/${id}`, body,{headers:reqHeader});
  }

  getFavoriteByUserId(id: string): Observable<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.get<any>(`${apiUrl}/user/${id}`,{headers:reqHeader});
  }

  removeBookFromFavorite(id: string, body: any): Observable<any> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
    return this.http.put<any>(`${apiUrl}/removeBook/${id}`, body,{headers:reqHeader});
  }
}
