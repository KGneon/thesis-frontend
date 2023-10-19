import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Promoter } from '@app/entities/promoter';
import { PromoterService } from 'src/app/services/promoter.service';

@Component({
  selector: 'app-show-promoters',
  templateUrl: './show-promoters.component.html',
  styleUrls: ['./show-promoters.component.css']
})
export class ShowPromotersComponent implements OnInit {
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

  public onAddPromoter(addForm: NgForm): void {
    document.getElementById('add-promoter-form')?.click();
    this.promoterService.addPromoter(addForm.value).subscribe(
      (respone: Promoter) => {
        console.log(respone);
        this.getPromoters();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onUpdatePromoter(promoter: Promoter): void {
    this.promoterService.updatePromoter(promoter).subscribe(
      (respone: Promoter) => {
        console.log(respone);
        this.getPromoters();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onDeletePromoter(promoterId: number): void {
    this.promoterService.deletePromoter(promoterId).subscribe(
      (response: void) => {
        console.log(response);
        this.getPromoters();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  

  public onOpenModal(promoter: Promoter, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if(mode === 'add') {
      button.setAttribute('data-target', '#addPromoterModal');
    }
    if(mode === 'edit') {
      button.setAttribute('data-target', '#updatePromoterModal');
    }
    if(mode === 'delete') {
      button.setAttribute('data-target', '#deletePromoterModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
