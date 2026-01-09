import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 关键配置：告诉 Next.js 导出为纯静态 HTML 文件
  output: "export",
  
  // 关闭图片优化服务 (因为静态网站没有后台服务器来处理图片压缩)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
