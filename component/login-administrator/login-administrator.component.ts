import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyRateController } from 'src/app/service/controller/currency.rate.controller/currency-rate-controller';
import { Authentication } from 'src/app/service/authentication/authentication';
import { Router } from '@angular/router';
import { Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-login-administrator',
  templateUrl: './login-administrator.component.html',
  styleUrls: ['./login-administrator.component.css']
})
export class LoginAdministratorComponent implements OnInit {

  usernameLogin: string;
  passwordLogin: string;;

  constructor(
    private httpClient: HttpClient,
    private controller: CurrencyRateController,
    private router: Router,
  ) {


  }

  ngOnInit() {

  }

  login() {
    console.log("Checking Username/Password : " + this.usernameLogin + "/*************");
    if (this.usernameLogin == null || typeof this.usernameLogin === "undefined" || this.passwordLogin == null || typeof this.passwordLogin === "undefined")
      alert("Please fill in Username and Password ")
    else {

      this.controller.getAdministratorFindByUsername(this.usernameLogin).subscribe(data => {
        if (data.personalPass == this.passwordLogin) {
          Authentication.setEmployeeData(data);

          Authentication.setAuthentication(true);

          console.log("Login Success");
          console.log(Authentication.getPosition(), Authentication.getPosition().length);
          switch (Authentication.getPosition()) {
            case "CM": {
              this.router.navigate(['update-rate']);
              break;
            }
            case "TM": {
              this.router.navigate(['transaction']);
              break;
            }
            default: {
              this.router.navigate(['login-admin']);
              break;
            }
          }
        } else {
          alert("Invalid Password");
          console.log("Invalid Password");
        }
      },error =>{
        alert("Invalid Username");
      });
    }
  }
  logout() {
    console.log("Logout : " + this.usernameLogin)
    if (Authentication.isAuthentication()) {
      Authentication.logout();
      this.router.navigate(['login-admin']);
      console.log("Logout Success ")
    }
  }

}
