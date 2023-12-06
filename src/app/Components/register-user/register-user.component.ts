import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FavoriteService } from 'src/app/Services/favorite.service';
import { UserService } from 'src/app/Services/user.service';
import Cookies from 'js-cookie';
import { UserConnectedService } from 'src/app/Services/user-connected.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  userForm!:FormGroup;
  constructor(private serviceUser: UserService,private fb:FormBuilder,private router:Router,
    private userConnected:UserConnectedService
    ) { }

   

  ngOnInit(): void {
    this.userForm=this.fb.group({
      email:['',[Validators.required,  Validators.pattern(/^\S+@\S+\.\S+$/)]],
      password:['',[Validators.required,Validators.minLength(6)]],
      firstname:['',[Validators.required,Validators.minLength(3)]],
      lastname:['',[Validators.required,Validators.minLength(3)]],
      adresse:['',[Validators.required,Validators.minLength(3)]],
      phoneNumber:['',[Validators.required,Validators.minLength(8),Validators.maxLength(8),Validators.pattern(/^[0-9]*$/)]],
      role:[''],
      sex:['',[Validators.required]],
      birthDate:['',[Validators.required ]],
      cin:['',[Validators.required, Validators.minLength(8),Validators.maxLength(8),Validators.pattern(/^[0-9]*$/)]],
      university:['',[Validators.required,Validators.minLength(3)]],



    });
  }
  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }
  get firstname() {
    return this.userForm.get('firstname');
  }
  get lastname() {
    return this.userForm.get('lastname');
  }
  get adresse() {
    return this.userForm.get('adresse');
  }
  get phoneNumber() {
    return this.userForm.get('phoneNumber');
  }

  get sex() {
    return this.userForm.get('sex');}
  get birthDate() {
    return this.userForm.get('birthDate');}
  get cin() {
    return this.userForm.get('cin');}
  get university() {
    return this.userForm.get('university');}
  get role() {
    return this.userForm.get('role');}
    
  register(){
    if(this.userForm.invalid){
      alert("Please fill in all the fields")
      return;
    }

    this.userForm.patchValue({ role: 'user' });
    this.serviceUser.createUser(this.userForm.value).subscribe(
      data=>{
        console.log(data);
        Cookies.set('token',data.token);
        Cookies.set('role',data.user.role);
        this.userConnected.setUserConnected(true);
        this.router.navigate(['/books']);


        
      },
      (error:HttpErrorResponse)=>{
        alert(error.error.message)
      }
    )
  }
}
