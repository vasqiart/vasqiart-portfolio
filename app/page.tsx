'use client';

import Link from 'next/link';
import { Github, ArrowRight } from 'lucide-react';

export default function Home() {
  const products = [
    {
      title: 'Thumb2MB',
      description: "Optimize images for YouTube's 2MB thumbnail limit.",
      github: '',
      liveDemo: 'https://thumb2mb.vercel.app',
    },
    {
      title: 'Rename',
      description: 'macOS app — Batch rename PDF files with safe, sequential numbering.',
      github: 'https://github.com/vasqiart/Rename',
      liveDemo: '',
    },
    {
      title: 'Bind',
      description: 'macOS app — Combine JPEG images in a folder into a single PDF (keeps original quality).',
      github: 'https://github.com/vasqiart/bind',
      liveDemo: '',
    },
    {
      title: 'Whitespace Cleaner',
      description: 'Clean up spacing and blank lines instantly in your browser.',
      github: 'https://github.com',
      liveDemo: 'https://whitespace-cleaner.vercel.app',
    },
  ];

  const Hero = () => (
    <main className="flex flex-col justify-center px-6 sm:px-8 md:px-10 py-12 md:py-20">
      <div className="w-full">
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-light tracking-tight mb-8 text-left">
          vasqiart
        </h1>
        <p className="text-xl sm:text-2xl font-light mb-3 text-black/80 text-left">
          Minimal, privacy-first tools.
        </p>
        <p className="text-sm sm:text-base font-light mb-12 text-black/60 text-left">
          Built in Tokyo.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-black/20 hover:border-black transition-colors"
          >
            <Github size={16} />
            GitHub
          </Link>
          <Link
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-black/20 hover:border-black transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4"
              fill="currentColor"
            >
              <path d="M18.244 2H21l-6.54 7.47L22 22h-6.828l-5.34-6.96L3.8 22H1l7.02-8.02L2 2h6.828l4.86 6.32L18.244 2z" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );

  const ProductsShelf = () => {
    // プロダクトを行に分割（1行あたり1列で縦に並べる）
    const itemsPerRow = 1;
    const rows = [];
    for (let i = 0; i < products.length; i += itemsPerRow) {
      rows.push(products.slice(i, i + itemsPerRow));
    }

    return (
      <aside
        id="products"
        className="pl-6 sm:pl-8 md:pl-10 pr-0 py-12 md:py-20 flex flex-col justify-start"
      >
        <div className="w-full">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 pb-4 border-b border-black/10">
            Products
          </h2>
          <div className="space-y-0">
            {rows.map((rowProducts, rowIndex) => (
              <div
                key={rowIndex}
                className="py-8 border-b border-black/10 last:border-b-0 last:pb-0"
              >
                <div className="grid grid-cols-1 gap-4 md:gap-6 items-stretch">
                  {rowProducts.map((product, productIndex) => {
                    const isWhitespaceCleaner = product.title === 'Whitespace Cleaner';
                    const hasLiveDemo = product.liveDemo && product.liveDemo !== '';
                    
                    const cardContent = (
                      <div className="flex flex-col h-full">
                        <div>
                          <h3 className="text-lg sm:text-xl font-light mb-2">{product.title}</h3>
                          <p className="text-xs sm:text-sm font-light mb-2 text-black/70 clamp-2">
                            {product.description}
                          </p>
                        </div>
                        <div className={`flex gap-3 flex-wrap ${isWhitespaceCleaner ? 'mt-auto' : ''}`}>
                          {product.liveDemo && (
                            <Link
                              href={product.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs border-b border-black pb-0.5 hover:border-black/40 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Live Demo
                              <ArrowRight size={12} />
                            </Link>
                          )}
                          {product.github && (
                            <Link
                              href={product.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs border-b border-black/30 pb-0.5 hover:border-black transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github size={12} />
                              GitHub
                            </Link>
                          )}
                        </div>
                      </div>
                    );
                    
                    return (
                      <div
                        key={productIndex}
                        className="border border-black/10 rounded-none p-4 md:p-5 hover:border-black/30 hover:bg-black/[0.02] transition-colors h-full"
                      >
                        {hasLiveDemo ? (
                          <Link
                            href={product.liveDemo!}
                            target="_blank"
                            rel="noreferrer"
                            className="block h-full"
                          >
                            {cardContent}
                          </Link>
                        ) : (
                          cardContent
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    );
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.618fr_1fr] gap-0 min-h-screen lg:items-center">
          <Hero />
          <ProductsShelf />
        </div>
      </div>
    </div>
  );
}
