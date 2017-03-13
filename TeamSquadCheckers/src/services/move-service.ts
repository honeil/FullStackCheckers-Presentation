import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MoveService {
    public data: any;
    responseData: any = [{},{}];
    private url: string = "http://127.0.0.1:8080/playerMove";
    private initUrl: string = "http://127.0.0.1:8080/start";
    private npcUrl: string = "http://127.0.0.1:8080/npcMove";
    initialState:any ;


    constructor(private http: Http){
    }

    getInitialState(){
        return this.http.get(this.initUrl);
    }

    submitMove(firstCoordinate: string, secondCoordinate: string) {

        this.data = {
            "firstCoordinate": firstCoordinate,
            "secondCoordinate": secondCoordinate
        };

        console.log("Before new data: ")
        // this.http.post(this.url, this.data).subscribe(response => {
        //     this.responseData = response.json();
        //     console.log("in response data: ");
        //     console.log(this.responseData);
        //     console.log("\n new data! \n");
        // });


        // return this.responseData;
        return this.http.post(this.url, this.data);
    }

    npcMove() {
        console.log('just started npcMove');
        setTimeout(() => {
            console.log('delay call');
        }, 2000);  
        return this.http.get(this.npcUrl);
    }
}