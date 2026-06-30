"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, UtensilsCrossed } from "lucide-react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "backdrop-blur-xl bg-black/60 border-b border-white/10"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <motion.div
                        initial={{ rotate: -10, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-lime-300"
                    >
                        <UtensilsCrossed size={20} />
                    </motion.div>

                    <span className="text-white tracking-tight font-medium">
                        The Shared Table
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
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
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden text-white"
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden px-6 pb-6 border-t border-white/10 bg-black/90 backdrop-blur-xl"
                >
                    <div className="flex flex-col gap-4 text-zinc-300 text-sm pt-4">
                        <Link
                            href="/recipes"
                            onClick={() => setMobileOpen(false)}
                            className="hover:text-white"
                        >
                            Recipes
                        </Link>
                        <Link
                            href="/about"
                            onClick={() => setMobileOpen(false)}
                            className="hover:text-white"
                        >
                            About
                        </Link>
                        <Link
                            href="/"
                            onClick={() => setMobileOpen(false)}
                            className="hover:text-white"
                        >
                            Journal
                        </Link>
                    </div>
                </motion.div>
            )}
        </header>
    );
}