import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthenticationService } from "./service/authentication.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private authService: AuthenticationService){}
    intercept(req:HttpRequest<any>, next:HttpHandler){
        
        const authToken = this.authService.token;
        if(authToken){
            const authRequest = req.clone({
                headers : req.headers.set("Authorization","Bearer "+authToken)
            })
            return next.handle(authRequest);
        }
        return next.handle(req);

    }

}