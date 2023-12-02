import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FavoriteService } from 'src/app/Services/favorite.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  userForm!:FormGroup;
  constructor(private serviceUser: UserService,private fb:FormBuilder,private router:Router,
    private serivceFavorite:FavoriteService ) { }

  ngOnInit(): void {
    this.userForm=this.fb.group({
      email:[''],
      password:[''],
      firstname:[''],
      lastname:[''],
      adresse:[''],
      phoneNumber:[''],
      role:[''],
      sex:[''],
      birthDate:[''],
      cin:[''],
      university:[''],



    });
  }

  register(){
    this.userForm.patchValue({ role: 'user' });
    this.serviceUser.createUser(this.userForm.value).subscribe(
      data=>{
        console.log(data);
        localStorage.setItem('token',data.token);
        localStorage.setItem('role',data.user.role);
        this.serivceFavorite.createFavorite({user:data.user._id}).subscribe(
          data=>{
            console.log(data);
            
          }
        )
        this.router.navigate(['/books']);


        
      },
      (error:HttpErrorResponse)=>{
        alert(error.error.message)
      }
    )
  }
}
