import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { SocketService } from '../service/socket.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  searchuserlist: any
  userchatlist: any
  chatid: any
  data1: any
  chatdetail: any
  messagelist: any
  logeduserid:any
  logeduser:any
  constructor(private userservice: UserService, private socketservice: SocketService
    ,private http: HttpClient,
    private router:Router) { 
   
    // this.logeduserid = this.userservice.logeduser._id;
    //"653265b4e6febc5bf446d104"
    //this.userservice.logeduser._id;
    // this.logeduser = this.userservice.logeduser
    //{_id: '653265b4e6febc5bf446d104', name: 'Shivam Goel', email: 'ssss@gmail.com', mobile: '9457084764', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M…jgwfQ.m-PBnptkbh6Gd8CEQzuWW7Y8Ey8XfhWv21cqd2E_pIA'}
    //this.userservice.logeduser;
  }
  
 

  searchuser(data: any) {

    this.userservice.searchuser(data).subscribe((result) => {
      this.searchuserlist = result.body
      
    });
  }

  accesschat(data: any) {

    if (data._id != undefined || data.userId != undefined) {
      this.userservice.accesschat(data).subscribe((result) => {
        this.fetchchat({_id:this.logeduserid});

      });
    }
  }

  fetchchat(data: any) {

    this.userservice.fetchchat(data).subscribe((result) => {
      this.userchatlist = result.body
    });

  }

  showchat(data: any) {

    this.chatid = data._id;
    this.chatdetail = data
    this.socketservice.joinchat(this.chatid);
    this.allmessage()
  }

  sendmessage(data: any) {

    this.data1 = { content: data.content, chatId: this.chatid, _id: this.logeduserid }
    this.userservice.sendmessage(this.data1).subscribe((result) => {
      this.socketservice.sendmessage(result.body);
    });

  }

  allmessage() {

    this.userservice.allmessage({ chatId: this.chatid }).subscribe((result) => {
      this.messagelist = result.body
    });
  }

callprompt(data:any){
// console.log(data)
  let choice = prompt("Please enter your choice 1 for edit 2 for delete");
  // console.log(choice=="2")
  if(choice=="2"){
    this.deletemessage(data);
  }
  else{
  let content = prompt("Please enter your content");
  if(content!=null)
    this.editmessage({"_id":data._id,"content":content})
  }
}

  deletemessage(data: any) {
    this.userservice.deletemessage(data).subscribe((result) => {
      this.socketservice.notifymessage();

    });
  }

  editmessage(data: any) {

    this.userservice.editmessage(data).subscribe((result) => {
      this.socketservice.notifymessage();


    });
  }

logout(){
  this.userservice.logout().subscribe((result) => {
    // this.messagelist = result.body
    this.router.navigateByUrl('/login');

    console.log(result);
  });
}

  ngOnInit() {

    this.http.get('https://chatapp-backend-s33e.onrender.com/jwt',{
      withCredentials:true
    }).subscribe((res:any)=>{
       this.logeduserid=res._id;
       this.logeduser=res;
       this.fetchchat({_id:this.logeduserid});
    },
    (err)=>{
      // console.log(err)

      // this.messag="You are not loged in "
      // this.userchatlist.
      
      // this.router.navigateByUrl('/login');

    }
    
    )

    // fetchchat(data: any) {

      // this.userservice.fetchchat({_id:this.logeduserid}).subscribe((result) => {
      //   console.log(this.loh)
      //   console.log(result);
      //   this.userchatlist = result.body
      // });
  
    // }

    this.socketservice.getnotifymessage().subscribe((message) => {
      this.allmessage();
    })
   
    this.socketservice.getnewmessage().subscribe((message) => {
      this.allmessage();
    })
  }


}
