"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Food } from "@/types/food";
import Ingredients from "@/components/recipe/Ingredients";
import Instructions from "@/components/recipe/Instructions";
import Story from "@/components/recipe/Story";
import RecipeMeta from "@/components/recipe/RecipeMeta";
import ModalOverlay from "./ModalOverlay";

interface RecipeModalProps {
    food: Food | null;
    open: boolean;
    onClose: () => void;
}

export default function RecipeModal({
    food,
    open,
    onClose,
}: RecipeModalProps) {
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    return (
        <>
            <ModalOverlay open={open} onClose={onClose} />

            <AnimatePresence>
                {open && food && (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 z-50 flex items-center justify-center px-4"
                    >
                        <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl">
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-zinc-400 hover:text-white transition"
                            >
                                <X size={20} />
                            </button>

                            {/* Hero */}
                            <div className="relative h-[300px] md:h-[400px]">
                                <img
                                    src={food.image}
                                    alt={food.title}
                                    className="w-full h-full object-cover opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    <p className="text-xs uppercase tracking-widest text-zinc-400">
                                        {food.cuisine}
                                    </p>

                                    <h2 className="mt-2 text-2xl md:text-4xl text-white font-medium">
                                        {food.title}
                                    </h2>

                                    <p className="mt-2 text-sm text-zinc-400 max-w-2xl">
                                        {food.description}
                                    </p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-10 space-y-12">
                                <RecipeMeta food={food} />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <Ingredients food={food} />
                                    <Instructions food={food} />
                                </div>

                                <Story food={food} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}