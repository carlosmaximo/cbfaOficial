import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ModalInspecaoPage } from '../modal-inspecao/modal-inspecao.page';
import { ModalReperfilamentoPage } from '../modal-reperfilamento/modal-reperfilamento.page';

@Component({
  selector: 'app-modal-os',
  templateUrl: './modal-os.page.html',
  styleUrls: ['./modal-os.page.scss'],
})
export class ModalOSPage implements OnInit {
  public radiusmiles = 1;
  public minmaxprice = {
    upper: 500,
    lower: 10
  };

  myDate: String = new Date().toString();

  constructor(
    private modalCtrl: ModalController,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  async modalInspecao () {
    const modal = await this.modalCtrl.create({
      component: ModalInspecaoPage
    });
    return await modal.present();
  }

  async modalReperfilamento () {
    const modal = await this.modalCtrl.create({
      component: ModalReperfilamentoPage
    });
    return await modal.present();
  }
}
