import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/book.service';
import Swal from 'sweetalert2';

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
      Swal.fire({
        icon: 'success',
        title: 'Book deleted successfully',
        showConfirmButton: false,
        timer: 1500
      });  
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
