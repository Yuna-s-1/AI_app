import React from 'react';

export function Card({ children, className = '', onClick }: { children: React.ReactNode, className?: string, onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-[2.25rem] p-6 border-[3px] border-[#F1F5F9]/80 shadow-[0_8px_24px_rgba(0,0,0,0.02)] ${onClick ? 'cursor-pointer hover:border-[#D0E7F5] hover:shadow-[0_8px_24px_rgba(208,231,245,0.4)] active:scale-[0.98] transition-all duration-200' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

export function Button({ children, variant = 'primary', className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' }) {
  const baseStyle = "w-full rounded-full py-4 px-6 font-bold text-[15px] transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98]";
  const variants = {
    primary: "bg-[#2A4D6E] text-white shadow-[0_8px_20px_rgba(42,77,110,0.25)] hover:bg-[#1E3A5A]",
    secondary: "bg-[#EBF5FA] text-[#2A4D6E] border-[3px] border-[#D0E7F5] hover:bg-[#D0E7F5]",
    outline: "border-[3px] border-[#F1F5F9] text-[#475569] hover:border-[#D0E7F5] bg-white text-[#2A4D6E]"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function Badge({ children, variant = 'default', className = '' }: { children: React.ReactNode, variant?: 'default' | 'accent' | 'fatigue-high' | 'fatigue-med', className?: string }) {
  const variants = {
    default: "bg-white text-dig-text-muted border border-dig-border text-[11px] shadow-sm",
    accent: "bg-blue-50 text-blue-600 border border-blue-100/50 text-[11px] shadow-sm",
    "fatigue-high": "bg-red-50 text-red-600 border border-red-100 text-[11px] shadow-sm",
    "fatigue-med": "bg-orange-50 text-orange-600 border border-orange-100 text-[11px] shadow-sm",
  };
  return (
    <span className={`px-4 py-1.5 rounded-full font-bold tracking-wide ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}

export function SectionTitle({ title, subtitle, action, icon }: { title: string, subtitle?: string, action?: React.ReactNode, icon?: React.ReactNode }) {
  return (
    <div className="flex justify-between items-end mb-5 px-1">
      <div>
        <h2 className="text-[19px] font-black tracking-tight text-[#1D1D1F] flex items-center gap-2">
          {icon} {title}
        </h2>
        {subtitle && <p className="text-[13px] font-medium text-dig-text-muted mt-1">{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}
