import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private http: HttpClient,
  ) {}

  private setHeaders(): HttpHeaders {
    let headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // 'Authorization': `Basic ${this.getCredentials()}`
    };

    return new HttpHeaders(headersConfig);
  }

  private formatErrors(error: any) {
    console.log(error);
    return Observable.throw(error);
  }

  post(body: Object = {}): Observable<any> { 
    console.log("Body", body, environment.DB_API_URL);
    return this.http.post(`${environment.DB_API_URL}/travelapp/`, JSON.stringify(body), { headers: this.setHeaders() })
        .catch(this.formatErrors);
  }

  getAll() : Observable<any> {
    return this.get('_all_docs?include_docs=true', {});
  }

  get(path: string, params: {}): Observable<any> {
    return this.http.get(`${environment.DB_API_URL}/travelapp/${path}`, { headers: this.setHeaders(), params: new HttpParams(params)})
      .catch(this.formatErrors)
      .map((res:Response) => res);
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put( `${environment.DB_API_URL}/travelapp/${path}`, JSON.stringify(body), { headers: this.setHeaders() })
        .catch(this.formatErrors)
        .map((res:Response) => res);
  }

  delete(id, rev): Observable<any> {
   console.log("Delete", id);
   return this.http.delete(`${environment.DB_API_URL}/travelapp/${id}?rev=${rev}`, { headers: this.setHeaders() })
    .catch(this.formatErrors)
    .map((res:Response) => res);
}

}