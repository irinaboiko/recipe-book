import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipesPage/recipes/recipes.component';
import { RecipeListComponent } from './recipesPage/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipesPage/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipesPage/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shoppingListPage/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shoppingListPage/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { ShoppingListService } from './services/shoppingList.service';
import { AppRoutingModule } from './routing/appRouting.module';
import { RecipeStartComponent } from './recipesPage/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipesPage/recipe-edit/recipe-edit.component';
import { RecipeService } from './services/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
