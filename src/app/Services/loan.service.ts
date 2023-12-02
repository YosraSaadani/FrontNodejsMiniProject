import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loan } from '../Entities/loan';
import { Observable } from 'rxjs';
import Cookies from 'js-cookie';

const apiUrl = 'http://localhost:3000/loans'; // Adjust the URL based on your backend API
@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http:HttpClient) { }

  getAllLoans(): Observable<Loan[]> {
    return this.http.get<Loan[]>(apiUrl);
  }

  getLoanById(id: string): Observable<Loan> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Cookies.get('token'),
    });
    return this.http.get<Loan>(`${apiUrl}/${id}`,{headers:reqHeader});
  }

  createLoan(body: any): Observable<Loan> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Cookies.get('token'),
    });
    return this.http.post<Loan>(apiUrl, body,{headers:reqHeader});
  }

  updateLoan(id: string, body: any): Observable<Loan> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Cookies.get('token'),
    });
    return this.http.put<Loan>(`${apiUrl}/${id}`, body,{headers:reqHeader});
  }

  deleteLoan(id: string): Observable<Loan> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Cookies.get('token'),
    });
    return this.http.delete<Loan>(`${apiUrl}/${id}`,{headers:reqHeader});
  }

  getLoansByUser(id: string): Observable<Loan[]> {
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Cookies.get('token'),
    });
    return this.http.get<Loan[]>(`${apiUrl}/${id}/user`,{headers:reqHeader});
  }

}
