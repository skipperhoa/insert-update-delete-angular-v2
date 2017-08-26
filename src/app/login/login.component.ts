import {Component,OnInit} from "@angular/core";
import {LoginService} from '../service/login.service';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import {PaginatePipe, PaginationService} from 'ng2-pagination';
import {Router} from '@angular/router';
@Component({
    selector:"my-login",
    templateUrl:"app/login/list-user.component.html",
    styles:[`
        .ng-valid[required], .ng-valid.required  {
        border-left: 5px solid #42A948; /* green */
        }
        .ng-invalid:not(form)  {
        border-left: 5px solid #a94442; /* red */
        }
    `]
    ,providers: [LoginService,PaginatePipe, PaginationService]
    
})

export class LoginComponent implements OnInit{
    public datas:any=[];
   
    constructor(private loginService:LoginService,private router:Router){}
    onSubmit(value:any){
        
    }
    ngOnInit(){
       this.loginService.getAll().subscribe((response:any)=>{
            this.datas = response;
            //console.log(response);
        });
        return this.datas;
    }
    xoaUser(value:number){
        console.log("co:"+value);
        this.loginService.deleteUser(value).subscribe((response:any)=>{
                console.log("Success user:"+response);
                this.router.navigate(['/list-user']);
               //this.router.navigate(['/root/child', crisis.id]);
        },error => {
             console.log("Don't delete user",error);
         });
    }
   

}