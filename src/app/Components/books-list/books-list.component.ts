import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/Entities/book';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  constructor(private bookService:BookService) { }
books:Book[]=[];
  ngOnInit(): void {
this.bookService.getAllBooks().subscribe((data:Book[])=>{
  this.books=data;
  })
  }
}
