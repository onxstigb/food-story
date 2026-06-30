"use client";

import { Food } from "@/types/food";
import { Eye } from "lucide-react";

interface FoodCardFrontProps {
    food: Food;
    onOpen: (food: Food) => void;
}

export default function FoodCardFront({
    food,
    onOpen,
}: FoodCardFrontProps) {
    return (
        <div className="h-full w-full rounded-2xl overflow-hidden border border-white/10 bg-black relative group">
            {/* Image */}
            <div className="absolute inset-0">
                <img
                    src={food.image}
                    alt={food.title}
                    className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-6">
                <p className="text-xs tracking-widest uppercase text-zinc-400">
                    {food.cuisine}
                </p>

                <h3 className="mt-2 text-xl text-white font-medium leading-tight">
                    {food.title}
                </h3>

                <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
                    {food.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-zinc-500">
                        {food.totalTime} • {food.difficulty}
                    </span>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onOpen(food);
                        }}
                        className="flex items-center gap-2 text-xs text-white/80 hover:text-white transition"
                    >
                        <Eye size={14} />
                        View
                    </button>
                </div>
            </div>
        </div>
    );
}