// app/products/page.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ProductsPage() {
  const products = [
    {
      name: "分离乳清蛋白粉",
      img: "/product-whey-blue.jpg",
      slug: "whey-isolate",
      features: ["100%美国进口分离乳清", "85%高蛋白质含量", "小分子蛋白，极易吸收"],
    },
    {
      name: "HMB 乳清蛋白粉",
      img: "/product-whey-green.jpg",
      slug: "hmb-whey",
      features: ["100%进口乳清粉", "特别添加 CaHMB 核心成分", "科学护肌强韧骨骼"],
    },
    {
      name: "水溶性膳食纤维粉",
      img: "/product-fiber.jpg",
      slug: "fiber",
      features: ["100%智利进口高品质原粉", "长短链科学膳食结构", "特别添加低聚果糖益生元"],
    },
    {
      name: "VitalOmega牌鱼油软胶囊",
      img: "/product-fishoil.jpg",
      slug: "fish-oil",
      features: ["来自秘鲁深海 纯净海域天然屏障", "95%超高纯度 OMEGA-3", "精研rTG结构-吸收新标杆"],
    },
  ];

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
              <Link href="/products" className="text-blue-600 border-b-2 border-blue-600 pb-1">产品</Link>
              <Link href="/about" className="text-slate-600 hover:text-blue-600">关于凯维他</Link>
              <Link href="/contact" className="text-slate-600 hover:text-blue-600">联系我们</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900">产品矩阵</h1>
          <p className="text-sm text-slate-400 mt-2">中国严肃医学营养方案</p>
          <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div key={product.slug} className="bg-white rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-lg overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-2/5 bg-slate-50 p-6 flex items-center justify-center">
                <Image src={product.img} alt={product.name} width={200} height={200} className="object-contain" />
              </div>
              <div className="p-6 md:w-3/5 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{product.name}</h2>
                  <ul className="mt-3 space-y-1 text-sm text-slate-500 list-disc list-inside">
                    {product.features.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                </div>
                <div className="mt-6">
                  <Link href={`/products/${product.slug}`} className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-700 transition">
                    了解更多 <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/" className="inline-block text-slate-500 hover:text-blue-600 transition text-sm">← 返回首页</Link>
        </div>
      </main>

      <footer className="bg-slate-900 py-8 text-center text-slate-400 text-xs">
        <p>© 2026 CareVita 凯维他版权所有 | 中国严肃医学营养领航品牌</p>
        <p className="mt-2">隐私政策 | 服务条款</p>
      </footer>
    </div>
  );
}