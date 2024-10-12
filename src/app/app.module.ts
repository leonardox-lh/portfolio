import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MainComponent } from './main/main.component';
import { IconsComponent } from './icons/icons.component';
import { TitleComponent } from './title/title.component';
import { ToolsComponent } from './tools/tools.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    IconsComponent,
    TitleComponent,
    ToolsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
