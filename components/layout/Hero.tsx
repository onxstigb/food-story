"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-lime-300/10 blur-[120px]" />
                <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] rounded-full bg-white/5 blur-[120px]" />
            </div>

            <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
                {/* Eyebrow */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-sm tracking-[0.3em] uppercase text-zinc-400"
                >
                    An Editorial Food Archive
                </motion.p>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mt-6 text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.05]"
                >
                    Recipes told like
                    <span className="text-lime-300"> stories</span>,
                    <br />
                    meals remembered as
                    <span className="text-zinc-400"> moments</span>.
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-8 max-w-xl text-zinc-400 text-base leading-relaxed"
                >
                    The Shared Table is a living collection of recipes where
                    every dish carries emotion, memory, and craft. Designed like
                    a magazine, experienced like a gallery.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-10 flex flex-col sm:flex-row gap-4"
                >
                    <Link
                        href="/recipes"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-lime-300 text-black text-sm font-medium hover:bg-lime-200 transition"
                    >
                        Explore Recipes
                    </Link>

                    <Link
                        href="/about"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/15 text-white text-sm hover:bg-white/5 transition"
                    >
                        Read the Story
                    </Link>
                </motion.div>

                {/* Scroll hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-16 text-xs text-zinc-600 tracking-widest uppercase"
                >
                    Scroll to explore
                </motion.div>
            </div>
        </section>
    );
}