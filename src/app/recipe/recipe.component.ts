import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Recipe } from 'src/domain/recipe';
import { RecipeService } from 'src/services/recipe.service';
import { PartofdishService } from 'src/services/partofdish.service';
import { PartOfDish } from 'src/domain/partofdish';
import { ActivatedRoute }  from '@angular/router';


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
  recipeTitleLike: string;


  constructor(private recipeService: RecipeService, private partOfDishService: PartofdishService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let recipeTitleLike = this.activatedRoute.snapshot.queryParams["recipesearch"]
    console.log(recipeTitleLike);
    this.recipeTitleLike = recipeTitleLike;
    console.log(this.recipeTitle);
    this.findByRecipeTitleLike(this.recipeTitleLike);
   }

    findByRecipeTitleLike(recipeTitleLike: string) {
      var recipeTitleLike = encodeURI(this.recipeTitleLike);
      console.log(recipeTitleLike);
      this.recipeService.findByRecipeTitleLike(recipeTitleLike).subscribe(
        (recipes: Recipe[]) => {this.recipes = recipes; console.log(this.recipes)},
        (error: HttpErrorResponse) => alert("Er is een fout opgetreden: " + error.status + " " + error.error + "\n" + "\nMessage:\n" + error.message),
        () => { }
      )
      }


}
