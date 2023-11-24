import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-modifier-password',
  templateUrl: './modifier-password.component.html',
  styleUrls: ['./modifier-password.component.css']
})
export class ModifierPasswordComponent implements OnInit {
  userForm!:FormGroup;
  jwt=new JwtHelperService();
  constructor(private serviceUser: UserService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.userForm=this.fb.group({
      oldPassword:[''],
      newPassword:['']
    });

  
  }

  modifier(){
    this.serviceUser.changePassword(this.jwt.decodeToken(localStorage.getItem('token')!)['_id'],this.userForm.value).subscribe(
      data=>{
        console.log(data);
        
        
      }
    );
  }

}
