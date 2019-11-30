import { Component } from '@angular/core';
import { RecipeService } from 'src/services/recipe.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Recipe } from 'src/domain/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontendfoodbooktest';
  recipelist: Recipe[];

  ngOnInit(){
    this.findAll();
  }


  constructor(private recipeService: RecipeService) { }


  findAll() {
    this.recipeService.findAll().subscribe(
      (recipelist: Recipe[]) => {this.recipelist = recipelist; console.log(this.recipelist)},
      (error: HttpErrorResponse) => alert("Er is een fout opgetreden: " + error.status + " " + error.error + "\n" + "\nMessage:\n" + error.message),
      () => { }
    )
    }


}
