export interface Story {
    id: string;
    personName: string;
    title: string;
    food: string;
    culture: string;
    quote: string;
    story: string;
    image: string;
    tags: string[];
    ingredients: string[];
    instructions: string[];
}

export const stories: Story[] = [
    {
        id: "s1",
        personName: "Aiko Tanaka",
        title: "Rice After School",
        food: "Steamed Rice with Soy Sauce",
        culture: "Japanese",
        quote:
            "I didn't realize until I moved away that rice wasn't just food—it was routine, safety, and home.",
        story:
            "Every afternoon after school I would come home to an empty apartment while my mother finished her shift at the hospital. Before leaving for work she always started the rice cooker. The smell of fresh rice greeted me before anything else. I would scoop a bowl, drizzle soy sauce over the top, and sit quietly while finishing homework. It was never an extravagant meal, but it represented stability during a busy season of life. Years later, whenever I feel overwhelmed, I still make rice exactly the same way. The first bite reminds me that comfort doesn't have to be complicated. Sometimes the simplest meals become the strongest memories because they remind us that someone cared enough to make sure we were never truly alone.",

        image: "/images/stories/rice.jpg",

        tags: ["Comfort", "Childhood", "Family"],

        ingredients: [
            "2 cups Japanese short grain rice",
            "Water",
            "Soy sauce",
            "Optional: sesame seeds, egg, or scallions for garnish"
        ],

        instructions: [
            "Wash the rice until the water runs mostly clear.",
            "Cook according to the rice cooker's instructions.",
            "Serve warm with a drizzle of soy sauce.",
            "Top with sesame seeds if desired."
        ]
    },

    {
        id: "s2",
        personName: "Daniel Rivera",
        title: "Sunday Tacos with My Dad",
        food: "Carne Asada Tacos",
        culture: "Mexican-American",
        quote:
            "We didn't talk much, but cooking together said everything we couldn't.",

        story:
            "Every Sunday morning my dad would already have the grill heating before anyone else woke up. He seasoned the meat while I chopped onions and cilantro. Conversation wasn't something either of us was good at, but somehow we always understood each other while cooking. After he passed away, Sunday felt strangely quiet. Eventually I started making tacos again—not because I was hungry, but because it helped me feel close to him. Every slice of lime, every warm tortilla, every smoky bite reminds me that love is sometimes shown through habits instead of words.",

        image: "/images/stories/tacos.jpg",

        tags: ["Tradition", "Family", "Grief"],

        ingredients: [
            "Flank steak",
            "Corn tortillas",
            "White onion",
            "Cilantro",
            "Lime",
            "Salt and pepper"
        ],

        instructions: [
            "Season and grill the steak.",
            "Rest before slicing into thin strips.",
            "Warm tortillas.",
            "Top with steak, onion, cilantro, and lime."
        ]
    },

    {
        id: "s3",
        personName: "Linh Nguyen",
        title: "Vietnamese Night",
        food: "Phở",
        culture: "Vietnamese",

        quote:
            "Sharing food became our way of learning about each other's stories.",

        story:
            "A group of friends and I started hosting cultural dinner nights where each person introduced recipes from their own background. One evening we decided to make phở together. None of us expected the preparation to take hours, but that became the best part of the night. While broth simmered we talked about our families, childhoods, and traditions. By the time dinner was ready, we weren't just sharing a meal—we were sharing pieces of ourselves. That night reminded me that food has the unique ability to create belonging among people who come from completely different places.",

        image: "/images/stories/pho.jpg",

        tags: ["Community", "Culture", "Friendship"],

        ingredients: [
            "Beef broth",
            "Rice noodles",
            "Thin sliced beef",
            "Bean sprouts",
            "Thai basil",
            "Lime"
        ],

        instructions: [
            "Simmer broth with aromatics.",
            "Cook rice noodles.",
            "Assemble noodles and beef in a bowl.",
            "Pour hot broth over everything.",
            "Serve with herbs and lime."
        ]
    },

    {
        id: "s4",
        personName: "Margaret Ellis",
        title: "Grandma's Chicken Soup",
        food: "Chicken Noodle Soup",
        culture: "American",

        quote:
            "No medicine ever worked as well as her soup.",

        story:
            "Whenever someone in our family got sick, Grandma appeared with a giant pot of chicken noodle soup. She never measured ingredients. She simply knew when it tasted right. Looking back, I realize the soup wasn't really about curing illness. It was about reminding us that we were cared for. Even now, making her recipe feels like continuing a tradition of kindness. Every bowl carries the memory of someone who loved through cooking.",

        image: "/images/stories/soup.jpg",

        tags: ["Love", "Care", "Tradition"],

        ingredients: [
            "Chicken",
            "Carrots",
            "Celery",
            "Onion",
            "Egg noodles",
            "Chicken broth"
        ],

        instructions: [
            "Cook chicken in broth.",
            "Add vegetables.",
            "Simmer until tender.",
            "Cook noodles separately.",
            "Combine and serve warm."
        ]
    }
];