import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BookService } from './Services/book.service';
import { Book } from './Entities/book';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private http: HttpClient, private bookService:BookService,private router:Router,
    private activatedRoute: ActivatedRoute) { }
books:Book[]=[];
isLoginPage: boolean = false;
  title = 'NodeJsFront';

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is the login page
        this.isLoginPage = this.activatedRoute.snapshot.firstChild?.routeConfig?.path === 'login';
      }
    });
    if(localStorage.getItem('token')!=null){

this.bookService.getAllBooks().subscribe((data:Book[])=>{
  this.books=data;
  console.log(this.books);

  })
}else{
  this.router.navigate(['/login']);

}
  }

  }


