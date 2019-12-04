import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { UploadRecipeComponent } from './upload-recipe/upload-recipe.component'
import { FullRecipeComponent } from './full-recipe/full-recipe.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: "recipe", component: RecipeComponent , children: [
      { path: "recipe/:recipeTitle", component: RecipeComponent},
      { path: "recipe/:recipeId", component: RecipeComponent},
      { path: "recipe/partofdish/:recipeId", component: RecipeComponent},
      { path: "recipe/recipetitlelike/:recipeTitle", component: RecipeComponent}]},
  { path: "upload-recipe", component: UploadRecipeComponent },
  { path: "check-recipe", component: FullRecipeComponent, children: [
    { path: "check-recipe/:recipeId", component: FullRecipeComponent},
] },
{path: "home", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
