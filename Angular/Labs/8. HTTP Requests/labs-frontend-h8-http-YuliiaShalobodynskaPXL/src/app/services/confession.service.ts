import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Confession } from '../models/confession.model';

import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ConfessionService {
   confessionList: Confession[] = [
     new Confession('Mondays are the worst','PXL-Digital','anonymous', true),
     new Confession('Angular beats VueJS any day','PXL-Digital','anonymous', true),
     new Confession('Taxes taxes taxes','PXL-Business','anonymous', false),
     new Confession('Am i an artist yet','PXL-MAD','banksy', false)
   ]

  apiurl: string = 'api/confessions';

  constructor(private http: HttpClient) { }
  
  // getConfessions(): Observable<any>{
  //   return this.http.get(this.apiurl).pipe(
  //     map(data => {
  //       console.log(data);
  //       return data;
  //     })
  //   );
  // }

  getConfessions(): Observable<Confession[]>{
    return this.http.get<Confession[]>(this.apiurl);
  }
  addConfession(conf: Confession): Observable<any>{
    return this.http.post(this.apiurl, conf);
  }

  updateConfession(conf: Confession): Observable<any>{
    return this.http.put(this.apiurl, conf);
  }


  getFilteredConfessions(searchTerm: string): Observable<Confession[]>{
    return this.http.get<Confession[]>(this.apiurl + '?post=' + searchTerm);
  }

}
