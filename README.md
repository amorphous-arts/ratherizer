# Ratherizer

## Commands

`npm run dev` - Start the development server
`npm run build` - Build the next dist


## Setup
1. Create a new firebase firestore database
2. Copy `src/config.example.js` to `src/config.js` and fill in the required values.
3. Run `database/insert::addIng()` and `database/insert::addMeals()`

## Firestore
Below are the structures for each collection:

### Base meals
`base_meals.not_stuffed = {name: "string"}`
`base_meals.stuffed = {name: "string"}`

### Ingredients
`Card_1` is shown before the base meal
`Card_2` is shown after the base meal

`[Card_1].[stuffed|topped] = { attr: "string", ing: "string": order?: { attr?: number, ingredient?: number} }`
`[Card_2].[drinks|topped|sides|extras] = { attr: "string", ing: "string": order?: { attr?: number, ingredient?: number} }`
