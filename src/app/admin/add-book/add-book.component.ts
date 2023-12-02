import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
bookForm!:FormGroup;
constructor(private formBuilder: FormBuilder, private bookService: BookService, private router: Router) {
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
get description() {
  return this.bookForm.get('description');
}
get quantity() {
  return this.bookForm.get('quantity');
}
get image() {
  return this.bookForm.get('image');
}
get releaseDate() {
  return this.bookForm.get('releaseDate');
}
get author() {
  return this.bookForm.get('author');
}
get type() {
  return this.bookForm.get('type');
}
get name() {
  return this.bookForm.get('name');
}
onSubmit(): void {
  if (this.bookForm.valid) {
    this.bookService.createBook(this.bookForm.value).subscribe((data) => {
      console.log(data);
      Swal.fire({
        icon: 'success',
        title: 'Book added successfully',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['/adminDash']);
    });
  }}


  ngOnInit(): void {

  }

}
