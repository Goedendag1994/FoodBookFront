import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import { Recipe } from 'src/domain/recipe';

@Injectable({
    providedIn: 'root'
  })

export class RecipeService {
    httpOptions = { headers: new HttpHeaders({'content-type': 'application/json'}) }
    constructor(private http:HttpClient){ }

    public findAll(): Observable<Recipe[]>{
        return this.http.get<Recipe[]>(`${environment.foodbookUrl}recipe`);
    }

    public findRecipeById(): Observable<Recipe>{
        return this.http.get<Recipe>(`${environment.foodbookUrl}recipe/{recipeId}`)
    }

    public findByRecipeTitle(): Observable<Recipe>{
        return this.http.get<Recipe>(`${environment.foodbookUrl}recipe/recipeTitle/{recipeTitle}`)
    }

    public findByRecipeTitleLike(): Observable<Recipe[]>{
        return this.http.get<Recipe[]>(`${environment.foodbookUrl}recipe/recipetitlelike/{recipeTitle}`)
    }



}
