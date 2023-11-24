import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../Entities/book'; // Assuming you have a Book class

const apiUrl = 'http://localhost:3000/books'; // Adjust the URL based on your backend API

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(apiUrl);
  }

  getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(`${apiUrl}/${id}`);
  }

  createBook(body: any): Observable<Book> {
    return this.http.post<Book>(apiUrl, body);
  }

  updateBook(id: string, body: any): Observable<Book> {
    return this.http.put<Book>(`${apiUrl}/${id}`, body);
  }

  deleteBook(id: string): Observable<Book> {
    return this.http.delete<Book>(`${apiUrl}/${id}`);
  }

getBooksReviews(id: string): Observable<any> {
  return this.http.get<any>(`${apiUrl}/${id}/reviews`);
}

}
