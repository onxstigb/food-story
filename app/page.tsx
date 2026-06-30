"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, RotateCw, ArrowRight, Play } from "lucide-react";

const STORIES = [
  { 
    id: 1, 
    name: "Linh", 
    dish: "Family Phở", 
    time: "1 hr 20 min",
    serves: 8,
    ingredients: ["Star Anise", "Charred Ginger", "Beef Bone Broth", "Rice Noodles"], 
    story: "Recently we had Vietnamese night. This dish is my bridge between North and South Vietnam. It represents my identity—a blend of traditions that somehow makes a perfect whole.",
    img: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=1000&auto=format&fit=crop"
  },
  { 
    id: 2, 
    name: "Mateo", 
    dish: "Artisanal Pizza", 
    time: "35 min",
    serves: 4,
    ingredients: ["Pesto", "Baby spinach", "Purple onion", "Mozzarella", "Parmesan"], 
    story: "Food is a way to connect and carry pieces of home. This recipe is a staple—it represents the small moments of connection that happen across the kitchen counter.",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop"
  },
  { 
    id: 3, 
    name: "Sarah", 
    dish: "Sunday Roast", 
    time: "2 hours",
    serves: 6,
    ingredients: ["Roast Beef", "Yorkshire Pudding", "Rosemary", "Potatoes"], 
    story: "My friends and I cook twice a month. This roast represents the safety of home. Even though we come from different places, this table is where we all belong.",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop"
  },
  { 
    id: 4, 
    name: "Alex", 
    dish: "Wild Sourdough", 
    time: "24 hours",
    serves: 2,
    ingredients: ["Wild Yeast", "Sea Salt", "Spring Water"], 
    story: "Baking bread taught me patience. Sharing a loaf with my neighbors is how I finally felt like I belonged in this new city.",
    img: "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Home() {
  const [selectedStory, setSelectedStory] = useState<any>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#918868] selection:bg-[#931F1D] selection:text-white">
      
      {/* 1. MINIMAL NAV */}
      <nav className="w-full border-b border-black/5 p-8 flex justify-between items-center bg-[#FAF9F6] sticky top-0 z-40">
        <div className="text-[10px] uppercase tracking-[0.5em] font-bold">The Archive</div>
        <h1 className="text-2xl font-serif text-[#931F1D] tracking-tighter lowercase italic">the shared table.</h1>
        <div className="text-[10px] uppercase tracking-[0.5em] font-bold">Vol. 01</div>
      </nav>

      {/* 2. HERO SPREAD */}
      <section className="w-full py-40 border-b border-black/5 flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-[12vw] font-serif font-light text-[#931F1D] leading-[0.8] tracking-tighter mb-12"
        >
          why is food <br/> <span className="font-script text-[14vw] lowercase tracking-normal -mt-10 block">important?</span>
        </motion.h2>
        <p className="max-w-xl text-center font-serif text-xl italic opacity-70 px-6">
          Exploring how the act of cooking connects us to family, culture, and a sense of belonging.
        </p>
      </section>

      {/* 3. THE FULL-WIDTH GRID (Editorial Style) */}
      <section className="w-full grid grid-cols-1 md:grid-cols-2 border-b border-black/5">
        {STORIES.map((story) => (
          <div 
            key={story.id} 
            onClick={() => setSelectedStory(story)}
            className="group border-r border-b border-black/5 p-12 md:p-24 flex flex-col items-center justify-center cursor-pointer hover:bg-[#D2E59E]/10 transition-colors"
          >
            {/* The Photo: Made intentionally smaller with lots of white space */}
            <div className="w-full max-w-[300px] aspect-[3/4] overflow-hidden mb-12 shadow-sm grayscale group-hover:grayscale-0 transition-all duration-1000">
              <img src={story.img} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" />
            </div>
            
            <div className="text-center">
              <h3 className="font-script text-5xl text-[#931F1D] mb-2">{story.dish}</h3>
              <div className="flex items-center justify-center gap-4">
                <span className="h-px w-8 bg-black/10" />
                <p className="uppercase tracking-[0.3em] text-[9px] font-bold">From {story.name}</p>
                <span className="h-px w-8 bg-black/10" />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 4. DOCUMENTARY SPREAD */}
      <section className="w-full py-40 px-10 flex flex-col items-center justify-center bg-[#931F1D] text-[#FAF9F6]">
        <h2 className="font-serif text-6xl italic mb-12 leading-none text-center">the documentary.</h2>
        <div className="w-full max-w-5xl aspect-video border border-[#FAF9F6]/20 relative flex items-center justify-center group cursor-pointer overflow-hidden">
           <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
           <Play size={48} className="relative z-10 opacity-40 group-hover:opacity-100 transition-all" />
           <p className="absolute bottom-8 text-[10px] uppercase tracking-[0.5em] font-bold">Production: Summer 2026</p>
        </div>
      </section>

      {/* 5. THE POSTCARD MODAL (Large & Wide) */}
      <AnimatePresence>
        {selectedStory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => { setSelectedStory(null); setIsFlipped(false); }}
              className="absolute inset-0 bg-[#FAF9F6]/98 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-6xl aspect-[1.8/1] h-auto md:h-[600px] perspective"
            >
              <button 
                onClick={() => { setSelectedStory(null); setIsFlipped(false); }}
                className="absolute -top-12 right-0 text-[#931F1D] text-[10px] font-bold uppercase tracking-[0.4em] flex items-center gap-2"
              >
                Close <X size={14} />
              </button>

              <div 
                className={`w-full h-full relative transition-transform duration-[800ms] preserve-3d cursor-pointer ${isFlipped ? "rotate-y-180" : ""}`}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                {/* FRONT: Editorial Recipe */}
                <div className="absolute inset-0 backface-hidden bg-white p-12 md:p-20 flex flex-col border border-black/5 shadow-2xl">
                  <div className="flex justify-between items-start border-b border-black/10 pb-10">
                    <div>
                      <h2 className="font-script text-7xl md:text-8xl text-black leading-none">{selectedStory.dish}</h2>
                      <p className="font-serif italic text-xl mt-4 opacity-60">A memory shared by {selectedStory.name}</p>
                    </div>
                    <div className="text-right flex flex-col gap-1 text-[10px] font-bold uppercase tracking-widest opacity-40">
                      <span>Serves {selectedStory.serves}</span>
                      <span>{selectedStory.time}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-20 pt-12 flex-grow overflow-hidden">
                    <div>
                      <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] mb-6 border-b border-black/5 pb-2">Ingredients</h4>
                      <ul className="space-y-3">
                        {selectedStory.ingredients.map((ing: string) => (
                          <li key={ing} className="font-serif text-xl italic opacity-70">{ing}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="hidden md:flex flex-col items-center justify-center p-8 bg-[#FAF9F6]">
                       <img src={selectedStory.img} className="w-48 aspect-square object-cover grayscale opacity-80 mb-6" />
                       <p className="text-[10px] font-bold uppercase tracking-widest text-[#ff7f11] animate-pulse">Click to read story</p>
                    </div>
                  </div>
                </div>

                {/* BACK: The Message/Story */}
                <div className="absolute inset-0 backface-hidden bg-[#931F1D] rotate-y-180 p-12 md:p-24 shadow-2xl flex flex-col items-center justify-center">
                  <div className="max-w-2xl text-center text-[#FAF9F6]">
                    <h3 className="font-script text-6xl mb-10 opacity-50 lowercase tracking-widest">the memory</h3>
                    <p className="font-serif text-2xl md:text-4xl italic leading-tight">
                      "{selectedStory.story}"
                    </p>
                    <div className="h-px w-20 bg-white/30 mx-auto mt-12" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 6. SUBMISSION FORM */}
      <section className="w-full py-40 px-10 border-t border-black/5 flex flex-col items-center">
        <h2 className="font-serif text-4xl mb-12 italic text-[#931F1D]">join the archive.</h2>
        <form className="w-full max-w-lg space-y-10">
          <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-black/10 p-4 font-serif text-xl outline-none focus:border-[#931F1D] transition-colors" />
          <textarea placeholder="Your story..." rows={3} className="w-full bg-transparent border-b border-black/10 p-4 font-serif text-xl outline-none focus:border-[#931F1D] transition-colors" />
          <button className="text-[10px] font-bold uppercase tracking-[0.5em] border border-black/10 px-12 py-5 hover:bg-[#931F1D] hover:text-white hover:border-[#931F1D] transition-all">Submit Entry</button>
        </form>
      </section>

    </main>
  );
}