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

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    BookDetailsComponent,
    LoginUserComponent,
    RegisterUserComponent
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
