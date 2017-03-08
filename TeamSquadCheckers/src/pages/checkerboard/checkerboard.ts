import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MoveService } from '../../services/move-service';

/*
  Generated class for the Checkerboard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-checkerboard',
  templateUrl: 'checkerboard.html',
  providers: [MoveService]
})

export class CheckerboardPage implements OnInit{
public data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public moveService: MoveService) {  
  }

  ngOnInit(){
    this.data = this.moveService.getInitialState();
    console.log("initialized");
    console.log(this.data);
  }

  findPath(path:string):string{
    if(path == "RED_PIECE"){
      return '../assets/Red.png';
    } else if (path == "BLACK_PIECE") {
      return '../assets/Black.png';
    } else {
      return '';
    }
  }
  
  ionViewDidLoad() {
    console.log(this.data);

    console.log('ionViewDidLoad CheckerboardPage');
  }

  testMoveService(){
    this.moveService.submitMove('C3', 'D4');
    console.log("Assignment successful: ");
    console.log("data got to checkerboard: ");
    console.log(this.moveService.responseData);

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

  addBlackPiece(e){
    var img = document.createElement('img');
    img.src = '../assets/Red.png';
    console.log(e.target.id);
    document.getElementById(e.target.id).appendChild(img);
    
    img.addEventListener("click", function() {
               img.parentNode.removeChild(img);
            });
    }
  
  
}






