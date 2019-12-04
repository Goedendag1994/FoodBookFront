import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ingredient } from 'src/domain/ingredient';

@Injectable({
    providedIn: 'root'
  })

export class IngredientService {
    httpOptions = { headers: new HttpHeaders({'content-type': 'application/json'}) }
    constructor(private http:HttpClient){ }

    public findAll(): Observable<Ingredient[]>{
        return this.http.get<Ingredient[]>(`${environment.foodbookUrl}recipe`);
    }

    public findByNameIngredient(nameIngredient: string): Observable<Ingredient>{
        return this.http.get<Ingredient>(`${environment.foodbookUrl}ingredient/nameingredient/${nameIngredient}`);
    }

    public addIngredient(ingredient: Ingredient): Observable<Ingredient>{
        console.log(JSON.stringify(ingredient));
        return this.http.post<Ingredient> (`${environment.foodbookUrl}ingredient`, ingredient, this.httpOptions);
    }

}
