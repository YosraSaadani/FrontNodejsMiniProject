import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './Components/books-list/books-list.component';
import { ErrorComponent } from './Components/error/error.component';
import { BookDetailsComponent } from './Components/book-details/book-details.component';
import { LoginUserComponent } from './Components/login-user/login-user.component';
import { RegisterUserComponent } from './Components/register-user/register-user.component';
import { LoansComponent } from './Components/loans/loans.component';

const routes: Routes = [
  {path:'books',title:'List of Books',component:BooksListComponent},
 {path:'books/:id',title:'Book Details',component:BookDetailsComponent},
 {path:'login',title:'Login',component:LoginUserComponent},
  {path:'register',title:'Register',component:RegisterUserComponent},
  {path:'loans',title:'Loans',component:LoansComponent},
  {path:'',redirectTo:'/books',pathMatch:'full'},
  {path:'**',title:'Error',component:ErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
