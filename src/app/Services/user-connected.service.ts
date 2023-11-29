import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserConnectedService {
  private userConnectedSubject = new BehaviorSubject<boolean>(false);

  userConnected$ = this.userConnectedSubject.asObservable();

  setUserConnected(status: boolean) {
    this.userConnectedSubject.next(status);
  }
}
