import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MoveService {
    public data: any;
    responseData: any;
    private url: string = "http://127.0.0.1:8080/playerMove";
    private initUrl: string = "http://127.0.0.1:8080/start";

      initialState:any ;

    constructor(private http: Http){
    }

    getInitialState(){
        this.http.get(this.initUrl).subscribe(response => {
            this.responseData = response.json();
            console.log("got data from HTTP");
        });
        
        return this.responseData;
    }

    submitMove(firstCoordinate: string, secondCoordinate: string) {

        this.data = {
            "firstCoordinate": firstCoordinate,
            "secondCoordinate": secondCoordinate
        };

        this.http.post(this.url, this.data).subscribe(response => {
            this.responseData = response.json();
            console.log(this.responseData)
            
        });

        return this.responseData;
    }
}