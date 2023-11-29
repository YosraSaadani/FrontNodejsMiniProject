import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksListComponent } from './Components/books-list/books-list.component';
import { ErrorComponent } from './Components/error/error.component';
import { BookDetailsComponent } from './Components/book-details/book-details.component';
import { LoginUserComponent } from './Components/login-user/login-user.component';
import { RegisterUserComponent } from './Components/register-user/register-user.component';
import { FavoriteBooksComponent } from './Components/favorite-books/favorite-books.component';
import { ProfileUserComponent } from './Components/profile-user/profile-user.component';
import { ModifierPasswordComponent } from './Components/modifier-password/modifier-password.component';
import { LoansComponent } from './Components/loans/loans.component';
import { HeaderAdminComponent } from './admin/header-admin/header-admin.component';
import { UsersListComponent } from './admin/users-list/users-list.component';
import { AdminbooksListComponent } from './admin/adminbooks-list/adminbooks-list.component';
import { AdminbookEditComponent } from './admin/adminbook-edit/adminbook-edit.component';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { AddBookComponent } from './admin/add-book/add-book.component';

const routes: Routes = [
  {path:'books',title:'List of Books',component:BooksListComponent},
 {path:'books/:id',title:'Book Details',component:BookDetailsComponent},
 {path:'login',title:'Login',component:LoginUserComponent},
  {path:'register',title:'Register',component:RegisterUserComponent},
  {path:'favorite',title:'Favorite Books',component:FavoriteBooksComponent},
  {path:'profile',title:'Profile',component:ProfileUserComponent},
  {path:'changepass',title:'Change password',component:ModifierPasswordComponent},
  {path:'loans',title:'Loans',component:LoansComponent},

  {path:'adminDash',title:'Admin',component:HeaderAdminComponent,
  children:[
    {path:'users',title:'Users',component:UsersListComponent},
    {path:'booksList',title:'Book List',component:AdminbooksListComponent},
  {path:'booksList/:id',title:'Book Details',component:AdminbookEditComponent},
  {path:'addBook',title:'Add Book',component:AddBookComponent},
  {path:'',redirectTo:'booksList',pathMatch:'full'}
]},
 
{path:'loginAdmin',title:'Login Admin',component:LoginAdminComponent},
  {path:'',redirectTo:'/books',pathMatch:'full'},

  {path:'**',title:'Error',component:ErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
