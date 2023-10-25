import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { io } from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class SocketService {
  public message$: BehaviorSubject<string> = new BehaviorSubject('');

  socket = io("https://chatapp-backend-s33e.onrender.com");


  public sendmessage(message: any) {
    this.socket.emit('message', message);
  }
  public notifymessage() {
    this.socket.emit('notify', "notify");
  }

  public getnotifymessage() {
    this.socket.on('notify', (arg) => {
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
