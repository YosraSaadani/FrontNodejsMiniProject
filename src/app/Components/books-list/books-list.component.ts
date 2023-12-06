import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Book } from 'src/app/Entities/book';
import { Loan } from 'src/app/Entities/loan';
import { BookService } from 'src/app/Services/book.service';
import { FavoriteService } from 'src/app/Services/favorite.service';
import { LoanService } from 'src/app/Services/loan.service';
import Cookies from 'js-cookie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  jwt=new JwtHelperService();
  selectedGenres: string[] = [];
  constructor(private bookService:BookService,private serviceFavorite:FavoriteService,
    private loanService:LoanService,private router:Router) { }
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

//   getRatingArray(id: string): Number[] {
//     var rating=0;
//     this.bookService.getBooksReviews(id).subscribe(
//       (data: any) => {
// this.bookService.getBookAverageRating(id).subscribe(
// (data:any)=>{
// rating=data;
// rating=Math.round(rating);
// return Array(rating).fill(0).map((_, index) => index + 1);

// })

//       }
//     )
//     return [1];
//   }
  addToFavorite(id:string){
    if(Cookies.get('token')!=null)
    { this.serviceFavorite.createFavorite({user:this.jwt.decodeToken(Cookies.get('token')!)['_id'],book:id}).subscribe(
      data=>{
        alert("book added to favorite");
      },
      (error:HttpErrorResponse)=>{
        alert(error.error.message)
      }
    )}
    else{
      alert("You must login first");
    }
   
         
        
        // else{ this.serviceFavorite.addBookToFavorite(data._id,{book:id}).subscribe(
        //   data=>{
        //    alert("book added to favorite");
        //   },
        //   (error:HttpErrorResponse)=>{
        //     alert(error.error.message)
        //   }
        // )}


    
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
    if(Cookies.get('token')!=null){
    this.loan.book=id;
    this.loan.user=this.jwt.decodeToken(Cookies.get('token')!)['_id'];
    this.loan.loanDate=new Date();
    this.loan.returnDate = new Date();
    this.loan.returnDate.setDate(this.loan.returnDate.getDate() + 15)
      this.loanService.createLoan(this.loan).subscribe(
      (data:any)=>{
        console.log(data);
        alert("Loan added");
      },
      (error:HttpErrorResponse)=>{
        alert(error.error.message)
      }
    )
    }else{
      alert("You must login first");
    }
  }
}
