import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    description: 'A playful, techy landing page powered by Spline and React.',
    tech: ['React', 'Spline', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Realtime Dashboard',
    description: 'Clean, responsive analytics dashboard with smooth interactions.',
    tech: ['React', 'FastAPI', 'WebSockets'],
    link: '#',
  },
  {
    title: 'Design System Kit',
    description: 'Reusable UI components with accessible patterns and themes.',
    tech: ['Radix', 'Tailwind', 'Storybook'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-black to-[#0a0a0f]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Selected Projects</h2>
            <p className="mt-2 text-white/70">A few highlights showcasing craft, interaction, and clarity.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article key={i} className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-3xl" />
              <div className="flex items-center gap-2 text-xs text-white/60">
                <Code size={14} className="text-cyan-300" />
                {p.tech.join(' • ')}
              </div>
              <h3 className="mt-3 text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{p.description}</p>
              <a
                href={p.link}
                className="mt-4 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200"
              >
                View Project <ExternalLink size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
