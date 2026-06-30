import Link from "next/link";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex items-center justify-center px-6">
            <div className="max-w-3xl text-center">
                <p className="text-sm tracking-[0.3em] uppercase text-[var(--muted)]">
                    The Shared Table
                </p>

                <h1 className="mt-6 text-4xl md:text-6xl font-serif text-[var(--accent)] leading-tight">
                    Why is food important to you?
                </h1>

                <p className="mt-8 text-lg text-[var(--muted)] leading-relaxed">
                    A living archive of memory, identity, and belonging through
                    food stories.
                </p>

                <div className="mt-12">
                    <Link
                        href="/stories"
                        className="inline-block px-6 py-3 border border-[var(--border)] text-[var(--foreground)] hover:border-[var(--accent)] transition rounded-full"
                    >
                        Enter Stories
                    </Link>
                </div>
            </div>
        </div>
    );
}