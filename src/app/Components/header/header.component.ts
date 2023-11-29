import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserConnectedService } from 'src/app/Services/user-connected.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private cdr: ChangeDetectorRef,private userService: UserConnectedService) { }
  isUserConnected: boolean = false;
  ngOnInit() {
    this.userService.userConnected$.subscribe((status) => {
      this.isUserConnected = status;
      
      
    });
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.cdr.detectChanges();
    
  }


}
