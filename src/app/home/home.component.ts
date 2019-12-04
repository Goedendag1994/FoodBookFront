import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/services/recipe.service'
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
  }

  toRecipes(){
    console.log();
    this.router.navigate(['/check-recipe'], { queryParams: { id: 11 } });  
  }

}