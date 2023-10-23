import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { io } from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class SocketService {
  public message$: BehaviorSubject<string> = new BehaviorSubject('');

  socket = io('http://localhost:5000');


  public sendmessage(message: any) {
    this.socket.emit('message', message);
  }
  public notifymessage() {
    this.socket.emit('notify', "notify");
  }
  // public deletemessage() {
  //   this.socket.on('delete',(arg)=>{
  //     console.log(arg);
  //     this.message$.next(arg);

  //   });
  //   return this.message$.asObservable();

  // }

 public getnotifymessage() {
    this.socket.on('notify',(arg)=>{
      console.log(arg);
      this.message$.next(arg);

    });
    return this.message$.asObservable();

  }

  public getnewmessage = () => {
    this.socket.on('message', (message) => {
      this.message$.next(message);
    });
    return this.message$.asObservable();
  }
  public joinchat(data: any) {

    this.socket.emit('join chat', data
    );

  }

}
