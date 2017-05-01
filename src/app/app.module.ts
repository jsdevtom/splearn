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
import { AuthService } from "app/auth/auth.service";
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { FromNowPipe } from "app/qa-pairs/from-now.pipe";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QaPairsComponent,
    QuizComponent,
    QaPairEditorComponent,
    SignUpComponent,
    SignInComponent,
    FromNowPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    QaPairsService,
    { provide: 'Body',  useValue: document.body },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
