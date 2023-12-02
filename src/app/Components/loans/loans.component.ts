import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoanService } from 'src/app/Services/loan.service';
import Cookies from 'js-cookie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
loans:any[]=[];
jwt=new JwtHelperService();

  constructor(private loanService: LoanService,private router:Router) { }
  remove(id:string){
    this.loanService.deleteLoan(id).subscribe((data:any)=>{
      console.log(data);
    })
    this.loans=this.loans.filter((loan)=>loan._id!=id);
  }
  ngOnInit(): void {
    if(Cookies.get('token')==null){
      this.router.navigate(['/login']);
    }
    window.scrollTo(0, 0);
    this.loanService.getLoansByUser(this.jwt.decodeToken(Cookies.get('token')!)['_id']).subscribe((data:any)=>{
      this.loans=data;
      console.log(data);
    })
  }

}
