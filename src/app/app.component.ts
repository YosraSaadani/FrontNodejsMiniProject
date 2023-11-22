import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BookService } from './Services/book.service';
import { Book } from './Entities/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private http: HttpClient, private bookService:BookService) { }
books:Book[]=[];

  title = 'NodeJsFront';

  ngOnInit(): void {
this.bookService.getAllBooks().subscribe((data:Book[])=>{
  this.books=data;
  console.log(this.books);

  })
}
}

