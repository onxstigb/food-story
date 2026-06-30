"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ModalOverlayProps {
    open: boolean;
    onClose: () => void;
}

export default function ModalOverlay({
    open,
    onClose,
}: ModalOverlayProps) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
                />
            )}
        </AnimatePresence>
    );
}