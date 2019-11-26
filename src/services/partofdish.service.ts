import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import { Partofdish } from 'src/domain/partofdish';

@Injectable({
    providedIn: 'root'
  })

export class PartofdishService {
    httpOptions = { headers: new HttpHeaders({'content-type': 'application/json'}) }
    constructor(private http:HttpClient){ }

    public findAll(): Observable<Partofdish[]>{
        return this.http.get<Partofdish[]>(`${environment.foodbookUrl}partofdish`);
    }


}
