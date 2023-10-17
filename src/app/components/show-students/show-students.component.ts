import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from '@app/entities/student';
import { StudentWithDetails } from '@app/entities/studentWithDetails';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.css']
})
export class ShowStudentsComponent implements OnInit {
  public students: Student[];
  public studentsWithDetails: StudentWithDetails[];
  
  constructor(private studentService: StudentService){}

  ngOnInit() {
    this.getStudents();
  }

  public getStudents(): void {
    this.studentService.getStudents().subscribe(
      (response: Student[]) => {
        this.students = response;
        console.log(this.students);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  };
}
