import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineSwipe } from "react-icons/md";

export default function DragHint() {

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-[9999] text-offWhiteCV"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* ikon der vugger frem og tilbage */}
      <motion.div
        animate={{ x: [-6, 6, -6] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <MdOutlineSwipe size={24} />
      </motion.div>
    </motion.div>
  );
}
