import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { LoginPage } from '../pages/login/login.page';
import {User} from '../shared/user.class';
@Injectable({
 providedIn: 'root'
})
export class AuthService {
    public isLogged: any= false;

    constructor(public authFire:AngularFireAuth) { 
      authFire.authState.subscribe(user =>(this.isLogged=user));
    }
  
    //login
   async onLogin(user:User){
     try{
      return await this.authFire.signInWithEmailAndPassword(user.email, user.password);
     }
     catch(error){
       console.log('error on Login user', error);
     }
   }
  
  
    //register
    async onRegister(user:User){
      try{
        return await this.authFire.createUserWithEmailAndPassword(user.email, user.password);
      }
      catch(error){
        console.log('error on register user', error);
      }
    }
  
  
  
}
