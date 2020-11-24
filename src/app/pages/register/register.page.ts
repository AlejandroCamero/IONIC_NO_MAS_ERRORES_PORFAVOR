import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {User} from '../../shared/user.class';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user:User=new User();

  constructor(private authSvc:AuthService, private router:Router,private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async onRegister(){
    const user= await this.authSvc.onRegister(this.user);
    if(user){
      console.log('Successfully create user');
      this.router.navigateByUrl('/index');
    }
    else {
      const alert = await this.alertCtrl.create({
      header: 'ERROR',
      subHeader: 'DATOS INCORRECTOS',
      message: 'Por favor, introduzca los datos necesarios',
      buttons: ['OK']
      });
      await alert.present();
  }
}

}
