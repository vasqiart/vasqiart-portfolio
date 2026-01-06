'use client';

import Link from 'next/link';
import { Github, ArrowRight } from 'lucide-react';

export default function Home() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <main className="max-w-4xl mx-auto px-6 sm:px-8">
        <section className="min-h-screen flex flex-col justify-center py-20">
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-light tracking-tight mb-8">
            vasqiart
          </h1>
          <p className="text-xl sm:text-2xl font-light mb-3 text-black/80">
            Minimal, privacy-first web tools.
          </p>
          <p className="text-sm sm:text-base font-light mb-12 text-black/60">
            Built in Tokyo.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-6 py-3 border border-black hover:bg-black hover:text-white transition-colors"
            >
              Projects
              <ArrowRight size={16} />
            </button>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-black/20 hover:border-black transition-colors"
            >
              <Github size={16} />
              GitHub
            </Link>
          </div>
        </section>

        <section id="projects" className="py-20 border-t border-black/10">
          <h2 className="text-3xl sm:text-4xl font-light mb-16">Projects</h2>

          <div className="space-y-12">
            <div className="border border-black/10 p-8 sm:p-12">
              <h3 className="text-2xl font-light mb-4">Whitespace Cleaner</h3>
              <p className="text-base sm:text-lg font-light mb-6 text-black/70">
                Clean up spacing and blank lines instantly in your browser.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="https://whitespace-cleaner.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm border-b border-black pb-1 hover:border-black/40 transition-colors"
                >
                  Live Demo
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm border-b border-black/30 pb-1 hover:border-black transition-colors"
                >
                  <Github size={14} />
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-black/10">
          <h2 className="text-3xl sm:text-4xl font-light mb-8">About</h2>
          <div className="space-y-4 text-base sm:text-lg font-light text-black/70 max-w-2xl">
            <p>
              I build small, useful tools that respect your privacy and work directly in your browser.
            </p>
            <p>
              No tracking, no unnecessary features—just clean, focused solutions to everyday problems.
            </p>
            <p>
              Everything is open source and free to use.
            </p>
          </div>
        </section>

        <footer className="py-12 border-t border-black/10">
          <div className="flex gap-8 flex-wrap text-sm font-light">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black/60 transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black/60 transition-colors"
            >
              X
            </Link>
            <Link
              href="mailto:hello@example.com"
              className="hover:text-black/60 transition-colors"
            >
              Email
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
