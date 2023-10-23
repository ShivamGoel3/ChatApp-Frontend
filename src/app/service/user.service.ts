import { Injectable } from '@angular/core';
// import {HttpC}
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url1 = 'http://localhost:5000/login';
  url2 = 'http://localhost:5000/signup';
  url3 = 'http://localhost:5000/alluser';
  url4 = 'http://localhost:5000/accesschat';
  url5 = 'http://localhost:5000/fetchchat';
  url6 = 'http://localhost:5000/sendmessage';
  url7 = 'http://localhost:5000/allmessages';
  url8 = 'http://localhost:5000/deletemessage';
  url9 = 'http://localhost:5000/editmessage';
  url10 = 'http://localhost:5000/logout';

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
