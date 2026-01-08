"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-void">
      {/* 背景 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-void to-void opacity-20 pointer-events-none" />

      <div className="z-10 flex flex-col items-center text-center px-4">
        
        {/* Logo 容器 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group cursor-default flex items-center justify-center"
        >
          {/* ENDR */}
          <h1 className="font-display text-6xl md:text-9xl tracking-tighter text-tech select-none mr-1">
            ENDR
          </h1>

          {/* Y - 楔形三角 - X */}
          <div className="flex items-center relative h-full">
            
            {/* Y */}
            <h1 className="font-display text-6xl md:text-9xl tracking-tighter text-tech select-none z-10">
              Y
            </h1>

            {/* 
               极度锋利的楔形
               1. preserveAspectRatio="none": 强制拉伸，不受原始比例限制
               2. viewBox="0 0 10 24": 定义一个瘦长的画布
               3. Path: M0 0 L10 12 L0 24 V0 Z -> 直角三角形（左边垂直）
               4. h-[0.7em]: 高度设为字体高度的 70%，通常对应大写字母的视觉高度
            */}
            <motion.div 
              className="relative z-20 flex items-center justify-center"
              style={{ marginLeft: '-0.05em', marginRight: '-0.05em' }}
            >
              <svg 
                width="0.25em" 
                height="0.72em" 
                viewBox="0 0 10 24" 
                preserveAspectRatio="none"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,90,0,0.8)]"
              >
                <path 
                  d="M0 0 L10 12 L0 24 V0 Z" 
                  fill="#FF5A00"
                />
              </svg>
            </motion.div>

            {/* X */}
            <h1 className="font-display text-6xl md:text-9xl tracking-tighter text-tech select-none z-10">
              X
            </h1>

          </div>
        </motion.div>

        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 font-display text-sm md:text-xl tracking-[0.3em] text-muted uppercase font-normal"
        >
          Worlds Within
        </motion.p>
      </div>

      {/* 底部滚动提示 */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] text-muted tracking-widest uppercase opacity-60">Scroll to Explore</span>
        <div className="w-[2px] h-12 bg-gradient-to-b from-signal to-transparent opacity-80 animate-pulse" />
      </motion.div>
    </section>
  );
}