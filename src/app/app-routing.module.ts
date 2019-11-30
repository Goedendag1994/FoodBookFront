import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { UploadRecipeComponent } from './upload-recipe/upload-recipe.component'
import { FullRecipeComponent } from './full-recipe/full-recipe.component';


const routes: Routes = [
  { path: "recipe", component: RecipeComponent , children: [
      { path: "recipe/:recipeId", component: RecipeComponent},
      { path: "recipe/partofdish/:recipeId", component: RecipeComponent},
      { path: "recipe/recipetitlelike/:recipeTitle", component: RecipeComponent}]},
  { path: "upload-recipe", component: UploadRecipeComponent },
  { path: "check-recipe", component: FullRecipeComponent, children: [
    { path: "check-recipe/:recipeId", component: FullRecipeComponent},
] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
