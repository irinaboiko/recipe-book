import { Routes } from '@angular/router';

import { RecipesComponent } from '../recipesPage/recipes/recipes.component';
import { ShoppingListComponent } from '../shoppingListPage/shopping-list/shopping-list.component';
import { RecipeStartComponent } from '../recipesPage/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from '../recipesPage/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from '../recipesPage/recipe-edit/recipe-edit.component';
import { RecipesResolverService } from '../services/recipesResolver.service';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'add-recipe', component: RecipeEditComponent },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipesResolverService],
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipesResolverService],
      },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
];
