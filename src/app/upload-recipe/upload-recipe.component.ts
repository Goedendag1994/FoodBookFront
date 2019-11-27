import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/domain/recipe';
import { RecipeService } from 'src/services/recipe.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-upload-recipe',
  templateUrl: './upload-recipe.component.html',
  styleUrls: ['./upload-recipe.component.css']
})
export class UploadRecipeComponent implements OnInit {


  recipe: Recipe;
  recipeTitle: string;



  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }


  public addRecipe() {
    var recipe:Recipe = new Recipe(null, this.recipeTitle);
    this.recipeService.addRecipe(recipe).subscribe(
      (recipe: Recipe) => {},
      (error: HttpErrorResponse) => alert("Er is een fout opgetreden: " + error.status + " " + error.error + "\n" + "\nMessage:\n" + error.message),
      () => {console.log("recepten opgehaald"); }
    )
  }




}
