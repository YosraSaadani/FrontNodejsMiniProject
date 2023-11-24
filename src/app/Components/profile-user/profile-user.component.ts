import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from 'src/app/Entities/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {
  userForm!:FormGroup;
  user!:any;
  constructor(private serviceUser: UserService,private fb:FormBuilder ) { }
jwt=new JwtHelperService();
  ngOnInit(): void {
    this.serviceUser.getUserById(this.jwt.decodeToken(localStorage.getItem('token')!)['_id']).subscribe(
      data=>{
        this.user=data;
        console.log(this.user);
        this.userForm=this.fb.group({
          email:[this.user.user.email],
          
          firstname:[this.user.user.firstname],
          lastname:[this.user.user.lastname],
          adresse:[this.user.user.adresse],
          phoneNumber:[this.user.user.phoneNumber],
          birthDate:[this.user.user.birthDate],
          cin:[this.user.user.cin],
          university:[this.user.user.university],
          sex:[this.user.user.sex],
        });
      }
    )
    
      
  }

  modifier(){
    this.serviceUser.updateUser(this.jwt.decodeToken(localStorage.getItem('token')!)['_id'],this.userForm.value).subscribe(
      data=>{
        console.log(data);
        localStorage.setItem('token',data.token);
        
      }
    )
  }

}
