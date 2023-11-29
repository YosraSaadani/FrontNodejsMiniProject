import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private cdr: ChangeDetectorRef) { }
isConnected!:boolean;
  ngOnInit(): void {
    if(localStorage.getItem('token')!=null){
      this.isConnected=true;
    }
    else{
      this.isConnected=false;
    }
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.cdr.detectChanges();
    
  }


}
