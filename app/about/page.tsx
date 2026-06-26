'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat font-sans antialiased"
      style={{ backgroundImage: "url('/山川背景图.jpg')" }}
    >
      {/* 统一半透明黑色遮罩 */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      
      <div className="relative z-10 text-white">
        
        {/* 导航栏 */}
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              <Link href="/" className="flex items-center focus:outline-none">
                <Image 
                  src="/logo.jpg" 
                  alt="Carevita 凯维他 Logo" 
                  width={120}
                  height={40}
                  className="h-10 w-auto object-contain"
                  priority
                />
              </Link>
              <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
                <Link href="/" className="text-slate-600 hover:text-blue-600">首页</Link>
                <Link href="/products" className="text-slate-600 hover:text-blue-600">产品</Link>
                <Link href="/news" className="text-slate-600 hover:text-blue-600">营养百科</Link>
                <Link href="/about" className="text-blue-600 border-b-2 border-blue-600 pb-1">关于凯维他</Link>
                <Link href="/contact" className="text-slate-600 hover:text-blue-600">联系我们</Link>
              </div>
              <div className="flex items-center md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 p-2">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-3">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-sm font-medium text-slate-600">首页</Link>
              <Link href="/products" onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-sm font-medium text-slate-600">产品</Link>
              <Link href="/news" onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-sm font-medium text-slate-600">营养百科</Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-sm font-medium text-blue-600">关于凯维他</Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-sm font-medium text-slate-600">联系我们</Link>
            </div>
          )}
        </nav>

        <div className="h-20"></div>

        {/* 关于凯维他主内容 */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">关于凯维他</h1>
              <div className="mt-3 h-0.5 w-16 bg-blue-400 mx-auto rounded-full"></div>
            </div>

            <div className="max-w-2xl mx-auto space-y-6 text-white/90 leading-relaxed">
              <p className="text-sm sm:text-base">
                在国民健康意识全面觉醒的今天，我们见过太多营养市场的矛盾与遗憾。
              </p>
              <p className="text-sm sm:text-base">
                一边是大众对医学级精准营养的需求日益迫切，另一边，却是行业的浮躁与参差 —— 高端品牌层层溢价，让专业营养成了少数人的选择；网红产品沉迷概念营销，无效添加、虚标含量屡见不鲜。
              </p>
              <p className="text-sm sm:text-base">
                我们始终在问：有没有一个品牌，能抛开营销噱头，回归营养的本质？有没有一款产品，能以医学的严谨为标尺，让普通人也能轻松拥有安全、有效、高性价比的专业营养？
              </p>
              <p className="text-base sm:text-lg font-semibold text-white">
                凯维他 CareVita，便诞生于这个朴素的初心。
              </p>
              <p className="text-sm sm:text-base">
                CareVita，是我们对品牌初心的最好注解 ——<span className="font-medium text-blue-300">Care</span>，是源于医学的专业关怀与严谨守护；<span className="font-medium text-blue-300">Vita</span>，是对生命本真活力的敬畏与赋能。我们锚定「严肃医学营养」的品牌内核，拒绝随波逐流的概念炒作，从诞生之初，便立下了三条不可动摇的品牌铁律：
              </p>

              {/* 三条铁律卡片 */}
              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="rounded-xl p-4 border border-white/20 bg-transparent">
                  <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">以循证医学为根</h3>
                  <p className="text-xs text-white/80">所有配方必须有明确的临床营养研究支撑，拒绝任何概念性添加，每一种成分、每一个配比，都只为解决真实的健康痛点。</p>
                </div>
                <div className="rounded-xl p-4 border border-white/20 bg-transparent">
                  <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">以极致品控为骨</h3>
                  <p className="text-xs text-white/80">从原料溯源到成品出厂，全链路遵循医学级质量管理标准。走遍全球优质原料产区，每一批原料都经过纯度、活性、安全性三重严苛检测。</p>
                </div>
                <div className="rounded-xl p-4 border border-white/20 bg-transparent">
                  <div className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">以普惠初心为魂</h3>
                  <p className="text-xs text-white/80">摒弃行业过度营销与层层溢价，把每一分成本都用在产品本身。院线级的品质，大众化的价格，让专业营养不再有门槛。</p>
                </div>
              </div>

              <p className="text-sm sm:text-base">
                凯维他的每一款产品，都是我们对「医学级精准营养」的践行。我们不做迎合流量的爆款，只做能长久陪伴用户的、值得信赖的营养伙伴。
              </p>
              <p className="text-sm sm:text-base italic border-l-4 border-blue-400 pl-3 py-1 bg-white/5 rounded-r-lg">
                一路走来，凯维他始终相信，好的营养，从来不是复杂的概念与昂贵的溢价，而是源于科学的严谨、源于对原料的敬畏、源于对用户的真诚。未来，我们仍将坚守「严肃医学营养」的初心，以循证为尺，以营养为桥，让医学级精准营养走进千家万户，守护每一个中国人的健康活力，守护每一个家庭的幸福日常。
              </p>
            </div>

            {/* 联系信息 */}
            <div className="mt-12 text-center border-t border-white/20 pt-6">
              <p className="text-white/70 text-xs">如有合作或咨询需求，欢迎联系我们</p>
              <div className="mt-3 flex flex-col sm:flex-row justify-center gap-3 text-xs text-white/60">
                <span>📞 4006882779</span>
                <span>📍 香港葵涌泰林路144~150号金田工业大厦15楼</span>
              </div>
            </div>
          </div>
        </section>

        {/* 页脚 */}
        <footer className="py-6 text-center text-white/60 text-[11px] border-t border-white/10">
          <p>© 2026 Carevita 凯维他版权所有 | 中国严肃医学营养领航品牌</p>
          <p className="mt-1">隐私政策 | 服务条款</p>
        </footer>
      </div>
    </div>
  );
}