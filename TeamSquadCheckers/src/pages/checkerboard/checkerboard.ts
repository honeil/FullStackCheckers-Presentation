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
    public firstCoordinate: any; 
    public secondCoordinate: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public moveService: MoveService) {  
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckerboardPage');
  }

  testMoveService(){
    this.moveService.submitMove('A1', 'B2');
    console.log('Move submitted');
  }
  captureCoordinate(event){
    if (this.firstCoordinate == undefined){
      this.firstCoordinate = event;
    } else if (event == this.firstCoordinate) { 
      this.firstCoordinate = undefined;
    } else {
      console.log("assigning 2nd coor");
      this.secondCoordinate = event;
      this.moveService.submitMove(this.firstCoordinate,this.secondCoordinate);
      this.firstCoordinate = undefined;
      this.secondCoordinate = undefined;
    }
  }
}
