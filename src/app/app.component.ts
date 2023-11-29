import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookService } from './Services/book.service';
import { Book } from './Entities/book';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  books: Book[] = [];
  isLoginPage: boolean = false;
 role!:string;
  jwt = new JwtHelperService();
  currentUser: any;

  constructor(
    private http: HttpClient,
    private bookService: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = this.activatedRoute.snapshot.firstChild?.routeConfig?.path === 'login';
        this.role=localStorage.getItem('role')!;

      }
    });

    if (localStorage.getItem('token') != null) {
      this.userService.getUserById(this.jwt.decodeToken(localStorage.getItem('token')!)['_id']).subscribe((data: any) => {
        this.currentUser = data;
      
      });

    
    }
  }
}
