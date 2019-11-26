import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/domain/recipe';
import { RecipeService } from 'src/services/recipe.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe: Recipe;

  constructor(private router: Router, private recipeService: RecipeService) { }

  ngOnInit() {
    // this.activatedRoute.params.subscribe(
    //   params => { this.recipeService.findRecipeById(params['recipeId'].subscribe(
    //     (recipe: Recipe) => { this.recipe = recipe }
    //   ))}
    // )
  }

}
