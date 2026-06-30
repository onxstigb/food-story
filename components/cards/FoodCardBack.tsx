"use client";

import { Food } from "@/types/food";
import { BookOpen } from "lucide-react";

interface FoodCardBackProps {
    food: Food;
    onOpen: (food: Food) => void;
}

export default function FoodCardBack({
    food,
    onOpen,
}: FoodCardBackProps) {
    return (
        <div className="h-full w-full rounded-2xl border border-white/10 bg-zinc-950 p-6 flex flex-col justify-between">
            {/* Story */}
            <div>
                <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-widest">
                    <BookOpen size={14} />
                    Story
                </div>

                <h3 className="mt-3 text-lg text-white font-medium">
                    {food.story.title}
                </h3>

                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                    {food.story.content}
                </p>
            </div>

            {/* Meta */}
            <div className="mt-6 space-y-2 text-xs text-zinc-500">
                <div className="flex justify-between">
                    <span>Prep</span>
                    <span>{food.prepTime}</span>
                </div>

                <div className="flex justify-between">
                    <span>Cook</span>
                    <span>{food.cookTime}</span>
                </div>

                <div className="flex justify-between">
                    <span>Servings</span>
                    <span>{food.servings}</span>
                </div>
            </div>

            {/* CTA */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onOpen(food);
                }}
                className="mt-6 w-full py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition"
            >
                Open Recipe
            </button>
        </div>
    );
}