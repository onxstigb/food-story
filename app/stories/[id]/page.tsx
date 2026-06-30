import Link from "next/link";
import { notFound } from "next/navigation";
import { stories } from "@/data/stories";

interface StoryPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function StoryPage({ params }: StoryPageProps) {
    const { id } = await params;

    const story = stories.find((s) => s.id === id);

    if (!story) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">

            {/* Hero */}

            <section className="relative h-[70vh] overflow-hidden">

                <img
                    src={story.image}
                    alt={story.title}
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />

                <div className="absolute top-8 left-8">
                    <Link
                        href="/stories"
                        className="rounded-full border border-white/30 bg-black/30 px-5 py-2 text-white backdrop-blur transition hover:bg-white hover:text-black"
                    >
                        ← Back to Stories
                    </Link>
                </div>

                <div className="absolute bottom-12 left-1/2 w-full max-w-6xl -translate-x-1/2 px-6">

                    <p className="uppercase tracking-[0.4em] text-sm text-white/80">
                        {story.culture}
                    </p>

                    <h1 className="mt-4 text-5xl md:text-7xl font-serif text-white">
                        {story.title}
                    </h1>

                    <p className="mt-5 text-xl text-white/80">
                        {story.food}
                    </p>

                </div>

            </section>

            {/* Quote */}

            <section className="mx-auto max-w-4xl px-6 py-20">

                <blockquote className="border-l-4 border-[var(--accent)] pl-8 text-3xl italic font-serif leading-relaxed">
                    “{story.quote}”
                </blockquote>

                <p className="mt-6 text-right text-[var(--muted)]">
                    — {story.personName}
                </p>

            </section>

            {/* Story */}

            <section className="mx-auto max-w-3xl px-6">

                <h2 className="mb-8 text-3xl font-serif text-[var(--accent)]">
                    The Story
                </h2>

                <p className="text-lg leading-9 text-[var(--muted)]">
                    {story.story}
                </p>

            </section>

            {/* Recipe */}

            <section className="mx-auto mt-24 max-w-5xl px-6">

                <div className="rounded-3xl border border-[var(--border)] bg-white/40 p-10">

                    <h2 className="text-4xl font-serif text-[var(--accent)]">
                        The Recipe
                    </h2>

                    <p className="mt-3 text-[var(--muted)]">
                        Every story deserves to be shared around a table. Here's one way to recreate this meal.
                    </p>

                    <div className="mt-12 grid gap-12 md:grid-cols-2">

                        <div>

                            <h3 className="mb-5 text-2xl font-serif">
                                Ingredients
                            </h3>

                            <ul className="space-y-3">

                                {story.ingredients.map((ingredient) => (

                                    <li
                                        key={ingredient}
                                        className="flex gap-3"
                                    >
                                        <span className="text-[var(--accent)]">
                                            •
                                        </span>

                                        <span>
                                            {ingredient}
                                        </span>

                                    </li>

                                ))}

                            </ul>

                        </div>

                        <div>

                            <h3 className="mb-5 text-2xl font-serif">
                                Instructions
                            </h3>

                            <ol className="space-y-5">

                                {story.instructions.map((step, index) => (

                                    <li
                                        key={step}
                                        className="flex gap-5"
                                    >

                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-white">

                                            {index + 1}

                                        </div>

                                        <p className="flex-1">
                                            {step}
                                        </p>

                                    </li>

                                ))}

                            </ol>

                        </div>

                    </div>

                </div>

            </section>

            {/* Tags */}

            <section className="mx-auto max-w-5xl px-6 py-16">

                <div className="flex flex-wrap gap-3">

                    {story.tags.map((tag) => (

                        <span
                            key={tag}
                            className="rounded-full border border-[var(--border)] px-4 py-2 text-sm"
                        >
                            {tag}
                        </span>

                    ))}

                </div>

            </section>

            {/* Closing */}

            <section className="mx-auto max-w-3xl px-6 pb-24 text-center">

                <p className="text-2xl font-serif text-[var(--accent)]">
                    Food tells stories long after the meal is over.
                </p>

                <p className="mt-6 text-[var(--muted)]">
                    Thank you for taking the time to share this memory.
                    Every story helps preserve culture, family traditions,
                    and the moments that connect us around a shared table.
                </p>

                <Link
                    href="/stories"
                    className="mt-10 inline-block rounded-full bg-[var(--accent)] px-8 py-3 text-white transition hover:opacity-90"
                >
                    Explore More Stories
                </Link>

            </section>

        </main>
    );
}