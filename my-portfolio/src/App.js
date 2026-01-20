import React, { useState} from 'react';
import AboutMe from './LearnMore';
import userImage from './assets/profile-img.png';
import userProfile from './assets/user-image.png';
import resumePDF from './assets/FELICES-FEBY_CV.pdf';
import useDarkMode from './useDarkMode';


// Import Certificate PDFs
import ccna1PDF from './assets/CCNA_1.pdf';
import ccna2PDF from './assets/CCNA_2.pdf';
import ccna3PDF from './assets/CCNA_3.pdf';
import cyberPDF from './assets/Cybersecurity.pdf';
import digiPDF from './assets/digi.pdf';
import dictPDF from './assets/dict.pdf';

import { 
  Mail, Phone, ExternalLink, Globe, Shield, 
  Award, ChevronRight, Zap, Github, Linkedin,
  Heart, Brain, Settings, CheckCircle, FileText, 
  Trophy, BookOpen, Star, X, Cpu, User,
  Sun, Moon
} from 'lucide-react';

function App() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [colorTheme, setTheme] = useDarkMode();
  const [isAboutPage, setIsAboutPage] = useState(false);
  
  const totalSteps = 3;

  const certFiles = {
    "Introduction to Networks (CCNA 1)": ccna1PDF,
    "Switching, Routing, and Wireless (CCNA 2)": ccna2PDF,
    "Enterprise Networking & Security (CCNA 3)": ccna3PDF,
    "Introduction to Cybersecurity": cyberPDF,
    "Digital Literacy Training": digiPDF,
    "DICT Special Technical Training": dictPDF,
  };

  // --- LOGIC TO SWITCH TO ABOUT ME PAGE ---
  if (isAboutPage) {
    return <AboutMe onBack={() => setIsAboutPage(false)} />;
  }


  return (
    <div className="min-h-screen bg-[#fffafa] dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-sans scroll-smooth transition-colors duration-500 overflow-x-hidden">
      {/* Dynamic Background Blur */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-pink-200/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-rose-100/50 rounded-full blur-[100px]" />
      </div>

      {/* Navbar */}
        <nav className="fixed w-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-sm z-50 border-b border-pink-100 dark:border-slate-800 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
            
            {/* Logo */}
            <span className="font-black text-2xl tracking-tighter text-slate-900 dark:text-white">
              FEBY<span className="text-rose-500">.</span>
            </span>

            {/* Right Side Items */}
            <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300 items-center">
              <a href="#home" className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors">Home</a>
              <a href="#about-me" className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors">Skills</a>
              <a href="#awards" className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors">Awards</a>
              <a href="#projects" className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors">Projects</a>
                {/* Contact Button */}
              <a 
                href="#contact" 
                className="bg-rose-500 text-white px-6 py-2.5 rounded-full hover:bg-rose-600 transition-all shadow-lg shadow-rose-200 dark:shadow-none active:scale-95"
              >
                Contact
              </a>

              {/* Dark Mode Toggle Button - Integrated into Nav */}
              <button 
                onClick={() => setTheme(colorTheme)}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-yellow-400 hover:scale-110 transition-all active:scale-95 border border-slate-200 dark:border-slate-700"
                aria-label="Toggle Dark Mode"
              >
                {colorTheme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
              </button>

            </div>
          </div>
        </nav>

      {/* Hero Section */}
      <header id="home" className="pt-48 pb-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-widest text-rose-600 bg-rose-50 rounded-full uppercase border border-rose-100">
            4th Year BSIT Student @ BukSU
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight text-slate-900 dark:text-white leading-tight">
            FEBY ANGELA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-400">FELICES</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl leading-relaxed mb-10">
          Highly skilled in <span className="text-slate-900 dark:text-white border-b-4 border-rose-200">Full-Stack Development</span>, 
          QA, and Project Management.
            
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href={resumePDF} download className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl group">
              <FileText size={18} className="text-rose-400" /> Download Resume
            </a>
            <a href={resumePDF} target="_blank" rel="noreferrer" className="flex items-center gap-3 border-2 border-rose-100 bg-white/50 px-8 py-4 rounded-2xl font-bold hover:border-rose-400 hover:text-rose-600 transition-all">
              <ExternalLink size={18} /> View Resume
            </a>
          </div>
        </div>
        {/* Hero Circular Portrait */}
        <div className="flex-1 flex justify-center lg:justify-start relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-rose-400/20 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="w-full h-full rounded-full p-3 border-2 border-dashed border-rose-200 dark:border-slate-800 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-3 rounded-full overflow-hidden bg-white dark:bg-slate-900 shadow-2xl border-4 border-white dark:border-slate-800">
               <img 
                 src={userImage} 
                 alt="Feby Angela" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110" 
               />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-rose-50 dark:border-slate-700 flex items-center gap-3 animate-bounce z-20">
              <div className="p-2 bg-rose-500 rounded-lg text-white"><Award size={20} /></div>
              <p className="text-xs font-black text-slate-800 dark:text-white">Full Stack & Project Manager</p>
            </div>
          </div>
        </div>
      </header>

{/* Aesthetic About Me Section */}
<section id="about-me" className="py-32 px-6 max-w-7xl mx-auto scroll-mt-20">
  <div className="relative">
    {/* Swapped order: Text on top for mobile (reverse), Portrait on right for desktop */}
    <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-0">
      
      {/* Left Side: Content Area (No card background/border) */}
      <div className="lg:w-3/5 py-10 lg:pr-20 flex flex-col justify-center relative z-20 text-left">
        <div className="space-y-2 mb-8">
          <p className="text-rose-500 font-black uppercase tracking-[0.4em] text-[10px]">Biographical</p>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
            Behind the <span className="italic font-serif text-rose-500">Code.</span>
          </h2>
        </div>

        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10 max-w-xl">
          I am a 4th-year IT student at <span className="text-slate-900 dark:text-white font-bold underline decoration-rose-500/30 decoration-4">Bukidnon State University</span>. 
          I specialize in bridging technical logic with human-centered design. 
          I don't just build software; I engineer <span className="text-rose-500 font-medium">reliable experiences</span>.
        </p>

        {/* Minimalist Info Grid */}
        <div className="grid grid-cols-2 gap-12 text-left">
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Current Role</p>
            <p className="text-slate-900 dark:text-slate-100 font-bold text-lg leading-tight">BSIT Senior Student</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Core Focus</p>
            <p className="text-slate-900 dark:text-slate-100 font-bold text-lg leading-tight">Full-Stack & PM</p>
          </div>
        </div>

        {/* --- SELF-ANIMATING "LEARN MORE" BUTTON --- */}
        <div className="mt-20">
          <button 
            onClick={() => setIsAboutPage(true)}
            className="group relative inline-flex items-center gap-6 text-slate-900 dark:text-white font-black uppercase tracking-[0.2em] text-[10px] transition-all duration-500"
          >
            <div className="relative flex items-center justify-center">
              {/* Breathing Line Animation (Defined in CSS) */}
              <span className="h-[1px] bg-rose-500 animate-breathe group-hover:animate-none group-hover:w-24 group-hover:bg-rose-600 transition-all duration-500 ease-out"></span>
              <span className="absolute -right-1 w-3 h-3 bg-rose-500/20 rounded-full animate-ping"></span>
              <span className="absolute -right-1 w-1.5 h-1.5 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.8)]"></span>
            </div>
            
            <span className="relative overflow-hidden group-hover:translate-x-2 group-hover:text-rose-500 transition-all duration-500 ease-out">
              <span className="relative z-10">Learn More</span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-rose-400/20 to-transparent -translate-x-full animate-[shimmer_4s_infinite] pointer-events-none"></span>
            </span>
          </button>
        </div>
      </div>

      {/* Right Side: OVERLAPPING Portrait Area */}
      <div className="lg:w-2/5 relative flex items-center justify-center lg:justify-end lg:pr-12">
        
        {/* Animated Glow behind the floating person */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-rose-500/10 dark:bg-rose-500/5 rounded-full blur-[120px] animate-pulse pointer-events-none" />

        <div className="relative z-30 group lg:pointer-events-auto pointer-events-none">
          {/* THE IMAGE: Pops out of the section flow */}
          <img 
            src={userProfile} 
            alt="Feby Angela" 
            className="w-auto h-[500px] md:h-[620px] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.15)] 
                       transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1)
                       group-hover:scale-[1.05] group-hover:-translate-y-8 lg:-mt-24
                       grayscale-[30%] group-hover:grayscale-0" 
          />
          
          {/* Floating status tag - Located at Bottom Right */}
          <div className="absolute bottom-20 -right-6 lg:-right-10 z-40 transition-all duration-1000 group-hover:-translate-y-12 group-hover:-translate-x-4">
            <div className="flex items-center gap-3 bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/20 px-5 py-3 rounded-2xl shadow-2xl">
              <div className="relative flex h-2 w-2">
                <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></div>
                <div className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></div>
              </div>
              <p className="text-[9px] font-black text-white uppercase tracking-[0.2em]">Ready to Work</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<div className="relative h-12 flex justify-center items-center pointer-events-none -my-4">
  {/* A very short vertical guide line */}
  <div className="w-px h-full bg-gradient-to-b from-rose-500/50 to-transparent" />
</div>


    {/* Skills Section - Reduced top padding to "connect" it */}
    <section id="skills" className="pt-0 pb-24 px-6 max-w-7xl mx-auto">
    <div className="flex items-center gap-4 mb-10">
      <div className="h-px w-8 bg-rose-500/50" />
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-rose-500/70">
        Technical Toolkit
      </span>
    </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-[3rem] border border-rose-50 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-rose-500 rounded-2xl text-white"><Settings size={24} /></div>
              <h3 className="text-3xl font-black text-slate-900">Technical Expertise</h3>
            </div>
            <div className="space-y-6">
              <TechItem title="Web Development" desc="Laravel, React, MERN Stack, API Integration" />
              <TechItem title="Networking (CCNA)" desc="VLAN, Subnetting, OSPF, DHCP, Cisco Packet Tracer" />
              <TechItem title="Mobile & IoT" desc="Android Studio, Firebase, Real-time Sensors" />
              <TechItem title="IT Support & QA" desc="Hardware Repair, Troubleshooting, Quality Assurance" />
            </div>
          </div>

          <div className="bg-rose-500 text-white p-10 rounded-[3rem] shadow-xl shadow-rose-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white/20 rounded-2xl"><Heart size={24} /></div>
              <h3 className="text-3xl font-black">Soft Skills</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <SoftItem icon={<Zap size={18}/>} label="Problem Solving" />
              <SoftItem icon={<Brain size={18}/>} label="Logical Thinking" />
              <SoftItem icon={<CheckCircle size={18}/>} label="Detail Oriented" />
              <SoftItem icon={<Settings size={18}/>} label="Management Skills" />
              <SoftItem icon={<Globe size={18}/>} label="Adaptability" />
              <SoftItem icon={<ExternalLink size={18}/>} label="Communication" />
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Certifications Section */}
      <section id="awards" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-rose-500 font-bold uppercase tracking-widest text-sm mb-2">Recognition</h2>
        <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-4 transition-colors">Certifications & Awards</h3>
        <div className="h-1.5 w-24 bg-rose-500 mx-auto rounded-full" />
      </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="flex items-start gap-6 p-8 bg-white rounded-3xl border border-rose-100 hover:shadow-xl hover:shadow-rose-100 transition-all group">
            <div className="p-4 bg-rose-50 text-rose-500 rounded-2xl group-hover:bg-rose-500 group-hover:text-white transition-colors"><Trophy size={32} /></div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-1">ASEAN Green Hackathon</h4>
              <p className="text-rose-500 font-bold text-sm mb-2">Participant | 2025</p>
              <p className="text-slate-500 text-sm leading-relaxed">Engaged in regional innovation focused on sustainable tech solutions.</p>
            </div>
          </div>

          <div className="flex items-start gap-6 p-8 bg-white rounded-3xl border border-rose-100 hover:shadow-xl hover:shadow-rose-100 transition-all group">
            <div className="p-4 bg-rose-50 text-rose-500 rounded-2xl group-hover:bg-rose-500 group-hover:text-white transition-colors"><Star size={32} /></div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-1">Academic Excellence</h4>
              <p className="text-rose-500 font-bold text-sm mb-2">Consistent Recipient</p>
              <p className="text-slate-500 text-sm leading-relaxed">Recognized for strong academic performance in the BSIT program.</p>
            </div>
          </div>

          {/* Side-by-Side Cisco and Other Certs */}
          <div className="md:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-12 bg-white rounded-[3rem] border border-rose-100 shadow-2xl shadow-rose-100/50">
            <div>
              <h4 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <BookOpen className="text-rose-500" /> Cisco Academy
              </h4>
              <div className="space-y-4">
                <CertificationItem label="Introduction to Networks (CCNA 1)" onOpen={setSelectedCert} />
                <CertificationItem label="Switching, Routing, and Wireless (CCNA 2)" onOpen={setSelectedCert} />
                <CertificationItem label="Enterprise Networking & Security (CCNA 3)" onOpen={setSelectedCert} />
                <CertificationItem label="Introduction to Cybersecurity" onOpen={setSelectedCert} />
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <Shield className="text-blue-600" /> Industry Certifications
              </h4>
              <div className="space-y-4">
                <CertificationItem label="Digital Literacy Training" onOpen={setSelectedCert} />
                <CertificationItem label="DICT Special Technical Training" onOpen={setSelectedCert} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-24 py-24 bg-slate-900 text-white rounded-[3rem] mx-4 md:mx-10 px-6 overflow-hidden relative shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-[100px]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <h3 className="text-4xl font-black mb-16">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard title="VertiGrow Web - Capstone" desc="Vertical Farming web system that integrates IoT sensors to track environment in real time." tags={['IoT', 'Laravel', 'React']} link="https://github.com/Fibii44/VertiGrow-Showcase" />
            <ProjectCard title="Vertigrow Capstone Mobile Application" desc="An Android app built with Firebase that allows users to monitor sensor data remotely" tags={['Android Studio', 'Firebase', 'IoT']} link="https://github.com/Fibii44/VertiGrow-App-Showcase" />
            <ProjectCard title="Multi-tenant Laravel App" desc="Backend-focused system for task tracking used by AACCUP departments." tags={['Laravel', 'MySQL', 'Multi-tenant']} link="https://github.com/Fibii44/AACCUP-showcase" />
            <ProjectCard title="Seminar Management" desc="Comprehensive MERN stack application to handle training sessions and seminars." tags={['React', 'Node.js', 'MongoDB']} link="https://github.com/Fibii44/VertiGrow-Application/tree/INTEGRATION" />
          </div>
        </div>
      </section>

     {/* Navbar - Centered and Aligned */}
     <nav className="fixed w-full bg-white/70 backdrop-blur-md shadow-sm z-50 border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <span className="font-black text-2xl tracking-tighter text-slate-900">
            FEBY<span className="text-rose-500">.</span>
          </span>
          
          <div className="hidden md:flex gap-10 text-sm font-bold uppercase tracking-widest text-slate-600 items-center">
            <a href="#about" className="hover:text-rose-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-rose-500 transition-colors">Skills</a>
            <a href="#awards" className="hover:text-rose-500 transition-colors">Awards</a>
            <a href="#projects" className="hover:text-rose-500 transition-colors">Projects</a>
            <a href="#contact" className="bg-rose-500 text-white px-6 py-2.5 rounded-full hover:bg-rose-600 transition-all shadow-lg shadow-rose-200 active:scale-95">Contact</a>
          </div>
        </div>
      </nav>

      {/* Footer - With Social Links */}
      <footer id="contact" className="py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rose-100/30 rounded-full blur-[100px] -z-10" />
        
        <h3 className="text-5xl font-black mb-12 text-slate-900 dark:text-white tracking-tighter transition-colors">
          Let's <span className="text-rose-500 underline decoration-rose-200 decoration-8 underline-offset-8">Connect</span>
        </h3>

        {/* Contact Links */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <a href="tel:09944450774" className="flex items-center gap-4 hover:text-rose-500 transition-all group scale-100 hover:scale-105">
              <div className="relative">
                <div className="p-4 bg-rose-50 rounded-2xl group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                  <Phone size={24} className="text-rose-500 group-hover:text-white" />
                </div>
                <span className="absolute -top-2 -right-2 bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded-full font-black tracking-widest uppercase">DITO</span>
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Call me on DITO</p>
                <p className="text-xl font-bold">09944450774</p>
              </div>
            </a>

            <a href="tel:09551593904" className="flex items-center gap-4 hover:text-rose-500 transition-all group scale-100 hover:scale-105">
              <div className="relative">
                <div className="p-4 bg-rose-50 rounded-2xl group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                  <Phone size={24} className="text-rose-500 group-hover:text-white" />
                </div>
                <span className="absolute -top-2 -right-2 bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded-full font-black tracking-widest uppercase">TM</span>
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Call me on TM</p>
                <p className="text-xl font-bold">09551593904</p>
              </div>
            </a>
          </div>

          <div className="hidden lg:block w-px h-12 bg-slate-200" />

          <a href="mailto:2201102089@student.buksu.edu.ph" className="flex items-center gap-4 hover:text-rose-500 transition-all group scale-100 hover:scale-105">
            <div className="p-4 bg-rose-50 rounded-2xl group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
              <Mail size={24} className="text-rose-500 group-hover:text-white" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Send an email</p>
              <p className="text-xl font-bold">2201102089@student.buksu.edu.ph</p>
            </div>
          </a>
        </div>

        {/* --- OFFICIAL BRAND SOCIAL LINKS --- */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {/* GitHub - Professional Dark Style */}
          <a 
            href="https://github.com/Fibii44" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-black transition-all hover:-translate-y-2 shadow-xl shadow-slate-200 group"
          >
            <Github size={22} className="group-hover:scale-110 transition-transform" /> 
            <span>GitHub</span>
          </a>

          {/* LinkedIn - Official Blue Style */}
          <a 
            href="https://www.linkedin.com/in/feby-angela-felices-4b288b394/" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-3 bg-[#0077b5] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#005a87] transition-all hover:-translate-y-2 shadow-xl shadow-blue-100 group"
          >
            <Linkedin size={22} className="group-hover:scale-110 transition-transform" /> 
            <span>LinkedIn</span>
          </a>
        </div>

        <p className="text-slate-400 font-medium">© 2026 Feby Angela Felices • Malaybalay City, Bukidnon.</p>
      </footer>

      {/* --- FULL-SIZE MINIMALIST CERTIFICATE VIEWER --- */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 backdrop-blur-md animate-in fade-in duration-300">
          <button onClick={() => setSelectedCert(null)} className="absolute top-6 right-6 z-[110] p-3 bg-white/10 text-white rounded-full hover:bg-rose-500 transition-all border border-white/20 group">
            <X size={28} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
          <a href={certFiles[selectedCert]} download className="absolute bottom-6 right-6 z-[110] flex items-center gap-2 bg-rose-500 text-white px-6 py-3 rounded-2xl font-bold shadow-xl hover:bg-rose-600 transition-all active:scale-95">
            <FileText size={20} />
            <span>Save Copy</span>
          </a>
          <div className="w-full max-w-6xl h-[90vh] mx-4 rounded-xl overflow-hidden shadow-2xl bg-white border border-white/10 flex items-center justify-center">
            <iframe src={`${certFiles[selectedCert]}#view=Fit&toolbar=0&navpanes=0`} className="w-full h-full border-none" title="Viewer" />
          </div>
          <div className="absolute inset-0 -z-10" onClick={() => setSelectedCert(null)}></div>
        </div>
      )}
    </div>
  );
}

// UI COMPONENTS
function CertificationItem({ label, onOpen }) {
  return (
    <button onClick={() => onOpen && onOpen(label)} className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 text-left relative overflow-hidden group ${onOpen ? 'bg-white border-rose-100 shadow-sm hover:shadow-rose-200/40 hover:shadow-xl hover:-translate-y-1 cursor-pointer' : 'bg-slate-50 border-slate-100 cursor-default'}`}>
      {onOpen && <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />}
      <div className="flex items-center gap-3 relative z-10">
        <div className={`relative ${onOpen ? 'animate-bounce-subtle' : ''}`}>
          <CheckCircle size={18} className={`${onOpen ? 'text-rose-500' : 'text-slate-300'}`} />
          {onOpen && <span className="absolute inset-0 rounded-full bg-rose-500 animate-ping opacity-20" />}
        </div>
        <span className={`text-sm font-bold ${onOpen ? 'text-slate-800' : 'text-slate-400'}`}>{label}</span>
      </div>
      {onOpen && (
        <div className="flex items-center gap-2 relative z-10">
          <span className="text-[10px] font-black text-rose-400 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">VIEW</span>
          <ExternalLink size={14} className="text-rose-300 group-hover:text-rose-500 transition-colors" />
        </div>
      )}
    </button>
  );
}

function TechItem({ title, desc }) {
  return (
    <div className="flex gap-4 text-left">
      <ChevronRight size={18} className="text-rose-500 mt-1" />
      <div><h4 className="font-bold text-slate-900">{title}</h4><p className="text-sm text-slate-500">{desc}</p></div>
    </div>
  );
}

function SoftItem({ icon, label }) {
  return (
    <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl border border-white/20"><div className="text-rose-200">{icon}</div><p className="text-sm font-bold">{label}</p></div>
  );
}

function ProjectCard({ title, desc, tags, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 block text-left relative overflow-hidden transition-all duration-500 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-rose-500/10 hover:-translate-y-2 active:scale-[0.98]">
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-rose-500/20 blur-[60px] group-hover:bg-rose-500/40 transition-colors duration-500" />
      <div className="flex justify-between items-start mb-6 relative z-10">
        <h4 className="text-2xl font-bold group-hover:text-rose-400 transition-colors duration-300">{title}</h4>
        <div className="p-2 rounded-full bg-white/5 group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 transform group-hover:rotate-45"><ChevronRight size={20} /></div>
      </div>
      <p className="text-slate-400 mb-8 leading-relaxed font-medium text-sm relative z-10 group-hover:text-slate-300 transition-colors">{desc}</p>
      <div className="flex flex-wrap gap-3 relative z-10">
        {tags.map(tag => <span key={tag} className="text-[10px] uppercase tracking-widest font-black px-4 py-1.5 rounded-full bg-rose-500/5 text-rose-400/80 border border-rose-500/20 group-hover:border-rose-500/50 group-hover:bg-rose-500/10 transition-all duration-300">{tag}</span>)}
      </div>
      <div className="mt-6 flex items-center gap-2 text-xs font-bold text-rose-500 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"><Globe size={14} /> VIEW SOURCE ON GITHUB</div>
    </a>
  );
}

export default App;