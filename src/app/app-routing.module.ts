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

const routes: Routes = [
  {path:'books',title:'List of Books',component:BooksListComponent},
 {path:'books/:id',title:'Book Details',component:BookDetailsComponent},
 {path:'login',title:'Login',component:LoginUserComponent},
  {path:'register',title:'Register',component:RegisterUserComponent},
  {path:'favorite',title:'Favorite Books',component:FavoriteBooksComponent},
  {path:'profile',title:'Profile',component:ProfileUserComponent},
  {path:'changepass',title:'Change password',component:ModifierPasswordComponent},
  {path:'',redirectTo:'/books',pathMatch:'full'},
  {path:'**',title:'Error',component:ErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
