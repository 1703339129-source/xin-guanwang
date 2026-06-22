// app/contact/page.tsx
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-800">
      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.jpg" alt="CareVita Logo" width={120} height={40} className="h-10 w-auto object-contain" />
            </Link>
            <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
              <Link href="/" className="text-slate-600 hover:text-blue-600">首页</Link>
              <Link href="/products" className="text-slate-600 hover:text-blue-600">产品</Link>
              <Link href="/about" className="text-slate-600 hover:text-blue-600">关于凯维他</Link>
              <Link href="/contact" className="text-blue-600 border-b-2 border-blue-600 pb-1">联系我们</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900">联系我们</h1>
          <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">我们期待与您沟通，为您提供专业的营养健康服务。</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-50 rounded-2xl p-8 shadow-sm text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">联系方式</h2>

            {/* 电话、邮箱、地址三列并排 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* 电话 */}
              <div className="flex flex-col items-center gap-2">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">电话咨询</p>
                  <p className="text-slate-600 text-sm">400-123-4567</p>
                  <p className="text-xs text-slate-500">周一至周日 9:00-18:00</p>
                </div>
              </div>

              {/* 邮箱 */}
              <div className="flex flex-col items-center gap-2">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">电子邮箱</p>
                  <p className="text-slate-600 text-sm">contact@carevita.com</p>
                  <p className="text-xs text-slate-500">我们会尽快回复您的邮件</p>
                </div>
              </div>

              {/* 地址 */}
              <div className="flex flex-col items-center gap-2">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">公司地址</p>
                  <p className="text-slate-600 text-sm">上海市某某区某某路123号</p>
                  <p className="text-xs text-slate-500">邮编：200000</p>
                </div>
              </div>
            </div>

            {/* 二维码区域 */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-2">🔍 京东：凯维他旗舰店</p>
                  <div className="flex justify-center">
                    <img
                      src="/JD.jpg"
                      alt="京东凯维他旗舰店二维码"
                      className="w-32 h-32 object-contain border border-slate-200 rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-2">🔍 小红书：凯维他</p>
                  <div className="flex justify-center">
                    <img
                      src="/XHS.jpg"
                      alt="小红书凯维他二维码"
                      className="w-32 h-32 object-contain border border-slate-200 rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 地图占位 */}
          <div className="mt-16">
            <div className="bg-slate-100 rounded-2xl h-64 flex items-center justify-center text-slate-400">
              [地图占位符] 可嵌入百度地图或高德地图
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 py-8 text-center text-slate-400 text-xs">
        <p>© 2026 CareVita 凯维他版权所有 | 中国严肃医学营养领航品牌</p>
        <p className="mt-2">隐私政策 | 服务条款</p>
      </footer>
    </div>
  );
}