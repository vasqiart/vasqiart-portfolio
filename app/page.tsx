'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Github } from 'lucide-react';

export default function Home() {
  const products = [
    {
      title: 'Subs',
      description: 'Track subscriptions with manual entries, monthly/annual billing, and exchange rate support.',
      type: 'macos' as const,
      tags: ['Subscription tracking', 'Manual input', 'Exchange rate'],
      github: 'https://github.com/vasqiart/subs',
      liveDemo: '',
    },
    {
      title: 'Icon',
      description: 'Generate beautiful macOS app icons from any image — directly in your browser.',
      type: 'web' as const,
      tags: ['Icon generator', 'Browser-based', 'Image processing'],
      github: 'https://github.com/vasqiart/icon',
      liveDemo: 'https://icon-liard-rho.vercel.app',
    },
    {
      title: 'Thumb2MB',
      description: "Optimize images for YouTube's 2MB thumbnail limit.",
      type: 'web' as const,
      tags: ['Image optimization', 'YouTube', 'Thumbnail'],
      github: 'https://github.com/vasqiart/thumb2mb',
      liveDemo: 'https://thumb2mb.vercel.app',
    },
    {
      title: 'Rename',
      description: 'macOS app — Batch rename PDF files with safe, sequential numbering.',
      type: 'macos' as const,
      tags: ['File management', 'Batch processing', 'PDF'],
      github: 'https://github.com/vasqiart/Rename',
      liveDemo: '',
    },
    {
      title: 'Bind',
      description: 'macOS app — Combine JPEG images in a folder into a single PDF (keeps original quality).',
      type: 'macos' as const,
      tags: ['PDF creation', 'Image processing', 'File management'],
      github: 'https://github.com/vasqiart/bind',
      liveDemo: '',
    },
    {
      title: 'Whitespace Cleaner',
      description: 'Clean up spacing and blank lines instantly in your browser.',
      type: 'web' as const,
      tags: ['Text processing', 'Browser-based', 'Formatting'],
      github: 'https://github.com',
      liveDemo: 'https://whitespace-cleaner.vercel.app',
    },
  ];

  const ProductsShelf = () => {
    const [filter, setFilter] = useState<'all' | 'web' | 'macos'>('all');

    const filteredProducts = products.filter((product) => {
      if (filter === 'all') return true;
      return product.type === filter;
    });

    return (
      <section id="products" className="max-w-5xl mx-auto pb-20 sm:pb-24">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">
          Products
        </h2>
        
        {/* フィルター（ピル型、中央寄せ） */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex gap-2">
            {(['all', 'macos', 'web'] as const).map((filterType) => {
              const isActive = filter === filterType;
              const label = filterType === 'all' ? 'All' : filterType === 'web' ? 'Web Tools' : 'Desktop Apps';
              
              return (
                <button
                  key={filterType}
                  onClick={() => setFilter(filterType)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-white text-neutral-900 shadow-sm border border-neutral-200'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* プロダクトリスト */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProducts.map((product, index) => {
            const hasLiveDemo = product.liveDemo && product.liveDemo !== '';
            const hasGithub = product.github && product.github !== '';
            
            return (
              <div
                key={index}
                className="border border-neutral-200 rounded-xl p-4 sm:p-5 hover:bg-neutral-50 hover:shadow-sm transition-all"
              >
                {/* 上段: タイトル + アクション（横並び） */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-3">
                  <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">
                    {product.title}
                  </h3>
                  {(hasLiveDemo || hasGithub) && (
                    <div className="flex gap-3 items-center flex-shrink-0">
                      {hasLiveDemo && (
                        <Link
                          href={product.liveDemo!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center h-8 sm:h-9 px-4 rounded-lg border border-neutral-200 text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:border-neutral-300 transition-colors"
                        >
                          Live Demo
                        </Link>
                      )}
                      {hasGithub && (
                        <Link
                          href={product.github!}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 h-8 sm:h-9 px-4 rounded-lg border border-neutral-200 text-sm font-medium text-neutral-700 hover:bg-neutral-100 hover:border-neutral-300 transition-colors"
                        >
                          <Github size={14} />
                          GitHub
                        </Link>
                      )}
                    </div>
                  )}
                </div>
                
                {/* 中段: description */}
                <p className="text-sm sm:text-base text-neutral-600 line-clamp-2 mb-3">
                  {product.description}
                </p>
                
                {/* 下段: tags */}
                {product.tags && product.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-full bg-neutral-100 border border-neutral-200 text-xs font-medium text-neutral-600 px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="w-full px-6 sm:px-8 md:px-10">
        {/* Hero */}
        <section className="flex flex-col items-center justify-center pt-16 sm:pt-20 pb-8 sm:pb-12">
          <div className="max-w-[720px] w-full text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-normal sm:font-medium tracking-tight mb-4">
              vasqiart
            </h1>
            <p className="text-sm sm:text-base font-light mb-8 text-black/50">
              Built with vibe coding.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 transition-colors"
              >
                <Github size={16} />
                GitHub
              </Link>
              <Link
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 transition-colors"
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
        </section>

        {/* Products */}
        <ProductsShelf />
      </div>
    </div>
  );
}
