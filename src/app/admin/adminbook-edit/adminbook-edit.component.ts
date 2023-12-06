import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/Entities/book';
import { BookService } from 'src/app/Services/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adminbook-edit',
  templateUrl: './adminbook-edit.component.html',
  styleUrls: ['./adminbook-edit.component.css']
})
export class AdminbookEditComponent implements OnInit {
  bookId: string = "";
  book: any;
bookForm!:FormGroup;
parsedReleaseDate: Date = new Date();
currentBook!:any;
  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute,private formBuilder: FormBuilder) {
    this.bookForm = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      author: ['', Validators.required],
      releaseDate: [null, Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(0)]],
    });
   }

   ngOnChanges(): void {
    if (this.book) {
      this.bookForm.patchValue({
        name: this.book.name,
        type: this.book.type,
        author: this.book.author,
        releaseDate:  this.parsedReleaseDate.toISOString().split('T')[0],
        image: this.book.image,
        description: this.book.description,
        quantity: this.book.quantity,
      });
    }
  }

  onSubmit(): void {
    if (this.bookForm.valid) {
      // Create a copy of the book object with updated values
      const modifiedBook: Book = {
        _id: this.book._id,
        name: this.bookForm.get('name')!.value,
        type: this.bookForm.get('type')!.value,
        author: this.bookForm.get('author')!.value,
        releaseDate: this.bookForm.get('releaseDate')!.value,
        image: this.bookForm.get('image')!.value,
        description: this.bookForm.get('description')!.value,
        quantity: this.bookForm.get('quantity')!.value,
      };

      this.bookService.updateBook(this.bookId,modifiedBook).subscribe((data) => {
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Book updated successfully',
          showConfirmButton: false,
          timer: 1500
        });      });

      // Emit the modified book object to the parent component
    }
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.bookId = data['id'];
      console.log(this.bookId);
      this.bookService.getBookById(this.bookId).subscribe((data)=>this.currentBook=data)
      this.bookService.getBookById(this.bookId).subscribe((data) => {
        this.book = data;
        this.parsedReleaseDate = new Date(this.book.releaseDate);
        console.log(this.book);
        this.ngOnChanges();
      });
    })

  }

}
