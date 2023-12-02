import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from 'src/app/Services/user.service';
import Cookies from 'js-cookie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifier-password',
  templateUrl: './modifier-password.component.html',
  styleUrls: ['./modifier-password.component.css']
})
export class ModifierPasswordComponent implements OnInit {
  userForm!:FormGroup;
  jwt=new JwtHelperService();
  constructor(private serviceUser: UserService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    if(Cookies.get('token')==null){
      this.router.navigate(['/login']);
    }

    this.userForm=this.fb.group({
      oldPassword:['',[Validators.required, Validators.minLength(6)]],
      newPassword:['',[Validators.required, Validators.minLength(6)]]
    });

  
  }

  get oldPassword() {
    return this.userForm.get('oldPassword');
  }

  get newPassword() {
    return this.userForm.get('newPassword');
  }

  modifier(){
    this.serviceUser.changePassword(this.jwt.decodeToken(Cookies.get('token')!)['_id'],this.userForm.value).subscribe(
      data=>{
        console.log(data);
        
        
      }
    );
  }

}
