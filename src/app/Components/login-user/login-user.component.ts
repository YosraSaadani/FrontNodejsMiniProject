import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
    userForm!:FormGroup;
  constructor(private serviceUser: UserService,private fb:FormBuilder ) { }

  ngOnInit(): void {
    this.userForm=this.fb.group({
      email:[''],
      password:['']
    });
  }

  login(){
    this.serviceUser.loginUser(this.userForm.value).subscribe(
      data=>{
        console.log(data);
        localStorage.setItem('token',data.token);
        
      }
    )
  }

}
