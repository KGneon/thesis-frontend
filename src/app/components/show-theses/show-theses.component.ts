import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Thesis } from '@app/entities/thesis';
import { ThesisService } from '@app/services/thesis.service';

@Component({
  selector: 'app-show-theses',
  templateUrl: './show-theses.component.html',
  styleUrls: ['./show-theses.component.css']
})
export class ShowThesesComponent implements OnInit {
  public theses: Thesis[];
  
  constructor(private thesisService: ThesisService){}

  ngOnInit() {
    this.getTheses();
  }

  public getTheses(): void {
    this.thesisService.getTheses().subscribe(
      (response: Thesis[]) => {
        this.theses = response;
        console.log(this.theses);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  };

  public onAddThesis(addForm: NgForm): void {
    document.getElementById('add-thesis-form')?.click();
    this.thesisService.addThesis(addForm.value).subscribe(
      (respone: Thesis) => {
        console.log(respone);
        this.getTheses();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onUpdateThesis(thesis: Thesis): void {
    this.thesisService.updateThesis(thesis).subscribe(
      (respone: Thesis) => {
        console.log(respone);
        this.getTheses();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onDeleteStudent(studentId: number): void {
    this.thesisService.deleteThesis(studentId).subscribe(
      (response: void) => {
        console.log(response);
        this.getTheses();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
