"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1450);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.42, ease: "easeOut" } }}
          className="fixed inset-0 z-[80] flex items-center justify-center overflow-hidden bg-brand-navy"
        >
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 0.055, scale: 1 }}
            transition={{ duration: 1.05, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src="/brand/logo-stacked-white.png"
              alt=""
              width={720}
              height={765}
              className="h-[62vh] w-[62vh] max-w-none object-contain"
              priority
            />
          </motion.div>

          <div className="relative z-10 flex flex-col items-center gap-5 px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative h-36 w-36 sm:h-48 sm:w-48"
            >
              <Image
                src="/brand/logo-stacked-white.png"
                alt="A&A Law Firm"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "9rem", opacity: 1 }}
              transition={{ duration: 0.95, ease: "easeInOut", delay: 0.16 }}
              className="h-px bg-gradient-to-r from-transparent via-brand-mist to-transparent"
            />

            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.52, delay: 0.46 }}
              className="max-w-sm text-[0.65rem] uppercase tracking-[0.24em] text-brand-pearl/90 sm:text-xs"
            >
              Panamá · Legal Strategy
            </motion.p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
