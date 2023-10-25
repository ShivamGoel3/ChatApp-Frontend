import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userdetail: any;

  constructor(private userservice: UserService,
    private router: Router) { }

  validate(data: any) {

    var regPhone = /^\d{10}$/;
    if (data.mobile == "" || !regPhone.test(data.mobile)) {
      alert("Please enter valid phone number.");
      return false;
    }

    if (data.password == "") {
      alert("Please enter your password");
      return false;
    }

    if (data.password.length < 6) {
      alert("Password should be atleast 6 character long");
      return false;
    }
    return true;
  }

  loginpage(data: any) {
    this.userservice.login(data).subscribe((result) => {
      this.userdetail = result;

      if (this.userdetail.body.message == "User Not exist") {
        window.alert("User Not exist, Please sign up")
      }
      else if (this.userdetail.body.message == "Invalid Mobile or Password") {
        window.alert("Invalid Mobile or Password")
      }
      else {
        this.router.navigateByUrl('/');
      }
    });
  }
}
