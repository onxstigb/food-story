export interface Ingredient {
    id: string;
    name: string;
    amount: string;
}

export interface InstructionStep {
    id: string;
    stepNumber: number;
    instruction: string;
}

export interface NutritionFacts {
    calories: number;
    protein: string;
    carbohydrates: string;
    fat: string;
    fiber: string;
}

export interface FoodStory {
    title: string;
    content: string;
}

export interface Food {
    id: string;

    title: string;

    slug: string;

    description: string;

    cuisine: string;

    category: string;

    image: string;

    prepTime: string;

    cookTime: string;

    totalTime: string;

    servings: number;

    difficulty: "Easy" | "Medium" | "Hard";

    featured: boolean;

    ingredients: Ingredient[];

    instructions: InstructionStep[];

    nutrition: NutritionFacts;

    story: FoodStory;

    tags: string[];
}