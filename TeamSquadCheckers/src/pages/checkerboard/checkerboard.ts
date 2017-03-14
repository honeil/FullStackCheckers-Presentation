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
  templateUrl: 'checkerboard.html'
})

export class CheckerboardPage implements OnInit{
    public firstCoordinate: any; 
    public secondCoordinate: any;
    public data: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public moveService: MoveService) {  
  }

  ngOnInit(){
    this.data = [{},{}];
  }

  getNPCMoveService(){
        this.moveService.getNPCMoveState().subscribe(response => {
            this.data = response.json();
        });
  }

  stopGame(){
    this.data = [{},{}];
  }

  fetchMoveService(){
        this.moveService.getInitialState().subscribe(response => {
            this.data = response.json();
        });
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
    this.moveService.submitMove('C3', 'D4').subscribe(response => {
      this.data = response.json();
    });
    console.log("Assignment successful: ");
    console.log("data got to checkerboard: ");
    console.log(this.moveService.responseData);

  }

  captureCoordinate(event){
    if (this.firstCoordinate == undefined){
      this.firstCoordinate = event;
    } else if (event == this.firstCoordinate) { 
      this.firstCoordinate = undefined;
    } else {
      this.secondCoordinate = event;
      console.log("before sending  coor " + this.firstCoordinate  + " , " + this.secondCoordinate);

      this.moveService.submitMove(this.firstCoordinate,this.secondCoordinate)
                      .subscribe(response => {
                      this.data = response.json();
    });
      this.firstCoordinate = undefined;
      this.secondCoordinate = undefined;
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






