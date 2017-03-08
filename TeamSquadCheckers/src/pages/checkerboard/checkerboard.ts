import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MoveService } from '../../services/move-service';

/*
  Generated class for the Checkerboard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-checkerboard',
  templateUrl: 'checkerboard.html'
})
export class CheckerboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public moveService: MoveService) {  
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckerboardPage');
  }

  testMoveService(){
    this.moveService.submitMove('A1', 'B2');
    console.log('Move submitted');
  }
  onClick(event){
    let firstCoordinate: any; 
    let secondCoordinate: any;
    if (firstCoordinate == undefined){
      firstCoordinate = event.id;
    } else if (event.id == firstCoordinate) {
      firstCoordinate == undefined;
    } else {
      secondCoordinate == event.id;
    }
  }

  addBlackPiece(){
    var img = document.createElement('img');
    img.src = '../assets/Black.png';
    document.getElementById("C1").appendChild(img);
  }

  
}
