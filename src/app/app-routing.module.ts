import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { UploadRecipeComponent } from './upload-recipe/upload-recipe.component'


const routes: Routes = [
  { path: "recipe", component: RecipeComponent , children: [
      { path: "recipe/:recipeId", component: RecipeComponent}]},
  { path: "Upload recipe", component: UploadRecipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
