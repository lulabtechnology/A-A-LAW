"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1650);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeOut" } }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-brand-navy"
        >
          <div className="flex flex-col items-center gap-6 px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative h-28 w-44 sm:h-32 sm:w-56"
            >
              <Image src="/brand/logo-gold.png" alt="A&A Law Firm" fill className="object-contain" priority />
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "9rem" }}
              transition={{ duration: 1.05, ease: "easeInOut", delay: 0.25 }}
              className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="max-w-md text-xs uppercase tracking-[0.3em] text-brand-pearl/80 sm:text-sm"
            >
              Estructurando soluciones legales en Panamá
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
