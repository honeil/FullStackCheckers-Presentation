import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CheckerboardPage } from '../pages/checkerboard/checkerboard';
import { MoveService } from '../services/move-service';
import { Checker } from '../checker/checker.component';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CheckerboardPage,
    Checker
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CheckerboardPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, MoveService]
})
export class AppModule {}
