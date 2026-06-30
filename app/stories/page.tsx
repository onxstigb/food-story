import Link from "next/link";
import { stories } from "@/data/stories";

export default function StoriesPage() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] px-6 md:px-12 py-24">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-serif text-[var(--accent)]">
                    Stories
                </h1>

                <p className="mt-4 text-[var(--muted)] max-w-2xl">
                    Personal memories, cultural identity, and emotional
                    connections through food.
                </p>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {stories.map((story) => (
                        <Link
                            key={story.id}
                            href={`/stories/${story.id}`}
                            className="border border-[var(--border)] rounded-2xl overflow-hidden bg-[var(--card)] hover:border-[var(--accent)] transition"
                        >
                            <div className="h-56 overflow-hidden">
                                <img
                                    src={story.image}
                                    alt={story.title}
                                    className="w-full h-full object-cover opacity-80 hover:scale-105 transition duration-700"
                                />
                            </div>

                            <div className="p-6">
                                <p className="text-xs text-[var(--muted)] uppercase tracking-widest">
                                    {story.culture}
                                </p>

                                <h2 className="mt-2 text-xl text-[var(--accent)]">
                                    {story.title}
                                </h2>

                                <p className="mt-3 text-sm text-[var(--muted)] line-clamp-3">
                                    {story.quote}
                                </p>

                                <p className="mt-6 text-xs text-[var(--highlight)]">
                                    Read →
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}