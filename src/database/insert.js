import { db } from "./firebase"
import { collection, addDoc } from "firebase/firestore"
import { searchStats, getStatsCount } from "./fetch"

// const insertAnalytics = () => {



// }
const jsonData = {
  "Card_1": {
      "drinks": [
          {
              "ing": "Unpasteurized Milk",
              "attr": "Lumpy"
          },
          {
              "ing": "A Quarter Teaspoon of Bleach",
              "attr": "Non-Lethal"
          },
          {
              "ing": "Steaming Cud",
              "attr": "Pre-Chewed"
          },
          {
              "ing": "Beaver Anal Gland Juice",
              "attr": "Raspberry Flavored"
          },
          {
              "ing": "Platypus Milk",
              "attr": "Venomous"
          },
          {
              "ing": "Soda",
              "attr": "Carbonated"
          }
      ],
      "sides": [
          {
              "ing": "Kale From an Old Salad Bar",
              "attr": "Fuzzy"
          },
          {
              "ing": "Seasoned Curly Fries",
              "attr": "Small"
          }
      ],
      "topped": [
          {
              "ing": "Gravy?",
              "attr": "Fermented"
          },
          {
              "ing": "Headcheese",
              "attr": "Human"
          },
          {
              "ing": "Lamb Sauce",
              "attr": "Gloopy"
          },
          {
              "ing": "Foot Cheese",
              "attr": "Home Grown"
          },
          {
              "ing": "Rock-It Sauce\u2122",
              "attr": "Sold Out"
          }
      ],
      "stuffed": [
          {
              "ing": "Claw Meat",
              "attr": "Spongey"
          },
          {
              "ing": "School Lunch Mystery Meat",
              "attr": "Slithering"
          },
          {
              "ing": "Sea Turtle Meat",
              "attr": "Endangered"
          },
          {
              "ing": "Crocodile Meat",
              "attr": "Aggressive"
          },
          {
              "ing": "Leopleurodon Meat",
              "attr": "Magical"
          },
          {
              "ing": "Manatee Meat",
              "attr": "Medium Rare"
          },
          {
              "ing": "Clown Meat",
              "attr": "That Tastes Kinda Funny"
          },
          {
              "ing": "Hamburger Meat",
              "attr": "RAW"
          },
          {
              "ing": "Dark Meat",
              "attr": "Juicy"
          }
      ],
      "extras": [
          {
              "ing": "Monkey Brains",
              "attr": "Curdled"
          },
          {
              "ing": "90's Neon Condiments",
              "attr": "Unctuous"
          },
          {
              "ing": "Orbeez",
              "attr": "Fully Hydrated"
          },
          {
              "ing": "Bill Cosby's Leftover Puddin'",
              "attr": "Putrid"
          },
          {
              "ing": "A Handful of Silver Dragees",
              "attr": "Mechanical"
          },
          {
              "ing": "Yellow Snow",
              "attr": "Acidic"
          },
          {
              "ing": "A Gram of Skin Flakes",
              "attr": "Dessicated"
          },
          {
              "ing": "Pre-Cooked Dino Nuggets",
              "attr": "Nutritionally Fortified"
          },
          {
              "ing": "Fred Durst's Autograph",
              "attr": "Pustulent"
          },
          {
              "ing": "Rat Shit",
              "attr": "Adorable"
          },
          {
              "ing": "A Drawer Full of Outdated Computer Cables",
              "attr": "Vibrating"
          },
          {
              "ing": "Pencil Shavings",
              "attr": "Dusty"
          },
          {
              "ing": "Unpeeled Shrimp",
              "attr": "Crunchy"
          },
          {
              "ing": "Sea Cucumber",
              "attr": "Singing"
          },
          {
              "ing": "The Cool S",
              "attr": "Crusty"
          },
          {
              "ing": "Dolphin Filet",
              "attr": "Occulated"
          },
          {
              "ing": "Elephant Ears",
              "attr": "Plastic"
          },
          {
              "ing": "Bangers",
              "attr": "Hissing"
          },
          {
              "ing": "Rocky Mountain Oysters",
              "attr": "Bumpy"
          },
          {
              "ing": "Jerked Goat",
              "attr": "Tenderized"
          },
          {
              "ing": "Ox Tails",
              "attr": "Freshly Peeled"
          },
          {
              "ing": "Elk Penis",
              "attr": "Veiny"
          },
          {
              "ing": "Cotton Candy",
              "attr": "Undulating"
          },
          {
              "ing": "Lutefisk",
              "attr": "Rotten"
          },
          {
              "ing": "Wasabi",
              "attr": "With 2.3 Million Scoville Units"
          },
          {
              "ing": "Broken Glass",
              "attr": "Radioactive"
          },
          {
              "ing": "Seal Eyes",
              "attr": "Baby"
          },
          {
              "ing": "Grandma's Ashes",
              "attr": "Burnt"
          },
          {
              "ing": "Anchovies",
              "attr": "Hairy"
          },
          {
              "ing": "Donald Trump's Diarrhea",
              "attr": "Red"
          },
          {
              "ing": "Bernie Sanders's Diarrhea",
              "attr": "Left-Leaning"
          },
          {
              "ing": "Graphite",
              "attr": "Powdered"
          },
          {
              "ing": "A Used Condom",
              "attr": "That's Been Lying on Hot Blacktop For 5 Weeks"
          },
          {
              "ing": "Water",
              "attr": "Soaking Wet"
          },
          {
              "ing": "Onions",
              "attr": "Caramelized"
          },
          {
              "ing": "Avocado",
              "attr": "Toasted"
          },
          {
              "ing": "Celery",
              "attr": "Bitter"
          },
          {
              "ing": "The Literal Blood of Jesus",
              "attr": "Full of Holes"
          },
          {
              "ing": "Dog Saliva",
              "attr": "Super Clean"
          },
          {
              "ing": "Big, Plump Crickets",
              "attr": "Chitinous"
          },
          {
              "ing": "Tapeworm Eggs",
              "attr": "Regurgitated"
          },
          {
              "ing": "Slurpee\u2122",
              "attr": "Multi-Flavored"
          },
          {
              "ing": "Army Soldiers",
              "attr": "Fully Sentient"
          },
          {
              "ing": "Grapes",
              "attr": "Unpeeled"
          },
          {
              "ing": "A Prom Punch Bowl",
              "attr": "Spiked"
          },
          {
              "ing": "Stop & Shop\u2122 Sushi",
              "attr": "One Week Old"
          },
          {
              "ing": "Human Flesh",
              "attr": "Seared"
          },
          {
              "ing": "Chicken Eggs",
              "attr": "Medium Well"
          },
          {
              "ing": "Ox Cheeks",
              "attr": "Braised"
          },
          {
              "ing": "An Edible Replica of The Declaration of Independence",
              "attr": "Patriotic"
          },
          {
              "ing": "Bamboo Skewers",
              "attr": "Charred"
          },
          {
              "ing": "Kiwi",
              "attr": "Rare"
          },
          {
              "ing": "Banana",
              "attr": "Non-GMO"
          },
          {
              "ing": "Leaves",
              "attr": "Dry"
          },
          {
              "ing": "Bellybutton Lint",
              "attr": "Fluffy"
          },
          {
              "ing": "Heroin",
              "attr": "From a Syringe 7 Other People Just Shared"
          },
          {
              "ing": "Broccoli Rabe",
              "attr": "Fiberous"
          },
          {
              "ing": "Potato Skins",
              "attr": "That was Buried For a Year"
          },
          {
              "ing": "Cannabis ",
              "attr": "Sticky-Icky-Icky"
          },
          {
              "ing": "A Tiny MAGA Hat",
              "attr": "Starched"
          },
          {
              "ing": "Poutine",
              "attr": "Canadian"
          },
          {
              "ing": "Salt & Pepper",
              "attr": "Served by Salt N' Peppa\u2122"
          },
          {
              "ing": "Parsley",
              "attr": "Decorative"
          },
          {
              "ing": "System of a Down's Worst Album",
              "attr": "Mysterious"
          },
          {
              "ing": "Dihydrogen Monoxide",
              "attr": "Deadly"
          },
          {
              "ing": "The Cats, The Dogs, The Pets of The People Who Live There",
              "attr": "Fictional"
          },
          {
              "ing": "Cheez-Its\u2122",
              "attr": "Addictive"
          },
          {
              "ing": "Mini Marshmallows",
              "attr": "Toasted"
          },
          {
              "ing": "Fetus",
              "attr": "Aborted"
          },
          {
              "ing": "Peas",
              "attr": "Canned"
          },
          {
              "ing": "Everything",
              "attr": "On The Cob"
          },
          {
              "ing": "This Weeks Underwear",
              "attr": "Saturated"
          },
          {
              "ing": "Dirt",
              "attr": "Ground"
          },
          {
              "ing": "Phlegm",
              "attr": "Bubbly"
          },
          {
              "ing": "Ferret Skin",
              "attr": "Leathery"
          },
          {
              "ing": "Arnold Swarzeneggar's Sweat",
              "attr": "Invigorating"
          },
          {
              "ing": "Gold Flakes",
              "attr": "Youth-Restoring"
          },
          {
              "ing": "Socks",
              "attr": "Sweaty"
          },
          {
              "ing": "Neurons",
              "attr": "Rapidly Communicating"
          },
          {
              "ing": "A Random Illogical Non-Repeating Number",
              "attr": "In Alphabetical Order"
          },
          {
              "ing": "Monster Blood",
              "attr": "Incrementally Growing"
          },
          {
              "ing": "That Dog That Became a Venereal Disease",
              "attr": "Single-Celled"
          },
          {
              "ing": "Mysterious Liquid",
              "attr": "Liquified"
          },
          {
              "ing": "Bits of Chewed-up Cuticle Skin",
              "attr": "Anxiety-Inducing"
          },
          {
              "ing": "Surstr\u00f6mming",
              "attr": "Boneless"
          },
          {
              "ing": "A #9",
              "attr": "Large"
          },
          {
              "ing": "Two #49's",
              "attr": "With Cheese"
          }
      ]
  },
  "Card_2": {
      "drinks": [
          {
              "ing": "Milk and Cereal",
              "attr": "Sour"
          },
          {
              "ing": "Nautical Themed Craft Beer",
              "attr": "Pretentious"
          },
          {
              "ing": "Steamed Carrots",
              "attr": "Extremely Firm"
          },
          {
              "ing": "Whole Milk",
              "attr": "Expired"
          },
          {
              "ing": "Baking Soda",
              "attr": "Basic"
          }
      ],
      "sides": [
          {
              "ing": "Black Licorice",
              "attr": "Licorice-Flavored"
          },
          {
              "ing": "Thrice Used Frying Grease",
              "attr": "From A KFC\u2122 Dumpster"
          }
      ],
      "topped": [
          {
              "ing": "Gravy",
              "attr": "Oily"
          },
          {
              "ing": "Clam Sauce",
              "attr": "Briney"
          },
          {
              "ing": "Tonail Parmesan Cheese",
              "attr": "Grated"
          },
          {
              "ing": "Whipped Cream",
              "attr": "Consisting of 99% Air"
          },
          {
              "ing": "Cream Cheese",
              "attr": "Melted"
          }
      ],
      "stuffed": [
          {
              "ing": "Cheap Gyro Meat",
              "attr": "Freezer-Burned"
          },
          {
              "ing": "Baked Beans",
              "attr": "Undercooked"
          },
          {
              "ing": "Albino Alligator Meat",
              "attr": "Lucky"
          },
          {
              "ing": "Dragon Meat",
              "attr": "Mythical"
          },
          {
              "ing": "Green Beans",
              "attr": "That Inadvertedly Caused a War Crime"
          },
          {
              "ing": "All-White Meat Chicken Breast",
              "attr": "Extra Well Done"
          },
          {
              "ing": "Breakfast sausages",
              "attr": "Drowned in Maple Syrup"
          },
          {
              "ing": "Mixed Veggies",
              "attr": "From the Clearence Section"
          }
      ],
      "extras": [
          {
              "ing": "Narwhal Bacon",
              "attr": "Blubbery"
          },
          {
              "ing": "Grill Scrapings",
              "attr": "Coagulated"
          },
          {
              "ing": "The Last TMNT Pudding Pie",
              "attr": "Moldy"
          },
          {
              "ing": "One of Everything on The Taco Bell\u2122 Menu",
              "attr": "Americanized"
          },
          {
              "ing": "Chicken Head",
              "attr": "Shrieking"
          },
          {
              "ing": "Baby Teeth From Grandma's House",
              "attr": "Cursed"
          },
          {
              "ing": "Gherkins",
              "attr": "Bleached"
          },
          {
              "ing": "Quail Eggs",
              "attr": "Hatching"
          },
          {
              "ing": "Weevils",
              "attr": "Swarming"
          },
          {
              "ing": "A Hair Blob From The Shower Drain",
              "attr": "Mutated"
          },
          {
              "ing": "Saw Dust",
              "attr": "Infested"
          },
          {
              "ing": "Plastic Bits",
              "attr": "Fried"
          },
          {
              "ing": "Jellyfish",
              "attr": "Gurgling"
          },
          {
              "ing": "Urine Crystals",
              "attr": "From Concentrate"
          },
          {
              "ing": "An Eighth of Stems and Seeds",
              "attr": "Pickled"
          },
          {
              "ing": "Candy Corn",
              "attr": "Recycled"
          },
          {
              "ing": "Foreskins",
              "attr": "Stretchy"
          },
          {
              "ing": "Ambergris",
              "attr": "Petrified"
          },
          {
              "ing": "Fugu",
              "attr": "Obnoxiously Salty"
          },
          {
              "ing": "Chicken Feet",
              "attr": "Pitter-Pattering"
          },
          {
              "ing": "Turkey Neck",
              "attr": "Dancing"
          },
          {
              "ing": "96.9% Isopropyl Alcohol",
              "attr": "Fuming"
          },
          {
              "ing": "Bone Marrow",
              "attr": "Porous"
          },
          {
              "ing": "Placenta",
              "attr": "Gurgling"
          },
          {
              "ing": "Braunschweiger",
              "attr": "Mealy"
          },
          {
              "ing": "SPIDERS.",
              "attr": "Skittering"
          },
          {
              "ing": "An Entire Denny's Grand Slam\u2122",
              "attr": "Quivering"
          },
          {
              "ing": "Mealworm-Infested Granola",
              "attr": "Cursed With Eternal Life"
          },
          {
              "ing": "Honeydew (The Aphid Kind)",
              "attr": "Obnoxiously Sweet"
          },
          {
              "ing": "Joe Biden's Diarrhea",
              "attr": "Blue"
          },
          {
              "ing": "A Ground-Up Bic\u2122 Pen",
              "attr": "Gnawed-on"
          },
          {
              "ing": "Vegimite\u2122",
              "attr": "Anti-American"
          },
          {
              "ing": "Bits of a Badly Mildewed Ebony Porn Mag",
              "attr": "Musty-Smelling"
          },
          {
              "ing": "Cabbage",
              "attr": "Steamed"
          },
          {
              "ing": "Broccoli",
              "attr": "Cheesy"
          },
          {
              "ing": "Eggplant",
              "attr": "Pan Fried"
          },
          {
              "ing": "Uhhh...",
              "attr": "Offensively Bland"
          },
          {
              "ing": "The Literal Flesh of Jesus",
              "attr": "Aged"
          },
          {
              "ing": "Piece of String",
              "attr": "Really Long"
          },
          {
              "ing": "Skittles",
              "attr": "That Have Been Under a Couch Cushion for 5 Years"
          },
          {
              "ing": "Construction Paper",
              "attr": "Of Various Colors"
          },
          {
              "ing": "A Rabbit",
              "attr": "That is of Age and Capable of Consent"
          },
          {
              "ing": "Your Uncle's Backhanded Compliments",
              "attr": "Bearded"
          },
          {
              "ing": "Fully Engorged Ticks",
              "attr": "Bursting"
          },
          {
              "ing": "Tiny Spherical Magnets",
              "attr": "A Handful of"
          },
          {
              "ing": "Face Skin",
              "attr": "That Fell Off The Back of A Truck"
          },
          {
              "ing": "Just a Sprinkle of Cocaine",
              "attr": "Medium Done"
          },
          {
              "ing": "Giant Hogweed",
              "attr": "Itch-Inducing"
          },
          {
              "ing": "Imitation Vanilla",
              "attr": "Cheap"
          },
          {
              "ing": "The Antidote",
              "attr": "Slightly Toxic"
          },
          {
              "ing": "Old Mop Bucket Water",
              "attr": "Dubiously Smelling"
          },
          {
              "ing": "Yesterday's Veal Stock",
              "attr": "Evil"
          },
          {
              "ing": "Venus Flytrap",
              "attr": "Man-Eating"
          },
          {
              "ing": "Lichen",
              "attr": "From Deep Inside of a Well"
          },
          {
              "ing": "Bong Water",
              "attr": "Resinous"
          },
          {
              "ing": "Roots N' Tubers",
              "attr": "Dirty"
          },
          {
              "ing": "Bean Sprouts",
              "attr": "With Lots of Potential "
          },
          {
              "ing": "Bird Seed Mix",
              "attr": "Edible"
          },
          {
              "ing": "Sandy Leeks",
              "attr": "Unwashed"
          },
          {
              "ing": "A Shot of Jack Daniel's\u2122",
              "attr": "In a Trailer Park Boys\u2122 Whiskey Glass"
          },
          {
              "ing": "Bacon",
              "attr": "Full of Trans Fats"
          },
          {
              "ing": "Sewage",
              "attr": "Full of Splinters"
          },
          {
              "ing": "Cilantro",
              "attr": "Soapy"
          },
          {
              "ing": "Lead Paint",
              "attr": "Surprisingly Sweet"
          },
          {
              "ing": "Toast",
              "attr": "Soggy"
          },
          {
              "ing": "Hellman's\u2122 Mayonnaise",
              "attr": "Just Okay"
          },
          {
              "ing": "Miracle Whip\u2122",
              "attr": "But It's Not What You Expect"
          },
          {
              "ing": "Browny Bites",
              "attr": "Cannabis-Infused"
          },
          {
              "ing": "Cucumber",
              "attr": "Nearly Expired"
          },
          {
              "ing": "Corn",
              "attr": "Creamed"
          },
          {
              "ing": "Motor Oil",
              "attr": "From a Driveway Puddle"
          },
          {
              "ing": "Monkey's Paw",
              "attr": "Imbued with Dark Magic"
          },
          {
              "ing": "Ghoul Flesh",
              "attr": "Feral"
          },
          {
              "ing": "Egg Whites",
              "attr": "With 200% Your Daily Recommended Calcium"
          },
          {
              "ing": "Napkin",
              "attr": "Melt-In-Your-Mouth"
          },
          {
              "ing": "Adrenochrome",
              "attr": "With a Meth-Like Effect"
          },
          {
              "ing": "Corn Flakes\u2122",
              "attr": "Frosted"
          },
          {
              "ing": "Boogers",
              "attr": "Chewy"
          },
          {
              "ing": "Mushrooms",
              "attr": "Eco-Friendly"
          },
          {
              "ing": "Raw Zombie Liver",
              "attr": "Cooked"
          },
          {
              "ing": "Horsehair Worms",
              "attr": "Parasitic"
          },
          {
              "ing": "Gunpowder",
              "attr": "Explosive"
          },
          {
              "ing": "Kyle Gass's Rock Star Semen",
              "attr": "Divine"
          },
          {
              "ing": "Terracotta",
              "attr": "Mesmerizing"
          },
          {
              "ing": "Two #9's",
              "attr": "Cluckin'"
          },
          {
              "ing": "A #6",
              "attr": "With Extra Dip"
          },
          {
              "ing": "A Reddit\u2122 Meme Copypasta",
              "attr": "Deep Fried"
          }
      ]
  }
}


