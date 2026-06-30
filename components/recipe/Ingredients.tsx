import { Food } from "@/types/food";

interface IngredientsProps {
    food: Food;
}

export default function Ingredients({ food }: IngredientsProps) {
    return (
        <div>
            <h3 className="text-white text-lg font-medium mb-4">
                Ingredients
            </h3>

            <ul className="space-y-3">
                {food.ingredients.map((ingredient) => (
                    <li
                        key={ingredient.id}
                        className="flex justify-between text-sm text-zinc-400 border-b border-white/5 pb-2"
                    >
                        <span className="text-zinc-300">
                            {ingredient.name}
                        </span>
                        <span>{ingredient.amount}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}