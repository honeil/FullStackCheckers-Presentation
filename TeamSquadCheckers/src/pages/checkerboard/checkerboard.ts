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
    public isPlayerTurn: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams, public moveService: MoveService) {  
  }

  ngOnInit(){
    this.data = [{},{}];
  }

  initGame(){
    this.data = [{},{
                "G1": "RED_PIECE",
                "H2": "RED_PIECE",
                "E1": "RED_PIECE",
                "F2": "RED_PIECE",
                "G3": "RED_PIECE",
                "C1": "RED_PIECE",
                "D2": "RED_PIECE",
                "E3": "RED_PIECE",
                "H6": "BLACK_PIECE",
                "A1": "RED_PIECE",
                "B2": "RED_PIECE",
                "C3": "RED_PIECE",
                "F6": "BLACK_PIECE",
                "G7": "BLACK_PIECE",
                "H8": "BLACK_PIECE",
                "A3": "RED_PIECE",
                "D6": "BLACK_PIECE",
                "E7": "BLACK_PIECE",
                "F8": "BLACK_PIECE",
                "B6": "BLACK_PIECE",
                "C7": "BLACK_PIECE",
                "D8": "BLACK_PIECE",
                "A7": "BLACK_PIECE",
                "B8": "BLACK_PIECE"
    }]
  }

  stopGame(){
    this.data = [{},{}];
  }

  moveA3toB4(){
      this.data = [{},{
                "G1": "RED_PIECE",
                "H2": "RED_PIECE",
                "E1": "RED_PIECE",
                "F2": "RED_PIECE",
                "G3": "RED_PIECE",
                "C1": "RED_PIECE",
                "D2": "RED_PIECE",
                "E3": "RED_PIECE",
                "H6": "BLACK_PIECE",
                "A1": "RED_PIECE",
                "B2": "RED_PIECE",
                "C3": "RED_PIECE",
                "F6": "BLACK_PIECE",
                "G7": "BLACK_PIECE",
                "H8": "BLACK_PIECE",
                "B4": "RED_PIECE",
                "D6": "BLACK_PIECE",
                "E7": "BLACK_PIECE",
                "F8": "BLACK_PIECE",
                "B6": "BLACK_PIECE",
                "C7": "BLACK_PIECE",
                "D8": "BLACK_PIECE",
                "A7": "BLACK_PIECE",
                "B8": "BLACK_PIECE"
    }]
  }

  fetchMoveService(){
        this.moveService.getInitialState().subscribe(response => {
            this.data = response.json();
            this.isPlayerTurn = this.data[0].isPlayerMove;
          // this.whoHasWon = this.data[2].whoHasWon;
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

  testMoveService(){
    this.moveService.submitMove('C3', 'D4').subscribe(response => {
      this.data = response.json();
    });
    console.log("Assignment successful: ");
    console.log("data got to checkerboard: ");
    console.log(this.moveService.responseData);

  }

  captureCoordinate(event){
   if (this.isPlayerTurn){ 
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
                        this.isPlayerTurn = this.data[0].isPlayerMove;
                        //if (this.data[2].whoHasWon != null)
                        //  
                        if (!this.data[0].isPlayerMove){
                            setTimeout(() => {
                              this.moveService.npcMove()
                                  .subscribe(response => {
                                    this.data = response.json();
                                    this.isPlayerTurn = this.data[0].isPlayerMove;
                                    //this.whoHasWon = this.data[2].whoHasWon;
                                  }),
                            console.log('delay call');
                            }, 2000);
                        }  
                      });
      this.firstCoordinate = undefined;
      this.secondCoordinate = undefined;
    }
   }
  }
}






