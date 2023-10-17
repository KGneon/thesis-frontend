import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowThesesComponent } from './components/show-theses/show-theses.component';
import { ShowPromotersComponent } from './components/show-promoters/show-promoters.component';
import { ShowStudentsComponent } from './components/show-students/show-students.component';

import { AddStudentComponent } from './components/add-student/add-student.component';
import { AddPromoterComponent } from './components/add-promoter/add-promoter.component';
import { AddThesisComponent } from './components/add-thesis/add-thesis.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShowStudentsComponent,
    ShowThesesComponent,
    ShowPromotersComponent,
    AddStudentComponent,
    AddThesisComponent,
    AddPromoterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
