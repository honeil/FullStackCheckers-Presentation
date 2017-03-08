import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MoveService {
    public data: any;
    public responseData: any;
    private url: string = "http://127.0.0.1:8080/playerMove";
    private initUrl: string = "http://127.0.0.1:8080/start";

      initialState:any ;

    constructor(private http: Http){
        this.initialState = 
        [
            {
                "isPlayerMove": true
            },
            {
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
            }
        ];
    }

    getInitialState(){
        return this.initialState;
    }


    submitMove(firstCoordinate: string, secondCoordinate: string) {
        this.data = {
            "firstCoordinate": firstCoordinate,
            "secondCoordinate": secondCoordinate
        };
        console.log("Before new data: ")
        this.http.post(this.url, this.data).subscribe(response => {
            this.responseData = response.json();
            console.log("in response data: ");
            console.log(this.responseData);
            console.log("\n new data! \n");
        });
    }
}