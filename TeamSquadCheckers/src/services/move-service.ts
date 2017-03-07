import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MoveService {
    private data: any;
    private responseData: any;
    private url: string = "http://127.0.0.1:8080/movePiece";

    constructor(private http: Http){}

    submitMove(firstCoordinate: string, secondCoordinate: string) {
        this.data = {
  "xPositionInitial": 0,
  "yPositionInitial": 0,
  "xPositionDesired": 1,
  "yPositionDesired": 1
        };

        console.log(this.data);
        console.log(this.url);
        this.http.post(this.url, this.data).subscribe(response => {
            this.responseData = response.json();
            console.log(this.responseData);
        });
    }
}