import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/timer";
import "rxjs/add/operator/finally";
import "rxjs/add/operator/takeUntil";
import "rxjs/add/operator/map";
import { BackgroundMode } from '@ionic-native/background-mode/ngx';

@Component({
  selector: 'app-modal-reperfilamento',
  templateUrl: './modal-reperfilamento.page.html',
  styleUrls: ['./modal-reperfilamento.page.scss'],
})
export class ModalReperfilamentoPage implements OnInit {
  counter = 60;
  interval = 1000;

  constructor(private modalCtrl: ModalController, private backgroundMode: BackgroundMode) {
    this.backgroundMode.enable();
  }

  ngOnInit() {
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

countdown: number;

 startCountdownTimer() {
    const interval = 1000;

    const stream$ = Observable.timer(0, interval)
      .map(value => value + 1);
    stream$.subscribe(value => this.countdown = value);
  }

  public hora: number = 0;
  public minuto: number = 0;
  public segundo: number = 0;
  public total: any;
  public contador: any;

  start(){

    //if (this.contador == undefined){
      this.contador = setInterval(()=>{
        this.segundo += 1;
        if (this.segundo == 60){
          this.minuto += 1;
          this.segundo = 0;
          if (this.minuto == 60){
            this.hora += 1;
            this.minuto = 0;
          }
        }
      }, 1000);
    //}
  }

  pause(){
    clearInterval(this.contador);
  }

  stop(){
    this.total = this.hora+':'+this.minuto+':'+this.segundo;
    alert('Trabalho concluido em '+this.total);

    this.pause();

    this.hora = 0;
    this.minuto = 0;
    this.segundo = 0;

    this.closeModal();
  }
}