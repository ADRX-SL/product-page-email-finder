
import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !company) return;
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("This is a demo. In the real app, this would call the Gemini API or a backend service to find the email.");
    }, 1500);
  };

  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
          Email Finder <br className="hidden md:block" /> & Contact Data Enrichment
        </h1>
        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          Enrich data and find verified professional emails with the <strong>best email finder Chrome extension</strong>. The ultimate <strong>email enrichment tool</strong> for sales teams.
        </p>

        {/* Search Box */}
        <div className="max-w-3xl mx-auto mb-20 relative">
          
          {/* Arrow Annotation */}
          <div className="hidden lg:block absolute -top-12 -left-[14rem] w-72 z-20 pointer-events-none">
             <p className="text-[#2563eb] font-bold text-xl text-center whitespace-nowrap pr-8">Email Finder (free)</p>
             <svg className="w-full h-24 text-black -mt-2" viewBox="0 0 240 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 {/* 
                    Screenshot 1 Style Arrow:
                    Starts well below text, deep curve, points up-right to search bar edge.
                 */}
                 <path d="M 60 20 Q 120 95 180 60" />
                 <path d="M 170 52 L 180 60 L 170 70" />
             </svg>
          </div>

          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 md:bg-white md:p-2 md:border md:border-gray-200 md:rounded-lg md:shadow-sm relative z-10">
            <input 
              type="text" 
              placeholder="Full Name (e.g. John Doe)" 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 md:border-none focus:outline-none focus:ring-2 focus:ring-[#2563eb] md:focus:ring-0"
            />
            <div className="hidden md:block w-px bg-gray-200 my-2"></div>
            <input 
              type="text" 
              placeholder="Company domain (e.g. google.com)" 
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 md:border-none focus:outline-none focus:ring-2 focus:ring-[#2563eb] md:focus:ring-0"
            />
            <button 
              type="submit" 
              disabled={isLoading}
              className="bg-[#2563eb] hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {isLoading ? <Loader2 className="animate-spin w-5 h-5"/> : <Search className="w-5 h-5" />}
              Find email
            </button>
          </form>
        </div>

        {/* Social Proof */}
        <div className="space-y-6">
          <p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
            7000+ companies use our lead enrichment software
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 grayscale opacity-70">
             {/* Simple Text Representations for logos */}
             <span className="text-2xl font-bold text-gray-400">ElevenLabs</span>
             <span className="text-2xl font-bold text-gray-400 tracking-widest">CLOUDERA</span>
             <span className="text-2xl font-bold text-gray-400">stripe</span>
             <span className="text-xl font-serif text-gray-400">J.P.Morgan</span>
             <span className="text-xl font-bold text-gray-400">ORACLE NetSuite</span>
          </div>
        </div>

      </div>
    </section>
  );
};
