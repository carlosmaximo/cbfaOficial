import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-inspecao',
  templateUrl: './modal-inspecao.page.html',
  styleUrls: ['./modal-inspecao.page.scss'],
})
export class ModalInspecaoPage implements OnInit {
  tam: any;
  mod: any;
  modEixo: any;
  rodaAprovacao: any;
  eixoAprovacao: any;
  public radiusmiles = 1;
  public minmaxprice = {
    upper: 500,
    lower: 10
  };

  tamanhos: any = ['33"', '36"', '39"'];
  modelos: any = ['MXW', 'MAX', 'OUTRO'];
  eixos: any = ['6 1/2x12"', '6 1/2x9', '6x11"', '5 1/2x10"'];

  myDate: String = new Date().toString();

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
