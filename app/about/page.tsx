import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">

            <section className="mx-auto max-w-5xl px-6 py-24">

                <p className="uppercase tracking-[0.4em] text-sm text-[var(--highlight)]">
                    About The Project
                </p>

                <h1 className="mt-6 text-5xl md:text-7xl font-serif text-[var(--accent)]">
                    The Shared Table
                </h1>

                <p className="mt-10 text-xl leading-9 text-[var(--muted)]">
                    Food is more than something we eat.
                    It carries memories, traditions, identities,
                    and reminds us of the people and places that shape who we are.
                </p>

            </section>

            <section className="mx-auto max-w-3xl px-6 pb-20 space-y-8 text-lg leading-9 text-[var(--muted)]">

                <p>
                    The Shared Table began with a simple question:
                    <strong className="text-[var(--accent)]">
                        {" "}Why is food important to you?
                    </strong>
                </p>

                <p>
                    Every recipe has a story behind it. Sometimes that story is
                    about family traditions passed down through generations.
                    Sometimes it is about grief, celebration, migration,
                    friendship, or simply feeling at home.
                </p>

                <p>
                    This project explores those stories through personal
                    narratives, photographs, and recipes. Rather than focusing
                    only on how food is made, it focuses on why food matters.
                </p>

                <p>
                    The stories featured here represent different backgrounds,
                    cultures, and experiences, but they all share one common
                    theme: food has the power to bring people together.
                </p>

                <blockquote className="border-l-4 border-[var(--accent)] pl-6 text-2xl font-serif italic">
                    "Around every table there is a story worth telling."
                </blockquote>

            </section>

            <section className="mx-auto max-w-5xl px-6 pb-24">

                <div className="rounded-3xl border border-[var(--border)] bg-white/40 p-10">

                    <h2 className="text-3xl font-serif text-[var(--accent)]">
                        Project Goals
                    </h2>

                    <ul className="mt-8 space-y-4 text-[var(--muted)]">

                        <li>• Celebrate food as a form of storytelling.</li>

                        <li>• Preserve family traditions and memories.</li>

                        <li>• Highlight cultural diversity through recipes.</li>

                        <li>• Create empathy by sharing personal experiences.</li>

                        <li>• Build community through food.</li>

                    </ul>

                </div>

            </section>

            <section className="pb-24 text-center">

                <Link
                    href="/stories"
                    className="rounded-full bg-[var(--accent)] px-8 py-4 text-white transition hover:opacity-90"
                >
                    Read the Stories
                </Link>

            </section>

        </main>
    );
}