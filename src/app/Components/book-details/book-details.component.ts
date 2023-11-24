import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/book.service';
import { Book } from 'src/app/Entities/book';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from 'src/app/Services/review.service';
import { Review } from 'src/app/Entities/review';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute
    , private reviewService: ReviewService,private fb:FormBuilder ) { }
  bookId: string = "";
  book!: Book;
  review: Review=new Review('','',0,'',new Date());
  reviews: any[] = [];
  reviewForm!:FormGroup;
  jwt=new JwtHelperService();

initForm()
{
  this.reviewForm=this.fb.group({
    comment:[''],
    rating:[0],
    
  });
}


addReview(id:string){
  this.review.comment=this.reviewForm.value.comment;
this.review.rating=this.reviewForm.value.rating;
  this.review.book=id;
this.review.user="655e51cc0a420146dcf6d9cd";

console.log(this.review)
  this.reviewService.addReview(this.review).subscribe(
    (data:Review)=>{
      console.log(data);
      this.bookService.getBooksReviews(id).subscribe(
        (data:any)=>{
          this.reviews=data;
        }
      )
    }
  )
}

  ngOnInit(): void {
    this.initForm();
    this.bookId = this.activatedRoute.snapshot.params['id'];
    console.log(this.bookId);
    this.bookService.getBookById(this.bookId).subscribe(
      (data: Book) => {
        this.book = data;
        this.bookService.getBooksReviews(this.bookId).subscribe(
          (data: any) => {
            this.reviews = data;


          }
        )

      })


  }

}
