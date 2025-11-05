import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Let’s build something together</h2>
          <p className="mt-2 text-white/70 max-w-2xl mx-auto">
            I’m open to freelance work, collaborations, and full-time roles. Drop a line and I’ll get back soon.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 font-medium hover:bg-white/90 transition"
            >
              <Mail size={18} /> Email Me
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 text-white px-4 py-2 font-medium hover:bg-white/10 transition"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 text-white px-4 py-2 font-medium hover:bg-white/10 transition"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>

          <p className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
