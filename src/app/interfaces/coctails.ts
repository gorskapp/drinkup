// wrap up for resopnse
export interface Data {
  drinks: Drink[];
}

// response with general drink data as it is (which is terrible btw)
export interface Drink {
  // main info
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  // details
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  // recipe
  strInstructions: string;
  // ingredients - has to work aroud in coctail-details component cuz most of the key-value are actually null
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  // measures
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
}

// detailed drink data
export interface DrinkDetails {
  // main info
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  // details
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  // recipe
  strInstructions: string;
  strIngredients: [];
  strMeasures: [];
}
