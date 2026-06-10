import React from 'react';
import { PageType } from '../types';
import { Home, Users, Map, PieChart, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutProps {
  currentPage: PageType;
  setPage: (page: PageType) => void;
  children: React.ReactNode;
}

export default function Layout({ currentPage, setPage, children }: LayoutProps) {
  const navItems: { id: PageType; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: '홈', icon: <Home className="w-[22px] h-[22px]" strokeWidth={2.5} /> },
    { id: 'social', label: '소셜', icon: <Users className="w-[22px] h-[22px]" strokeWidth={2.5} /> },
    { id: 'spatial', label: '공간', icon: <Map className="w-[22px] h-[22px]" strokeWidth={2.5} /> },
    { id: 'records', label: '기록', icon: <PieChart className="w-[22px] h-[22px]" strokeWidth={2.5} /> },
    { id: 'profile', label: '프로필', icon: <User className="w-[22px] h-[22px]" strokeWidth={2.5} /> },
  ];

  return (
    <div className="flex justify-center w-full min-h-screen bg-neutral-100">
      {/* Mobile-first centered shell wrapper */}
      <div className="relative w-full max-w-md bg-dig-base min-h-screen shadow-2xl overflow-hidden flex flex-col mx-auto md:border-x border-dig-border/50">
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto pb-[100px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="min-h-full"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Bottom Navigation */}
        <nav className="absolute bottom-5 left-5 right-5 bg-white/80 backdrop-blur-xl border border-white/50 px-3 py-2 pb-safe flex justify-between items-center rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.06)] z-50">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setPage(item.id)}
                className="relative flex flex-col items-center justify-center p-2.5 w-14 h-14 group transition-transform active:scale-95"
                aria-label={item.label}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-dig-primary/10 rounded-2xl"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <div className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-dig-primary' : 'text-dig-text-muted group-hover:text-dig-primary/60'}`}>
                  {item.icon}
                </div>
                <span className={`relative z-10 text-[10px] mt-1 transition-colors duration-300 ${isActive ? 'text-dig-primary font-bold' : 'text-dig-text-muted font-medium'}`}>
                  {item.label}
                </span>
                
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
