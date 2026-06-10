import React from 'react';
import { SectionTitle, Card, Badge } from '../components/ui';
import { Award, Target, Zap, Clock, CalendarDays, Ticket, TreePine, TrendingUp } from 'lucide-react';

export default function MyRecords() {
  return (
    <div className="px-6 pt-12 flex flex-col gap-8 pb-32 bg-gradient-to-b from-[#F2F7FB] to-[#FFFFFF] min-h-screen">
      <div>
        <h1 className="text-[26px] font-black tracking-tight mb-1 text-[#1D1D1F]">기록</h1>
        <p className="text-[13px] font-medium text-dig-text-muted">나만의 취향 지도와 몰입의 순간들</p>
      </div>

      {/* Offline Hours Summary Card */}
      <section className="-mt-2">
        <Card onClick={() => {}} className="p-5 flex flex-col justify-center border-[3px] border-[#F1F5F9]">
          <div className="flex justify-between items-start mb-3">
            <span className="text-[14px] font-extrabold text-[#64748B] flex items-center gap-1.5 font-sans tracking-tight">
              <Clock className="w-5 h-5 text-[#38B2AC]" strokeWidth={2.5} /> 이번 주 오프라인 시간
            </span>
            <div className="bg-[#ECFDF5] text-[#10B981] px-2.5 py-1 rounded-full text-[12px] font-bold flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" strokeWidth={3} />
              +2.5h
            </div>
          </div>
          <div className="text-[42px] font-black text-[#1E293B] leading-none tracking-tighter">
            18<span className="text-[20px] font-bold text-[#94A3B8] ml-1">h</span> 30<span className="text-[20px] font-bold text-[#94A3B8] ml-1">m</span>
          </div>
          <p className="text-[13px] font-bold text-[#94A3B8] mt-3 tracking-tight">지난 주(16h) 대비 2시간 30분 늘었어요! 🎉</p>
        </Card>
      </section>

      {/* Activity Overview */}
      <section>
        <div className="grid grid-cols-2 gap-3">
          <Card onClick={() => {}} className="p-5 flex flex-col justify-center border-[3px] border-[#F1F5F9]">
            <span className="text-[13px] font-extrabold text-[#64748B] flex items-center gap-1.5 mb-2 font-sans tracking-tight">
              <Target className="w-5 h-5 text-[#2A4D6E]" strokeWidth={2.5} /> 목표 달성률
            </span>
            <div className="text-[34px] font-black text-[#1E293B] leading-none tracking-tighter">85<span className="text-[18px] font-bold text-[#94A3B8] ml-1">%</span></div>
            <div className="w-full h-3 bg-[#F1F5F9] rounded-full mt-4 overflow-hidden">
              <div className="h-full bg-[#2A4D6E] rounded-full w-[85%]"></div>
            </div>
          </Card>
          <Card onClick={() => {}} className="p-5 flex flex-col justify-center border-[3px] border-[#F1F5F9]">
            <span className="text-[13px] font-extrabold text-[#64748B] flex items-center gap-1.5 mb-2 font-sans tracking-tight">
              <Zap className="w-5 h-5 text-[#F59E0B] fill-[#FDE68A]" strokeWidth={2.5} /> 연속 디깅
            </span>
            <div className="text-[34px] font-black text-[#1E293B] leading-none flex items-baseline gap-1 tracking-tighter">
              12<span className="text-[16px] font-bold text-[#94A3B8]">일째</span>
            </div>
          </Card>
        </div>
      </section>

      {/* Taste Portfolio (Cloud) - Refined into softer badges */}
      <section>
        <SectionTitle title="나의 최애 취향" />
        <div className="bg-white rounded-[2.5rem] w-full h-[220px] shadow-[0_8px_24px_rgba(0,0,0,0.02)] border-[3px] border-[#F1F5F9]/80 relative flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full max-w-[340px]">
            {/* 1. 나이트러닝 */}
            <div className="absolute top-6 left-2 z-10 w-fit">
              <div className="bg-[#EBF5FA] border-[3px] border-[#D0E7F5] rounded-full px-5 py-2">
                <span className="text-[20px] font-black text-[#2A4D6E] tracking-tight">나이트러닝 🏃</span>
              </div>
            </div>
            
            {/* 2. 명상 */}
            <div className="absolute top-8 right-2 z-10 w-fit">
              <div className="bg-white border-[3px] border-[#E2E8F0] rounded-full px-5 py-1.5">
                <span className="text-[18px] font-extrabold text-[#475569] tracking-tight">명상 🧘</span>
              </div>
            </div>
            
            {/* 3. 독서모임 */}
            <div className="absolute top-[90px] left-8 z-0">
              <span className="text-[16px] font-bold text-[#94A3B8] tracking-tight">독서모임</span>
            </div>
            
            {/* 4. 디지털디톡스 */}
            <div className="absolute top-[85px] right-3 z-10 w-fit">
              <div className="bg-[#E6FAF5] border-[3px] border-[#BBF0E2] rounded-full px-5 py-2.5">
                <span className="text-[18px] font-black text-[#2B7A6B] tracking-tight">디지털디톡스</span>
              </div>
            </div>
            
            {/* 5. 필사 */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-0">
              <span className="text-[16px] font-bold text-[#64748B] tracking-tight">필사 ✍️</span>
            </div>
          </div>
        </div>
      </section>

      {/* Badges & Rewards */}
      <section>
        <div className="flex justify-between items-center mb-5 px-2">
          <h2 className="text-[19px] font-black tracking-tight text-[#1E293B] flex items-center gap-2">수집한 배지</h2>
          <span className="text-[13px] font-bold text-[#94A3B8] cursor-pointer active:scale-95">더보기</span>
        </div>
        
        <div className="flex space-x-5 overflow-x-auto pb-4 -mx-6 px-8 snap-x hide-scrollbar">
          <div className="snap-start flex flex-col items-center min-w-[72px] group">
            <div className="w-[4.5rem] h-[4.5rem] rounded-[1.75rem] bg-[#FFFBEB] flex justify-center items-center text-[#F59E0B] mb-2.5 border-[3px] border-[#FEF3C7] transition-transform active:scale-95">
              <Award className="w-8 h-8" strokeWidth={2.5}/>
            </div>
            <span className="text-[12px] font-extrabold text-[#475569] text-center tracking-tight">첫 시작</span>
          </div>

          <div className="snap-start flex flex-col items-center min-w-[72px] group">
            <div className="w-[4.5rem] h-[4.5rem] rounded-[1.75rem] bg-[#ECFDF5] flex justify-center items-center text-[#10B981] mb-2.5 border-[3px] border-[#D1FAE5] transition-transform active:scale-95">
              <TreePine className="w-8 h-8" strokeWidth={2.5}/>
            </div>
            <span className="text-[12px] font-extrabold text-[#475569] text-center tracking-tight">자연 탐험가</span>
          </div>

          <div className="snap-start flex flex-col items-center min-w-[72px] opacity-50 grayscale">
            <div className="w-[4.5rem] h-[4.5rem] rounded-[1.75rem] bg-[#F8FAFC] flex justify-center items-center text-[#94A3B8] mb-2.5 border-[3px] border-[#F1F5F9]">
               <Clock className="w-8 h-8" strokeWidth={2.5} />
            </div>
            <span className="text-[12px] font-extrabold text-[#94A3B8] text-center tracking-tight">100시간</span>
          </div>
        </div>
      </section>
      
      {/* Coupons */}
      <section>
        <Card onClick={() => {}} className="p-5 flex items-center gap-4 border-[3px] border-[#F1F5F9]">
          <div className="w-14 h-14 bg-[#EBF5FA] rounded-[1.5rem] flex items-center justify-center text-[#2A4D6E] border-[3px] border-[#D0E7F5]">
             <Ticket className="w-6 h-6" strokeWidth={2.5}/>
          </div>
          <div>
            <h4 className="font-black text-[16px] text-[#1E293B] tracking-tight">제휴 쿠폰 <span className="text-[#2A4D6E] ml-1">2</span>장</h4>
            <p className="text-[13px] font-bold text-[#94A3B8] mt-0.5 tracking-tight">책방, 요가원에서 사용해봐요</p>
          </div>
        </Card>
      </section>

    </div>
  );
}
