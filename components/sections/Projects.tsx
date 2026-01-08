"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "PROJECT: NEBULA",
    category: "Rogue-lite / Strategy",
    desc: "在破碎的星域中重建秩序。每一次跃迁都是赌博，每一场战斗都是计算。",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)", 
    borderColor: "#1e3a8a"
  },
  {
    id: 2,
    title: "ECHOES OF SILENCE",
    category: "Narrative / Puzzle",
    desc: "声音是唯一的武器。在绝对的黑暗中，通过回声描绘世界的轮廓。",
    gradient: "linear-gradient(135deg, #581c87 0%, #0f172a 100%)", 
    borderColor: "#581c87"
  },
  {
    id: 3,
    title: "CODE: VANGUARD",
    category: "Tactical FPS",
    desc: "战术与直觉的极致碰撞。没有血条，只有一击必杀的冷酷现实。",
    gradient: "linear-gradient(135deg, #7c2d12 0%, #0f172a 100%)", 
    borderColor: "#7c2d12"
  }
];

export default function Projects() {
  return (
    <section className="min-h-screen w-full py-24 px-6 bg-void flex flex-col items-center">
      
      {/* 标题 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-widest uppercase">
          Selected Works
        </h2>
        <div className="h-[2px] w-12 bg-signal mx-auto mt-4" />
      </motion.div>

      {/* 项目网格 */}
      <div 
        style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '2rem',
          width: '100%',
          maxWidth: '1200px'
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ 
              y: -10, 
              borderColor: project.borderColor, 
              boxShadow: `0 0 20px ${project.borderColor}40` 
            }}
            className="relative flex flex-col bg-[#0a0a0a] overflow-hidden"
            style={{ 
              border: '1px solid #333', 
              width: '100%',            
              maxWidth: '350px',        
              minHeight: '450px'        
            }}
          >
            {/* 渐变块 */}
            <div 
              style={{ 
                height: '200px', 
                width: '100%',
                background: project.gradient 
              }}
            />
            
            {/* 
               内容区修正：
               1. items-center: 让 Flex 子元素（文字块）水平居中
               2. text-center: 让文字内部居中
            */}
            <div className="p-6 flex-1 flex flex-col items-center text-center relative z-10">
              <p className="text-signal text-xs font-bold tracking-widest uppercase mb-2">
                {project.category}
              </p>
              <h3 className="font-display text-2xl text-white mb-4">
                {project.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {project.desc}
              </p>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}