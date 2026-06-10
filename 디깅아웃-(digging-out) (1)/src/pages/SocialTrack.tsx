import React from 'react';
import { SectionTitle, Card, Badge } from '../components/ui';
import { Search, Hash, MessageCircle, Flame, Users, Sparkles } from 'lucide-react';

export default function SocialTrack() {
  const categories = ["전체보기", "러닝", "독서", "명상", "글쓰기", "요가"];
  
  return (
    <div className="px-6 pt-12 flex flex-col gap-8 bg-gradient-to-b from-[#F2F7FB] to-[#FFFFFF] min-h-screen">
      <div className="relative">
        <h1 className="text-[26px] font-black tracking-tight mb-2 text-[#1D1D1F]">
          소셜 트랙
        </h1>
        <p className="text-[13px] font-medium text-dig-text-muted mb-8">느슨한 연대로 취향을 딥하게 파고들어봐요</p>

        {/* Search Bar */}
        <div className="relative mb-8">
          <input 
            type="text" 
            placeholder="어떤 모임을 찾으시나요?" 
            className="w-full bg-white border border-dig-border/80 rounded-full pl-12 pr-4 py-4 text-[14px] font-bold text-[#1D1D1F] focus:outline-none focus:border-blue-200 focus:ring-4 focus:ring-blue-50 transition-all shadow-sm placeholder:font-medium placeholder:text-neutral-400"
          />
          <Search className="w-5 h-5 text-neutral-400 absolute left-5 top-1/2 -translate-y-1/2 stroke-[2.5]" />
        </div>

        {/* Horizontal Tags */}
        <div className="flex overflow-x-auto gap-3 pb-3 -mx-6 px-6 snap-x hide-scrollbar">
          {categories.map((cat, idx) => (
            <div key={idx} className={`snap-start shrink-0 px-5 py-2.5 rounded-full text-[13px] font-bold cursor-pointer transition-transform active:scale-95 border ${idx === 0 ? 'bg-[#1D1D1F] text-white border-[#1D1D1F] shadow-md' : 'bg-white text-neutral-500 border-neutral-200 hover:bg-neutral-50'}`}>
              {cat}
            </div>
          ))}
        </div>
      </div>

      <section>
        <SectionTitle 
          title="진행중인 챌린지" 
          action={<span className="text-[12px] text-blue-500 font-bold active:scale-95 transition-transform cursor-pointer">더보기</span>} 
        />
        <div className="flex flex-col gap-4">
          <Card className="flex flex-col gap-5 p-6 border border-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] relative overflow-hidden group hover:border-blue-100 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full -translate-y-1/2 translate-x-1/4 blur-xl transition-all group-hover:bg-blue-100/50"></div>
            
            <div className="flex justify-between items-start relative z-10">
              <div>
                <Badge variant="accent" className="mb-3 inline-flex items-center gap-1">
                  <Sparkles className="w-3 h-3"/> 달성율 89%
                </Badge>
                <h3 className="font-extrabold text-[18px] text-[#1D1D1F]">주 3회 3km 밤산책 챌린지</h3>
                <p className="text-[13px] font-medium text-neutral-400 mt-1">핸드폰은 집에 두고 오롯이 걷기만</p>
              </div>
              <div className="w-12 h-12 bg-[#F6F8FA] rounded-full flex justify-center items-center text-2xl shadow-sm border border-neutral-100">
                👟
              </div>
            </div>
            
            <div className="bg-[#F8FAFC] p-4 rounded-[1.25rem] flex justify-between items-center border border-neutral-100 relative z-10">
              <div className="flex -space-x-3">
                {[1,2,3].map((i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-gray-200 border-2 border-[#F8FAFC] flex justify-center items-center overflow-hidden shadow-sm">
                    <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="avatar" />
                  </div>
                ))}
                <div className="w-9 h-9 rounded-full bg-white border-2 border-neutral-200 flex justify-center items-center text-[11px] text-neutral-500 font-bold z-10 shadow-sm">
                  +12
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[13px] text-white font-bold bg-[#1D1D1F] px-4 py-2.5 rounded-full active:scale-95 transition-transform cursor-pointer shadow-sm hover:bg-[#2C2C2E]">
                <MessageCircle className="w-4 h-4 fill-white/10 stroke-[2.5]" />
                <span>입장하기</span>
              </div>
            </div>
          </Card>

          <Card className="flex flex-col gap-4 p-6 border border-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:border-orange-100 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <Badge variant="default" className="mb-3 inline-flex items-center gap-1 !bg-orange-50 !text-orange-600 !border-orange-100">
                  <Flame className="w-3.5 h-3.5 text-orange-500"/> 마감임박
                </Badge>
                <h3 className="font-extrabold text-[18px] text-[#1D1D1F]">주말 오프라인 독서 모임</h3>
                <p className="text-[13px] font-medium text-neutral-400 mt-1">전자책 금지, 오직 종이책만</p>
              </div>
              <div className="w-12 h-12 bg-[#F6F8FA] rounded-full flex justify-center items-center text-2xl shadow-sm border border-neutral-100">
                📚
              </div>
            </div>
          </Card>
        </div>
      </section>

    </div>
  );
}
