import { Food } from "@/types/food";

interface StoryProps {
    food: Food;
}

export default function Story({ food }: StoryProps) {
    return (
        <div className="border-t border-white/10 pt-10">
            <h3 className="text-white text-lg font-medium mb-4">
                {food.story.title}
            </h3>

            <p className="text-zinc-400 leading-relaxed max-w-3xl">
                {food.story.content}
            </p>
        </div>
    );
}