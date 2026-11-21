import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  ArrowRight, 
  X, 
  Share2, 
  Check, 
  FileText 
} from 'lucide-react';
import { INSIGHTS_POSTS } from '../data/ventureData';

export default function InsightsSection() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="insights" className="py-24 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-gold-400 uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-gold-400"></span>
              Research & Conviction
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight">
              Founder <span className="italic text-gold-gradient">Playbooks & Insights.</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm sm:text-base font-light">
            Actionable playbooks, fundraising frameworks, and operational strategies to build category-defining businesses in India.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INSIGHTS_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl border border-white/[0.07] flex flex-col justify-between cursor-pointer group"
            >
              <div>
                
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-4">
                  <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-gold-300 font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-slate-500" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-serif text-white group-hover:text-gold-300 transition-colors mb-3 leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-6">
                  {post.summary}
                </p>

              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">By {post.author}</span>
                <span className="text-xs font-semibold text-gold-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Analysis <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#090b12] border border-white/[0.12] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase bg-slate-800 text-gold-300 font-semibold">
                {selectedPost.category}
              </span>
              <span className="text-xs text-slate-500 font-mono">
                {selectedPost.date} • {selectedPost.readTime}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif text-white mb-4 leading-tight">
              {selectedPost.title}
            </h2>

            <div className="flex items-center justify-between pb-6 border-b border-slate-800 text-xs text-slate-400 mb-6">
              <span>Author: <strong className="text-slate-200">{selectedPost.author}</strong> (General Partner)</span>
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Link Copied' : 'Share Essay'}</span>
              </button>
            </div>

            <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-light">
              <div className="p-4 rounded-2xl bg-gold-500/10 border border-gold-400/20 text-gold-200 text-xs font-normal">
                {selectedPost.summary}
              </div>

              <p>{selectedPost.content}</p>

              <p>
                In evaluating dozens of frontier laboratories each quarter, we observe a consistent structural divergence: teams that attempt to brute-force solve physics problems through parameter explosion inevitably encounter insurmountable thermal and economic friction. 
                In contrast, architectural innovators who embed physical conservation laws directly into tensor logic graphs generate 100x efficiency step-functions.
              </p>

              <p>
                For founders building in this domain, the key mandate is simple: ensure your technological advantage is not bounded by hardware vendor pricing, but by fundamental scientific differentiation.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between items-center">
              <span className="text-[11px] font-mono text-slate-500">
                Published by MakeMyAim Research Institute
              </span>
              <button
                onClick={() => setSelectedPost(null)}
                className="px-5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white"
              >
                Close Memo
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
