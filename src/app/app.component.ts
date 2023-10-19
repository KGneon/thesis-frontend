import { Component } from '@angular/core';
import { Student } from './entities/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showStudentsList : Boolean = false;
  showPromotersList : Boolean = false;
  showThesesList : Boolean = false;

  showStudents(){
    if(this.showStudentsList == false) this.showStudentsList = true;
    else this.showStudentsList = false;
  }
  showPromoters(){
    if(this.showPromotersList == false) this.showPromotersList = true;
    else this.showPromotersList = false;
  }
  showTheses(){
    if(this.showThesesList == false) this.showThesesList = true;
    else this.showThesesList = false;
  }
  
}
