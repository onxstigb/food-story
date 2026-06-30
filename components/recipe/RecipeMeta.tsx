import { Food } from "@/types/food";

interface RecipeMetaProps {
    food: Food;
}

export default function RecipeMeta({ food }: RecipeMetaProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <p className="text-zinc-500 text-xs">Prep</p>
                <p className="text-white mt-1">{food.prepTime}</p>
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <p className="text-zinc-500 text-xs">Cook</p>
                <p className="text-white mt-1">{food.cookTime}</p>
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <p className="text-zinc-500 text-xs">Servings</p>
                <p className="text-white mt-1">{food.servings}</p>
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <p className="text-zinc-500 text-xs">Difficulty</p>
                <p className="text-white mt-1">{food.difficulty}</p>
            </div>
        </div>
    );
}