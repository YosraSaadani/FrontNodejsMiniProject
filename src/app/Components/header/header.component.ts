import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserConnectedService } from 'src/app/Services/user-connected.service';
import Cookies from 'js-cookie';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private userService: UserConnectedService) { }
  isUserConnected: boolean = false;
  ngOnInit() {
    this.userService.userConnected$.subscribe((status) => {
      this.isUserConnected = status;
      
      
    });
  }

  logout(){
    console.log('Logout method called');
  Cookies.remove('token');
  this.userService.setUserConnected(false);
  this.router.navigate(['/login']);
    
    
  }


}
