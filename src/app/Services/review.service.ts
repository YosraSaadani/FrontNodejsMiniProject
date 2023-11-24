import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../Entities/review';
const apiUrl = 'http://localhost:3000/reviews'; // Adjust the URL based on your backend API

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  addReview(body: Review): Observable<Review> {
    return this.http.post<Review>(apiUrl, body);
  }

  
  

}
