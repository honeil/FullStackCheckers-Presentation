import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { MoveService } from '../../services/move-service';

@Component({
  selector: 'page-checkerboard',
  templateUrl: 'checkerboard.html'
})

export class CheckerboardPage implements OnInit{
    public firstCoordinate: any; 
    public secondCoordinate: any;
    public data: any;
    public isPlayerTurn: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public moveService: MoveService, public alertCtrl: AlertController) {  
  }

  ngOnInit(){
    this.data = [{},{}];
  }
  

  fetchMoveService(){
        this.moveService.getInitialState().subscribe(response => {
            this.data = response.json();
            this.isPlayerTurn = this.data[0].isPlayerMove;
        });;
  }

  findPath(path:string):string{
    switch(path){
      case "RED_PIECE": {
        return '../assets/Red.png';
      }
      case "BLACK_PIECE": {
        return '../assets/Black.png';
      }
      case "RED_KING_PIECE": {
        return '../assets/RedKing.png';
      }
      case "BLACK_KING_PIECE": {
        return '../assets/BlackKing.png';
      }
      default: {
        return '';
      }
    }
  }
  
  ionViewDidLoad() {
    console.log(this.data);

    console.log('ionViewDidLoad CheckerboardPage');
  }

  presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Game Over',
   subTitle: this.data[2].whoHasWon + ' has won the game',
    buttons: [
      {
        text: 'New Game',
        handler: () => {
          this.fetchMoveService();
        }
      }]
  });
  alert.present();  
  }

  captureCoordinate(event){
   if (this.isPlayerTurn){ 
    if (this.firstCoordinate == undefined){
      this.firstCoordinate = event;
      document.getElementById(event).style["background-color"]= "yellow";
    } else if (event == this.firstCoordinate) { 
      document.getElementById(this.firstCoordinate).style["background-color"]= "darkslategrey";
      this.firstCoordinate = undefined;
    } else {
      this.secondCoordinate = event;
      console.log("before sending  coor " + this.firstCoordinate  + " , " + this.secondCoordinate);
      this.sendTurn();
      document.getElementById(this.firstCoordinate).style["background-color"]= "darkslategrey";
      this.firstCoordinate = undefined;
      this.secondCoordinate = undefined;
    }
   }
  }

  isGameOver(){
    if (this.data[2].whoHasWon != null) {
      this.presentAlert();
    } else {
      this.isNPCTurn();
    }
  }

  isNPCTurn(){
    if (!this.data[0].isPlayerMove){
      setTimeout(() => {
        this.moveService.npcMove()
            .subscribe(response => {
              this.data = response.json();
              this.isPlayerTurn = this.data[0].isPlayerMove;
              this.isGameOver();
            }),
      console.log('delay call');
      }, 2000);
    }  
  }

  sendTurn(){
    this.moveService.submitMove(this.firstCoordinate,this.secondCoordinate)
                      .subscribe(response => {
                        this.data = response.json();
                        this.isPlayerTurn = this.data[0].isPlayerMove;
                        this.isGameOver();
                      });
  }
}






