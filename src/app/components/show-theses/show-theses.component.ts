import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Thesis } from '@app/entities/thesis';
import { ThesisService } from '@app/services/thesis.service';

@Component({
  selector: 'app-show-theses',
  templateUrl: './show-theses.component.html',
  styleUrls: ['./show-theses.component.css']
})
export class ShowThesesComponent {
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
}
