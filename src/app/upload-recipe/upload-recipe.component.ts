import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Recipe } from 'src/domain/recipe';
import { RecipeService } from 'src/services/recipe.service';
import { PartOfDish } from 'src/domain/partofdish';
import { PartofdishService } from 'src/services/partofdish.service';
import { Ingredient } from 'src/domain/ingredient';
import { IngredientService } from 'src/services/ingredient.service'; 

@Component({
  selector: 'app-upload-recipe',
  templateUrl: './upload-recipe.component.html',
  styleUrls: ['./upload-recipe.component.css']
})
export class UploadRecipeComponent implements OnInit {


  recipe: Recipe;
  recipeTitle: string;

  ingredient: Ingredient;
  nameIngredient: string;

  partOfDish: PartOfDish
  unit: string;
  quantity: number;


  constructor(private recipeService: RecipeService, private partOfDishService: PartofdishService, private ingredientService: IngredientService) {}

  ngOnInit() {
  }



  public addRecipe() {
    var recipe:Recipe = new Recipe(null, this.recipeTitle);
    this.recipeService.addRecipe(recipe).subscribe(
      (recipe: Recipe) => {   this.recipe=recipe; console.log("log recipe check" + this.recipe)},
      (error: HttpErrorResponse) => alert("Er is een fout opgetreden: " + error.status + " " + error.error + "\n" + "\nMessage:\n" + error.message),
      () => {console.log("recept toegevoegd");this.addIngredient(); }
    )
  }


  public addIngredient(){
    var ingredient:Ingredient = new Ingredient(null, this.nameIngredient, null);
    this.ingredientService.addIngredient(ingredient).subscribe(
      (ingredient: Ingredient) => {  this.ingredient = ingredient; console.log(this.ingredient.ingredientId);},
      (error: HttpErrorResponse) => alert("Er is een fout opgetreden: " + error.status + " " + error.error + "\n" + "\nMessage:\n" + error.message),
      () => {console.log("ingredient toegevoegd"); this.addPartOfDish();}
    )
  }


  public addPartOfDish() {
    // this.recipeService.findByRecipeTitle(this.recipeTitle).subscribe(result => {this.recipe = result; console.log("in log", result)});
    console.log(this.recipe, "recipe log");
    // this.ingredientService.findByNameIngredient(this.nameIngredient).subscribe(result2 => this.ingredient = result2);
    var partOfDish:PartOfDish = new PartOfDish(null, this.ingredient, this.recipe, this.unit, this.quantity);
    this.partOfDishService.addPartOfDish(partOfDish).subscribe(
      (partOfDish: PartOfDish) => {console.log("in part of dish log")},
      (error: HttpErrorResponse) => alert("Er is een fout opgetreden: " + error.status + " " + error.error + "\n" + "\nMessage:\n" + error.message),
      () => {console.log("recepten opgehaald"); }
    )
  }



}
