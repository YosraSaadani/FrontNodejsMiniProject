import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Book } from 'src/app/Entities/book';
import { Loan } from 'src/app/Entities/loan';
import { BookService } from 'src/app/Services/book.service';
import { FavoriteService } from 'src/app/Services/favorite.service';
import { LoanService } from 'src/app/Services/loan.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  jwt=new JwtHelperService();
  selectedGenres: string[] = [];
  constructor(private bookService:BookService,private serviceFavorite:FavoriteService,
    private loanService:LoanService) { }
books:Book[]=[];
booksParGenre:Book[]=[];
loan:Loan=(new Loan(new Date(),new Date(),'',''));

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
  
];
  ngOnInit(): void {
    window.scrollTo(0, 0);
this.bookService.getAllBooks().subscribe((data:Book[])=>{
  this.books=data;
  this.booksParGenre=this.books;
  })
  }
  addToFavorite(id:string){
    this.serviceFavorite.getFavoriteByUserId(this.jwt.decodeToken(localStorage.getItem('token')!)['_id']).subscribe(
      data=>{
        
        this.serviceFavorite.addBookToFavorite(data._id,{book:id}).subscribe(
          data=>{
           alert("book added to favorite");
          },
          (error:HttpErrorResponse)=>{
            alert(error.error.message)
          }
        )
        
      }
    )
    
  }

  filter(i:number){
    const genre = this.bookGenres[i];

    // Toggle the selected genre
    if (this.selectedGenres.includes(genre)) {
      this.selectedGenres = this.selectedGenres.filter(g => g !== genre);
    } else {
      this.selectedGenres.push(genre);
    }

    // Filter books based on selected genres
    if (this.selectedGenres.length > 0) {
      this.booksParGenre = this.books.filter(book => this.selectedGenres.includes(book.type));
    } else {
      this.booksParGenre = this.books;
    }

    console.log(this.booksParGenre);
  }

  search(value: string) {
    if (this.selectedGenres.length > 0) {
      // Filter books based on selected genres
      this.booksParGenre = this.books.filter(book => 
        this.selectedGenres.includes(book.type) &&
        (value === "" || book.name.toLowerCase().includes(value.toLowerCase()))
      );
    } else {
      // No genres selected, return all books
      this.booksParGenre = this.books.filter(book => 
        value === "" || book.name.toLowerCase().includes(value.toLowerCase())
      );
    }
  }

  addLoan(id:string){
    this.loan.book=id;
    this.loan.user=this.jwt.decodeToken(localStorage.getItem('token')!)['_id'];
    this.loan.loanDate=new Date();
    this.loan.returnDate = new Date();
    this.loan.returnDate.setDate(this.loan.returnDate.getDate() + 15)
      this.loanService.createLoan(this.loan).subscribe(
      (data:any)=>{
        console.log(data);
      },
      (error:HttpErrorResponse)=>{
        alert(error.error.message)
      }
    )
  }
}
