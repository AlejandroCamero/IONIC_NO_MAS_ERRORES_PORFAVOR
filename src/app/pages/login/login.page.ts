import { User } from './../../shared/user.class';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
 selector: 'app-login',
 templateUrl: './login.page.html',
 styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    user:User=new User();
  
    constructor(private authSvc: AuthService,
    private router: Router, private alertCtrl: AlertController) { }
    ngOnInit() {
    }
    async onLogin() {
    const user=await this.authSvc.onLogin(this.user)
    if(user){
      console.log('Login correcto');
      this.router.navigateByUrl('/index');
    }
    else {
        const alert = await this.alertCtrl.create({
        header: 'ERROR',
        subHeader: 'DATOS INCORRECTOS',
        message: 'Los datos introducidos no corresponen a ningun usuario',
        buttons: ['OK']
        });
        await alert.present();
       }
    }
  }

