import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { routes } from './router';
import { AppComponent } from './app/app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BookManagerComponent } from './book-manager/book-manager.component';
import { BookManagerService } from './book-manager/book-manager.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routes ],
  declarations: [ AppComponent, NavbarComponent, JumbotronComponent, ContactUsComponent, BookManagerComponent ],
  providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy} ],
  bootstrap: [ AppComponent ]
})
export class MainModule { }