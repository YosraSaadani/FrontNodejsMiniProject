import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Book } from 'src/app/Entities/book';
import { BookService } from 'src/app/Services/book.service';
import { FavoriteService } from 'src/app/Services/favorite.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  jwt=new JwtHelperService();
  constructor(private bookService:BookService,private serviceFavorite:FavoriteService) { }
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
  addToFavorite(id:string){
    this.serviceFavorite.getFavoriteByUserId(this.jwt.decodeToken(localStorage.getItem('token')!)['_id']).subscribe(
      data=>{
        
        this.serviceFavorite.addBookToFavorite(data._id,{book:id}).subscribe(
          data=>{
           
          }
        )
        
      }
    )
    
  }
}
