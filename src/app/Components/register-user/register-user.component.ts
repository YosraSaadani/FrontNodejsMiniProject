import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  userForm!:FormGroup;
  constructor(private serviceUser: UserService,private fb:FormBuilder ) { }

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
    this.serviceUser.createUser(this.userForm.value).subscribe(
      data=>{
        console.log(data);
        localStorage.setItem('token',data.token);
        
      }
    )
  }
}
