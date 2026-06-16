// app/contact/page.tsx
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-800">
      {/* 导航栏 - 与首页一致，高亮“联系我们” */}
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

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* 左侧联系信息卡片 */}
          <div className="bg-slate-50 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">联系方式</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">电话咨询</p>
                  <p className="text-slate-600">400-123-4567</p>
                  <p className="text-sm text-slate-500">周一至周日 9:00-18:00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">电子邮箱</p>
                  <p className="text-slate-600">contact@carevita.com</p>
                  <p className="text-sm text-slate-500">我们会尽快回复您的邮件</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">公司地址</p>
                  <p className="text-slate-600">中国上海市某某区某某路123号</p>
                  <p className="text-sm text-slate-500">邮编：200000</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-2">商务合作</h3>
              <p className="text-slate-600">渠道合作、媒体采访等请发送邮件至：<br /><span className="text-blue-700">business@carevita.com</span></p>
            </div>
          </div>

          {/* 右侧联系表单 */}
          <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">在线留言</h2>
            <form action="#" method="POST" className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">您的姓名 *</label>
                <input type="text" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">电子邮箱 *</label>
                <input type="email" required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">联系电话</label>
                <input type="tel" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">留言内容 *</label>
                <textarea rows={4} required className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition">提交留言</button>
              <p className="text-xs text-slate-400 text-center">* 为必填项，我们会在1-2个工作日内回复您。</p>
            </form>
          </div>
        </div>

        {/* 地图占位（可选） */}
        <div className="mt-16">
          <div className="bg-slate-100 rounded-2xl h-64 flex items-center justify-center text-slate-400">
            [地图占位符] 可嵌入百度地图或高德地图
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