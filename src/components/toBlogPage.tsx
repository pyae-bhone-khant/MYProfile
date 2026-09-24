import React from 'react';

export default function ToBlogPage() {
  return (
    <section className="w-full py-16 bg-white dark:bg-slate-950/50 mb-15 transition-colors duration-300 rounded-2xl mt-15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Blog Card */}
        <div className="relative overflow-hidden bg-slate-50 dark:bg-slate-900 rounded-3xl p-10 sm:p-12 border border-slate-100 dark:border-slate-800 shadow-xl transition-all hover:shadow-2xl">
          
          {/* Subtle Decorative Background Blur */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-600 rounded-full opacity-10 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Text Section (Left) */}
            <div className="w-full md:w-3/5 text-center md:text-left flex flex-col items-center md:items-start">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 dark:text-white mb-6 leading-tight transition-colors">
                My Personal Blog
              </h2>
              <p className="text-xl text-slate-700 dark:text-slate-300 mb-10 leading-relaxed transition-colors max-w-2xl">
                နည်းပညာအကြောင်းအရာတွေ၊ Web Development နဲ့ ပတ်သက်တဲ့ ကျွန်တော့ရဲ့ အတွေ့အကြုံ၊ ဗဟုသုတတွေကို Blog မှာ ဝင်ရောက်ဖတ်ရှုနိုင်ပါတယ်။
              </p>
              
              {/* CTA Button (matches image) */}
              <a 
                href="https://your-blog-url.vercel.app" /* Replace with your actual Vercel link */
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-10 py-4 text-lg font-semibold text-white bg-blue-600 rounded-xl transition-all duration-300 hover:bg-blue-700 hover:scale-105 active:scale-100 shadow-md group"
              >
                <span>Read My Articles</span>
                <svg 
                  className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Illustration Section (Right, matches nested dark card in image) */}
            <div className="w-full md:w-2/5 flex items-center justify-center md:justify-end">
              <div className="w-40 h-40 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-inner border border-slate-200 dark:border-slate-700">
                <svg 
                  className="w-20 h-20 text-blue-500" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fillRule="evenodd" d="M11 2a1 1 0 011 1v1h4a1 1 0 011 1v3.5a1 1 0 01-1 1H8a1 1 0 01-1-1V5a1 1 0 011-1h3V3a1 1 0 011-1zM5 10a1 1 0 011 1v10h12V11a1 1 0 112 0v11a1 1 0 01-1 1H5a1 1 0 01-1-1V11a1 1 0 011-1z" clipRule="evenodd" />
                  <path d="M11 7a1 1 0 011 1v2a1 1 0 11-2 0V8a1 1 0 011-1z" />
                </svg>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}