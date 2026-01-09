"use client";

import { motion } from "framer-motion";

// 修复：移除 ease 属性，使用默认动画曲线，通过类型检查
const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8 } // 移除了 ease: "easeOut"
  }
};

export default function Manifesto() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 px-6 bg-void text-tech overflow-hidden">
      
      {/* 背景网格 */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none"
           style={{
             backgroundImage: 'linear-gradient(#555 1px, transparent 1px), linear-gradient(90deg, #555 1px, transparent 1px)',
             backgroundSize: '4rem 4rem',
             maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
             WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
           }}
      />

      <div className="max-w-4xl w-full z-10 flex flex-col items-center text-center">
        
        {/* 英文标题 */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={revealVariants}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-7xl font-bold tracking-tighter uppercase text-white leading-tight">
            Homage to Intellect.<br />
            Defining the Unknown.
          </h2>
          <div className="h-[2px] w-24 bg-[#FF5A00] mt-8 mb-4" />
          <p className="text-muted tracking-[0.5em] text-sm md:text-base">
            致敬智识 · 定义未知
          </p>
        </motion.div>

        {/* 正文 */}
        <div className="space-y-10 text-lg md:text-2xl font-light leading-relaxed text-gray-300 flex flex-col items-center">
          
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={revealVariants}
          >
            我们相信，最好的游戏不是消耗时间的黑洞，
            <br className="hidden md:block" />
            而是<span className="text-white font-bold">点亮思维的火花</span>。
          </motion.p>

          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={revealVariants}
          >
            在 Endryx，代码不是冰冷的边界，
            <br className="hidden md:block" />
            而是构建逻辑与命运的基石。
          </motion.p>

          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={revealVariants}
            className="text-xl md:text-3xl text-white font-display pt-8"
          >
            只为把探索的惊喜与决策的快感，
            <br />
            <span style={{ color: '#FF5A00' }}>交还给热爱游戏的你。</span>
          </motion.p>

        </div>

      </div>
    </section>
  );
}
