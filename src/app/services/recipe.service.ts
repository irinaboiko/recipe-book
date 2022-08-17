import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from '../shared/models/recipe.model';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from './shoppingList.service';

@Injectable()
export class RecipeService {
  recipesUpdated = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Meat Dish',
      'Dish from meat',
      'https://gotovim-doma.ru/images/recipe/e/4c/e4cad715fa2c3406c8bce678272beed8_l.jpg',
      [
        new Ingredient('Potato', 5),
        new Ingredient('Tomato', 3),
        new Ingredient('Meat', 1),
      ]
    ),
    new Recipe(
      'Vegetables',
      'Something from vegetables',
      'https://n1s2.hsmedia.ru/d8/80/0b/d8800b6c922a52b207406234fed9aa0c/728x546_1_79158a87cfdffec9fa310109ca17431a@1708x1281_0xac120003_3571839591619686538.jpg',
      [
        new Ingredient('Onion', 3),
        new Ingredient('Carrot', 2),
        new Ingredient('Tomato', 1),
      ]
    ),
    new Recipe(
      'Fruit Salad',
      'Delicious Fruit Salad',
      'https://www.maggi.ru/data/images/recept/img640x500/recept_6687_khop.jpg',
      [
        new Ingredient('Apple', 4),
        new Ingredient('Banana', 2),
        new Ingredient('Panapple', 1),
      ]
    ),
    new Recipe(
      'Pizza',
      'Strange Pizza',
      'https://academy.oetker.ru/upload/iblock/591/591d601f27b30d737aecafb72d046db9.jpg',
      [
        new Ingredient('Cheese', 1),
        new Ingredient('Tomato', 2),
        new Ingredient('Mozzarella', 3),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return [...this.recipes];
  }

  getRecipe(idIndex: number) {
    return this.recipes[idIndex];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesUpdated.next([...this.recipes]);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesUpdated.next([...this.recipes]);
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesUpdated.next([...this.recipes]);
  }
}
