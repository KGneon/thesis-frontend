import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundUserComponent } from './components/not-found-user/not-found-user.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ShowStudentsComponent } from './components/show-students/show-students.component';
import { AddPromoterComponent } from './components/add-promoter/add-promoter.component';
import { AddThesisComponent } from './components/add-thesis/add-thesis.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ShowPromotersComponent } from './components/show-promoters/show-promoters.component';
import { ShowThesesComponent } from './components/show-theses/show-theses.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundUserComponent},
  {path: 'main-page', component: MainPageComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},

  {path: 'show-students', component: ShowStudentsComponent},
  {path: 'show-theses', component: ShowThesesComponent},
  {path: 'show-promoters', component: ShowPromotersComponent},

  {path: 'add-student', component: AddStudentComponent},
  {path: 'add-thesis', component: AddThesisComponent},
  {path: 'add-promoter', component: AddPromoterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
