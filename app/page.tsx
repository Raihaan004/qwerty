import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PartnerSection } from "@/components/PartnerSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] selection:bg-blue-100 selection:text-blue-900 scroll-smooth">
      <Navbar />
      <Hero />
      <PartnerSection />
      
      {/* Additional Placeholder Sections */}
      <section className="py-32 px-12 max-w-7xl mx-auto flex flex-col items-center justify-center border-t border-neutral-100">
          <div className="text-center">
            <h2 className="text-6xl font-black text-neutral-900 leading-tight mb-8">Ready to exwertyuifghjplore<br />the world?</h2>
            <p className="text-neutral-500 max-w-xl mx-auto text-lg mb-12 uppercase tracking-widest font-semibold opacity-70">Experience the world one adventure at a time</p>
            <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-neutral-200 animate-spin-slow"></div>
                <div className="w-16 h-16 rounded-full bg-neutral-100"></div>
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-neutral-200 animate-spin-slow"></div>
            </div>
          </div>
      </section>
    </main>
  );
}

            >
           