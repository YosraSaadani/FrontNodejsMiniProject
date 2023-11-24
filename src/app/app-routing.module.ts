import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './Components/books-list/books-list.component';
import { ErrorComponent } from './Components/error/error.component';
import { BookDetailsComponent } from './Components/book-details/book-details.component';

const routes: Routes = [
  {path:'books',title:'List of Books',component:BooksListComponent},
 {path:'books/:id',title:'Book Details',component:BookDetailsComponent},
  {path:'',redirectTo:'/books',pathMatch:'full'},
  {path:'**',title:'Error',component:ErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
