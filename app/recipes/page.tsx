import Link from "next/link";
import { foods } from "@/data/foods";

export default function RecipesPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
                {/* Header */}
                <div className="mb-16">
                    <p className="text-xs tracking-[0.3em] uppercase text-zinc-500">
                        Archive
                    </p>

                    <h1 className="mt-4 text-4xl md:text-6xl font-medium tracking-tight leading-tight">
                        All Recipes
                    </h1>

                    <p className="mt-6 max-w-2xl text-zinc-400 leading-relaxed">
                        A growing collection of dishes told through memory,
                        texture, and craft. Each recipe is a moment preserved.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {foods.map((food) => (
                        <Link
                            key={food.id}
                            href={`/recipes/${food.slug}`}
                            className="group border border-white/10 rounded-2xl overflow-hidden bg-white/5 hover:bg-white/10 transition"
                        >
                            {/* Image */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={food.image}
                                    alt={food.title}
                                    className="h-full w-full object-cover group-hover:scale-105 transition duration-700 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <p className="text-xs uppercase tracking-widest text-zinc-500">
                                    {food.cuisine}
                                </p>

                                <h2 className="mt-2 text-lg font-medium text-white group-hover:text-lime-300 transition">
                                    {food.title}
                                </h2>

                                <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
                                    {food.description}
                                </p>

                                <div className="mt-4 flex justify-between text-xs text-zinc-500">
                                    <span>{food.totalTime}</span>
                                    <span>{food.difficulty}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}