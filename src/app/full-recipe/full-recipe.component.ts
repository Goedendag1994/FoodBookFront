import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Recipe } from 'src/domain/recipe';
import { RecipeService } from 'src/services/recipe.service';
import { PartOfDish } from 'src/domain/partofdish';
import { PartofdishService } from 'src/services/partofdish.service';
import { ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';


@Component({
  selector: 'app-full-recipe',
  templateUrl: './full-recipe.component.html',
  styleUrls: ['./full-recipe.component.css']
})
export class FullRecipeComponent implements OnInit {

    recipeId: number;
    partOfDishes: PartOfDish[];

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService, private partOfDishService: PartofdishService) { }

  ngOnInit() {
      let id = this.activatedRoute.snapshot.queryParams["id"]
      console.log(id);
      id = id.substring(1);
      console.log(id);
      this.recipeId = id;
      console.log(this.recipeId);
      window.onload(this.findByRecipeRecipeId(id));

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
