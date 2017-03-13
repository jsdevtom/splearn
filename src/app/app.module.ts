import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QaPairsComponent } from './qa-pairs/qa-pairs.component';
import { QaPairsService } from "app/qa-pairs/qa-pairs.service";
import { QuizComponent } from './quiz/quiz.component';
import { QaPairEditorComponent } from './qa-pair-editor/qa-pair-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QaPairsComponent,
    QuizComponent,
    QaPairEditorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    QaPairsService,
    { provide: 'Body',  useValue: document.body }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
