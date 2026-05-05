"use client";

import { motion } from "framer-motion";

export function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-white"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-serif text-3xl italic tracking-tight"
      >
        whenevr<span className="text-sm align-top ml-1">®</span>
      </motion.h1>
    </motion.div>
  );
}