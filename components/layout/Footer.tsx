import Link from "next/link";
import { UtensilsCrossed } from "lucide-react";

export default function Footer() {
    return (
        <footer className="mt-24 border-t border-white/10 bg-black">
            <div className="max-w-6xl mx-auto px-6 py-16">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-white">
                            <UtensilsCrossed size={18} className="text-lime-300" />
                            <span className="font-medium tracking-tight">
                                The Shared Table
                            </span>
                        </div>

                        <p className="text-sm text-zinc-400 leading-relaxed">
                            An editorial food experience where recipes are told
                            like stories, and every dish has a memory attached
                            to it.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-4">
                        <h3 className="text-sm text-white font-medium tracking-wide">
                            Explore
                        </h3>

                        <div className="flex flex-col gap-2 text-sm text-zinc-400">
                            <Link
                                href="/recipes"
                                className="hover:text-white transition"
                            >
                                Recipes
                            </Link>
                            <Link
                                href="/about"
                                className="hover:text-white transition"
                            >
                                About
                            </Link>
                            <Link
                                href="/"
                                className="hover:text-white transition"
                            >
                                Journal
                            </Link>
                        </div>
                    </div>

                    {/* Social */}
                <div className="flex gap-4 text-zinc-400">
    <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
    >
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5zM17.8 6.2a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"/>
        </svg>
    </a>

    <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
    >
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="M18.9 2H22l-6.8 7.8L23 22h-6.8l-5.3-6.7L5 22H2l7.3-8.4L1 2h6.9l4.8 6.1L18.9 2zm-1.2 18h1.9L6.2 4H4.2l13.5 16z"/>
        </svg>
    </a>

    <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
    >
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="M12 .5C5.7.5.5 5.9.5 12.3c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 2 2.9 1.4 3.6 1.1.1-.8.4-1.4.7-1.7-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.3a11 11 0 0 1 6 0C16.6 5.2 17.6 5.5 17.6 5.5c.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.8 11.8 0 0 0 23.5 12.3C23.5 5.9 18.3.5 12 .5z"/>
        </svg>
    </a>
</div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-zinc-500">
                    <p>© {new Date().getFullYear()} The Shared Table. All rights reserved.</p>

                    <p className="text-zinc-600">
                        Crafted with intention, design, and quiet obsession.
                    </p>
                </div>
            </div>
        </footer>
    );
}