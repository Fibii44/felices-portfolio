import React, { useState } from 'react';
import { X, Brain, Cpu, Trophy, Workflow, Briefcase, CheckCircle2, Layers, Layout, Users, ShieldCheck, Search } from 'lucide-react';

const AboutMe = ({ onBack }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 4; // Increased to 4 steps

  return (
    <div className="min-h-screen bg-white flex flex-col animate-in fade-in duration-500 text-left relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-50 rounded-full blur-[100px] -z-10 opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px] -z-10 opacity-50" />
      
      {/* Progress Bar */}
      <div className="w-full h-2 bg-rose-100 fixed top-0 z-[200]">
        <div 
          className="h-full bg-rose-500 transition-all duration-500" 
          style={{ width: `${(step / totalSteps) * 100}%` }}
        />
      </div>

      {/* Close Button */}
      <button 
        onClick={onBack}
        className="fixed top-8 right-8 p-3 text-slate-400 hover:text-rose-500 transition-all hover:rotate-90 z-[200]"
      >
        <X size={40} />
      </button>

      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl w-full">
          
          {/* Step 1: Philosophy */}
          {step === 1 && (
            <div className="space-y-6 animate-in slide-in-from-right duration-500">
              <div className="p-4 bg-rose-50 w-fit rounded-3xl text-rose-500 shadow-sm shadow-rose-100">
                <Workflow size={48} />
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                My Coding <span className="text-rose-500">Philosophy.</span>
              </h2>
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed italic border-l-8 border-rose-500 pl-8 bg-rose-50/30 py-4 rounded-r-2xl">
                  "Automation can accelerate coding, but problem-solving and deep logic remain human responsibilities."
                </p>
                <p className="text-lg text-slate-500 leading-relaxed max-w-2xl text-left">
                  I prioritize the <strong>'Why'</strong> before the <strong>'How'</strong>. 
                  Tools and AI help write code faster, but they cannot replace the human responsibility 
                  of <strong>intentional design</strong>. I build clean code where every line is a conscious decision.
                </p>
              </div>
            </div>
          )}

          {/* Step 2: QA Experience */}
          {step === 2 && (
            <div className="space-y-8 animate-in slide-in-from-right duration-500">
              <div className="p-4 bg-emerald-50 w-fit rounded-3xl text-emerald-600 shadow-sm shadow-emerald-100">
                <ShieldCheck size={48} />
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                Quality <span className="text-emerald-600">Assurance.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-xl text-slate-600 leading-relaxed">
                    I have a keen eye for detail. In my projects, I ensure that the software isn't just functional, but **reliable** and **user-friendly**.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                      <Search className="text-emerald-500" size={20} /> Manual & Unit Testing
                    </li>
                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                      <Search className="text-emerald-500" size={20} /> Bug Identification & Tracking
                    </li>
                  </ul>
                </div>
                <div className="p-8 bg-emerald-900 rounded-[2.5rem] text-emerald-50 shadow-xl relative overflow-hidden">
                   <ShieldCheck className="absolute -bottom-4 -right-4 w-32 h-32 opacity-10 rotate-12" />
                   <h4 className="text-lg font-bold mb-2 uppercase tracking-widest text-emerald-400">The QA Goal</h4>
                   <p className="text-sm leading-relaxed opacity-90">
                     Reducing technical debt and ensuring a seamless user experience by catching logical errors early in the development lifecycle.
                   </p>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Project Management */}
          {step === 3 && (
            <div className="space-y-8 animate-in slide-in-from-right duration-500">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-3">
                  <div className="p-4 bg-blue-600 w-fit rounded-3xl text-white shadow-xl shadow-blue-200">
                    <Briefcase size={40} />
                  </div>
                  <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                    Team Lead & <br/> <span className="text-blue-600">Project Manager.</span>
                  </h2>
                </div>
                <p className="text-lg text-slate-500 max-w-md leading-relaxed pb-2 border-b-2 border-slate-100 text-left">
                  During my <strong>school team projects</strong>, I often stepped up to lead and bridge the gap between technical tasks and team strengths.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                <div className="group relative p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-xl shadow-slate-100/50 overflow-hidden transition-all hover:-translate-y-2">
                  <div className="absolute -top-6 -right-6 opacity-[0.08] group-hover:opacity-[0.15] transition-opacity rotate-12">
                    <img src="https://cdn.worldvectorlogo.com/logos/clickup-2.svg" className="w-40" alt="ClickUp" />
                  </div>
                  <div className="relative z-10 text-left">
                    <div className="flex items-center gap-3 mb-4 text-blue-600 font-black uppercase tracking-[0.2em] text-xs">
                      <Layers size={16} /> School Workflows
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-3">Task Management</h4>
                    <p className="text-slate-500 leading-relaxed text-sm">
                      I use <strong>ClickUp</strong> and <strong>Jira</strong> for group projects to assign tasks, set deadlines, and track finished features.
                    </p>
                  </div>
                </div>

                <div className="group relative p-8 bg-slate-900 border border-slate-800 rounded-[2.5rem] shadow-2xl shadow-blue-900/20 overflow-hidden transition-all hover:-translate-y-2">
                  <div className="absolute -bottom-6 -right-6 opacity-[0.1] group-hover:opacity-[0.2] transition-opacity -rotate-12">
                    <img src="https://cdn.worldvectorlogo.com/logos/jira-1.svg" className="w-36" alt="Jira" />
                  </div>
                  <div className="relative z-10 text-left">
                    <div className="flex items-center gap-3 mb-4 text-blue-400 font-black uppercase tracking-[0.2em] text-xs">
                      <Users size={16} /> Collaboration
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-3">Technical Leadership</h4>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      I help teammates break down logic and ensure accountability to hit milestones before school deadlines.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-8 pt-2 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                <img src="https://cdn.worldvectorlogo.com/logos/trello.svg" className="h-6" alt="Trello" />
                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
                <img src="https://cdn.worldvectorlogo.com/logos/notion-2.svg" className="h-6" alt="Notion" />
                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
                <img src="https://cdn.worldvectorlogo.com/logos/discord-6.svg" className="h-6" alt="Discord" />
                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
                <img src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" className="h-6" alt="GitHub" />
              </div>
            </div>
          )}

          {/* Step 4: Goals */}
          {step === 4 && (
            <div className="space-y-6 animate-in slide-in-from-right duration-500">
              <div className="p-4 bg-amber-50 w-fit rounded-3xl text-amber-500 shadow-sm shadow-amber-100">
                <Trophy size={48} />
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight">
                Ready for the <span className="text-amber-500">Next Level.</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl text-left">
                I am seeking an <strong>IT Internship</strong> to apply my QA, Project Management, and Development skills. 
                I want to join a professional team where <strong>human logic</strong> and <strong>modern automation</strong> create 
                real-world impact.
              </p>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
            <button 
              onClick={() => step > 1 ? setStep(step - 1) : onBack()}
              className="text-slate-400 font-bold hover:text-slate-900 transition-colors uppercase tracking-widest text-sm flex items-center gap-2"
            >
              {step === 1 ? 'Exit Journey' : 'Previous Step'}
            </button>
            <button 
              onClick={() => step < totalSteps ? setStep(step + 1) : onBack()}
              className="bg-slate-900 text-white px-10 py-4 rounded-[1.5rem] font-black hover:bg-rose-500 hover:scale-105 transition-all shadow-xl active:scale-95"
            >
              {step === totalSteps ? 'Finish Story' : 'Next Step'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;