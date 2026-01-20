import React, { useState } from 'react';
import userImage from './assets/profile-img.png';
import resumePDF from './assets/FELICES-FEBY_CV.pdf';

// Import Certificate PDFs from src/assets
import ccna1PDF from './assets/CCNA_1.pdf';
import ccna2PDF from './assets/CCNA_2.pdf';
import ccna3PDF from './assets/CCNA_3.pdf';
import cyberPDF from './assets/Cybersecurity.pdf';
import digiPDF from './assets/digi.pdf'; // New DICT PDF
import dictPDF from './assets/dict.pdf'; // New Special Training PDF

import { 
  Mail, Phone, ExternalLink, Globe, Shield, 
  Award, ChevronRight, Zap, 
  Heart, Brain, Settings, CheckCircle, FileText, 
  Trophy, BookOpen, Star, X 
} from 'lucide-react';

function App() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Map labels to the IMPORTED PDF variables
  const certFiles = {
    "Introduction to Networks (CCNA 1)": ccna1PDF,
    "Switching, Routing, and Wireless (CCNA 2)": ccna2PDF,
    "Enterprise Networking & Security (CCNA 3)": ccna3PDF,
    "Introduction to Cybersecurity": cyberPDF,
    "Digital Literacy Training": digiPDF,
    "DICT Special Technical Training": dictPDF,
  };

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
          <a href="#awards" className="hover:text-rose-500 transition-colors">Awards</a>
          <a href="#projects" className="hover:text-rose-500 transition-colors">Projects</a>
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
            <a href={resumePDF} download="FELICES-FEBY_CV.pdf" className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-slate-200 group">
              <FileText size={18} className="text-rose-400" /> Download Resume
            </a>
            <a href={resumePDF} target="_blank" rel="noreferrer" className="flex items-center gap-3 border-2 border-rose-100 bg-white/50 px-8 py-4 rounded-2xl font-bold hover:border-rose-400 hover:text-rose-600 transition-all">
              <ExternalLink size={18} /> View Resume
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-start relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-rose-400/20 rounded-[3rem] blur-3xl -z-10 animate-pulse" />
            <div className="w-full h-full rounded-[3.5rem] p-3 border-2 border-rose-100 bg-white shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full rounded-[2.8rem] overflow-hidden bg-rose-50 border border-rose-100">
                <img src={userImage} alt="Feby Angela Felices" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-rose-50 flex items-center gap-3 animate-bounce">
              <div className="p-2 bg-rose-500 rounded-lg text-white"><Award size={20} /></div>
              <p className="text-xs font-black text-slate-800">Full Stack & QA Specialist</p>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
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
          <h3 className="text-4xl font-black text-slate-900 mb-4">Certifications & Awards</h3>
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

      {/* Footer */}
      <footer id="contact" className="py-24 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rose-100/30 rounded-full blur-[100px] -z-10" />
        <h3 className="text-5xl font-black mb-12 text-slate-900 tracking-tighter">
          Let's <span className="text-rose-500 underline decoration-rose-200 decoration-8 underline-offset-8">Connect</span>
        </h3>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 mb-20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <a href="tel:09944450774" className="flex items-center gap-4 hover:text-rose-500 transition-all group scale-100 hover:scale-105">
              <div className="relative">
                <div className="p-4 bg-rose-50 rounded-2xl group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Phone size={24} className="text-rose-500 group-hover:text-white" />
                </div>
                <span className="absolute -top-2 -right-2 bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded-full font-black tracking-widest uppercase">DITO</span>
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Call me on DITO</p>
                <p className="text-xl font-bold">09944450774</p>
              </div>
            </a>

            <a href="tel:09161234567" className="flex items-center gap-4 hover:text-rose-500 transition-all group scale-100 hover:scale-105">
              <div className="relative">
                <div className="p-4 bg-rose-50 rounded-2xl group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 shadow-sm">
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
            <div className="p-4 bg-rose-50 rounded-2xl group-hover:bg-rose-500 group-hover:text-white transition-all duration-300 shadow-sm">
              <Mail size={24} className="text-rose-500 group-hover:text-white" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Send an email</p>
              <p className="text-xl font-bold text-sm md:text-xl">2201102089@student.buksu.edu.ph</p>
            </div>
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