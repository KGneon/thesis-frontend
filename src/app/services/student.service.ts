import { Injectable } from '@angular/core';
import { Student } from '@app/entities/student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getStudents(): Observable<Student[]> {
      return this.http.get<Student[]>(`${this.apiServerUrl}/api/students`);
  }

  public addStudent(student: Student): Observable<Student> {
      return this.http.post<Student>(`${this.apiServerUrl}/api/students/add`, student);
  }

  public updateStudent(student: Student): Observable<Student> {
      return this.http.put<Student>(`${this.apiServerUrl}/api/students/update`, student);
  }

  public deleteStudent(studentId : number): Observable<void> {
      return this.http.delete<void>(`${this.apiServerUrl}/api/students/delete/${studentId}`);
  }

  //public createStudentWithDetails(student: Student): 
}
