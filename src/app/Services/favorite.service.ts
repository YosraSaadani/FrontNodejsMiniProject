import { HttpClient } from '@angular/common/http';
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
    return this.http.get<Favorite>(`${apiUrl}/${id}`);
  }

  createFavorite(body: any): Observable<Favorite> {
    return this.http.post<Favorite>(apiUrl, body);
  }

  updateFavorite(id: string, body: any): Observable<Favorite> {
    return this.http.put<Favorite>(`${apiUrl}/${id}`, body);
  }

  deleteFavorite(id: string): Observable<Favorite> {
    return this.http.delete<Favorite>(`${apiUrl}/${id}`);
  }

  addBookToFavorite(id: string, body: any): Observable<any> {
    return this.http.put<any>(`${apiUrl}/addBook/${id}`, body);
  }

  getFavoriteByUserId(id: string): Observable<any> {
    return this.http.get<any>(`${apiUrl}/user/${id}`);
  }

  removeBookFromFavorite(id: string, body: any): Observable<any> {
    return this.http.put<any>(`${apiUrl}/removeBook/${id}`, body);
  }
}
