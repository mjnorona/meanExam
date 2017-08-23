import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { PollComponent } from './poll/poll.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'create', component: CreateQuestionComponent},
  { path: 'poll/:id', component: PollComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
