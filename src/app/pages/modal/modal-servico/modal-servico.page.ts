import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-servico',
  templateUrl: './modal-servico.page.html',
  styleUrls: ['./modal-servico.page.scss'],
})
export class ModalServicoPage implements OnInit {
  public radiusmiles = 1;
  public minmaxprice = {
    upper: 500,
    lower: 10
  };

  myDate: String = new Date().toString();

  async modalServico () {
    const modal = await this.modalCtrl.create({
      component: ModalServicoPage
    });
    return await modal.present();
  }

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
