"use client";

import { motion } from "framer-motion";

// 简化动画：简单的上浮淡入
const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function Manifesto() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 px-6 bg-void text-tech overflow-hidden">
      
      {/* 
         修复 1：背景网格
         不再使用复杂的 mask，而是直接画线条。
         opacity-20 确保它足够明显。
      */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none"
           style={{
             backgroundImage: 'linear-gradient(#555 1px, transparent 1px), linear-gradient(90deg, #555 1px, transparent 1px)',
             backgroundSize: '4rem 4rem',
             maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
             WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
           }}
      />

      <div className="max-w-4xl w-full z-10 flex flex-col items-center text-center">
        
        {/* 
           修复 2：英文标题
           移除 bg-clip-text，改用纯白色 text-white。
           确保 text-center 生效。
        */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }} // 触发线调整
          variants={revealVariants}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-7xl font-bold tracking-tighter uppercase text-white leading-tight">
            Homage to Intellect.<br />
            Defining the Unknown.
          </h2>
          {/* 装饰线 */}
          <div className="h-[2px] w-24 bg-[#FF5A00] mt-8 mb-4" />
          <p className="text-muted tracking-[0.5em] text-sm md:text-base">
            致敬智识 · 定义未知
          </p>
        </motion.div>

        {/* 
           修复 3 & 4：正文对齐与颜色
           移除 text-justify，强制 text-center。
           最后一句的 span 使用内联样式强制颜色，防止被覆盖。
        */}
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
            {/* 强制橙色 */}
            <span style={{ color: '#FF5A00' }}>交还给热爱游戏的你。</span>
          </motion.p>

        </div>

      </div>
    </section>
  );
}