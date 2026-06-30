import { notFound } from "next/navigation";
import { stories } from "@/data/stories";

interface StoryPageProps {
    params: {
        id: string;
    };
}

export default function StoryPage({ params }: StoryPageProps) {
    const story = stories.find((s) => s.id === params.id);

    if (!story) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            {/* HERO IMAGE */}
            <section className="relative h-[75vh] w-full overflow-hidden">
                <img
                    src={story.image}
                    alt={story.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-80 scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-12 max-w-5xl mx-auto">
                    <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)]">
                        {story.culture}
                    </p>

                    <h1 className="mt-4 text-4xl md:text-6xl font-serif text-[var(--accent)] leading-tight">
                        {story.title}
                    </h1>

                    <p className="mt-6 text-lg text-[var(--muted)] max-w-2xl leading-relaxed">
                        {story.food}
                    </p>
                </div>
            </section>

            {/* QUOTE SECTION */}
            <section className="px-6 md:px-12 py-20">
                <div className="max-w-3xl mx-auto">
                    <p className="text-2xl md:text-3xl leading-relaxed font-serif text-[var(--foreground)] border-l-2 border-[var(--accent)] pl-6">
                        “{story.quote}”
                    </p>

                    <p className="mt-6 text-sm text-[var(--muted)]">
                        — {story.personName}
                    </p>
                </div>
            </section>

            {/* STORY BODY */}
            <section className="px-6 md:px-12 pb-32">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-lg uppercase tracking-[0.2em] text-[var(--accent)] mb-6">
                        Memory
                    </h2>

                    <p className="text-[var(--muted)] leading-loose text-lg">
                        {story.story}
                    </p>
                </div>
            </section>

            {/* TAGS */}
            <section className="px-6 md:px-12 pb-24">
                <div className="max-w-3xl mx-auto flex flex-wrap gap-3">
                    {story.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs px-3 py-1 rounded-full border border-[var(--border)] text-[var(--muted)]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </section>

            {/* FOOTER NOTE */}
            <section className="px-6 md:px-12 pb-32">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-sm text-[var(--muted)] italic">
                        “Every meal carries a memory. Every memory carries a
                        person.”
                    </p>
                </div>
            </section>
        </div>
    );
}