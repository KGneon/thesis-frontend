import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Thesis } from '@app/entities/thesis';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ThesisService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getTheses(): Observable<Thesis[]> {
      return this.http.get<Thesis[]>(`${this.apiServerUrl}/api/theses`);
  }

  public addThesis(thesis: Thesis): Observable<Thesis> {
      return this.http.post<Thesis>(`${this.apiServerUrl}/api/theses/add`, thesis);
  }

  public updateThesis(thesis: Thesis): Observable<Thesis> {
      return this.http.put<Thesis>(`${this.apiServerUrl}/api/theses/update`, thesis);
  }

  public deleteThesis(thesisId : number): Observable<void> {
      return this.http.delete<void>(`${this.apiServerUrl}/api/theses/delete/${thesisId}`);
  }
}
