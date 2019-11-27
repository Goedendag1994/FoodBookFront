import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/domain/recipe';
import { RecipeService } from 'src/services/recipe.service';
// import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe: Recipe;
  recipeId: number;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
   }

   findRecipeById() {
    // var recipeId = encodeURI(this.recipeId.toString());
   console.log(this.recipeId);
   this.recipeService.findRecipeById(this.recipeId).subscribe(
     (recipe: Recipe) => {this.recipe = recipe; console.log(this.recipe)},
     (error: HttpErrorResponse) => alert("Er is een fout opgetreden: " + error.status + " " + error.error + "\n" + "\nMessage:\n" + error.message),
     () => { }
   )


  //  this.activatedRoute.params.subscribe(
  //   params => { this.recipeService.findRecipeById(params['recipeId']).subscribe(
  //     (recipe:Recipe)=> {this.recipe=recipe},
  //     (fout: HttpErrorResponse)=>alert("Er is een fout opgetreden: "+fout.status + " "+ fout.error+"\n"+"\nMessage:\n"+fout.message),
  //     ()=>{}
  //   )
  //  }      
  //   , (fout: HttpErrorResponse)=>alert("Er is een fout opgetreden: "+fout.status + " "+ fout.error+"\n"+"\nMessage:\n"+fout.message)
  //   , () => { }
  // )


    }

}

