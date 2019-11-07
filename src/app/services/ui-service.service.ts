import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  constructor(private alertController: AlertController,
              private toastController: ToastController) { }

  async alertaInformativa(message:string) {
    const alert = await this.alertController.create({
      header: 'Alert',

      
      message: 'This is an alert message.',
      buttons: ['Cancel', 'Open Modal', 'Delete']
    });

    await alert.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      position:'top',
      duration: 1500
    });
    toast.present();
  }

}
