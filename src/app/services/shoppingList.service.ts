import { Subject } from 'rxjs';

import { Ingredient } from '../shared/models/ingredient.model';

export class ShoppingListService {
  ingredientsUpdated = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Potate', 5),
    new Ingredient('Tomato', 3),
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsUpdated.next([...this.ingredients]);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsUpdated.next([...this.ingredients]);
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsUpdated.next([...this.ingredients]);
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsUpdated.next([...this.ingredients]);
  }
}
