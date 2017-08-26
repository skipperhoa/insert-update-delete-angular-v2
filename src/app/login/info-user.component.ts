import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { LoginService } from '../service/login.service';
@Component({
    selector: "my-info",
    templateUrl: "app/login/info-user.component.html"
})

export class InfoUserComponent {
    public datas: any = [];
    constructor(private loginService: LoginService, private route: ActivatedRoute, private location: Location) { }
    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.loginService.getUser(+params['id']))
            .subscribe((response: any) => {
                this.datas = response;
                console.log(response);
            });
    }
    goBack(): void {
        this.location.back();
    }
    onSubmit(value: any) {
        this.route.params
            .switchMap((params: Params) => this.loginService.updateUser(value,+params['id']))
            .subscribe((response: any) => {
                this.datas = response;
                console.log(response);
            });
        console.log(value);
    }
}