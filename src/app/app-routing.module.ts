import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {
    component: LoginComponent,
    path: "login"
  },
  {
    component: SignupComponent,
    path: "signup"
  },
  {
    component: ChatComponent,
    path: ""
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
