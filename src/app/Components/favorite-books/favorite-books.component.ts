import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Favorite } from 'src/app/Entities/favorite';
import { FavoriteService } from 'src/app/Services/favorite.service';
import Cookies from 'js-cookie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite-books',
  templateUrl: './favorite-books.component.html',
  styleUrls: ['./favorite-books.component.css']
})
export class FavoriteBooksComponent implements OnInit {

  constructor(private serviceFavorite:FavoriteService,private router:Router) { }
  jwt=new JwtHelperService();
  favoriteList: any[] = []; 
  ngOnInit(): void {
    if(Cookies.get('token')==null){
      this.router.navigate(['/login']);
    }
    window.scrollTo(0, 0);
    this.serviceFavorite.getFavoriteByUserId(this.jwt.decodeToken(Cookies.get('token')!)['_id']).subscribe(
      data=>{
        this.favoriteList=data;
        console.log(this.favoriteList);
      }
    )
  }
  remove(idBook: string) {
    this.serviceFavorite.removeBookFromFavorite(this.jwt.decodeToken(Cookies.get('token')!)['_id'], idBook).subscribe(
      data => {
        console.log(data);
       
  
        // Update the favoriteList.books array to remove the deleted book
        this.favoriteList = this.favoriteList.filter((elt: { book: { _id: string; }; }) => {
          return elt.book._id !== idBook;
        });
      }
    );
  }

}
