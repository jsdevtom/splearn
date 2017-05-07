import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QaPairsComponent } from "app/qa-pairs/qa-pairs.component";
import { QuizComponent } from "app/quiz/quiz.component";
import { SignUpComponent } from "app/auth/sign-up/sign-up.component";
import { SignInComponent } from "app/auth/sign-in/sign-in.component";
import { CanActivateViaAuthGuard, CanViewAuthPages } from "app/auth/canActivateViaAuth.guard";
import { LandingComponent } from "app/landing/landing.component";
import { NotFoundComponent } from "app/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    component:  LandingComponent,
    pathMatch: 'full',
    canActivate: [CanViewAuthPages]
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
    children: [],
    canActivate: [CanViewAuthPages]
  },
  {
    path: 'signin',
    component:  SignInComponent,
    children: [],
    canActivate: [CanViewAuthPages]
  },
  {
    path: '**',
    component:  NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanActivateViaAuthGuard, CanViewAuthPages]
})
export class AppRoutingModule { }
