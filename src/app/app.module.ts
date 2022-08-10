import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { RecipesComponent } from './recipesPage/recipes/recipes.component';
import { RecipeListComponent } from './recipesPage/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipesPage/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipesPage/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shoppingListPage/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shoppingListPage/shopping-edit/shopping-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
