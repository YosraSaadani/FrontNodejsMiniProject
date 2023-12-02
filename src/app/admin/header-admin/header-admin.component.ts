import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Cookies from 'js-cookie';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  constructor(private router:Router) { }
  logout()
  {
    Cookies.remove('token');
    Cookies.remove('role');
    this.router.navigate(['/login']);

  }
  ngOnInit(): void {
  }

}
