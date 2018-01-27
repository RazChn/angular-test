import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { UserComponent }  from './component/user.component';
<<<<<<< HEAD
import { AboutComponent } from './component/about.component';
=======

>>>>>>> 03323b6f08d250bc681c1f2c0942afd235345ee4
@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpModule ],
  declarations: [ AppComponent, UserComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
