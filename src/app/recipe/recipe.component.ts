import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
// import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/domain/recipe';
import { RecipeService } from 'src/services/recipe.service';
import { PartofdishService } from 'src/services/partofdish.service';
import { PartOfDish } from 'src/domain/partofdish';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe: Recipe;
  recipeId: number;
  recipes: Recipe[];
  recipeTitle: string;
  partOfDishes: PartOfDish[];


  constructor(private recipeService: RecipeService, private partOfDishService: PartofdishService) { }

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


    findByRecipeTitleLike() {
      var recipeTitle = encodeURI(this.recipeTitle);
      console.log(recipeTitle);
      this.recipeService.findByRecipeTitleLike(recipeTitle).subscribe(
        (recipes: Recipe[]) => {this.recipes = recipes; console.log(this.recipes)},
        (error: HttpErrorResponse) => alert("Er is een fout opgetreden: " + error.status + " " + error.error + "\n" + "\nMessage:\n" + error.message),
        () => { }
      )
      }


}
