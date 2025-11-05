import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function Divider() {
  return (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter selection:bg-cyan-400/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="relative py-20 bg-[#0a0a0f]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold">About</h2>
              <p className="mt-2 text-white/70">A quick snapshot of who I am and how I work.</p>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <p className="text-white/80">
                I’m a developer and designer focused on building expressive, performant interfaces. I blend modern
                frontend stacks with a product mindset—prioritizing clarity, motion, and accessibility.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <h3 className="font-semibold">Craft</h3>
                  <p className="mt-1 text-sm text-white/70">Pixel-precise visuals with a focus on delightful details.</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                  <h3 className="font-semibold">Code</h3>
                  <p className="mt-1 text-sm text-white/70">Modern React, clean architecture, and maintainable patterns.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />
        <Projects />
        <Divider />
        <Contact />
      </main>
    </div>
  );
}
