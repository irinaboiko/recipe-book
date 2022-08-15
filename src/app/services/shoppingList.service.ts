import { Subject } from 'rxjs';

import { Ingredient } from '../shared/models/ingredient.model';

export class ShoppingListService {
  ingredientsUpdated = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Potate', 5),
    new Ingredient('Tomato', 3),
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsUpdated.next([...this.ingredients]);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsUpdated.next([...this.ingredients]);
  }
}
