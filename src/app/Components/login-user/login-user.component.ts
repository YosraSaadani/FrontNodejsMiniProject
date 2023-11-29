import {  Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserConnectedService } from 'src/app/Services/user-connected.service';

import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
    userForm!:FormGroup;
  constructor(private serviceUser: UserService,private fb:FormBuilder,private router:Router,private userConnected:UserConnectedService  ) { }

  ngOnInit(): void {
    this.userForm=this.fb.group({
      email: ['', [Validators.required,  Validators.pattern(/^\S+@\S+\.\S+$/)]],
      password:['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  login(){
    this.serviceUser.loginUser(this.userForm.value).subscribe(
      data=>{
        console.log(data);
        localStorage.setItem('token',data.token);
        this.userConnected.setUserConnected(true);
        this.router.navigate(['/books']);  
        
      
        
      }
    )
  }

}
