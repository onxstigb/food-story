import { notFound } from "next/navigation";
import { foods } from "@/data/foods";

interface RecipePageProps {
    params: {
        slug: string;
    };
}

export default function RecipePage({ params }: RecipePageProps) {
    const food = foods.find((item) => item.slug === params.slug);

    if (!food) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <img
                    src={food.image}
                    alt={food.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-80 scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 max-w-6xl mx-auto px-6 pb-12">
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                        {food.cuisine}
                    </p>

                    <h1 className="mt-3 text-4xl md:text-6xl font-medium leading-tight tracking-tight">
                        {food.title}
                    </h1>

                    <p className="mt-4 max-w-2xl text-zinc-400 leading-relaxed">
                        {food.description}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-6 py-20">
                {/* Meta Strip */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    <div className="p-4 border border-white/10 rounded-xl bg-white/5">
                        <p className="text-xs text-zinc-500">Prep</p>
                        <p className="mt-1 text-white">{food.prepTime}</p>
                    </div>

                    <div className="p-4 border border-white/10 rounded-xl bg-white/5">
                        <p className="text-xs text-zinc-500">Cook</p>
                        <p className="mt-1 text-white">{food.cookTime}</p>
                    </div>

                    <div className="p-4 border border-white/10 rounded-xl bg-white/5">
                        <p className="text-xs text-zinc-500">Servings</p>
                        <p className="mt-1 text-white">{food.servings}</p>
                    </div>

                    <div className="p-4 border border-white/10 rounded-xl bg-white/5">
                        <p className="text-xs text-zinc-500">Difficulty</p>
                        <p className="mt-1 text-white">{food.difficulty}</p>
                    </div>
                </div>

                {/* Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {/* Ingredients */}
                    <div>
                        <h2 className="text-xl font-medium mb-6">
                            Ingredients
                        </h2>

                        <ul className="space-y-3">
                            {food.ingredients.map((ingredient) => (
                                <li
                                    key={ingredient.id}
                                    className="flex justify-between border-b border-white/5 pb-2 text-sm"
                                >
                                    <span className="text-zinc-300">
                                        {ingredient.name}
                                    </span>
                                    <span className="text-zinc-500">
                                        {ingredient.amount}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Instructions */}
                    <div className="md:col-span-2">
                        <h2 className="text-xl font-medium mb-6">
                            Instructions
                        </h2>

                        <div className="space-y-6">
                            {food.instructions.map((step) => (
                                <div
                                    key={step.id}
                                    className="flex gap-4"
                                >
                                    <div className="text-lime-300 font-medium">
                                        {step.stepNumber
                                            .toString()
                                            .padStart(2, "0")}
                                    </div>

                                    <p className="text-zinc-400 leading-relaxed">
                                        {step.instruction}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Story Section */}
                        <div className="mt-20 border-t border-white/10 pt-10">
                            <h3 className="text-lg font-medium text-white">
                                {food.story.title}
                            </h3>

                            <p className="mt-4 text-zinc-400 leading-relaxed max-w-3xl">
                                {food.story.content}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}