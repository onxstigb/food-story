"use client";

import { Food } from "@/types/food";
import FoodCard from "./FoodCard";

interface CardGridProps {
    foods: Food[];
    onOpen: (food: Food) => void;
}

export default function CardGrid({ foods, onOpen }: CardGridProps) {
    return (
        <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {foods.map((food) => (
                    <FoodCard
                        key={food.id}
                        food={food}
                        onOpen={onOpen}
                    />
                ))}
            </div>
        </section>
    );
}