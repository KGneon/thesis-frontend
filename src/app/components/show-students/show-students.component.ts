import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '@app/entities/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-show-students',
  templateUrl: './show-students.component.html',
  styleUrls: ['./show-students.component.css']
})
export class ShowStudentsComponent implements OnInit {
  public students: Student[];
  public editStudent: Student;
  public deleteStudent: Student;
  
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

  public onAddStudent(addForm: NgForm): void {
    document.getElementById('add-student-form')?.click();
    this.studentService.addStudent(addForm.value).subscribe(
      (respone: Student) => {
        console.log(respone);
        this.getStudents();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onUpdateStudent(student: Student): void {
    this.studentService.updateStudent(student).subscribe(
      (respone: Student) => {
        console.log(respone);
        this.getStudents();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onDeleteStudent(studentId: number): void {
    this.studentService.deleteStudent(studentId).subscribe(
      (response: void) => {
        console.log(response);
        this.getStudents();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(student: Student, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if(mode === 'add') {
      button.setAttribute('data-target', '#addStudentModal');
    }
    if(mode === 'edit') {
      this.editStudent = student;
      button.setAttribute('data-target', '#updateStudentModal');
    }
    if(mode === 'delete') {
      button.setAttribute('data-target', '#deleteStudentModal');
    }
    container?.appendChild(button);
    button.click();
  }

  
}
