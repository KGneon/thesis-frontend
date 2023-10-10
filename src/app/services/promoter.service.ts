import { Injectable } from '@angular/core';
import { Promoter } from '@app/entities/promoter';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromoterService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getPromoters(): Observable<Promoter[]> {
      return this.http.get<Promoter[]>(`${this.apiServerUrl}/api/promoters`);
  }

  public addPromoter(promoter: Promoter): Observable<Promoter> {
      return this.http.post<Promoter>(`${this.apiServerUrl}/api/promoters/add`, promoter);
  }

  public updatePromoter(promoter: Promoter): Observable<Promoter> {
      return this.http.put<Promoter>(`${this.apiServerUrl}/api/promoters/update`, promoter);
  }

  public deletePromoter(promoterId : number): Observable<void> {
      return this.http.delete<void>(`${this.apiServerUrl}/api/promoters/delete/${promoterId}`);
  }
}
