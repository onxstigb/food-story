"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Food } from "@/types/food";
import FoodCardFront from "./FoodCardFront";
import FoodCardBack from "./FoodCardBack";

interface FoodCardProps {
    food: Food;
    onOpen: (food: Food) => void;
}

export default function FoodCard({ food, onOpen }: FoodCardProps) {
    const [flipped, setFlipped] = useState(false);

    function handleFlip() {
        setFlipped((prev) => !prev);
    }

    return (
        <div className="w-full perspective-[1200px]">
            <motion.div
                onClick={handleFlip}
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="relative w-full h-[420px] cursor-pointer transform-style-preserve-3d"
            >
                {/* Front */}
                <div className="absolute inset-0 backface-hidden">
                    <FoodCardFront food={food} onOpen={onOpen} />
                </div>

                {/* Back */}
                <div className="absolute inset-0 rotate-y-180 backface-hidden">
                    <FoodCardBack food={food} onOpen={onOpen} />
                </div>
            </motion.div>
        </div>
    );
}