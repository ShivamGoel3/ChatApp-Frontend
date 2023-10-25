import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  userdetail: any;
  constructor(private userservice: UserService, private router: Router) { }

  validate(data: any) {

    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var regPhone = /^\d{10}$/;
    var regName = /\d+$/g;

    if (data.name == "" || regName.test(data.name)) {
      window.alert("Please enter your name properly.");
      return false;
    }

    if (data.email == "" || !regEmail.test(data.email)) {
      window.alert("Please enter a valid e-mail address.");
      return false;
    }

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

    if (data.confirmpassword == "") {
      alert("Please enter your confirm password");
      return false;
    }

    if (data.password != data.confirmpassword) {
      alert("Password not matches with confirm password");
      return false;
    }

    return true;
  }

  signuppage(data: any) {
    this.userservice.signup(data).subscribe((result) => {
      this.userdetail = result;
      if (this.userdetail.body.message == "User already exist") {
        window.alert("User already exist")
      }
      else {
        window.alert("User registered")
        this.router.navigateByUrl('/login');
      }
    })
  }

}
