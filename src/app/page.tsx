import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { 
  ArrowRight, 
  ChevronRight, 
  Award, 
  Users, 
  Trophy, 
  CheckCircle2, 
  Target, 
  Cpu, 
  Star,
  Quote
} from 'lucide-react';

export default function Home() {
  const galleryImages = [
    '/images/gallery/1.jpeg',
    '/images/gallery/3.jpeg',
    '/images/gallery/aep.jpeg',
    '/images/gallery/anjas.jpeg',
    '/images/gallery/WhatsApp Image 2026-01-20 at 06.10.34.jpeg',
    '/images/gallery/WhatsApp Image 2026-01-20 at 06.10.38 (1).jpeg',
    '/images/gallery/WhatsApp Image 2026-01-20 at 06.10.38 (2).jpeg',
    '/images/gallery/WhatsApp Image 2026-01-20 at 06.10.39.jpeg',
  ];

  return (
    <main className="min-h-screen bg-white selection:bg-gold selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero.png" 
            alt="Dago Golf Course" 
            fill 
            sizes="100vw"
            className="object-cover opacity-60 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-[10px] uppercase tracking-[0.5em] text-onyx/70 mb-8 animate-fade-in font-bold">
            ESTABLISHED 1917 • <span className="text-gold">BANDUNG</span>
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tighter text-onyx mb-12 leading-[0.85]">
            DAGO GOLF <br /> <span className="font-light italic text-gold">HERITAGE</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="bg-onyx text-white px-12 py-5 text-xs uppercase tracking-widest hover:bg-gold transition-all duration-500 flex items-center group shadow-xl">
              Begin Training <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="luxury-border text-onyx px-12 py-5 text-xs uppercase tracking-widest hover:border-gold hover:text-gold transition-all duration-500">
              Explore Heritage
            </button>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <div className="w-[1px] h-12 bg-gold" />
        </div>
      </section>

      {/* Stats / Advantages Section */}
      <section className="section-padding bg-white border-y border-platinum">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Years Heritage', value: '100+' },
              { label: 'Students Trained', value: '500+' },
              { label: 'Tournament Titles', value: '10+' },
              { label: 'Certifications', value: 'PGA ID' },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <p className="text-4xl font-serif text-onyx group-hover:text-gold transition-colors">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-widest text-gold font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-serif font-bold text-onyx mb-6">Unrivaled <br /> <span className="text-gold">Excellence</span></h2>
              <div className="w-12 h-[1px] bg-gold mb-8" />
              <p className="text-onyx/60 text-sm leading-relaxed mb-8">
                Why Dago Golf Academy remains the definitive choice for those seeking to master the game with precision and style.
              </p>
            </div>
            
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-12">
              {[
                { 
                  title: "Elite Facility", 
                  desc: "A structured, private environment designed for comprehensive golf development in the cool Bandung highlands." 
                },
                { 
                  title: "Technical Precision", 
                  desc: "Diverse training activities tailored to your specific skill level, ensuring focused improvement." 
                },
                { 
                  title: "Master Coaching", 
                  desc: "Direct guidance from seasoned professionals who combine tradition with modern biomechanics." 
                },
                { 
                  title: "AI Integration", 
                  desc: "Leveraging cutting-edge analysis technology to refine every aspect of your swing with surgical precision." 
                }
              ].map((feature, i) => (
                <div key={i} className="space-y-4 group">
                  <div className="w-12 h-12 luxury-border flex items-center justify-center text-onyx group-hover:border-gold group-hover:text-gold transition-all duration-500">
                    {i === 0 && <Award size={22} />}
                    {i === 1 && <Target size={22} />}
                    {i === 2 && <Users size={22} />}
                    {i === 3 && <Cpu size={22} />}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-onyx group-hover:text-gold transition-colors">{feature.title}</h3>
                  <p className="text-xs text-onyx/50 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-platinum/5 border-t border-platinum">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-4">ACADEMY SERVICES</p>
            <h2 className="text-5xl font-serif font-bold text-onyx">Professional Development</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Individual & Group Training",
              "Advanced Swing Analysis",
              "Expert Strategy Consultation",
              "Custom Training Programs",
              "Tournament Preparation",
              "AI Performance Tracking"
            ].map((service, i) => (
              <div key={i} className="bg-white p-12 luxury-border hover:border-gold hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                <div className="text-gold/20 text-6xl font-serif font-bold mb-8 group-hover:text-gold transition-colors">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-serif font-bold text-onyx mb-4 group-hover:text-gold transition-colors">{service}</h3>
                <p className="text-xs text-onyx/50 leading-relaxed mb-8">
                  Comprehensive solutions tailored for every level of player, from junior enthusiasts to competitive professionals.
                </p>
                <button className="flex items-center text-[10px] uppercase tracking-widest font-bold text-onyx hover:text-gold transition-all">
                  Inquire Service <ChevronRight size={14} className="ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
               <p className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-4">SELECT PROGRAMS</p>
               <h2 className="text-5xl font-serif font-bold text-onyx mb-6">Tailored Performance</h2>
               <p className="text-onyx/60 text-sm leading-relaxed">
                  Flagship curricula designed to accelerate skill acquisition and mastery.
               </p>
            </div>
            <button className="text-xs uppercase tracking-widest border-b border-gold pb-2 text-gold hover:text-onyx hover:border-onyx transition-all">
              View All Programs
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Junior Excellence",
                desc: "A specialized program for young students to accelerate interest and talent from an early age.",
                tags: ["Talent Scouting", "Fun Environment", "Discipline"]
              },
              {
                title: "Professional Mastery",
                desc: "Direct coaching from instructors covering everything from fundamentals to on-course strategy.",
                tags: ["Basic to Advanced", "Strategic Play", "1-on-1 Pro"]
              }
            ].map((prog, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[16/9] bg-platinum/20 mb-8 overflow-hidden luxury-border relative border-gold/10 group-hover:border-gold transition-colors duration-500">
                   <div className="w-full h-full group-hover:scale-105 transition-transform duration-700 bg-onyx/10" />
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] uppercase tracking-widest text-white font-bold bg-gold px-4 py-2 shadow-lg">Explore Program</span>
                   </div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-onyx mb-4 group-hover:text-gold transition-colors">{prog.title}</h3>
                <p className="text-sm text-onyx/60 leading-relaxed mb-8">{prog.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {prog.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gold/10 text-[8px] uppercase tracking-widest text-gold font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="section-padding bg-onyx text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <h2 className="text-5xl font-serif font-bold mb-6"><span className="text-gold">The Path</span> to Mastery</h2>
             <p className="text-white/40 text-sm max-w-2xl mx-auto">
               Our 4-step progressive curriculum ensures a solid foundation and a high-performance ceiling.
             </p>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              { step: "01", title: "Assessment", desc: "Initial evaluation of physical capabilities and technical baseline." },
              { step: "02", title: "Fundamentals", desc: "Building a consistent, repeatable swing mechanic and grip." },
              { step: "03", title: "Strategy", desc: "Developing on-course decision making and course management." },
              { step: "04", title: "Optimization", desc: "Refining details through AI analysis and mental conditioning." }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="text-6xl font-serif font-bold text-gold/10 mb-6 group-hover:text-gold transition-colors duration-500">
                  {item.step}
                </div>
                <h3 className="text-xl font-serif font-bold mb-4 group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section id="coaches" className="section-padding">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-24">
            <p className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-4">EXPERT INSTRUCTORS</p>
            <h2 className="text-5xl font-serif font-bold text-onyx">Master Coaches</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {[
              { name: "Dr. Aep", role: "HEAD PRO", exp: "15+ Years", img: "/images/aep.jpg" },
              { name: "Anjas", role: "SENIOR COACH", exp: "10+ Years", img: "/images/anjas.jpg" }
            ].map((coach, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 items-center group">
                <div className="w-64 h-80 relative luxury-border grayscale group-hover:grayscale-0 group-hover:border-gold transition-all duration-700 overflow-hidden shrink-0">
                   <Image 
                    src={coach.img} 
                    alt={coach.name} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 256px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                   />
                </div>
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <p className="text-[10px] uppercase tracking-widest text-gold font-bold">{coach.role}</p>
                  <h3 className="text-3xl font-serif font-bold text-onyx group-hover:text-gold transition-colors">{coach.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center md:justify-start gap-3">
                      <CheckCircle2 size={14} className="text-gold/40" />
                      <span className="text-[10px] uppercase tracking-widest text-onyx/60 font-medium">Professional Certification</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-3">
                      <Award size={14} className="text-gold/40" />
                      <span className="text-[10px] uppercase tracking-widest text-onyx/60 font-medium">Experience: {coach.exp}</span>
                    </div>
                  </div>
                  <button className="bg-onyx text-white px-8 py-3 text-[10px] uppercase tracking-widest hover:bg-gold transition-all duration-500 shadow-lg">
                    Book Session
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding bg-platinum/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-5xl font-serif font-bold text-onyx">Heritage <br /> <span className="text-gold">Visualized</span></h2>
            <button className="text-[10px] uppercase tracking-widest font-bold text-gold border-b border-gold pb-2 hover:text-onyx hover:border-onyx transition-all">View Full Gallery</button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {galleryImages.map((img, i) => (
               <div key={i} className={`relative luxury-border border-gold/5 overflow-hidden group cursor-zoom-in ${i === 0 || i === 5 ? 'md:col-span-2 md:row-span-2' : 'aspect-square'}`}>
                  <Image 
                    src={img} 
                    alt={`Gallery ${i}`} 
                    fill 
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-[8px] uppercase tracking-[0.3em] text-white font-bold border border-white/40 px-3 py-1 bg-gold/40 backdrop-blur-sm">Expand View</span>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-gold text-gold" />)}
            </div>
            <h2 className="text-4xl font-serif font-bold text-onyx">Trusted by Professionals</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Andini", text: "The AI analysis completely changed how I approach my swing. Truly a world-class facility." },
              { name: "Budi", text: "Heritage meets modern coaching. Dr. Aep's guidance is unparalleled in West Java." },
              { name: "Sarah", text: "The junior program is exceptional. My son has developed both skill and discipline." }
            ].map((review, i) => (
              <div key={i} className="p-12 luxury-border border-gold/5 hover:border-gold/30 hover:shadow-xl transition-all duration-500 flex flex-col group">
                <Quote size={24} className="text-gold/20 mb-8 group-hover:text-gold transition-colors" />
                <p className="text-sm text-onyx/60 italic leading-relaxed mb-8 flex-grow">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-[10px] font-bold text-gold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold group-hover:text-gold transition-colors">{review.name}</p>
                    <p className="text-[8px] text-onyx/40 uppercase tracking-widest">Member</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-onyx text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold mb-4">INQUIRIES</p>
              <h2 className="text-6xl font-serif font-bold mb-12">Contact <br /> <span className="text-gold">The Academy</span></h2>
              
              <div className="space-y-8">
                <div className="group cursor-default">
                  <p className="text-[10px] uppercase tracking-widest text-gold mb-2">Location</p>
                  <p className="text-sm leading-relaxed text-white/70 group-hover:text-white transition-colors">Jl. Raya Golf Dago No.78, Bandung, West Java</p>
                </div>
                <div className="group cursor-default">
                  <p className="text-[10px] uppercase tracking-widest text-gold mb-2">Email</p>
                  <p className="text-sm text-white/70 group-hover:text-white transition-colors">info@dagogolf.com</p>
                </div>
                <div className="group cursor-default">
                  <p className="text-[10px] uppercase tracking-widest text-gold mb-2">WhatsApp</p>
                  <p className="text-sm text-white/70 group-hover:text-white transition-colors">+62 851-7509-0700</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-12 luxury-border border-gold/10">
              <form className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[8px] uppercase tracking-widest text-gold font-bold">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-gold/20 py-3 outline-none focus:border-gold transition-colors text-sm" placeholder="Johnathan Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[8px] uppercase tracking-widest text-gold font-bold">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-gold/20 py-3 outline-none focus:border-gold transition-colors text-sm" placeholder="john@heritage.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[8px] uppercase tracking-widest text-gold font-bold">Subject</label>
                  <select className="w-full bg-transparent border-b border-gold/20 py-3 outline-none focus:border-gold transition-colors text-sm appearance-none cursor-pointer">
                    <option className="bg-onyx">Junior Program</option>
                    <option className="bg-onyx">Private Session</option>
                    <option className="bg-onyx">AI Analysis</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[8px] uppercase tracking-widest text-gold font-bold">Message</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-gold/20 py-3 outline-none focus:border-gold transition-colors text-sm resize-none" placeholder="Tell us about your objectives..." />
                </div>
                <button className="bg-gold text-white w-full py-5 text-xs uppercase tracking-widest font-bold hover:bg-gold-muted transition-all duration-500 shadow-xl">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
