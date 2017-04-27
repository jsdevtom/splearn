import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QaPairsComponent } from "app/qa-pairs/qa-pairs.component";
import { QuizComponent } from "app/quiz/quiz.component";
import { SignUpComponent } from "app/auth/sign-up/sign-up.component";
import { SignInComponent } from "app/auth/sign-in/sign-in.component";
import { CanActivateViaAuthGuard } from "app/auth/canActivateViaAuth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/qapairs' ,
    pathMatch: 'full'
  },
  {
    path: 'qapairs',
    component:  QaPairsComponent,
    children: [],
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'revise',
    component:  QuizComponent,
    children: [],
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'signup',
    component:  SignUpComponent,
    children: []
  },
  {
    path: 'signin',
    component:  SignInComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanActivateViaAuthGuard]
})
export class AppRoutingModule { }
