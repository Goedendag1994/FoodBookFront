import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PartOfDish } from 'src/domain/partofdish';

@Injectable({
    providedIn: 'root'
  })

export class PartofdishService {
    httpOptions = { headers: new HttpHeaders({'content-type': 'application/json'}) }
    constructor(private http:HttpClient){ }

    public findAll(): Observable<PartOfDish[]>{
        return this.http.get<PartOfDish[]>(`${environment.foodbookUrl}partofdish`);
    }

    public addPartOfDish(partofdish: PartOfDish): Observable<PartOfDish>{
        console.log(JSON.stringify(partofdish));
        return this.http.post<PartOfDish> (`${environment.foodbookUrl}partofdish`, partofdish, this.httpOptions);
    }



    public findByRecipeRecipeId(recipeId: number): Observable<PartOfDish[]>{
        return this.http.get<PartOfDish[]>(`${environment.foodbookUrl}partofdish/${recipeId}`);
    }

}
