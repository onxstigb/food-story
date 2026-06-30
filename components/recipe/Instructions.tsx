import { Food } from "@/types/food";

interface InstructionsProps {
    food: Food;
}

export default function Instructions({ food }: InstructionsProps) {
    return (
        <div>
            <h3 className="text-white text-lg font-medium mb-4">
                Instructions
            </h3>

            <ol className="space-y-4">
                {food.instructions.map((step) => (
                    <li
                        key={step.id}
                        className="flex gap-4 text-sm text-zinc-400"
                    >
                        <span className="text-lime-300 font-medium">
                            {step.stepNumber.toString().padStart(2, "0")}
                        </span>
                        <p>{step.instruction}</p>
                    </li>
                ))}
            </ol>
        </div>
    );
}