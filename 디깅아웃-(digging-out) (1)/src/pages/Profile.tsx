import React from 'react';
import { Card, SectionTitle, Button } from '../components/ui';
import { Settings, Bell, ChevronRight, LogOut, Shield, Heart } from 'lucide-react';

export default function Profile() {
  const menuGroups = [
    {
      title: "계정 및 설정",
      items: [
        { icon: <Heart className="w-4 h-4 text-blue-500" />, label: "내 취향 태그 관리" },
        { icon: <Bell className="w-4 h-4 text-neutral-500" />, label: "푸시 및 알림" },
        { icon: <Shield className="w-4 h-4 text-neutral-500" />, label: "보안 및 개인정보" },
      ]
    },
    {
      title: "서비스 이용",
      items: [
        { icon: null, label: "새로운 소식" },
        { icon: null, label: "고객 지원" },
        { icon: null, label: "버전 정보", value: "v1.2.0" },
      ]
    }
  ];

  return (
    <div className="px-6 pt-12 flex flex-col h-full gap-8 bg-[#F5F7FA] min-h-screen pb-32">
      
      {/* Profile Header */}
      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="w-16 h-16 bg-white rounded-full border border-neutral-100 shadow-[0_8px_20px_rgba(0,0,0,0.03)] overflow-hidden">
              <img src="https://i.pravatar.cc/150?img=11" alt="profile" className="w-full h-full object-cover" />
            </div>
          </div>
          <div>
            <h2 className="text-[20px] font-black text-[#1D1D1F] tracking-tight">유나님</h2>
            <p className="text-[13px] font-medium text-neutral-400 mt-0.5">도심 속 여유 탐험가</p>
          </div>
        </div>
        <button className="w-10 h-10 bg-white border border-neutral-100 rounded-full flex justify-center items-center shadow-sm hover:bg-neutral-50 active:scale-95 transition-transform text-[#1D1D1F]">
          <Settings className="w-5 h-5" strokeWidth={2}/>
        </button>
      </div>

      {/* Menus Block */}
      <div className="flex flex-col gap-5">
        {menuGroups.map((group, gIdx) => (
          <Card key={gIdx} className="p-0 overflow-hidden !rounded-[2rem]">
            <div className="px-6 pt-6 pb-2 text-[12px] font-bold text-[#94A3B8] tracking-wider">
              {group.title}
            </div>
            <div className="flex flex-col pb-2">
              {group.items.map((item, iIdx) => (
                <button key={iIdx} className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#F8FAFC] active:bg-[#F1F5F9] transition-colors">
                  <div className="flex items-center gap-4">
                    {item.icon && <div className="w-10 h-10 bg-[#F8FAFC] rounded-full flex items-center justify-center border-[2px] border-[#F1F5F9]">{item.icon}</div>}
                    <span className="text-[15px] font-bold text-[#1E293B]">{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.value && <span className="text-[13px] font-bold text-[#94A3B8] bg-[#F1F5F9] px-3 py-1 rounded-full">{item.value}</span>}
                    <ChevronRight className="w-5 h-5 text-[#CBD5E0]" strokeWidth={2.5}/>
                  </div>
                </button>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Bottom Actions */}
      <div className="mt-4 flex justify-center pb-8">
        <button className="text-[13px] font-bold text-neutral-400 hover:text-neutral-600 transition-colors flex items-center gap-2">
          <LogOut className="w-4 h-4" /> 로그아웃
        </button>
      </div>

    </div>
  );
}
