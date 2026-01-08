import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-void selection:bg-signal selection:text-void">
      <Hero />
      <Manifesto />
      <Projects />
      
      {/* Footer 占位 */}
      <footer className="w-full py-12 text-center text-muted text-sm border-t border-[#222]">
        <p>&copy; {new Date().getFullYear()} ENDRYX STUDIO. All Rights Reserved.</p>
      </footer>
    </main>
  );
}