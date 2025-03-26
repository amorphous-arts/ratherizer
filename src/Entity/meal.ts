import {BasemealCard} from "./basemeal-card";
import {IngredientCard} from "./ingredient-card";

const afterToken = {
  'sides': 'with a side of',
  'topped': 'topped with',
  'extras': 'topped with',
  'drinks': 'with a side of',
};

export class Meal {
  get secondContextToken(): string
  {
    return afterToken[this.sides[0].category] ?? ''
  }

  get firstContextToken(): string
  {
    return this.basemeal.category === 'stuffed' ? 'stuffed ' : '';
  }

  constructor(
    public readonly mealDescriptions: IngredientCard[],
    public readonly basemeal: BasemealCard,
    public readonly sides: IngredientCard[],
  ) {
  }

}
