import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoanService } from 'src/app/Services/loan.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
loans:any[]=[];
jwt=new JwtHelperService();

  constructor(private loanService: LoanService) { }
  remove(id:string){
    this.loanService.deleteLoan(id).subscribe((data:any)=>{
      console.log(data);
    })
    this.loans=this.loans.filter((loan)=>loan._id!=id);
  }
  ngOnInit(): void {
    this.loanService.getLoansByUser(this.jwt.decodeToken(localStorage.getItem('token')!)['_id']).subscribe((data:any)=>{
      this.loans=data;
      console.log(data);
    })
  }

}
