import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksListComponent } from './Components/books-list/books-list.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ErrorComponent } from './Components/error/error.component';
import { BookDetailsComponent } from './Components/book-details/book-details.component';
import { LoginUserComponent } from './Components/login-user/login-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterUserComponent } from './Components/register-user/register-user.component';
import { ProfileUserComponent } from './Components/profile-user/profile-user.component';
import { ModifierPasswordComponent } from './Components/modifier-password/modifier-password.component';
import { LoansComponent } from './Components/loans/loans.component';
import { Favorite } from './Entities/favorite';
import { FavoriteBooksComponent } from './Components/favorite-books/favorite-books.component';
import { UsersListComponent } from './admin/users-list/users-list.component';
import { HeaderAdminComponent } from './admin/header-admin/header-admin.component';
import { AdminbooksListComponent } from './admin/adminbooks-list/adminbooks-list.component';
import { AdminbookEditComponent } from './admin/adminbook-edit/adminbook-edit.component';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { AddBookComponent } from './admin/add-book/add-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    BookDetailsComponent,
    LoginUserComponent,
    RegisterUserComponent,

    ProfileUserComponent,
    ModifierPasswordComponent,
  LoansComponent,
  FavoriteBooksComponent,
  UsersListComponent,
  HeaderAdminComponent,
  AdminbooksListComponent,
  AdminbookEditComponent,
  LoginAdminComponent,
  AddBookComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
