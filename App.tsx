import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ReviewMarquee } from './components/ReviewMarquee';
import { FeatureSection } from './components/FeatureSection';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Check, ShieldCheck, Smartphone, Mail, Download, MoreHorizontal, Search, ArrowRight, Zap } from 'lucide-react';

// --- Mock UI Components for Feature Visuals ---

const Feature1Visual = () => (
  <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
    {/* Dashboard Header */}
    <div className="border-b border-gray-100 bg-gray-50/50 p-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
          <Search size={16} />
        </div>
        <div>
          <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Project</div>
          <div className="text-sm font-bold text-gray-900">Software Leads 2025</div>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="hidden sm:flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 rounded-md text-xs font-medium text-gray-600 shadow-sm">
          <Download size={12} /> Export CSV
        </div>
        <div className="flex items-center gap-1 px-3 py-1.5 bg-[#2563eb] text-white rounded-md text-xs font-medium shadow-sm">
          <Zap size={12} /> Data Enrichment
        </div>
      </div>
    </div>

    {/* Table Header */}
    <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
      <div className="col-span-3">Name</div>
      <div className="col-span-3">Company</div>
      <div className="col-span-4">Verified Email</div>
      <div className="col-span-2">Phone</div>
    </div>

    {/* Table Rows */}
    <div className="divide-y divide-gray-50">
      {[
        { name: "Alex Jara", role: "CEO", company: "Deal Engine", email: "alex@deal-engine.com", phone: "+1 415..." },
        { name: "Sarah Chen", role: "VP Sales", company: "TechFlow", email: "schen@techflow.io", phone: "+1 202..." },
        { name: "Mike Ross", role: "Founder", company: "Spectra", email: "m.ross@spectra.net", phone: "+44 770..." },
        { name: "Elena K.", role: "Head of Growth", company: "Lumina", email: "elena@lumina.co", phone: "+1 650..." },
      ].map((lead, i) => (
        <div key={i} className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-blue-50/30 transition-colors group cursor-default">
          <div className="col-span-3">
            <div className="text-xs font-bold text-gray-900">{lead.name}</div>
            <div className="text-[10px] text-gray-500">{lead.role}</div>
          </div>
          <div className="col-span-3">
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded bg-gray-200 flex-shrink-0"></div>
              <div className="text-xs text-gray-700 font-medium truncate">{lead.company}</div>
            </div>
          </div>
          <div className="col-span-4">
             <div className="flex items-center gap-1.5 bg-green-50 border border-green-100 text-green-700 px-2 py-1 rounded w-fit">
                <ShieldCheck size={10} className="fill-green-200 text-green-600" />
                <span className="text-[10px] font-mono">{lead.email}</span>
             </div>
          </div>
          <div className="col-span-2">
             <div className="text-[10px] text-gray-500 font-mono flex items-center gap-1">
               <Smartphone size={10} /> {lead.phone}
             </div>
          </div>
        </div>
      ))}
    </div>
    
    <div className="p-4 bg-gray-50/50 border-t border-gray-100 text-center">
      <div className="text-xs text-gray-500">Showing 4 of 1,284 verified leads</div>
    </div>
  </div>
);

