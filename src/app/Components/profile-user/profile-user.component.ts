import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { User } from 'src/app/Entities/user';
import { UserService } from 'src/app/Services/user.service';
import Cookies from 'js-cookie';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
  userForm!:FormGroup;
  user!:any;
  constructor(private serviceUser: UserService,private fb:FormBuilder,private router:Router ) { }
jwt=new JwtHelperService();
  ngOnInit(): void {
    if(Cookies.get('token')==null){
      this.router.navigate(['/login']);
    }
    this.serviceUser.getUserById(this.jwt.decodeToken(Cookies.get('token')!)['_id']).subscribe(
      data=>{
        this.user=data;
        console.log(this.user.user.birthDate);
        const parsedBirthDate = new Date(this.user.user.birthDate);
        this.userForm=this.fb.group({
          email:[this.user.user.email,[Validators.required,  Validators.pattern(/^\S+@\S+\.\S+$/)]],
          
          firstname:[this.user.user.firstname,[Validators.required, Validators.minLength(3)]],
          lastname:[this.user.user.lastname,[Validators.required, Validators.minLength(3)]],
          adresse:[this.user.user.adresse,[Validators.required, Validators.minLength(3)]],
          phoneNumber:[this.user.user.phoneNumber,[Validators.required, Validators.minLength(8),Validators.maxLength(8),Validators.pattern(/^[0-9]*$/)]],
          birthDate:[parsedBirthDate.toISOString().split('T')[0],[Validators.required]],
          cin:[this.user.user.cin,[Validators.required, Validators.minLength(8),Validators.maxLength(8),Validators.pattern(/^[0-9]*$/)]],
          university:[this.user.user.university,[Validators.required, Validators.minLength(3)]],
          sex:[this.user.user.sex,[Validators.required]],
        });
      }
    )
    
      
  }
  get email() {
    return this.userForm.get('email');
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

  get birthDate() {
    return this.userForm.get('birthDate');
  }

  get cin() {
    return this.userForm.get('cin');
  }

  get university() {
    return this.userForm.get('university');
  }

  get sex() {
    return this.userForm.get('sex');
  }






  modifier(){
    this.serviceUser.updateUser(this.jwt.decodeToken(Cookies.get('token')!)['_id'],this.userForm.value).subscribe(
      data=>{
        console.log(data);

        alert("profile updated");
        this.router.navigate(['/books']);
        
        
      }
    )
  }

}
