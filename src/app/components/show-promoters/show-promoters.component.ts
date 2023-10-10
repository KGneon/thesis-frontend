import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Promoter } from '@app/entities/promoter';
import { PromoterService } from 'src/app/services/promoter.service';

@Component({
  selector: 'app-show-promoters',
  templateUrl: './show-promoters.component.html',
  styleUrls: ['./show-promoters.component.css']
})
export class ShowPromotersComponent {
  availablePromoter = true; //do zmiany zaleznie od studentsLead
  public promoters: Promoter[];
  
  constructor(private promoterService: PromoterService){}

  ngOnInit() {
    this.getPromoters();
  }

  public getPromoters(): void {
    this.promoterService.getPromoters().subscribe(
      (response: Promoter[]) => {
        this.promoters = response;
        console.log(this.promoters);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  };
}
