import { Component, OnInit} from '@angular/core';
import { Recipe } from 'src/domain/recipe';
import { RecipeService} from 'src/services/recipe.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
 
})
export class HeaderComponent implements OnInit{

// recipes: Recipe[];
  recipeId: number;
  recipeTitle: string;

  navbarOpen = false;
  public clicked = false;
  toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;
  }
  constructor(private recipeService: RecipeService, private router: Router ) {}
  ngOnInit() {}
  public onClick(event): void {
      event.preventDefault();
      event.stopPropagation();
      this.clicked = true;
    
  }


  // findByRecipeTitleLike() {
  //   var recipeTitle = encodeURI(this.recipeTitle);
  //   console.log(recipeTitle);
  //   this.recipeService.findByRecipeTitleLike(recipeTitle).subscribe(
  //     (recipes: Recipe[]) => {this.recipes = recipes; console.log(this.recipes)},
  //     (error: HttpErrorResponse) => alert("Er is een fout opgetreden: " + error.status + " " + error.error + "\n" + "\nMessage:\n" + error.message),
  //     () => { }

  //   )
  //   }


    toRecipes(recipeTitle: string){
      console.log(recipeTitle);
      this.router.navigate(['/recipe'], { queryParams: { recipesearch: recipeTitle } });  
    }


}

