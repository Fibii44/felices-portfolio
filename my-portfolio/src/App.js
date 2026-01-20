import React from 'react';
import userImage from './assets/profile-img.png';
import resumePDF from './assets/FELICES-FEBY_CV.pdf';
import { 
  Mail, Phone, ExternalLink, Code, Globe, Shield, 
  Cpu, Database, Award, ChevronRight, Zap, 
  Heart, Brain, Settings, CheckCircle, FileText, 
  Trophy, BookOpen, Star 
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#fffafa] text-slate-800 font-sans scroll-smooth overflow-x-hidden">
      {/* Dynamic Background Blur */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-pink-200/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-rose-100/50 rounded-full blur-[100px]" />
      </div>

      {/* Navbar */}
      <nav className="fixed w-full bg-white/70 backdrop-blur-md shadow-sm z-50 px-8 py-4 flex justify-between items-center border-b border-pink-100">
        <span className="font-black text-2xl tracking-tighter text-slate-900">
          FEBY<span className="text-rose-500">.</span>
        </span>
        <div className="hidden md:flex gap-10 text-sm font-bold uppercase tracking-widest text-slate-600">
          <a href="#about" className="hover:text-rose-500 transition-colors">About</a>
          <a href="#skills" className="hover:text-rose-500 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-rose-500 transition-colors">Projects</a>
          <a href="#awards" className="hover:text-rose-500 transition-colors">Awards</a>
          <a href="#contact" className="bg-rose-500 text-white px-5 py-2 rounded-full hover:bg-rose-600 transition-all shadow-lg shadow-rose-200">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="pt-48 pb-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-widest text-rose-600 bg-rose-50 rounded-full uppercase border border-rose-100">
            4th Year BSIT Student @ BukSU
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tight text-slate-900 leading-tight">
            FEBY ANGELA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-400">FELICES</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl leading-relaxed mb-10">
            Highly skilled in <span className="text-slate-900 border-b-4 border-rose-200">Full-Stack Development</span>, 
            QA, and Network Engineering. A problem-solver dedicated to continuous learning.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {/* Download Resume Button */}
            <a 
              href={resumePDF} 
              download="FELICES-FEBY_CV.pdf"
              className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-slate-200 group"
            >
              <FileText size={18} className="text-rose-400" /> 
              Download Resume
            </a>

            {/* View Resume Button */}
            <a 
              href={resumePDF} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center gap-3 border-2 border-rose-100 bg-white/50 px-8 py-4 rounded-2xl font-bold hover:border-rose-400 hover:text-rose-600 transition-all"
            >
              <ExternalLink size={18} /> 
              View Resume
            </a>
          </div>
        </div>
        

        {/* Portrait Side */}
        <div className="flex-1 flex justify-center lg:justify-start relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-rose-400/20 rounded-[3rem] blur-3xl -z-10 animate-pulse" />
            <div className="w-full h-full rounded-[3.5rem] p-3 border-2 border-rose-100 bg-white shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full rounded-[2.8rem] overflow-hidden bg-rose-50 border border-rose-100">
                <img 
                  src={userImage}
                  alt="Feby Angela Felices" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-rose-50 flex items-center gap-3 animate-bounce">
              <div className="p-2 bg-rose-500 rounded-lg text-white"><Award size={20} /></div>
              <p className="text-xs font-black text-slate-800">Full Stack & QA Specialist</p>
            </div>
          </div>
        </div>
      </header>

     {/* Skills Section - Side-by-Side Row */}
     <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Technical Skills Column */}
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

          {/* Soft Skills Column */}
          <div className="bg-rose-500 text-white p-10 rounded-[3rem] shadow-xl shadow-rose-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white/20 rounded-2xl"><Heart size={24} /></div>
              <h3 className="text-3xl font-black">Soft Skills</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      {/* Certifications & Awards Section */}
      <section id="awards" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-rose-500 font-bold uppercase tracking-widest text-sm mb-2">Recognition</h2>
          <h3 className="text-4xl font-black text-slate-900 mb-4">Certifications & Awards</h3>
          <div className="h-1.5 w-24 bg-rose-500 mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {/* Hackathon Participation */}
          <div className="flex items-start gap-6 p-8 bg-white rounded-3xl border border-rose-100 hover:shadow-xl hover:shadow-rose-100 transition-all group">
            <div className="p-4 bg-rose-50 text-rose-500 rounded-2xl group-hover:bg-rose-500 group-hover:text-white transition-colors">
              <Trophy size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-1">ASEAN Green Entrepreneurship Hackathon</h4>
              <p className="text-rose-500 font-bold text-sm mb-2">Participant | 2025</p>
              <p className="text-slate-500 text-sm leading-relaxed">Engaged in regional innovation focused on sustainable and green tech solutions.</p>
            </div>
          </div>

          {/* Academic Excellence */}
          <div className="flex items-start gap-6 p-8 bg-white rounded-3xl border border-rose-100 hover:shadow-xl hover:shadow-rose-100 transition-all group">
            <div className="p-4 bg-rose-50 text-rose-500 rounded-2xl group-hover:bg-rose-500 group-hover:text-white transition-colors">
              <Star size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 mb-1">Academic Performance Awards</h4>
              <p className="text-rose-500 font-bold text-sm mb-2">Consistent Recipient</p>
              <p className="text-slate-500 text-sm leading-relaxed">Recognized for strong academic excellence and performance throughout the BSIT program.</p>
            </div>
          </div>

          {/* Networking Certifications (Cisco) */}
          <div className="md:col-span-2 flex flex-col md:flex-row items-center gap-8 p-10 bg-rose-50 rounded-[3rem] border border-rose-100">
            <div className="p-6 bg-white rounded-3xl text-rose-500 shadow-sm self-start">
              <BookOpen size={48} />
            </div>
            <div className="flex-1">
              <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Cisco Networking Academy Certifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <CertificationItem label="Introduction to Networks (CCNA 1)" />
                <CertificationItem label="Switching, Routing, and Wireless (CCNA 2)" />
                <CertificationItem label="Introduction to Cybersecurity" />
                <CertificationItem label="Enterprise Networking & Security (CCNA 3)" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-24 py-24 bg-slate-900 text-white rounded-[3rem] mx-4 md:mx-10 px-6 overflow-hidden relative shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-[100px]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-left">
            <div>
              <h2 className="text-rose-400 font-bold uppercase tracking-widest text-sm mb-2">Portfolio</h2>
              <h3 className="text-4xl font-black">Featured Projects</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-left">
          <ProjectCard 
              title="VertiGrow Web - Capstone" 
              desc="Vertical Farming web system that integrates IoT sensors to track environmental conditions in real time." 
              tags={['IoT', 'Laravel', 'React']} 
              link="https://github.com/Fibii44/CAPSTONE_PROJECT/tree/WEB"
            />

              <ProjectCard 
                  title="Vertigrow Capstone Mobile Application" 
                  desc="An Android app built with Firebase that allows users to monitor sensor data remotely" 
                  tags={['Android Studio', 'Firebase', 'IoT']} 
                  link="https://github.com/Fibii44/VertiGrow-Application/tree/INTEGRATION" 
                />
            {/* Multi-tenant Laravel App Link */}
            <ProjectCard 
              title="Multi-tenant Laravel App" 
              desc="A backend-focused system for task tracking and file management used by multiple AACCUP departments." 
              tags={['Laravel', 'MySQL', 'Multi-tenant']} 
              link="https://github.com/Fibii44/AACCUP_SYSTEM"
            />  
              <ProjectCard 
            title="Seminar Management" 
            desc="Comprehensive MERN stack application to handle training sessions and seminars." 
            tags={['React', 'Node.js', 'MongoDB']} 
            link="https://github.com/Fibii44/VertiGrow-Application/tree/INTEGRATION" 
          />
           
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-24 px-6 text-center">
        <h3 className="text-5xl font-black mb-10 text-slate-900 tracking-tighter">Let's <span className="text-rose-500">Connect</span></h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-20 text-lg font-bold">
          <a href="tel:09944450774" className="flex items-center gap-3 hover:text-rose-500 transition-all group">
            <div className="p-3 bg-rose-50 rounded-full group-hover:bg-rose-100 transition-colors"><Phone size={24} className="text-rose-500" /></div> 
            09944450774
          </a>
          <a href="mailto:felicesfebyangela@gmail.com" className="flex items-center gap-3 hover:text-rose-500 transition-all group">
            <div className="p-3 bg-rose-50 rounded-full group-hover:bg-rose-100 transition-colors"><Mail size={24} className="text-rose-500" /></div> 
            felicesfebyangela@gmail.com
          </a>
        </div>
        <p className="text-slate-400 font-medium">© 2026 Feby Angela Felices. Based in San Jose, Malaybalay City, Bukidnon.</p>
      </footer>
    </div>
  );
}

