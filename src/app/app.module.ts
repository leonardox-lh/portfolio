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
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import {MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    IconsComponent,
    TitleComponent,
    ToolsComponent,
    EducationComponent,
    ProjectsComponent,
    FooterComponent,
    ModalComponent,
    ContactComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
