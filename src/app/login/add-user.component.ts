import {Component} from "@angular/core";
import {LoginService} from "../service/login.service";
@Component({
    selector:"my-add",
    templateUrl:"app/login/info-user.component.html",
})

export class AddUserComponent{
    public datas:any=[];
    constructor(private _loginService:LoginService){}
    onSubmit(value:any){
        console.log(value);
        this._loginService.addUser(value).subscribe((response:any)=>{
            this.datas = response;
            //console.log(response);
        });
    }
}