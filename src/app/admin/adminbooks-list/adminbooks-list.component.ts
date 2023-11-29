import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/book.service';

@Component({
  selector: 'app-adminbooks-list',
  templateUrl: './adminbooks-list.component.html',
  styleUrls: ['./adminbooks-list.component.css']
})
export class AdminbooksListComponent implements OnInit {
books:any[]=[];
  constructor(private bookService:BookService, private router:Router) { }

delete(id:string){
  console.log(id);
  let test= confirm("Are you sure you want to delete this book?");
  if(test){
    this.bookService.deleteBook(id).subscribe((data:any)=>{
      this.books=this.books.filter((book)=>book._id!=id);
    })
  }

}
  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe((data:any)=>{
      this.books=data;
      console.log(data);
    })
  }

}
