import { Injectable } from '@angular/core';
// import {HttpC}
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // https://chatapp-backend-s33e.onrender.com/
  url1 = "https://chatapp-backend-s33e.onrender.com/login";
  url2 = "https://chatapp-backend-s33e.onrender.com/signup";
  url3 = "https://chatapp-backend-s33e.onrender.com/alluser";
  url4 = "https://chatapp-backend-s33e.onrender.com/accesschat";
  url5 = "https://chatapp-backend-s33e.onrender.com/fetchchat";
  url6 = "https://chatapp-backend-s33e.onrender.com/sendmessage";
  url7 = "https://chatapp-backend-s33e.onrender.com/allmessages";
  url8 = "https://chatapp-backend-s33e.onrender.com/deletemessage";
  url9 = "https://chatapp-backend-s33e.onrender.com/editmessage";
  url10 = "https://chatapp-backend-s33e.onrender.com/logout";

  logeduser: any
  constructor(private http: HttpClient) { }

  searchuser(data: any) {

    return this.http.post(this.url3, data, {
      observe: 'response',
      // withCredentials: true
    });
  }

  login(data: any) {

    return this.http.post(this.url1, data, {
      observe: 'response',
      withCredentials: true
    });
  }

  signup(data: any) {

    return this.http.post(this.url2, data, {
      observe: 'response',
      // withCredentials: true
    });
  }

  accesschat(data: any) {

    return this.http.post(this.url4, data, {
      observe: 'response'
    });
  }

  fetchchat(data: any) {
  // console.log(data)
    return this.http.post(this.url5, data, {
      observe: 'response'
    });
  }

  sendmessage(data: any) {

    return this.http.post(this.url6, data, {
      observe: 'response'
    });
  }

  allmessage(data: any) {

    return this.http.post(this.url7, data, {
      observe: 'response'
    });
  }

  deletemessage(data: any) {

    return this.http.post(this.url8, data, {
      observe: 'response'
    });
  }

  editmessage(data: any) {

    return this.http.post(this.url9, data, {
      observe: 'response'
    });
  }
  logout() {

    return this.http.get(this.url10 , {
      observe: 'response',
      withCredentials:true

    });
  }

}