export const addIng = async () => {
    for (const category in jsonData) {
        const key = category;
        for(const item in jsonData[key]) {
            jsonData[key][item].forEach(async (child) => {
              const data = await addDoc(collection(db, "ingredients", key, item), {
                ing: child.ing,
                attr: child.attr
              })
            })
        }
    };
}

const meals = {
  "stuffed": [
    "Stuffed Shells",
    "Wellington",
    "Ravioli",
    "Dumplings",
    "Hot Dog",
    "Calzone",
    "Empanadas",
    "Spanikopita",
    "Enchiladas",
    "Spring Rolls",
    "Gyro",
    "Souvlaki",
    "Croquettes",
    "Burrito",
    "Falafel",
    "Haggis"
  ],
  "not_stuffed": [
    "Top Ramen",
    "Rotisserie",
    "Salad",
    "Shepard's Pie",
    "Souffle",
    "Soup",
    "Steak",
    "Stew",
    "Stir Fry",
    "Stuffing",
    "Sushi",
    "Tacos",
    "Curry",
    "Pho",
    "Pizza",
    "Pudding",
    "Quiche",
    "Filet",
    "Ice Cream",
    "Lasagne",
    "Parfait",
    "Pie",
    "Aspic",
    "Burger",
    "Cake",
    "Casserole",
    "Chili",
    "Club Sandwich",
    "Goulash",
    "Shish Kebab",
    "Century Egg",
    "Peking Duck",
    "Gelato",
    "Pad Thai",
    "Tres Leches",
    "Fajitas",
    "Couscous",
    "Matzoh Ball Soup",
    "Poutine",
    "Beaver Tail",
    "Borscht",
    "Laverbread",
    "Waffles",
    "Frikadeller",
    "Sausages",
    "Bibimbap",
    "Fermented Shark",
    "Bread",
    "Nachos",
    "Croissants",
    "Escargot",
    "Frog's Legs",
    "Paella"
  ]
}

export const addMeals = async () => {
  for (const category in meals) {
    const key = category;
    meals[key].forEach(async (item) => {
      const data = await addDoc(collection(db, "base_meals", 'categories', key), {
        name: item,
      })
    })
  };
}

export const addStats = async (meal) => {
  const mealCount = await searchStats(meal);
  const totalCount = await getStatsCount();
  
  Object.keys(meal).forEach(key => {
    meal[key] = meal[key].hasOwnProperty('id') ? meal[key].id : meal[key];
  });
  
  await addDoc(collection(db, 'stats'), meal);
  
  return mealCount / totalCount * 100;
}