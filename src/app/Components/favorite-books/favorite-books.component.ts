import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Favorite } from 'src/app/Entities/favorite';
import { FavoriteService } from 'src/app/Services/favorite.service';

@Component({
  selector: 'app-favorite-books',
  templateUrl: './favorite-books.component.html',
  styleUrls: ['./favorite-books.component.css']
})
export class FavoriteBooksComponent implements OnInit {

  constructor(private serviceFavorite:FavoriteService) { }
  jwt=new JwtHelperService();
favoriteList!:any;
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.serviceFavorite.getFavoriteByUserId(this.jwt.decodeToken(localStorage.getItem('token')!)['_id']).subscribe(
      data=>{
        this.favoriteList=data;
        console.log(this.favoriteList);
      }
    )
  }
  remove(idBook: string) {
    this.serviceFavorite.removeBookFromFavorite(this.favoriteList._id, idBook).subscribe(
      data => {
        console.log(data);
        console.log(this.favoriteList._id);
        console.log(idBook);
  
        // Update the favoriteList.books array to remove the deleted book
        this.favoriteList.books = this.favoriteList.books.filter((elt: { book: { _id: string; }; }) => {
          return elt.book._id !== idBook;
        });
      }
    );
  }

}
