import React, { useState } from 'react';
import { Search, Check, Plus } from 'lucide-react';

interface RegionCardProps {
  label: string;
  name: string;
  selected: boolean;
  onClick: () => void;
}

const RegionCard: React.FC<RegionCardProps> = ({ label, name, selected, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`px-4 py-4 rounded-[1rem] border-[1.5px] relative cursor-pointer active:scale-95 transition-all flex flex-col justify-center min-h-[76px] ${
        selected ? 'bg-[#F0F8FF] border-[#3B82F6]' : 'bg-white border-[#E2E8F0] shadow-sm hover:border-[#CBD5E0]'
      }`}
    >
      <span className="text-[11px] font-bold text-[#94A3B8] leading-tight mb-1">{label}</span>
      <h3 className={`text-[15px] font-black tracking-tight ${selected ? 'text-[#3B82F6]' : 'text-[#1E293B]'}`}>{name}</h3>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center">
        {selected ? (
          <div className="w-[1.125rem] h-[1.125rem] bg-[#3B82F6] rounded-full flex items-center justify-center text-white">
            <Check className="w-3 h-3" strokeWidth={3.5}/>
          </div>
        ) : (
          <div className="w-[1.125rem] h-[1.125rem] bg-[#F1F5F9] rounded-full flex items-center justify-center text-[#94A3B8]">
            <Plus className="w-3 h-3" strokeWidth={3}/>
          </div>
        )}
      </div>
    </div>
  );
};

interface CityCardProps {
  name: string;
  emoji: string;
  selected: boolean;
  onClick: () => void;
}

const CityCard: React.FC<CityCardProps> = ({ name, emoji, selected, onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className={`pt-3 pb-3 flex flex-col items-center gap-2 cursor-pointer active:scale-95 transition-transform rounded-[1rem] border-[1.5px] relative ${
        selected ? 'bg-[#F0F8FF] border-[#3B82F6]' : 'bg-[#F8FAFC] border-transparent hover:border-[#E2E8F0]'
      }`}
    >
      <div className="absolute top-2 left-1/2 translate-x-2">
        {selected ? (
          <div className="w-[1.125rem] h-[1.125rem] bg-[#3B82F6] rounded-full flex items-center justify-center text-white shadow-sm ring-2 ring-white">
            <Check className="w-3 h-3" strokeWidth={3.5}/>
          </div>
        ) : (
          <div className="w-[1.125rem] h-[1.125rem] bg-[#F1F5F9] border border-[#CBD5E0] rounded-full flex items-center justify-center text-[#94A3B8] shadow-sm z-10 ring-2 ring-white">
            <Plus className="w-3 h-3" strokeWidth={3}/>
          </div>
        )}
      </div>
      
      <div className={`w-[48px] h-[48px] rounded-full flex items-center justify-center text-2xl shadow-sm relative z-0 ${selected ? 'bg-white border-2 border-[#3B82F6]' : 'bg-white border-2 border-transparent'}`}>
        {emoji}
      </div>
      <span className={`text-[12px] font-bold ${selected ? 'text-[#3B82F6]' : 'text-[#64748B]'}`}>{name}</span>
    </div>
  );
};

export default function SpatialTrack() {
  const [selectedRegions, setSelectedRegions] = useState<string[]>(['성남 정자동', '판교신도시', '망리단길']);
  const [selectedCities, setSelectedCities] = useState<string[]>(['여수시']);

  const toggleRegion = (region: string) => {
    setSelectedRegions(prev => 
      prev.includes(region) ? prev.filter(r => r !== region) : [...prev, region]
    );
  };

  const toggleCity = (city: string) => {
    setSelectedCities(prev => 
      prev.includes(city) ? prev.filter(c => c !== city) : [...prev, city]
    );
  };

  return (
    <div className="min-h-screen bg-[#F4F6FC] pt-6 px-4 pb-24 font-sans">
      <div className="bg-white rounded-[1.5rem] shadow-sm overflow-hidden p-6">
        {/* Header */}
        <div className="mb-6">
          <span className="text-[#94A3B8] font-bold text-[13px] tracking-wider">1 / 3</span>
          <h1 className="text-[22px] font-black tracking-tight mt-1 mb-2 text-[#1E293B] leading-snug">
            요즘 관심 있는 지역을<br/>골라보세요
          </h1>
          <p className="text-[13px] font-bold text-[#64748B]">이 지역 리뷰를 피드에서 모아볼 수 있어요</p>
        </div>

        {/* Search */}
        <div className="relative mb-8">
          <input 
            type="text" 
            placeholder="지역명으로 찾기" 
            className="w-full bg-white border-[1.5px] border-[#E2E8F0] rounded-[0.8rem] py-3 px-4 pr-12 text-[14px] outline-none hover:border-[#CBD5E0] focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] font-bold text-[#1E293B] placeholder-[#94A3B8] transition-colors"
          />
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1E293B] w-5 h-5" strokeWidth={2} />
        </div>

        {/* Section 1 */}
        <div className="mb-4 flex items-center gap-1.5 px-0.5">
          <span className="text-[16px]">👀</span>
          <h2 className="text-[14px] font-extrabold text-[#1E293B] tracking-tight">유나님 좋아하실 것 같아요</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-2.5 mb-8">
          <RegionCard label="자주 방문한" name="성남 정자동" selected={selectedRegions.includes('성남 정자동')} onClick={() => toggleRegion('성남 정자동')} />
          <RegionCard label="함께 추천하는" name="정자동카페골목" selected={selectedRegions.includes('정자동카페골목')} onClick={() => toggleRegion('정자동카페골목')} />
          <RegionCard label="함께 추천하는" name="율동공원" selected={selectedRegions.includes('율동공원')} onClick={() => toggleRegion('율동공원')} />
          <RegionCard label="함께 추천하는" name="판교신도시" selected={selectedRegions.includes('판교신도시')} onClick={() => toggleRegion('판교신도시')} />
          <RegionCard label="최근 검색한" name="서울 마포구" selected={selectedRegions.includes('서울 마포구')} onClick={() => toggleRegion('서울 마포구')} />
          <RegionCard label="함께 추천하는" name="망리단길" selected={selectedRegions.includes('망리단길')} onClick={() => toggleRegion('망리단길')} />
        </div>

        {/* Section 2 */}
        <div className="mb-4 flex items-center gap-1.5 px-0.5">
          <span className="text-[16px]">☝️</span>
          <h2 className="text-[14px] font-extrabold text-[#1E293B] tracking-tight">요즘 많이 찾아봐요</h2>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          <CityCard name="강릉시" emoji="🚆" selected={selectedCities.includes('강릉시')} onClick={() => toggleCity('강릉시')} />
          <CityCard name="여수시" emoji="🌉" selected={selectedCities.includes('여수시')} onClick={() => toggleCity('여수시')} />
          <CityCard name="속초시" emoji="🏖️" selected={selectedCities.includes('속초시')} onClick={() => toggleCity('속초시')} />
          <CityCard name="제주시" emoji="🍊" selected={selectedCities.includes('제주시')} onClick={() => toggleCity('제주시')} />
          <CityCard name="서귀포시" emoji="⛰️" selected={selectedCities.includes('서귀포시')} onClick={() => toggleCity('서귀포시')} />
          <CityCard name="경주시" emoji="🏯" selected={selectedCities.includes('경주시')} onClick={() => toggleCity('경주시')} />
        </div>
      </div>
    </div>
  );
}
