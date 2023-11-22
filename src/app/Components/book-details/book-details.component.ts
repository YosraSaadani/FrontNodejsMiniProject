import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/book.service';
import { Book } from 'src/app/Entities/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private bookService:BookService) { }
book!:Book;
  ngOnInit(): void {
    this.bookService.getBookById("abc").subscribe(data=>this.book=data);
    }

}
