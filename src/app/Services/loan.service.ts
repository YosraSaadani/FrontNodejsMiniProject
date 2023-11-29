import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Loan } from '../Entities/loan';
import { Observable } from 'rxjs';

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
    return this.http.get<Loan>(`${apiUrl}/${id}`);
  }

  createLoan(body: any): Observable<Loan> {
    return this.http.post<Loan>(apiUrl, body);
  }

  updateLoan(id: string, body: any): Observable<Loan> {
    return this.http.put<Loan>(`${apiUrl}/${id}`, body);
  }

  deleteLoan(id: string): Observable<Loan> {
    return this.http.delete<Loan>(`${apiUrl}/${id}`);
  }

  getLoansByUser(id: string): Observable<Loan[]> {
    return this.http.get<Loan[]>(`${apiUrl}/${id}/user`);
  }

}
