import React, { useState } from 'react';
import { X, Workflow, Briefcase, CheckCircle2, Layers, Layout, Users, ShieldCheck, Search, Trophy, ChevronRight } from 'lucide-react';

const AboutMe = ({ onBack }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col animate-in fade-in duration-500 text-left relative overflow-hidden font-sans transition-colors duration-500">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-50 dark:bg-rose-900/10 rounded-full blur-[100px] -z-10 opacity-50 transition-colors" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-[100px] -z-10 opacity-50 transition-colors" />
      
      {/* Progress Bar */}
      <div className="w-full h-2 bg-rose-100 dark:bg-slate-800 fixed top-0 z-[200]">
        <div 
          className="h-full bg-rose-500 transition-all duration-500" 
          style={{ width: `${(step / totalSteps) * 100}%` }}
        />
      </div>

      {/* Close Button */}
      <button 
        onClick={onBack}
        className="fixed top-8 right-8 p-3 text-slate-400 dark:text-slate-500 hover:text-rose-500 transition-all hover:rotate-90 z-[200]"
      >
        <X size={40} />
      </button>

      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl w-full">
          
          {/* Step 1: Philosophy */}
          {step === 1 && (
            <div className="space-y-6 animate-in slide-in-from-right duration-500">
              <div className="p-4 bg-rose-50 dark:bg-rose-900/20 w-fit rounded-3xl text-rose-500 shadow-sm shadow-rose-100 dark:shadow-none">
                <Workflow size={48} />
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
                My Coding <span className="text-rose-500">Philosophy.</span>
              </h2>
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed italic border-l-8 border-rose-500 pl-8 bg-rose-50/30 dark:bg-rose-900/10 py-4 rounded-r-2xl transition-colors">
                  "Automation can accelerate coding, but problem-solving and deep logic remain human responsibilities."
                </p>
                <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl text-left">
                  I prioritize the <strong>'Why'</strong> before the <strong>'How'</strong>. 
                  Tools and AI help write code faster, but they cannot replace <strong>intentional design</strong>. I build clean code where every line is a conscious decision.
                </p>
              </div>
            </div>
          )}

          {/* Step 2: QA Experience */}
          {step === 2 && (
            <div className="space-y-8 animate-in slide-in-from-right duration-500">
              <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 w-fit rounded-3xl text-emerald-600 shadow-sm shadow-emerald-100 dark:shadow-none">
                <ShieldCheck size={48} />
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
                Quality <span className="text-emerald-600">Assurance.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                    I have a keen eye for detail. I ensure that the software isn't just functional, but <strong>reliable</strong> and <strong>user-friendly</strong>.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-slate-700 dark:text-slate-400 font-medium">
                      <Search className="text-emerald-500" size={20} /> Manual & Unit Testing
                    </li>
                    <li className="flex items-center gap-3 text-slate-700 dark:text-slate-400 font-medium">
                      <Search className="text-emerald-500" size={20} /> Bug Identification & Tracking
                    </li>
                  </ul>
                </div>
                <div className="p-8 bg-emerald-900 dark:bg-emerald-950 rounded-[2.5rem] text-emerald-50 shadow-xl relative overflow-hidden border border-emerald-800/50">
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
            <div className="space-y-8 animate-in slide-in-from-right duration-500 relative">
              <div className="space-y-4">
                <div className="p-4 bg-blue-600 w-fit rounded-3xl text-white shadow-xl shadow-blue-200 dark:shadow-none">
                  <Briefcase size={40} />
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
                  Team <span className="text-blue-600">Leadership.</span>
                </h2>
                <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed text-left">
                  In my school projects, I lead teams by bridging the gap between technical logic and human collaboration. I ensure every teammate's strength is utilized through structured workflows.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] flex items-start gap-4 transition-all hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl text-blue-600 shadow-sm"><Layers size={24} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Task Management</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Managing sprints using <strong>ClickUp</strong> and <strong>Trello</strong>.</p>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] flex items-start gap-4 transition-all hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl text-blue-600 shadow-sm"><Users size={24} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Collaboration</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Facilitating logic breakdowns and technical accountability.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Goals */}
          {step === 4 && (
            <div className="space-y-6 animate-in slide-in-from-right duration-500">
              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 w-fit rounded-3xl text-amber-500 shadow-sm shadow-amber-100 dark:shadow-none">
                <Trophy size={48} />
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight tracking-tight">
                Ready for the <span className="text-amber-500">Next Level.</span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl text-left">
                I am seeking an <strong>IT Internship</strong> to apply my QA, PM, and Development skills. I want to join a professional team where <strong>human logic</strong> and <strong>modern automation</strong> work together to solve complex problems.
              </p>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-6 transition-colors">
            <button 
              onClick={() => step > 1 ? setStep(step - 1) : onBack()}
              className="text-slate-400 dark:text-slate-500 font-bold hover:text-slate-900 dark:hover:text-white transition-colors uppercase tracking-widest text-sm flex items-center gap-2"
            >
              {step === 1 ? 'Exit Journey' : 'Previous Step'}
            </button>
            <button 
              onClick={() => step < totalSteps ? setStep(step + 1) : onBack()}
              className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 py-4 rounded-[1.5rem] font-black hover:bg-rose-500 dark:hover:bg-rose-500 dark:hover:text-white transition-all shadow-xl active:scale-95"
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