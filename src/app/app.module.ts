import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/menubar';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NavSuperiorComponent } from './nav-superior/nav-superior.component';
import { FooterComponent } from './footer/footer.component';
import {routing } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavSuperiorComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    AppRoutingModule,
    MenubarModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
