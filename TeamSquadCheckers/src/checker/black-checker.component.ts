import { Component } from '@angular/core';

@Component({
    selector:'black-checker',
    template:`
        <div>
            <img src= '../../assets/Black.png'>
        </div>
    `
})

export class BlackChecker{
    public visible:Boolean;

    constructor(){    }

    public setVisible(): void{
        this.visible = true;
    }

    public setHidden(): void{
        this.visible = false;
    }
}