import React, { useState } from 'react';
import { Card, SectionTitle, Badge, Button } from '../components/ui';
import { Activity, Battery, BatteryWarning, Moon, Users, Clock, ArrowRight, ShieldCheck, HeartPulse, Sparkles, CheckCircle2, Music, WifiOff, X, Smartphone, Trophy, MapPin, EyeOff } from 'lucide-react';

export default function Home() {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [showBattleModal, setShowBattleModal] = useState(false);
  const [battleState, setBattleState] = useState<'idle' | 'preparing' | 'battling'>('idle');
  const [showMatchModal, setShowMatchModal] = useState(false);
  const [matchState, setMatchState] = useState<'idle' | 'searching' | 'matched'>('idle');

  const moods = [
    { emoji: '🔥', label: '열정' },
    { emoji: '😊', label: '평온' },
    { emoji: '🫠', label: '피곤' },
    { emoji: '🌪️', label: '복잡' },
    { emoji: '💤', label: '방전' },
  ];

  return (
    <div className="px-6 pt-12 flex flex-col gap-8 pb-10 bg-gradient-to-b from-[#F2F7FB] to-[#FFFFFF] min-h-screen text-dig-text-main relative">
      
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full blur-3xl -z-10 pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute top-[20%] left-0 w-[300px] h-[300px] bg-gradient-to-tr from-yellow-50/50 to-transparent rounded-full blur-2xl -z-10 pointer-events-none transform -translate-x-1/2"></div>
      
      {/* Header with character */}
      <div className="flex flex-col items-center pt-8 pb-4 relative z-10">
        {/* Cute Mascot Placeholder (CSS Art) */}
        <div className="w-40 h-40 relative mb-8">
          {/* Subtle glow behind */}
          <div className="absolute -inset-8 bg-blue-200/30 blur-2xl rounded-full -z-10"></div>
          
          {/* Main Body */}
          <div className="absolute inset-x-2 inset-y-0 bg-gradient-to-b from-[#E6F3FB] to-[#C9E7F6] rounded-[3.5rem] shadow-[inset_-5px_-5px_20px_rgba(255,255,255,0.9),_0_20px_40px_rgba(160,216,239,0.3)] animate-[bounce_4s_infinite_ease-in-out]">
            
            {/* Left ear */}
            <div className="absolute -top-3 left-6 w-8 h-10 bg-gradient-to-b from-[#E6F3FB] to-transparent rounded-t-full transform -rotate-[20deg] -z-10"></div>
            {/* Right ear */}
            <div className="absolute -top-3 right-6 w-8 h-10 bg-gradient-to-b from-[#E6F3FB] to-transparent rounded-t-full transform rotate-[20deg] -z-10"></div>
            
            {/* Face */}
            <div className="absolute top-14 left-1/2 -translate-x-1/2 flex gap-6">
              <div className="w-2.5 h-3.5 bg-[#4A4A4A] rounded-full"></div>
              <div className="w-2.5 h-3.5 bg-[#4A4A4A] rounded-full"></div>
            </div>
            {/* Blush */}
            <div className="absolute top-[4.2rem] left-1/2 -translate-x-1/2 flex gap-[2.75rem]">
              <div className="w-4 h-2.5 bg-pink-400 opacity-40 blur-[2px] rounded-full"></div>
              <div className="w-4 h-2.5 bg-pink-400 opacity-40 blur-[2px] rounded-full"></div>
            </div>
            
            {/* Little arms holding a glowing orb */}
            <div className="absolute top-20 -left-2 w-7 h-9 bg-gradient-to-br from-[#D9EAF5] to-[#B1DDF0] rounded-full transform -rotate-[40deg] shadow-sm"></div>
            <div className="absolute top-20 -right-2 w-7 h-9 bg-gradient-to-bl from-[#D9EAF5] to-[#B1DDF0] rounded-full transform rotate-[40deg] shadow-sm"></div>

            {/* Glowing orb in center */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-100 rounded-full blur-[2px] opacity-80 animate-pulse shadow-[0_0_15px_rgba(255,255,255,1)]"></div>
          </div>
          
          {/* Interaction badge */}
          <div className="absolute -bottom-1 right-0 bg-white px-4 py-2 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-neutral-100 text-[13px] font-black text-blue-600 z-10 flex items-center gap-1.5 transform rotate-2">
            반가워요! <Sparkles className="w-3.5 h-3.5" />
          </div>
        </div>

        <h1 className="text-[28px] font-black mb-2 text-center tracking-tight text-[#1D1D1F]">안녕, 유나님</h1>
        <p className="text-dig-text-muted text-[14px] font-medium leading-relaxed text-center">오늘 하루도 쉴 틈 없는 스크린,<br/>잠시 내려놓고 저랑 놀아요.</p>
      </div>

      {/* Detox Matcher (Blind Match) */}
      <div 
        onClick={() => {
          setShowMatchModal(true);
          setMatchState('idle');
        }}
        className="bg-white rounded-[1.25rem] p-5 shadow-[0_4px_16px_rgba(0,0,0,0.02)] border-[1.5px] border-[#F1F5F9] relative overflow-hidden cursor-pointer active:scale-[0.98] transition-all group mb-6 mt-2"
      >
        <div className="absolute top-[-30px] right-[-20px] w-28 h-28 bg-[#FFFBEB] rounded-full blur-[2.5rem] opacity-60 group-hover:opacity-80 transition-opacity"></div>
        <div className="absolute bottom-[-10px] left-[-10px] w-24 h-24 bg-[#EFF6FF] rounded-full blur-[2rem] opacity-60 group-hover:opacity-80 transition-opacity"></div>
        
        <div className="flex justify-between items-start relative z-10 mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0] text-[11px] font-bold rounded-full mb-3 shadow-sm">
              <Users className="w-3.5 h-3.5 text-[#3B82F6]" /> 블라인드 매칭
            </div>
            <h3 className="font-extrabold text-[17px] text-[#1E293B] tracking-tight leading-snug mb-1.5">
              지인이 없다면?<br/>동네 디톡스 짝꿍 찾기
            </h3>
            <p className="text-[12px] font-medium text-[#64748B] leading-relaxed">
              '디지털 단절'과 '러닝·독서' 취향이<br/>딱 맞는 낯선 이웃과 안전하게 연결돼요.
            </p>
          </div>
          <div className="w-11 h-11 bg-white border border-[#E2E8F0] rounded-full flex justify-center items-center shadow-sm text-2xl z-10 relative shrink-0">
            🤝
            <div className="absolute top-[-2px] right-[-2px] bg-[#10B981] p-1 rounded-full border-2 border-white">
               <ShieldCheck className="w-2.5 h-2.5 text-white" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#E2E8F0] rounded-[1rem] p-3 flex flex-col gap-2 relative z-10 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-extrabold bg-[#F1F5F9] text-[#475569] px-2 py-1 rounded-md shrink-0">내 근처 매칭</span>
            <div className="flex gap-1.5 overflow-hidden">
              <span className="text-[10px] font-bold text-[#1E293B] px-1.5 py-0.5 rounded-sm whitespace-nowrap bg-[#E2E8F0]/50">#반포한강공원</span>
              <span className="text-[10px] font-bold text-[#3B82F6] px-1.5 py-0.5 rounded-sm whitespace-nowrap bg-[#EFF6FF]">#러닝</span>
              <span className="text-[10px] font-bold text-[#D97706] px-1.5 py-0.5 rounded-sm whitespace-nowrap bg-[#FEF3C7]">#주말오전</span>
            </div>
          </div>
          <div className="h-[1px] w-full bg-[#F1F5F9] my-1"></div>
          <div className="flex items-center justify-between">
             <div className="flex items-center gap-2">
               <div className="flex -space-x-2">
                 <div className="w-6 h-6 rounded-full bg-[#EBF5FA] border-2 border-white flex items-center justify-center text-[10px] shadow-sm z-20">🏃🏻‍♂️</div>
                 <div className="w-6 h-6 rounded-full bg-[#FEF3C7] border-2 border-white flex items-center justify-center text-[10px] shadow-sm z-10">🚴‍♀️</div>
               </div>
               <span className="text-[10px] font-bold text-[#64748B]">현재 4명 대기중</span>
             </div>
             <div className="bg-[#3B82F6] text-white px-3 py-1.5 rounded-[0.6rem] text-[11px] font-bold shadow-sm group-hover:bg-[#2563EB] transition-colors flex items-center gap-1">
               <Sparkles className="w-3 h-3" /> 매칭 시작
             </div>
          </div>
        </div>
      </div>

      {/* Daily Check-in */}
      <section className="-mt-2">
        <SectionTitle title="지금 기분은 어떠신가요?" />
        <Card className="flex flex-col p-5">
          <div className="flex justify-between items-center gap-2">
            {moods.map((mood, idx) => {
              const isSelected = selectedMood === idx;
              return (
                <div 
                  key={idx} 
                  className="flex flex-col items-center gap-2 cursor-pointer active:scale-95 transition-transform group flex-1"
                  onClick={() => setSelectedMood(idx)}
                >
                  <div className={`w-[3.25rem] h-[3.25rem] rounded-[1.25rem] flex justify-center items-center text-2xl transition-all duration-300 border-[3px] ${isSelected ? 'bg-[#EBF5FA] border-[#D0E7F5] shadow-sm transform -translate-y-1' : 'bg-[#F8FAFC] border-transparent hover:bg-[#F1F5F9]'}`}>
                    {mood.emoji}
                  </div>
                  <span className={`text-[11px] font-bold transition-colors ${isSelected ? 'text-[#2A4D6E]' : 'text-[#94A3B8]'}`}>{mood.label}</span>
                </div>
              );
            })}
          </div>
        </Card>
      </section>

      {/* Detox Streaks */}
      <section className="mb-2 mt-2">
        <div className="flex justify-between items-end mb-3">
          <h2 className="text-[16px] font-black tracking-tight text-[#1E293B] leading-snug">
            나의 디톡스 스트릭 🌿
          </h2>
          <span className="text-[12px] font-bold text-[#059669] bg-[#D1FAE5] px-2.5 py-1 rounded-full">
            4일 연속 달성 중!
          </span>
        </div>
        <Card className="p-5 flex justify-between items-center bg-white">
          {[
            { label: '토', met: true },
            { label: '일', met: false },
            { label: '월', met: true },
            { label: '화', met: true },
            { label: '수', met: true },
            { label: '목', met: true },
            { label: '오늘', met: true, isToday: true },
          ].map((day, i) => (
            <div key={i} className="flex flex-col items-center gap-2 relative">
              <div 
                className={`w-9 h-9 rounded-full flex justify-center items-center font-bold text-[13px] relative z-10 transition-all ${
                  day.met 
                    ? 'bg-gradient-to-tr from-[#34D399] to-[#10B981] text-white shadow-[0_0_12px_rgba(16,185,129,0.5)]' 
                    : 'bg-[#F1F5F9] text-[#94A3B8]'
                } ${day.isToday && day.met ? 'ring-2 ring-offset-2 ring-[#10B981]' : ''}`}
              >
                {day.met ? <CheckCircle2 className="w-5 h-5 text-white" /> : null}
                {!day.met ? <span className="block opacity-50">✕</span> : null}
              </div>
              <span className={`text-[11px] font-bold ${day.isToday ? 'text-[#1E293B]' : 'text-[#64748B]'}`}>
                {day.label}
              </span>
            </div>
          ))}
        </Card>
      </section>

      {/* Event Banner */}
      <div className="bg-white rounded-[1.25rem] p-4 flex items-center justify-between shadow-[0_4px_16px_rgba(0,0,0,0.02)] border-[1.5px] border-[#F1F5F9] cursor-pointer active:scale-[0.98] transition-all hover:border-[#D0E7F5] group mt-4 mb-2">
        <div>
          <h3 className="font-extrabold text-[14px] text-[#1E293B] mb-1 tracking-tight">디깅 나이트, 지금 선착순 입장중!</h3>
          <p className="text-[12px] font-bold text-[#64748B]">같이 몰입하고 싶은 친구들에게 알려주세요</p>
        </div>
        <div className="text-3xl group-hover:scale-110 transition-transform">
          💌
        </div>
      </div>

      {/* Comma's Unique Community Feature */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <h2 className="text-[16px] font-black tracking-tight text-[#1E293B] leading-snug">
            오직 쉼표에만 있는 기능 📴
          </h2>
        </div>
        <div className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-[1.25rem] p-5 shadow-[0_8px_24px_rgba(15,23,42,0.15)] relative overflow-hidden cursor-pointer active:scale-95 transition-all group">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B82F6] rounded-full blur-[3rem] opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <div className="absolute bottom-[-10px] left-[-10px] w-24 h-24 bg-[#10B981] rounded-full blur-[2.5rem] opacity-20 group-hover:opacity-30 transition-opacity"></div>
          
          <div className="flex justify-between items-start relative z-10 mb-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/10 backdrop-blur-md text-[#E2E8F0] border border-white/10 text-[11px] font-bold rounded-full mb-3">
                <WifiOff className="w-3.5 h-3.5 text-[#60A5FA]" /> 싱크로 단절 모드
              </div>
              <h3 className="font-extrabold text-[18px] text-white tracking-tight leading-snug mb-1.5">
                친구와 함께 화면 잠금, <br/>누가 먼저 포기할까요?
              </h3>
              <p className="text-[12px] font-medium text-[#94A3B8] leading-relaxed">
                동시에 스마트폰을 엎어두고 휴식을 시작하세요.<br/>먼저 화면을 켜는 사람에게 벌칙 알림이 갑니다!
              </p>
            </div>
          </div>
          
          <div className="flex bg-white/5 border border-white/10 rounded-[1rem] p-3 items-center justify-between relative z-10 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#EBF5FA] border-2 border-[#1E293B] flex items-center justify-center text-[13px] shadow-sm z-30">🐶</div>
                <div className="w-8 h-8 rounded-full bg-[#FEF3C7] border-2 border-[#1E293B] flex items-center justify-center text-[13px] shadow-sm z-20">🐱</div>
                <div className="w-8 h-8 rounded-full bg-[#F3E8FF] border-2 border-[#1E293B] flex items-center justify-center text-[13px] shadow-sm z-10">🐰</div>
              </div>
              <span className="text-[11px] font-bold text-[#CBD5E0]">친구 3명 접속 중</span>
            </div>
            <div 
              onClick={() => {
                setShowBattleModal(true);
                setBattleState('preparing');
              }}
              className="bg-white text-[#0F172A] px-4 py-2 rounded-[0.8rem] text-[12px] font-bold shadow-sm group-hover:bg-[#F8FAFC] transition-colors"
            >
              대결 시작
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Detox Stories */}
      <div className="mb-8">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-[16px] font-black tracking-tight text-[#1E293B] leading-snug">
            다른 사람들은<br/>어떻게 디톡스 할까요?
          </h2>
          <button className="text-[12px] font-bold text-[#64748B] bg-[#F1F5F9] px-3 py-1.5 rounded-full hover:bg-[#E2E8F0] transition-colors">
            더보기
          </button>
        </div>
        
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2 -mx-6 px-6">
          {/* Story 1 */}
          <div className="min-w-[240px] bg-white rounded-[1.25rem] p-4 border-[1.5px] border-[#F1F5F9] shadow-[0_4px_16px_rgba(0,0,0,0.02)] shrink-0">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#EBF5FA] flex items-center justify-center text-[12px]">🌿</div>
              <div>
                <p className="text-[12px] font-bold text-[#1E293B]">지호님</p>
                <p className="text-[10px] text-[#94A3B8]">방금 전 • 한강 나이트 러닝</p>
              </div>
            </div>
            <p className="text-[13px] font-medium text-[#475569] leading-relaxed mb-3 line-clamp-3">
              러닝할 때 핸드폰을 아예 집에 두고 나왔어요. 처음엔 불안했는데 뛰다 보니 바람 소리도 잘 들리고 잡생각이 사라져서 너무 좋았습니다!
            </p>
            <div className="flex gap-3 text-[12px] font-bold text-[#94A3B8]">
              <span className="flex items-center gap-1"><HeartPulse className="w-3.5 h-3.5" /> 24</span>
              <span className="flex items-center gap-1">💬 5</span>
            </div>
          </div>
          
          {/* Story 2 */}
          <div className="min-w-[240px] bg-white rounded-[1.25rem] p-4 border-[1.5px] border-[#F1F5F9] shadow-[0_4px_16px_rgba(0,0,0,0.02)] shrink-0">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#FEF3C7] flex items-center justify-center text-[12px]">☕</div>
              <div>
                <p className="text-[12px] font-bold text-[#1E293B]">민서님</p>
                <p className="text-[10px] text-[#94A3B8]">2시간 전 • 안국역 북카페</p>
              </div>
            </div>
            <p className="text-[13px] font-medium text-[#475569] leading-relaxed mb-3 line-clamp-3">
              노트북 금지 카페에 왔는데, 오랜만에 책 한 권을 다 읽었네요. 알람이 안 울리니까 온전히 제 시간에 집중할 수 있었어요.
            </p>
            <div className="flex gap-3 text-[12px] font-bold text-[#94A3B8]">
              <span className="flex items-center gap-1"><HeartPulse className="w-3.5 h-3.5" /> 18</span>
              <span className="flex items-center gap-1">💬 2</span>
            </div>
          </div>
          
          {/* Story 3 */}
          <div className="min-w-[240px] bg-white rounded-[1.25rem] p-4 border-[1.5px] border-[#F1F5F9] shadow-[0_4px_16px_rgba(0,0,0,0.02)] shrink-0">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#F3E8FF] flex items-center justify-center text-[12px]">🎨</div>
              <div>
                <p className="text-[12px] font-bold text-[#1E293B]">도윤님</p>
                <p className="text-[10px] text-[#94A3B8]">5시간 전 • 주말드로잉</p>
              </div>
            </div>
            <p className="text-[13px] font-medium text-[#475569] leading-relaxed mb-3 line-clamp-3">
              아이패드 대신 도화지랑 물감 꺼내서 그림 그렸습니다. 커맨드Z가 안 되니까 오히려 붓 터치 하나하나에 더 신중해지더라구요.
            </p>
            <div className="flex gap-3 text-[12px] font-bold text-[#94A3B8]">
              <span className="flex items-center gap-1"><HeartPulse className="w-3.5 h-3.5" /> 42</span>
              <span className="flex items-center gap-1">💬 8</span>
            </div>
          </div>
        </div>
      </div>

      {/* Map Recommendation Section */}
      <div className="mb-8">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-[16px] font-black tracking-tight text-[#1E293B] leading-snug">
            유나님을 위한<br/>오늘의 디깅 스팟 📍
          </h2>
        </div>
        
        <div className="bg-white rounded-[1.25rem] border-[1.5px] border-[#F1F5F9] shadow-[0_4px_16px_rgba(0,0,0,0.02)] overflow-hidden relative group cursor-pointer active:scale-[0.98] transition-all">
          {/* Map Area */}
          <div className="w-full h-[220px] bg-[#F8FAFC] relative overflow-hidden">
            {/* Fake map routes / roads */}
            <svg className="absolute inset-0 w-full h-[250px] text-white" stroke="currentColor" strokeWidth="8" fill="none" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
              <path d="M-20,80 Q100,90 150,10 M150,250 Q200,130 420,110 M100,80 Q150,180 50,280 M250,10 Q280,130 420,180 M150,80 L250,180 M300,-20 L350,150 M50,10 L150,150" />
            </svg>
            <svg className="absolute inset-0 w-full h-[250px] text-[#E2E8F0]" stroke="currentColor" strokeWidth="2" fill="none" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
              <path d="M-20,80 Q100,90 150,10 M150,250 Q200,130 420,110 M100,80 Q150,180 50,280 M250,10 Q280,130 420,180 M150,80 L250,180 M300,-20 L350,150 M50,10 L150,150" />
            </svg>
            
            {/* Fake Park block */}
            <svg className="absolute inset-0 w-full h-[250px] text-[#D1FAE5]/60" fill="currentColor" viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
               <polygon points="120,60 170,40 220,90 180,150 110,120" />
            </svg>

            {/* Map Labels Mock */}
            <div className="absolute top-[80px] left-[70px] text-[10px] font-bold text-[#94A3B8] rotate-[-15deg]">성북로31길</div>
            <div className="absolute top-[160px] left-[260px] text-[10px] font-bold text-[#94A3B8] rotate-[20deg]">성북로28가길</div>

            {/* Pin */}
            <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-10 h-10 bg-[#10B981] rounded-full text-white flex justify-center items-center shadow-lg border-2 border-white relative z-10 transition-transform group-hover:-translate-y-1">
                <Music className="w-5 h-5"/>
              </div>
              <div className="w-4 h-1.5 bg-black/15 rounded-[100%] mt-1 blur-[1px]"></div>
              <div className="absolute top-[3.2rem] bg-white px-2.5 py-1 rounded-md text-[11px] font-extrabold shadow-md text-[#059669] whitespace-nowrap border border-[#D1FAE5]">
                우정의공원
              </div>
            </div>
            
            {/* Map Controls Mock */}
            <div className="absolute top-3 right-3 flex flex-col bg-white rounded-md shadow-sm border border-[#E2E8F0] overflow-hidden">
              <div className="w-8 h-8 flex justify-center items-center text-[#64748B] border-b border-[#E2E8F0] font-medium text-lg">+</div>
              <div className="w-8 h-8 flex justify-center items-center text-[#64748B] font-medium text-lg">-</div>
            </div>
          </div>
          
          {/* Info Card */}
          <div className="p-5 bg-white relative z-10">
            <h3 className="font-extrabold text-[16px] text-[#1E293B] tracking-tight mb-1 group-hover:text-[#3B82F6] transition-colors">리홀뮤직갤러리</h3>
            <p className="text-[13px] font-medium text-[#94A3B8]">서울특별시 성북구 성북로31길 9</p>
          </div>
        </div>
      </div>

      <div className="mb-4 mt-8">
        <h2 className="text-[16px] font-black tracking-tight text-[#1E293B] leading-snug">
          스마트폰이 꺼진 시간,<br/>무엇으로 채울까요? 🔋
        </h2>
        <p className="text-[12px] font-bold text-[#64748B] mt-1">단순한 모임이 아닌, 오프라인 몰입 전용 모드</p>
      </div>

      <div className="flex flex-col gap-3 mb-8">
        {/* Running Mode */}
        <div className="bg-white rounded-[1.25rem] p-4 flex items-center justify-between shadow-[0_4px_16px_rgba(0,0,0,0.02)] border-[1.5px] border-[#F1F5F9] cursor-pointer hover:border-[#D0E7F5] transition-all group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#EFF6FF] rounded-full flex justify-center items-center text-2xl group-hover:scale-110 transition-transform">
              👟
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[14px] font-extrabold text-[#1E293B]">비행기 모드 러닝</span>
                <span className="bg-[#DBEAFE] text-[#2563EB] text-[9px] font-black px-1.5 py-0.5 rounded-sm tracking-wide">GPS 연동</span>
              </div>
              <p className="text-[11px] font-bold text-[#64748B]">모든 알림을 끄고 달린 거리와 시간을 기록해요</p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-[#CBD5E0] group-hover:text-[#3B82F6]" strokeWidth={2.5} />
        </div>

        {/* Reading Mode */}
        <div className="bg-white rounded-[1.25rem] p-4 flex items-center justify-between shadow-[0_4px_16px_rgba(0,0,0,0.02)] border-[1.5px] border-[#F1F5F9] cursor-pointer hover:border-[#D0E7F5] transition-all group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#FEF3C7] rounded-full flex justify-center items-center text-2xl group-hover:scale-110 transition-transform">
              📖
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[14px] font-extrabold text-[#1E293B]">올블락(All-Block) 독서</span>
                <span className="bg-[#FEF3C7] text-[#D97706] text-[9px] font-black px-1.5 py-0.5 rounded-sm tracking-wide">백색소음</span>
              </div>
              <p className="text-[11px] font-bold text-[#64748B]">방해금지가 켜지고 앱 내 백색소음만 재생돼요</p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-[#CBD5E0] group-hover:text-[#3B82F6]" strokeWidth={2.5} />
        </div>

        {/* Meditate Mode */}
        <div className="bg-white rounded-[1.25rem] p-4 flex items-center justify-between shadow-[0_4px_16px_rgba(0,0,0,0.02)] border-[1.5px] border-[#F1F5F9] cursor-pointer hover:border-[#D0E7F5] transition-all group">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#ECFDF5] rounded-full flex justify-center items-center text-2xl group-hover:scale-110 transition-transform">
              🧘
            </div>
            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className="text-[14px] font-extrabold text-[#1E293B]">화면 엎고 명상</span>
                <span className="bg-[#D1FAE5] text-[#059669] text-[9px] font-black px-1.5 py-0.5 rounded-sm tracking-wide">센서감지</span>
              </div>
              <p className="text-[11px] font-bold text-[#64748B]">스마트폰을 바닥에 엎어둔 시간만 명상으로 기록해요</p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-[#CBD5E0] group-hover:text-[#3B82F6]" strokeWidth={2.5} />
        </div>
      </div>

      {/* Battle Modal Overlay */}
      {showBattleModal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full h-[85vh] rounded-t-[2rem] p-6 flex flex-col relative animate-in slide-in-from-bottom duration-300 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
            <button 
              onClick={() => {
                setShowBattleModal(false);
                setBattleState('idle');
              }}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center bg-[#F1F5F9] rounded-full text-[#64748B] hover:bg-[#E2E8F0] active:scale-95 transition-all z-10"
            >
              <X className="w-5 h-5" />
            </button>
            
            {battleState === 'preparing' ? (
              <>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#EFF6FF] text-[#3B82F6] font-bold text-[12px] rounded-full w-fit mb-4 mt-6">
                  <WifiOff className="w-4 h-4" /> 싱크로 단절 모드
                </div>
                
                <h2 className="text-[24px] font-black tracking-tight text-[#1E293B] leading-snug mb-2">
                  누가 제일 오래<br/>스마트폰을 안 볼까요?
                </h2>
                <p className="text-[14px] font-medium text-[#64748B] mb-8 leading-relaxed">
                  스마트폰을 동시에 엎어두면 대결이 시작돼요.<br/>먼저 화면을 켜는 사람이 벌칙(간식 쏘기) 당첨!
                </p>

                {/* Participants */}
                <h3 className="text-[13px] font-extrabold text-[#1E293B] mb-3">참여자 (4명)</h3>
                <div className="flex gap-4 mb-8 overflow-x-auto pb-2 hide-scrollbar -mx-6 px-6">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-[4rem] h-[4rem] bg-[#F1F5F9] rounded-[1.25rem] flex items-center justify-center text-3xl border-[2.5px] border-[#10B981] relative shadow-sm">
                      👩🏻
                      <div className="absolute -top-1.5 -right-1.5 bg-[#10B981] text-white text-[9px] font-black px-2 py-0.5 rounded-full border-2 border-white shadow-sm">Me</div>
                    </div>
                    <span className="text-[12px] font-extrabold text-[#1E293B]">유나 (나)</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-[4rem] h-[4rem] bg-[#EBF5FA] rounded-[1.25rem] flex items-center justify-center text-3xl border border-[#E2E8F0] shadow-sm">🐶</div>
                    <span className="text-[12px] font-bold text-[#64748B]">지훈</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-[4rem] h-[4rem] bg-[#FEF3C7] rounded-[1.25rem] flex items-center justify-center text-3xl border border-[#E2E8F0] shadow-sm">🐱</div>
                    <span className="text-[12px] font-bold text-[#64748B]">민서</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-[4rem] h-[4rem] bg-[#F3E8FF] rounded-[1.25rem] flex items-center justify-center text-3xl border border-[#E2E8F0] shadow-sm">🐰</div>
                    <span className="text-[12px] font-bold text-[#64748B]">도윤</span>
                  </div>
                </div>

                <div className="mt-auto flex flex-col gap-4">
                  <div className="bg-white border border-[#E2E8F0] shadow-[0_4px_16px_rgba(0,0,0,0.04)] rounded-[1.25rem] p-4 flex items-center gap-4 relative overflow-hidden group">
                    <div className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-[#FFE4E6] opacity-40 blur-[2rem] group-hover:opacity-60 transition-opacity"></div>
                    <div className="w-11 h-11 bg-gradient-to-br from-[#FFE4E6] to-[#FECDD3] rounded-[0.9rem] flex items-center justify-center text-[#E11D48] shrink-0 border border-[#FECDD3]/50 transform group-hover:rotate-[10deg] transition-transform">
                      <Trophy className="w-5 h-5" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1 relative z-10">
                      <div className="inline-flex px-1.5 py-0.5 bg-[#FFE4E6] text-[#E11D48] text-[10px] font-black rounded uppercase mb-1.5 tracking-wider">
                        오늘의 벌칙
                      </div>
                      <p className="text-[14px] font-black text-[#1E293B] tracking-tight leading-snug">
                        제일 먼저 화면 켜는 사람이 커피 쏘기 ☕️
                      </p>
                    </div>
                  </div>

                  <button 
                    onClick={() => setBattleState('battling')}
                    className="w-full bg-[#1E293B] text-white py-4 rounded-[1.25rem] font-bold text-[15px] flex justify-center items-center gap-2 shadow-[0_8px_20px_rgba(30,41,59,0.2)] active:scale-[0.98] transition-all hover:bg-[#0F172A]"
                  >
                    <Smartphone className="w-5 h-5" /> 스마트폰 엎어두고 대결 시작
                  </button>
                </div>
              </>
            ) : (
              <div className="h-full flex flex-col items-center justify-center pt-8 text-center animate-in zoom-in-95 duration-500">
                <div className="w-24 h-24 bg-[#F1F5F9] rounded-full flex items-center justify-center text-5xl mb-6 relative shadow-inner">
                  📱
                  <div className="absolute inset-0 border-4 border-[#3B82F6] rounded-full animate-ping opacity-20"></div>
                  <div className="absolute inset-0 border-2 border-[#10B981] rounded-full animate-ping opacity-40 delay-150"></div>
                </div>
                <h2 className="text-[22px] font-black tracking-tight text-[#1E293B] mb-3">
                  준비 완료!
                </h2>
                <p className="text-[14px] font-medium text-[#64748B] leading-relaxed max-w-[240px]">
                  지금 스마트폰을 엎어두세요.<br/>
                  화면이 꺼지면 본격적으로 대결이 시작됩니다.
                </p>
                <div className="mt-12 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#3B82F6] animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-[#3B82F6] animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 rounded-full bg-[#3B82F6] animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Match Modal Overlay */}
      {showMatchModal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full h-[85vh] rounded-t-[2rem] p-6 flex flex-col relative animate-in slide-in-from-bottom duration-300 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
            <button 
              onClick={() => {
                setShowMatchModal(false);
                setMatchState('idle');
              }}
              className="absolute top-5 right-5 w-8 h-8 bg-[#F1F5F9] rounded-full flex items-center justify-center text-[#64748B] hover:bg-[#E2E8F0] transition-colors z-10"
            >
              <X className="w-5 h-5" strokeWidth={2.5} />
            </button>

            {matchState === 'idle' ? (
              <>
                <div className="flex flex-col items-center pt-2 pb-6 border-b border-[#F1F5F9]">
                  <div className="w-16 h-16 bg-[#EFF6FF] rounded-full flex items-center justify-center text-3xl mb-4 relative shadow-sm">
                    🤝
                    <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-sm">
                      <MapPin className="w-4 h-4 text-[#3B82F6]" strokeWidth={3} />
                    </div>
                  </div>
                  <h2 className="text-[20px] font-black tracking-tight text-[#1E293B] mb-2 text-center leading-snug">
                    동네 디톡스 짝꿍 찾기
                  </h2>
                  <p className="text-[13px] font-medium text-[#64748B] text-center max-w-[260px] leading-relaxed">
                    근처 1km 내에 있는 동일한 취향을 가진 이웃과<br/>안전하게 매칭하여 오프라인 몰입을 함께하세요.
                  </p>
                </div>

                <div className="flex-1 overflow-y-auto pt-6 pb-20 scrollbar-hide">
                  <h3 className="text-[13px] font-extrabold text-[#1E293B] mb-3">내 공통 취향 및 장소 설정</h3>
                  
                  <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[1rem] p-4 mb-4">
                    <div className="flex gap-2 mb-3">
                      <span className="bg-[#3B82F6] text-white px-3 py-1.5 rounded-full text-[12px] font-bold shadow-sm">#러닝</span>
                      <span className="bg-white border border-[#E2E8F0] text-[#64748B] px-3 py-1.5 rounded-full text-[12px] font-bold">#독서</span>
                      <span className="bg-white border border-[#E2E8F0] text-[#64748B] px-3 py-1.5 rounded-full text-[12px] font-bold">#명상</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white rounded-[0.8rem] border border-[#E2E8F0]">
                      <MapPin className="w-4 h-4 text-[#3B82F6]" strokeWidth={2.5} />
                      <span className="text-[13px] font-bold text-[#1E293B]">반포한강공원 달빛광장</span>
                      <button className="ml-auto text-[11px] font-bold text-[#3B82F6] bg-[#EFF6FF] px-2 py-1 rounded-md">변경</button>
                    </div>
                  </div>

                  <h3 className="text-[13px] font-extrabold text-[#1E293B] mb-3 mt-6">안전한 매칭 시스템 🛡️</h3>
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-3 items-start bg-white p-4 rounded-[1rem] border border-[#E2E8F0] shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                      <div className="w-8 h-8 rounded-full bg-[#ECFDF5] flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                      </div>
                      <div>
                        <p className="text-[13px] font-bold text-[#1E293B] mb-1">앱 내 채팅만 지원</p>
                        <p className="text-[11px] text-[#64748B] leading-relaxed">개인 연락처나 SNS를 일절 공유하지 않으며 오직 약속장소 정하기용 채팅만 활성화됩니다.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 items-start bg-white p-4 rounded-[1rem] border border-[#E2E8F0] shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                      <div className="w-8 h-8 rounded-full bg-[#FEF2F2] flex items-center justify-center shrink-0">
                        <EyeOff className="w-4 h-4 text-[#EF4444]" />
                      </div>
                      <div>
                        <p className="text-[13px] font-bold text-[#1E293B] mb-1">블라인드 프로필</p>
                        <p className="text-[11px] text-[#64748B] leading-relaxed">디지털 단절을 위한 목적 외에 성별, 나이, 사진 등 불필요한 개인정보는 노출되지 않습니다.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-4 bg-gradient-to-t from-white via-white to-transparent absolute bottom-6 left-6 right-6">
                  <button 
                    onClick={() => setMatchState('searching')}
                    className="w-full bg-[#3B82F6] text-white py-4 rounded-[1.25rem] font-bold text-[15px] flex justify-center items-center gap-2 shadow-[0_8px_20px_rgba(59,130,246,0.3)] active:scale-[0.98] transition-all hover:bg-[#2563EB]"
                  >
                    <Sparkles className="w-5 h-5" /> 주변 짝꿍 매칭 시작하기
                  </button>
                </div>
              </>
            ) : matchState === 'searching' ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-500">
                <div className="relative mb-8 mt-[-10vh]">
                  {/* Radar effect */}
                  <div className="w-32 h-32 border border-[#3B82F6]/30 rounded-full flex items-center justify-center relative">
                    <div className="absolute inset-0 border-2 border-[#3B82F6] rounded-full animate-ping opacity-20 duration-1000"></div>
                    <div className="absolute inset-0 border border-[#3B82F6] rounded-full animate-ping opacity-40 duration-1000 delay-300"></div>
                    <div className="w-16 h-16 bg-[#EFF6FF] rounded-full flex items-center justify-center z-10 shadow-lg">
                      <MapPin className="w-8 h-8 text-[#3B82F6] animate-pulse" />
                    </div>
                  </div>
                </div>
                <h2 className="text-[20px] font-black tracking-tight text-[#1E293B] mb-3">
                  주변 이웃을 찾고 있어요
                </h2>
                <p className="text-[13px] font-medium text-[#64748B] leading-relaxed max-w-[220px]">
                  #반포한강공원 #러닝 취향이 맞는<br/>사람들을 검색중입니다...
                </p>
                
                {/* Temporary button to simulate finding someone */}
                <button 
                  onClick={() => setMatchState('matched')}
                  className="mt-12 px-6 py-2 bg-[#F1F5F9] text-[#64748B] text-[12px] font-bold rounded-full hover:bg-[#E2E8F0] transition-colors"
                >
                  (테스트용) 매칭 완료하기
                </button>
              </div>
            ) : (
              <div className="h-full flex flex-col pt-8 text-center animate-in slide-in-from-bottom-8 duration-500">
                <div className="flex justify-center mb-6 mt-4">
                  <div className="flex bg-[#F8FAFC] p-2 rounded-full shadow-inner items-center gap-3 border border-[#E2E8F0]">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm border-[1.5px] border-[#3B82F6]">
                      🏃🏻‍♂️
                    </div>
                    <Sparkles className="w-5 h-5 text-[#3B82F6]" />
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm border-[1.5px] border-[#3B82F6]">
                      🚴‍♀️
                    </div>
                  </div>
                </div>
                <h2 className="text-[22px] font-black tracking-tight text-[#1E293B] mb-2">
                  짝꿍 매칭 성공! 🎉
                </h2>
                <p className="text-[13px] font-medium text-[#64748B] leading-relaxed mb-8">
                  근처에 있는 디톡스 짝꿍과 연결되었습니다.<br/>방해금지 모드를 켜고 가볍게 러닝할 준비 되셨나요?
                </p>
                
                <div className="bg-white border border-[#E2E8F0] shadow-sm rounded-[1rem] p-4 text-left mx-2 mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-[#EFF6FF] text-[#3B82F6] rounded-full flex justify-center items-center font-black">
                      A
                    </div>
                    <div>
                      <p className="text-[14px] font-extrabold text-[#1E293B]">익명의 이웃 A</p>
                      <p className="text-[11px] font-bold text-[#64748B]">거리: 300m 이내 · 평점: ⭐️4.9</p>
                    </div>
                  </div>
                  <div className="bg-[#F8FAFC] p-3 rounded-[0.8rem] border border-[#E2E8F0]">
                    <p className="text-[12px] font-medium text-[#475569]">
                      "안녕하세요! 달빛광장 편의점 앞에서 뵈어요. 저는 회색 러닝화 신고 있습니다 👟"
                    </p>
                  </div>
                </div>

                <div className="mt-auto">
                  <button 
                    onClick={() => {
                      setShowMatchModal(false);
                      setMatchState('idle');
                    }}
                    className="w-full bg-[#1E293B] text-white py-4 rounded-[1.25rem] font-bold text-[15px] flex justify-center items-center shadow-[0_8px_20px_rgba(30,41,59,0.2)] active:scale-[0.98] transition-all hover:bg-[#0F172A]"
                  >
                    약속 장소로 채팅하기
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
