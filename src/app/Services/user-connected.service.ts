import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserConnectedService {
  private userConnectedSubject = new BehaviorSubject<boolean>(false);

  userConnected$ = this.userConnectedSubject.asObservable();

  constructor() {
    // Check if the user has a token during service initialization
    const userToken = localStorage.getItem('token');
    this.setUserConnected(!!userToken);
  }

  setUserConnected(status: boolean) {
    this.userConnectedSubject.next(status);
  }
}
