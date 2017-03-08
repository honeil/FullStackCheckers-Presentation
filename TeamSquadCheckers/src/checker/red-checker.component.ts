import { Component } from '@angular/core';

@Component({
    selector:'red-checker',
    template:`
        <div>
            <img src= '../../assets/Red.png'>
        </div>
    `
})

export class RedChecker{
    public visible:Boolean;

    constructor(){    }

    public setVisible(): void{
        this.visible = true;
    }

    public setHidden(): void{
        this.visible = false;
    }
}