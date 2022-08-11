import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';

export class ShoppingListService {
  ingredientsUpdated = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Potate', 5),
    new Ingredient('Tomato', 3),
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsUpdated.emit([...this.ingredients]);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsUpdated.emit([...this.ingredients]);
  }
}
