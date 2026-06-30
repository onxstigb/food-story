    import { Food } from "@/types/food";

export const foods: Food[] = [
    {
        id: "f001",
        title: "Miso Butter Salmon with Crispy Rice",
        slug: "miso-butter-salmon-crispy-rice",
        description:
            "A rich, umami-forward salmon glazed with miso butter, served over golden crispy rice and finished with scallions and sesame.",
        cuisine: "Japanese-Inspired",
        category: "Seafood",
        image: "/images/foods/miso-butter-salmon.jpg",
        prepTime: "15 min",
        cookTime: "25 min",
        totalTime: "40 min",
        servings: 2,
        difficulty: "Medium",
        featured: true,
        ingredients: [
            {
                id: "i1",
                name: "salmon fillets",
                amount: "2 (6 oz each)",
            },
            {
                id: "i2",
                name: "white miso paste",
                amount: "2 tbsp",
            },
            {
                id: "i3",
                name: "unsalted butter",
                amount: "3 tbsp",
            },
            {
                id: "i4",
                name: "jasmine rice (cooked and chilled)",
                amount: "2 cups",
            },
            {
                id: "i5",
                name: "soy sauce",
                amount: "1 tbsp",
            },
            {
                id: "i6",
                name: "sesame oil",
                amount: "1 tsp",
            },
            {
                id: "i7",
                name: "scallions",
                amount: "2 stalks",
            },
            {
                id: "i8",
                name: "sesame seeds",
                amount: "1 tsp",
            },
        ],
        instructions: [
            {
                id: "s1",
                stepNumber: 1,
                instruction:
                    "Pat salmon dry and season lightly with salt. Preheat oven to 400°F.",
            },
            {
                id: "s2",
                stepNumber: 2,
                instruction:
                    "Mix miso paste and softened butter into a smooth glaze.",
            },
            {
                id: "s3",
                stepNumber: 3,
                instruction:
                    "Heat a pan and sear salmon skin-side down until crisp, then transfer to oven and bake for 10–12 minutes.",
            },
            {
                id: "s4",
                stepNumber: 4,
                instruction:
                    "In another pan, press chilled rice into a flat layer and fry until golden and crispy on both sides.",
            },
            {
                id: "s5",
                stepNumber: 5,
                instruction:
                    "Brush salmon with miso butter glaze and broil for 1–2 minutes until caramelized.",
            },
            {
                id: "s6",
                stepNumber: 6,
                instruction:
                    "Serve salmon over crispy rice and finish with soy drizzle, scallions, and sesame seeds.",
            },
        ],
        nutrition: {
            calories: 520,
            protein: "38g",
            carbohydrates: "42g",
            fat: "24g",
            fiber: "2g",
        },
        story: {
            title: "The Comfort of Umami",
            content:
                "This dish was born from late-night cravings for something both comforting and refined. The miso butter melts into the salmon like memory into warmth—slow, rich, and deeply familiar. Crispy rice adds texture like a counterpoint in music, grounding every bite in contrast and crunch.",
        },
        tags: ["salmon", "miso", "crispy rice", "umami", "dinner"],
    },
    {
        id: "f002",
        title: "Spicy Coconut Chickpea Stew",
        slug: "spicy-coconut-chickpea-stew",
        description:
            "A creamy, spiced coconut stew with chickpeas, spinach, and tomatoes simmered into a nourishing one-pot meal.",
        cuisine: "Fusion",
        category: "Vegetarian",
        image: "/images/foods/coconut-chickpea-stew.jpg",
        prepTime: "10 min",
        cookTime: "30 min",
        totalTime: "40 min",
        servings: 4,
        difficulty: "Easy",
        featured: true,
        ingredients: [
            {
                id: "i1",
                name: "canned chickpeas",
                amount: "2 cans",
            },
            {
                id: "i2",
                name: "coconut milk",
                amount: "1 can (13.5 oz)",
            },
            {
                id: "i3",
                name: "diced tomatoes",
                amount: "1 can",
            },
            {
                id: "i4",
                name: "yellow onion",
                amount: "1 medium, diced",
            },
            {
                id: "i5",
                name: "garlic cloves",
                amount: "4, minced",
            },
            {
                id: "i6",
                name: "fresh spinach",
                amount: "3 cups",
            },
            {
                id: "i7",
                name: "curry powder",
                amount: "2 tbsp",
            },
            {
                id: "i8",
                name: "olive oil",
                amount: "2 tbsp",
            },
        ],
        instructions: [
            {
                id: "s1",
                stepNumber: 1,
                instruction:
                    "Heat olive oil in a large pot and sauté onion until soft and translucent.",
            },
            {
                id: "s2",
                stepNumber: 2,
                instruction:
                    "Add garlic and curry powder, cooking until fragrant.",
            },
            {
                id: "s3",
                stepNumber: 3,
                instruction:
                    "Stir in chickpeas and diced tomatoes, simmering for 10 minutes.",
            },
            {
                id: "s4",
                stepNumber: 4,
                instruction:
                    "Pour in coconut milk and simmer until thickened slightly.",
            },
            {
                id: "s5",
                stepNumber: 5,
                instruction:
                    "Fold in spinach until wilted and season to taste.",
            },
        ],
        nutrition: {
            calories: 410,
            protein: "14g",
            carbohydrates: "48g",
            fat: "18g",
            fiber: "12g",
        },
        story: {
            title: "A Bowl for Heavy Days",
            content:
                "This stew is meant for days when the world feels loud and your thoughts feel louder. It is slow, steady, and forgiving—like something that asks nothing of you except presence. The coconut softens the spice, just like time softens everything else.",
        },
        tags: ["chickpeas", "coconut", "stew", "vegetarian", "comfort food"],
    },
    {
        id: "f003",
        title: "Garlic Chili Chicken Noodles",
        slug: "garlic-chili-chicken-noodles",
        description:
            "Wok-tossed noodles with tender chicken, garlic chili oil, and scallions for a bold, aromatic finish.",
        cuisine: "Asian Fusion",
        category: "Noodles",
        image: "/images/foods/garlic-chili-noodles.jpg",
        prepTime: "20 min",
        cookTime: "15 min",
        totalTime: "35 min",
        servings: 2,
        difficulty: "Medium",
        featured: false,
        ingredients: [
            {
                id: "i1",
                name: "egg noodles",
                amount: "200g",
            },
            {
                id: "i2",
                name: "chicken breast",
                amount: "1 lb, sliced",
            },
            {
                id: "i3",
                name: "garlic cloves",
                amount: "5, minced",
            },
            {
                id: "i4",
                name: "chili oil",
                amount: "2 tbsp",
            },
            {
                id: "i5",
                name: "soy sauce",
                amount: "3 tbsp",
            },
            {
                id: "i6",
                name: "rice vinegar",
                amount: "1 tbsp",
            },
            {
                id: "i7",
                name: "scallions",
                amount: "3 stalks",
            },
        ],
        instructions: [
            {
                id: "s1",
                stepNumber: 1,
                instruction:
                    "Cook noodles according to package instructions and set aside.",
            },
            {
                id: "s2",
                stepNumber: 2,
                instruction:
                    "Sauté chicken until golden and fully cooked.",
            },
            {
                id: "s3",
                stepNumber: 3,
                instruction:
                    "Add garlic and chili oil, stirring until fragrant.",
            },
            {
                id: "s4",
                stepNumber: 4,
                instruction:
                    "Toss noodles with soy sauce and rice vinegar in the pan.",
            },
            {
                id: "s5",
                stepNumber: 5,
                instruction:
                    "Finish with scallions and serve immediately.",
            },
        ],
        nutrition: {
            calories: 610,
            protein: "42g",
            carbohydrates: "58g",
            fat: "22g",
            fiber: "3g",
        },
        story: {
            title: "Heat as Expression",
            content:
                "This dish is about contrast—the sharp heat of chili oil against the grounding comfort of noodles. It is fast, loud, and unapologetic, meant to mirror the moments when you need food that matches your energy instead of calming it.",
        },
        tags: ["noodles", "chili oil", "chicken", "quick meal", "spicy"],
    },
    {
        id: "f004",
        title: "Strawberry Basil Ricotta Toast",
        slug: "strawberry-basil-ricotta-toast",
        description:
            "A bright, fresh toast layered with whipped ricotta, macerated strawberries, and fragrant basil.",
        cuisine: "Modern Brunch",
        category: "Breakfast",
        image: "/images/foods/strawberry-ricotta-toast.jpg",
        prepTime: "10 min",
        cookTime: "5 min",
        totalTime: "15 min",
        servings: 2,
        difficulty: "Easy",
        featured: false,
        ingredients: [
            {
                id: "i1",
                name: "sourdough bread",
                amount: "2 slices",
            },
            {
                id: "i2",
                name: "ricotta cheese",
                amount: "1 cup",
            },
            {
                id: "i3",
                name: "fresh strawberries",
                amount: "1 cup, sliced",
            },
            {
                id: "i4",
                name: "honey",
                amount: "1 tbsp",
            },
            {
                id: "i5",
                name: "fresh basil",
                amount: "6 leaves",
            },
            {
                id: "i6",
                name: "lemon zest",
                amount: "1 tsp",
            },
        ],
        instructions: [
            {
                id: "s1",
                stepNumber: 1,
                instruction:
                    "Toast sourdough slices until golden and crisp.",
            },
            {
                id: "s2",
                stepNumber: 2,
                instruction:
                    "Whip ricotta until smooth and spreadable.",
            },
            {
                id: "s3",
                stepNumber: 3,
                instruction:
                    "Toss strawberries with honey and lemon zest.",
            },
            {
                id: "s4",
                stepNumber: 4,
                instruction:
                    "Spread ricotta over toast and layer strawberries on top.",
            },
            {
                id: "s5",
                stepNumber: 5,
                instruction:
                    "Finish with torn basil leaves.",
            },
        ],
        nutrition: {
            calories: 320,
            protein: "11g",
            carbohydrates: "38g",
            fat: "14g",
            fiber: "4g",
        },
        story: {
            title: "Morning Light",
            content:
                "This is a breakfast that feels like sunlight in food form. The ricotta is soft and grounding, while strawberries bring brightness and acidity. Basil lifts everything upward, like a quiet exhale at the start of the day.",
        },
        tags: ["breakfast", "toast", "ricotta", "strawberry", "fresh"],
    },
];