const Feature2Visual = () => (
  <div className="relative">
    {/* Browser Frame */}
    <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden relative z-10">
      <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
         <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
         </div>
         <div className="flex-1 bg-white h-6 rounded border border-gray-200 mx-4 text-[10px] flex items-center px-2 text-gray-400">
            linkedin.com/in/sarah-johnson-marketing
         </div>
      </div>
      
      <div className="relative bg-gray-50 h-64 w-full p-6 flex">
         {/* Mock Profile Content */}
         <div className="flex-1 space-y-6 opacity-50 pointer-events-none blur-[1px]">
            <div className="flex items-start gap-4">
               <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
               <div className="space-y-2 flex-1">
                  <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/4"></div>
               </div>
            </div>
            <div className="h-32 bg-white rounded border border-gray-200"></div>
         </div>

         {/* The "Extension" Overlay */}
         <div className="absolute top-4 right-4 bottom-4 w-64 bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex flex-col">
            <div className="p-4 border-b border-gray-50">
               <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 bg-[#2563eb] rounded flex items-center justify-center text-white text-xs font-bold">S</div>
                  <span className="font-bold text-gray-900 text-sm">Scalelist</span>
               </div>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-center items-center text-center space-y-3">
               <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-1">
                  <Check size={24} strokeWidth={3} />
               </div>
               <div className="font-bold text-gray-900">Email Found</div>
               <div className="w-full bg-gray-50 border border-gray-100 rounded p-2 text-left">
                  <div className="text-[10px] text-gray-400 uppercase font-bold mb-1">Work Email</div>
                  <div className="text-xs font-medium text-gray-700 truncate">sarah.j@techgiant.com</div>
               </div>
               <button className="w-full py-1.5 bg-[#2563eb] text-white text-xs font-medium rounded hover:bg-blue-700 transition-colors">
                  Save Lead
               </button>
            </div>
         </div>
      </div>
    </div>
    
    {/* Decor */}
    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-50 rounded-full -z-10"></div>
    <div className="absolute -top-6 -right-6 w-32 h-32 bg-gray-100 rounded-full -z-10"></div>
  </div>
);

const Feature3Visual = () => (
  <div className="relative px-4">
    {/* Card Container */}
    <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 md:p-8 relative z-10">
      
      {/* Header */}
      <div className="flex justify-between items-end mb-8">
         <div>
            <div className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">Enriched Data Instantly</div>
            <h3 className="text-xl font-bold text-gray-900">Lucas Green</h3>
            <p className="text-sm text-gray-500">Community Manager at NovaTech</p>
         </div>
         <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <Check size={12} strokeWidth={3} /> Valid Profile
         </div>
      </div>

      {/* Data Grid */}
      <div className="grid grid-cols-2 gap-6">
         {/* Email Block */}
         <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 relative overflow-hidden group">
            <div className="flex items-center gap-2 mb-2 text-gray-500 text-xs uppercase font-bold">
               <Mail size={12} /> Email Address
            </div>
            <div className="font-mono text-sm text-gray-900">l.green@novatech.io</div>
            <div className="absolute top-2 right-2">
               <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
         </div>

         {/* Phone Block */}
         <div className="p-3 bg-blue-50 rounded-lg border border-blue-100 relative overflow-hidden">
            <div className="flex items-center gap-2 mb-2 text-blue-600 text-xs uppercase font-bold">
               <Smartphone size={12} /> Mobile Phone
            </div>
            <div className="font-mono text-sm text-gray-900">+1 202 555 0147</div>
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-bl-md">
               NEW
            </div>
         </div>
         
         {/* Location Block */}
         <div className="p-3 bg-white rounded-lg border border-gray-100">
             <div className="text-xs text-gray-400 uppercase font-bold mb-1">Location</div>
             <div className="text-sm text-gray-700">San Francisco, CA</div>
         </div>

         {/* Industry Block */}
         <div className="p-3 bg-white rounded-lg border border-gray-100">
             <div className="text-xs text-gray-400 uppercase font-bold mb-1">Industry</div>
             <div className="text-sm text-gray-700">Software Development</div>
         </div>
      </div>

      {/* Decorative Arrow */}
      <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="bg-white shadow-lg border border-gray-100 rounded-lg p-3 text-center">
              <div className="text-xs font-bold text-gray-900">Enriched</div>
              <div className="text-[10px] text-gray-500">in 0.4s</div>
          </div>
      </div>
    </div>
    
    {/* Background Blobs */}
    <div className="absolute top-10 right-10 w-full h-full bg-blue-600/5 rounded-3xl -z-10 transform translate-x-4 translate-y-4"></div>
  </div>
);

const Feature4Visual = () => (
  <div className="bg-gray-50 rounded-2xl p-8 md:p-12 relative overflow-hidden border border-gray-100">
     
     <div className="absolute top-6 right-8 flex items-center gap-2 text-[#2563eb] font-bold text-sm">
        <Zap size={16} className="fill-current" /> AI in action
     </div>

     <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 max-w-md mx-auto relative z-10 space-y-8">
        
        {/* Row 1 */}
        <div className="flex items-center justify-between group">
           <div className="w-1/3">
              <div className="text-[10px] uppercase font-bold text-gray-400 mb-1">Raw Name</div>
              <div className="text-sm font-medium text-gray-500 line-through decoration-red-400/50">Arnaud 🚀</div>
           </div>
           <div className="text-gray-300">
              <ArrowRight size={16} />
           </div>
           <div className="w-1/3 text-right">
              <div className="text-[10px] uppercase font-bold text-blue-500 mb-1">Clean Name</div>
              <div className="text-sm font-bold text-gray-900 bg-blue-50 px-2 py-1 rounded inline-block">Arnaud</div>
           </div>
        </div>

        {/* Row 2 */}
        <div className="flex items-center justify-between group">
           <div className="w-1/3">
              <div className="text-[10px] uppercase font-bold text-gray-400 mb-1">Raw Data</div>
              <div className="text-sm font-medium text-gray-500">Youssef 德杰福</div>
           </div>
           <div className="text-gray-300">
              <ArrowRight size={16} />
           </div>
           <div className="w-1/3 text-right">
              <div className="text-[10px] uppercase font-bold text-blue-500 mb-1">Clean Name</div>
              <div className="text-sm font-bold text-gray-900 bg-blue-50 px-2 py-1 rounded inline-block">Youssef</div>
           </div>
        </div>

        {/* Row 3 */}
        <div className="flex items-center justify-between group">
           <div className="w-1/3">
              <div className="text-[10px] uppercase font-bold text-gray-400 mb-1">Company</div>
              <div className="text-sm font-medium text-gray-500">Scalelist LTD</div>
           </div>
           <div className="text-gray-300">
              <ArrowRight size={16} />
           </div>
           <div className="w-1/3 text-right">
              <div className="text-[10px] uppercase font-bold text-blue-500 mb-1">Legal Name</div>
              <div className="text-sm font-bold text-gray-900 bg-blue-50 px-2 py-1 rounded inline-block">Scalelist</div>
           </div>
        </div>

     </div>

     {/* Sparkle Decoration */}
     <div className="absolute bottom-8 left-8 text-blue-200 animate-pulse">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14 9L21 11L14 13L12 20L10 13L3 11L10 9L12 2Z"/></svg>
     </div>
  </div>
);

const Feature5Visual = () => (
  <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
      
      <div className="relative z-10">
         {/* Avatars */}
         <div className="flex justify-center -space-x-4 mb-8">
             {[
               "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
               "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
               "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
               "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
               "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces"
             ].map((src, i) => (
                 <div key={i} className="relative group">
                     <img 
                       className="w-12 h-12 rounded-full border-4 border-white shadow-sm object-cover transition-transform group-hover:-translate-y-1" 
                       src={src} 
                       alt="User" 
                     />
                 </div>
             ))}
         </div>

         {/* Data Tags */}
         <div className="flex flex-wrap justify-center gap-3 max-w-md mx-auto">
             {[
                { text: 'First Name', color: 'bg-gray-100 text-gray-600' },
                { text: 'Last Name', color: 'bg-gray-100 text-gray-600' },
                { text: 'Verified Email', color: 'bg-blue-100 text-blue-700 font-semibold' },
                { text: 'Job Title', color: 'bg-gray-100 text-gray-600' },
                { text: 'Company Name', color: 'bg-gray-100 text-gray-600' },
                { text: 'Location', color: 'bg-gray-100 text-gray-600' },
                { text: 'Phone Number', color: 'bg-blue-50 text-blue-600' },
                { text: 'Industry', color: 'bg-gray-100 text-gray-600' },
                { text: 'Website URL', color: 'bg-gray-100 text-gray-600' },
             ].map((tag, i) => (
                 <span 
                    key={i} 
                    className={`px-4 py-1.5 rounded-full text-xs ${tag.color} shadow-sm border border-transparent hover:border-gray-200 transition-all cursor-default`}
                 >
                     {tag.text}
                 </span>
             ))}
         </div>
      </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      
      <Hero />

      <ReviewMarquee />
      
      {/* Feature 1: Text Left, Image Right */}
      <FeatureSection 
        title="The Best Email Finder for Sales Teams"
        description="Stop guessing contacts. Use the best email finder to locate verified professional addresses. whether you need to find emails or enrich existing lists, we provide the most accurate data."
        imageAlt="Email Finder Interface Mockup"
        visualContent={<Feature1Visual />}
        ctaText="Try for free (14-days)"
      />

      {/* Feature 2: Image Left, Text Right */}
      <FeatureSection 
        reversed
        title="How Our Email Finder Works"
        description="Finding leads is seamless with our tool. Here is how our email finder process works:"
        steps={[
          { title: "Browse the Web", description: "Activate our best email finder Chrome extension on any website." },
          { title: "Instant Extraction", description: "The email address finder technology scans for valid data in seconds." },
          { title: "Get Verified Results", description: "Receive 100% verified emails with our email enrichment tool." }
        ]}
        ctaText="Start Free Email Search"
        imageAlt="How it works mockup"
        visualContent={<Feature2Visual />}
      />

      {/* Feature 3: Text Left, Image Right */}
      <FeatureSection 
        title="Powerful Contact Data Enrichment"
        description="We don't just find emails; we enrich data. Our email enrichment tool adds deep insights to your prospects:"
        benefits={[
            { title: "Full Contact Data Enrichment", description: "Enrich contact details with phone numbers, job titles, and locations." },
            { title: "Enrich Data Instantly", description: "Turn basic lists into comprehensive profiles with our email enrichment API." },
            { title: "Automated Prospect Enrichment", description: "Keep your CRM healthy by updating stale records automatically." },
            { title: "Lead Enrichment API", description: "Seamlessly integrate data enrichment into your existing stack." },
            { title: "Secure Processing", description: "Our email enrichment tool adheres to strict privacy and data standards." }
        ]}
        imageAlt="Data enrichment visual"
        visualContent={<Feature3Visual />}
        ctaText="Try for free (14-days)"
      />

      {/* Feature 4: Image Left, Text Right */}
      <FeatureSection 
        reversed
        title="Who Needs an Email Address Finder?"
        description="Our platform is the best email finder Chrome extension for growth professionals:"
        benefits={[
            { title: "Sales Teams", description: "Use the best email finder to reach decision-makers faster." },
            { title: "Recruiters", description: "Leverage the email finder to headhunt top talent directly." },
            { title: "Marketers", description: "Use prospect enrichment to segment and target your campaigns effectively." },
            { title: "Freelancers", description: "Find clients easily with our email finder tool." }
        ]}
        ctaText="Find Emails Now"
        imageAlt="Target audience visual"
        visualContent={<Feature4Visual />}
      />

      {/* Feature 5: Text Left, Image Right (No Signup) */}
      <FeatureSection 
        title="Start Your Free Email Search"
        description="Skip the complicated setup. Our email finder is ready to use immediately for all your lead generation needs."
        bulletPoints={[
            "1. Install the best email finder Chrome extension.",
            "2. Navigate to any professional profile.",
            "3. One click to enrich data and find the email."
        ]}
        ctaText="Try the Email Finder for free"
        imageAlt="No signup visual"
        visualContent={<Feature5Visual />}
      />

      <Testimonials />
      
      <FAQ />
      
      <Footer />
    </div>
  );
}

export default App;