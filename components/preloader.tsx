"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1750);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeOut" } }}
          className="fixed inset-0 z-[80] flex items-center justify-center overflow-hidden bg-brand-navy"
        >
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 0.055, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src="/brand/logo-stacked-gold.png"
              alt=""
              width={780}
              height={830}
              className="h-[70vh] w-[70vh] max-w-none object-contain"
              priority
            />
          </motion.div>

          <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="relative h-44 w-44 sm:h-56 sm:w-56"
            >
              <Image
                src="/brand/logo-stacked-gold.png"
                alt="A&A Law Firm"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "10rem", opacity: 1 }}
              transition={{ duration: 1.1, ease: "easeInOut", delay: 0.2 }}
              className="h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent"
            />

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="max-w-md text-xs uppercase tracking-[0.3em] text-brand-pearl/82 sm:text-sm"
            >
              Estructurando soluciones legales en Panamá
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
