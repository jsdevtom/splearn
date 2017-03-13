import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QaPairsComponent } from "app/qa-pairs/qa-pairs.component";
import { QuizComponent } from "app/quiz/quiz.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/qapairs' ,
    pathMatch: 'full'
  },
  {
    path: 'qapairs',
    component:  QaPairsComponent,
    children: []
  },
  {
    path: 'revise',
    component:  QuizComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
