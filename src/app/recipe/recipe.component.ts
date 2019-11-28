import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/domain/recipe';
import { RecipeService } from 'src/services/recipe.service';
// import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { PartofdishService } from 'src/services/partofdish.service';
import { PartOfDish } from 'src/domain/partofdish';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe: Recipe;
  partOfDishes: PartOfDish[];
  recipeId: number;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService, private partOfDishService: PartofdishService) { }

  ngOnInit() {
   }

   findRecipeById() {
   console.log(this.recipeId);
   this.recipeService.findRecipeById(this.recipeId).subscribe(
     (recipe: Recipe) => {this.recipe = recipe; console.log(this.recipe)},
     (error: HttpErrorResponse) => alert("Er is een fout opgetreden: " + error.status + " " + error.error + "\n" + "\nMessage:\n" + error.message),
     () => { }
   )
   }

   //Zoekt partofdishes m.b.v. recepiId
   findByRecipeRecipeId() {
    console.log(this.recipeId);
    this.partOfDishService.findByRecipeRecipeId(this.recipeId).subscribe(
      (partOfDishes: PartOfDish[]) => {this.partOfDishes = partOfDishes; console.log(this.partOfDishes)},
      (error: HttpErrorResponse) => alert("Er is een fout opgetreden: " + error.status + " " + error.error + "\n" + "\nMessage:\n" + error.message),
      () => { }
    )

    }


}
