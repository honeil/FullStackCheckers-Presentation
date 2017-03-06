import { Component } from '@angular/core';
import { CheckerboardPage } from '../checkerboard/checkerboard';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  goToCheckerboard(){
    this.navCtrl.push(CheckerboardPage);
  }
}
