import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
users:any[]=[];
  constructor(private userService:UserService) { }
edit(id:string){
  console.log(id);
}
delete(id:string){
  console.log(id);
 let test= confirm("Are you sure you want to delete this user?");
  if(test){
    this.userService.deleteUser(id).subscribe((data:any)=>{
      this.users=this.users.filter((user)=>user._id!=id);
    })
  }
 
}
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data:any)=>{
      this.users=data;
      console.log(data);
    })
  }

}
