import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
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