// Sub-components

// Sub-components
function CertificationItem({ label }) {
  return (
    <div className="flex items-center gap-3 bg-white/50 p-4 rounded-2xl border border-white group hover:bg-white hover:shadow-md transition-all">
      <CheckCircle size={18} className="text-rose-500 shrink-0" />
      <span className="text-sm font-bold text-slate-700">{label}</span>
    </div>
  );
}

function TechItem({ title, desc }) {
  return (
    <div className="flex gap-4 group">
      <div className="mt-1.5"><ChevronRight size={18} className="text-rose-500 group-hover:translate-x-1 transition-transform" /></div>
      <div>
        <h4 className="font-bold text-slate-900">{title}</h4>
        <p className="text-sm text-slate-500">{desc}</p>
      </div>
    </div>
  );
}


function SoftItem({ icon, label }) {
  return (
    <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
      <div className="text-rose-200">{icon}</div>
      <p className="text-sm font-bold tracking-tight">{label}</p>
    </div>
  );
}

function ProjectCard({ title, desc, tags, link }) {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noreferrer" 
      className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all block cursor-pointer"
    >
      <div className="flex justify-between items-start mb-6 text-left">
        <h4 className="text-2xl font-bold group-hover:text-rose-400 transition-colors">{title}</h4>
        <ChevronRight className="text-rose-500 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
      </div>
      <p className="text-slate-400 mb-8 leading-relaxed font-medium text-sm text-left">{desc}</p>
      <div className="flex flex-wrap gap-3">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-widest font-black px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">{tag}</span>
        ))}
      </div>
    </a>
  );
}

export default App;