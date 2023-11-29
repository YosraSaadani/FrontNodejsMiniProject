import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/book.service';

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

onSubmit(): void {
  if (this.bookForm.valid) {
    this.bookService.createBook(this.bookForm.value).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/adminDash']);
    });
  }}


  ngOnInit(): void {

  }

}
