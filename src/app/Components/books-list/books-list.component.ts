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
 bookGenres = [
  'Fiction',
  'Science Fiction',
  'Mystery',
  'Thriller',
  'Fantasy',
  'Romance',
  'Historical Fiction',
  'Biography',
  'Non-fiction',
  'Self-Help',
  'Horror',
  'Poetry',
  'Humour',
  'Adventure',
  'Children',
  'Science',
  'History',
  'Mathematics',
  'Anthology',
  'Short Stories',
  'Encyclopedias',
  'Dictionaries',
  'Comics',
  'Art',
  'Cookbooks',
  'Diaries',
  'Journals',
  'Prayer books',
  'Series',
  'Trilogy',
  'Biographies',
  'Autobiographies',
  'Fantasy',
];
  ngOnInit(): void {
this.bookService.getAllBooks().subscribe((data:Book[])=>{
  this.books=data;
  })
  }
}
