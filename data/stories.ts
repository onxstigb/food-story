import { StoryEntry } from "@/types/story";

export const stories: StoryEntry[] = [
    {
        id: "s1",
        personName: "Aiko Tanaka",
        title: "Rice After School",
        food: "Simple steamed rice with soy sauce",
        culture: "Japanese",
        quote:
            "I didn’t realize until I moved away that rice wasn’t just food — it was routine, safety, and silence after school.",
        story:
            "Growing up, I would come home and eat plain rice with soy sauce while my mother worked late shifts. It wasn’t fancy, but it always felt grounding. Even now, when life feels overwhelming, I make it the same way and everything slows down.",
        image: "/images/stories/rice.jpg",
        tags: ["comfort", "childhood", "home"],
    },
    {
        id: "s2",
        personName: "Daniel Rivera",
        title: "Sunday Tacos with My Dad",
        food: "Carne asada tacos",
        culture: "Mexican-American",
        quote:
            "We didn’t talk much, but cooking together said everything we couldn’t.",
        story:
            "Every Sunday my dad and I would make tacos in silence. He would handle the meat, I would prep the toppings. It became our way of being together without needing words. After he passed, I still make them every Sunday.",
        image: "/images/stories/tacos.jpg",
        tags: ["family", "grief", "tradition"],
    },
];