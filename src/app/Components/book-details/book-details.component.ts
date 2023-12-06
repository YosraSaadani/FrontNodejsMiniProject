import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/book.service';
import { Book } from 'src/app/Entities/book';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from 'src/app/Services/review.service';
import { Review } from 'src/app/Entities/review';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from 'src/app/Services/user.service';
import { LoanService } from 'src/app/Services/loan.service';
import { Loan } from 'src/app/Entities/loan';
import { FavoriteService } from 'src/app/Services/favorite.service';
import { HttpErrorResponse } from '@angular/common/http';
import Cookies from 'js-cookie';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute
    , private reviewService: ReviewService,private fb:FormBuilder ,
    private serviceFavorite:FavoriteService,
    private loanService:LoanService
    ) { }
  bookId: string = "";
  loan:Loan=(new Loan(new Date(),new Date(),'',''));
  book!: Book;
  review: Review=new Review('','',0,'',new Date());
  reviews: any[] = [];
  reviewForm!:FormGroup;
  jwt=new JwtHelperService();
avgRating=0;
initForm()
{
  this.reviewForm=this.fb.group({
    comment:[''],
    rating:[0],
    
  });
}
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
 
  
}

getRatingArray(rating: number): number[] {
  rating=Math.round(rating);
  return Array(rating).fill(0).map((_, index) => index + 1);
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
        this.book.quantity--;
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


addReview(id:string){
  if(Cookies.get('token')==null){
    alert("You must login first");
    return;
  }
  this.review.comment=this.reviewForm.value.comment;
this.review.rating=this.reviewForm.value.rating;
  this.review.book=id;
this.review.user=this.jwt.decodeToken(Cookies.get('token')!)['_id'];

console.log(this.review)
  this.reviewService.addReview(this.review).subscribe(
    (data:Review)=>{
      console.log(data);
      alert("Review added");
      this.reviews.length++;
      this.bookService.getBooksReviews(id).subscribe(
        (data:any)=>{
          this.reviews=data;
        }
      )
    }
  )
}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.initForm();
    this.bookId = this.activatedRoute.snapshot.params['id'];
    console.log(this.bookId);
    this.bookService.getBookById(this.bookId).subscribe(
      (data: Book) => {
        this.book = data;
        this.bookService.getBooksReviews(this.bookId).subscribe(
          (data: any) => {
            this.reviews = data;
this.bookService.getBookAverageRating(this.bookId).subscribe(
  (data:any)=>{
    this.avgRating=data;
  })

          }
        )

      });


     


  }

}
