'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ChevronRight, Menu, Globe, HeartPulse, 
  ShieldCheck, DollarSign, Microscope, ArrowRight, X
} from "lucide-react";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (elementId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const goHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-800 scroll-smooth">
      
      {/* 导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <button onClick={goHome} className="flex items-center focus:outline-none">
              <Image 
                src="/logo.jpg" 
                alt="Carevita 凯维他 Logo" 
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
                priority
              />
            </button>
            <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
              <button onClick={() => scrollToSection("hero")} className="text-blue-600 border-b-2 border-blue-600 pb-1">首页</button>
              <Link href="/products" className="text-slate-600 hover:text-blue-600 transition">产品</Link>
              <Link href="/about" className="text-slate-600 hover:text-blue-600 transition">关于凯维他</Link>
              <Link href="/contact" className="text-slate-600 hover:text-blue-600 transition">联系我们</Link>
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
            <button onClick={() => scrollToSection("hero")} className="block w-full text-left text-sm font-medium text-blue-600">首页</button>
            <Link href="/products" onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-sm font-medium text-slate-600">产品</Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-sm font-medium text-slate-600">关于凯维他</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block w-full text-left text-sm font-medium text-slate-600">联系我们</Link>
          </div>
        )}
      </nav>

      <div className="h-20"></div>

      {/* 首屏主视觉区 - 使用新图片 */}
      <section 
        id="hero" 
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-[calc(100vh-5rem)] flex items-center"
        style={{ backgroundImage: "url('/首屏产品图新.jpg')" }}
      >
        <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-md text-left">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-900 leading-tight">
              Carevita 凯维他™
            </h1>
            <p className="mt-2 text-xl sm:text-2xl font-semibold text-slate-800">
              中国严肃医学营养领航品牌
            </p>
            <p className="mt-2 text-sm sm:text-base font-medium text-slate-700">
              精准营养，凯维他为健康赋能
            </p>
            <p className="mt-1 text-xs text-slate-600 leading-relaxed">
              提供安全、有效、高性价比的专业营养解决方案。
            </p>
            <div className="mt-4 h-14"></div>
            <div className="mt-2 flex flex-wrap gap-4">
              <button onClick={() => scrollToSection("products-matrix")} className="inline-flex items-center rounded-md bg-blue-900 px-5 py-2 text-sm sm:text-base font-bold text-white hover:bg-blue-800 transition shadow-sm">
                了解产品 <ChevronRight size={14} className="ml-1" />
              </button>
              <button onClick={() => scrollToSection("brand")} className="inline-flex items-center rounded-md border border-slate-300 bg-white px-5 py-2 text-sm sm:text-base font-bold text-slate-700 hover:bg-slate-50 transition">
                关于凯维他
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 医学级科学配方区 */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat min-h-[calc(100vh-5rem)] flex items-center"
        style={{ backgroundImage: "url('/医学.jpg')" }}
      >
        <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-md text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              医学级科学配方
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              拒绝概念性添加，每一种成分都有明确的功效依据
            </p>
            <p className="mt-2 text-sm sm:text-base text-slate-700 leading-relaxed">
              精准匹配用户健康痛点
            </p>
          </div>
        </div>
      </section>

      {/* 全球级原料甄选 */}
      <section 
        id="brand" 
        className="relative bg-cover bg-center bg-no-repeat min-h-[calc(100vh-5rem)] flex items-center"
        style={{ backgroundImage: "url('/map.jpg')" }}
      >
        <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="max-w-md text-left">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                全球级原料甄选
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                坚持“好原料才有好产品”，全球溯源核心原料。
              </p>
              <p className="mt-2 text-sm sm:text-base text-slate-700 leading-relaxed">
                从美国黄金奶源乳清，到挪威深海渔场的鱼油，再到智利非转基因天然纤维
              </p>
              <p className="mt-1 text-sm sm:text-base text-slate-700 leading-relaxed">
                每一批原料均经过严苛检测
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md overflow-hidden flex flex-col">
                <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                  <Image src="/黄金奶源.jpg" alt="黄金奶源乳清" fill className="object-cover" />
                </div>
                <div className="p-4 text-center">
                  <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">美国</span>
                  <h4 className="text-base font-bold text-slate-900 mt-2">黄金奶源乳清</h4>
                  <p className="text-xs text-slate-500 mt-1">纯净牧场，高活性乳清蛋白</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md overflow-hidden flex flex-col">
                <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                  <Image src="/深海鱼油.jpg" alt="深海鱼油" fill className="object-cover" />
                </div>
                <div className="p-4 text-center">
                  <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">挪威</span>
                  <h4 className="text-base font-bold text-slate-900 mt-2">深海鱼油</h4>
                  <p className="text-xs text-slate-500 mt-1">纯净海域，高纯度Omega-3</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md overflow-hidden flex flex-col">
                <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                  <Image src="/膳食纤维.jpg" alt="天然纤维粉" fill className="object-cover" />
                </div>
                <div className="p-4 text-center">
                  <span className="inline-block text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">智利</span>
                  <h4 className="text-base font-bold text-slate-900 mt-2">天然纤维粉</h4>
                  <p className="text-xs text-slate-500 mt-1">非转基因，高活性膳食纤维</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 普惠级高性价比 - 使用新图片 */}
      <div className="relative">
        <img 
          src="/family新.jpg" 
          alt="全家福" 
          className="w-full h-auto block"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-md text-left">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                普惠级高性价比
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                摒弃行业过度营销与层层溢价
              </p>
              <p className="mt-2 text-sm sm:text-base text-slate-700 leading-relaxed">
                坚持 “院线级”品质，“极致”高性价比
              </p>
              <p className="mt-2 text-sm sm:text-base text-slate-700 leading-relaxed">
                让专业营养无门槛
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 产品矩阵展示区 */}
      <section id="products-matrix" className="py-20 bg-slate-50/60 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">产品矩阵</h2>
            <p className="text-sm text-slate-400 mt-2">中国严肃医学营养方案</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: "分离乳清蛋白粉", 
                img: "/product-whey-blue.jpg", 
                slug: "whey-isolate", 
                features: ["100%美国进口分离乳清", "85%高蛋白含量", "小分子蛋白，极易吸收"] 
              },
              { 
                name: "HMB 乳清蛋白粉", 
                img: "/product-whey-green.jpg", 
                slug: "hmb-whey", 
                features: ["100%进口乳清粉", "特别添加 CaHMB 核心成分", "科学护肌强韧骨骼"] 
              },
              { 
                name: "水溶性膳食纤维粉", 
                img: "/product-fiber.jpg", 
                slug: "fiber", 
                features: ["100%智利进口高品质原粉", "长短链科学膳食结构", "特别添加低聚果糖益生元"] 
              },
              { 
                name: "乐酚鱼油软胶囊", 
                img: "/product-fishoil.jpg", 
                slug: "fish-oil", 
                features: ["来自挪威金牌 EPAX 源头", "90%超高纯度 OMEGA-3", "TGN 黄金人体吸收结构"] 
              }
            ].map((product, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-lg overflow-hidden flex flex-col">
                <div className="relative h-56 w-full bg-slate-50 overflow-hidden">
                  <Image src={product.img} alt={product.name} fill className="object-contain p-4" />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
                  <ul className="text-sm text-slate-500 mt-3 space-y-1 list-disc list-inside">
                    {product.features.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                  <Link href={`/products/${product.slug}`} className="mt-6 w-full py-2.5 bg-blue-900 hover:bg-blue-800 text-white rounded-lg text-sm font-semibold flex items-center justify-center transition text-center">
                    了解更多 <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 底部区域 */}
      <footer 
        id="contact" 
        className="relative py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/mountain.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-extrabold">Carevita 凯维他</h2>
          <p className="mt-4 text-sm max-w-xl mx-auto opacity-90">
            每一次选择健康，都离更好的自己更近一步<br />
            凯维他，一路与您同行
          </p>
          <div className="mt-8 flex flex-col items-center space-y-2">
            <p>📧 邮箱：contact@carevita.com</p>
            <p>📞 电话：400-123-4567</p>
            <p>📍 地址：中国上海市某某区某某路123号</p>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20 text-xs opacity-80">
            <p>© 2026 Carevita 凯维他版权所有 | 中国严肃医学营养领航品牌</p>
            <p className="mt-2">隐私政策 | 服务条款</p>
          </div>
        </div>
      </footer>
    </div>
  );
}