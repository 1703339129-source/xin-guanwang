'use client';

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ScrollButton from "./ScrollButton";

// 产品数据映射表（slug -> 产品详情）
const productData: Record<string, any> = {
  "whey-isolate": {
    name: "分离乳清蛋白粉",
    fullName: "分离乳清蛋白粉固体饮料",
    image: "/product-whey-blue.jpg",
    detailImage: "/分离乳清蛋白粉详情页.jpg",
    规格: "450克",
    主要成分: "100%美国进口分离乳清蛋白",
    蛋白质含量: "85%",
    特点: ["99%高纯度", "小分子蛋白，极易吸收", "低脂低乳糖", "快速补充氨基酸", "纯净配方 口感好"],
    适用人群: "减重/增肌人群、健身人群、术后恢复、日常蛋白质补充",
  },
  "hmb-whey": {
    name: "HMB乳清蛋白粉",
    fullName: "HMB乳清蛋白粉固体饮料",
    image: "/product-whey-green.jpg",
    images: [
      "/HMB乳清蛋白详情_01.jpg",
      "/HMB乳清蛋白详情_02.jpg",
      "/HMB乳清蛋白详情_03.jpg",
      "/HMB乳清蛋白详情_04.jpg",
      "/HMB乳清蛋白详情_05.jpg",
      "/HMB乳清蛋白详情_06.jpg",
      "/HMB乳清蛋白详情_07.jpg",
      "/HMB乳清蛋白详情_08.jpg",
      "/HMB乳清蛋白详情_09.jpg",
      "/HMB乳清蛋白详情_10.jpg",
    ],
    规格: "400克",
    主要成分: "进口乳清奶源 + CaHMB",
    特点: ["特别添加CaHMB核心成分", "保护肌肉不分解", "提供肌肉合成原料", "维持肌肉质量 提高肌肉力量"],
    适用人群: "减重/增肌人群、中老年人、运动人群、肌肉流失风险者",
  },
  "fiber": {
    name: "水溶性膳食纤维粉",
    fullName: "水溶性膳食纤维粉固体饮料",
    image: "/product-fiber.jpg",
    images: [
      "/详情6_01.jpg",
      "/详情6_02.jpg",
      "/详情6_03.jpg",
      "/详情6_04.jpg",
      "/详情6_05.jpg",
      "/详情6_06.jpg",
      "/详情6_07.jpg",
      "/详情6_08.jpg",
      "/详情6_09.jpg",
      "/详情6_10.jpg",
      "/详情6_11.jpg",
    ],
    规格: "400克",
    主要成分: "100%智利进口高品质膳食纤维",
    // 已经包含“长短链”，无需修改
   特点: ["智利进口菊粉", "长短链科学配比", "特别添加低聚木糖", "纯净配方"],
    适用人群: "便秘人群、需控制体重者、膳食纤维摄入不足者",
  },
  "fish-oil": {
    name: "乐酚鱼油软胶囊",
    fullName: "乐酚鱼油软胶囊",
    image: "/product-fishoil.jpg",
    detailImage: "",
    规格: "400克",
    主要成分: "挪威进口EPAX®鱼油",
    // 将“rTG黄金结构”改为“TGN黄金结构”
    特点: ["来自挪威金牌EPAX源头", "90%超高纯度OMEGA-3", "TGN黄金结构", "高效吸收"],
    适用人群: "血脂偏高者、中老年人心脑血管保健",
  },
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = productData[params.slug];
  if (!product) notFound();

  const hasMultiImages = product.images && product.images.length > 0;
  const isFiber = params.slug === "fiber";

  const scrollToDetail = () => {
    const element = document.getElementById("product-detail");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-800">
      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.jpg"
                alt="Carevita Logo"
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
                unoptimized
              />
            </Link>
            <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
              <Link href="/" className="text-slate-600 hover:text-blue-600">首页</Link>
              <Link href="/products" className="text-slate-600 hover:text-blue-600">产品</Link>
              <Link href="/about" className="text-slate-600 hover:text-blue-600">关于凯维他</Link>
              <Link href="/contact" className="text-slate-600 hover:text-blue-600">联系我们</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 gap-8 items-center w-full max-w-4xl">
            <div className="bg-slate-50 rounded-2xl p-6 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className={`object-contain ${
                  isFiber ? "w-full max-w-[270px]" : "w-2/3 max-w-[180px]"
                }`}
                unoptimized
              />
            </div>
            <div className="max-w-[260px] justify-self-center space-y-2">
              <h1 className="text-xl font-bold text-slate-900 leading-tight">
                {product.fullName || product.name}
              </h1>
              <div className="space-y-0.5 text-xs text-slate-600">
                <p><span className="font-semibold">规格：</span>{product.规格}</p>
                <p><span className="font-semibold">主要成分：</span>{product.主要成分}</p>
                {product.蛋白质含量 && (
                  <p><span className="font-semibold">蛋白质含量：</span>{product.蛋白质含量}</p>
                )}
                <p><span className="font-semibold">适用人群：</span>{product.适用人群}</p>
              </div>
              <div>
                <h2 className="text-sm font-bold text-slate-900">产品特点</h2>
                <ul className="mt-0.5 list-disc list-inside text-xs text-slate-600 space-y-0">
                  {product.特点.map((f: string, i: number) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
              <div className="pt-1 flex flex-wrap gap-2">
                <Link
                  href="/products"
                  className="inline-block bg-blue-900 hover:bg-blue-800 text-white px-4 py-1.5 rounded-md font-semibold text-xs transition"
                >
                  返回产品列表
                </Link>
                <button
                  onClick={scrollToDetail}
                  className="inline-block bg-blue-900 hover:bg-blue-800 text-white px-4 py-1.5 rounded-md font-semibold text-xs transition"
                >
                  下滑查看产品详情
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="product-detail" className="mt-16 scroll-mt-20">
          <div className="border-t border-slate-100 pt-10">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-6">产品详情</h2>
            {hasMultiImages ? (
              <div className="flex flex-col items-center gap-6">
                {product.images.map((img: string, idx: number) => (
                  <div key={idx} className="flex justify-center">
                    <img
                      src={img}
                      alt={`${product.name} 详情图 ${idx + 1}`}
                      className="max-w-sm w-full h-auto object-contain rounded-lg shadow-md"
                    />
                  </div>
                ))}
              </div>
            ) : (
              product.detailImage &&
              product.detailImage !== "" && (
                <div className="flex justify-center">
                  <img
                    src={product.detailImage}
                    alt={`${product.name} 详情图`}
                    className="max-w-sm w-full h-auto object-contain rounded-2xl shadow-md"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </main>

      <footer className="bg-slate-900 py-8 text-center text-slate-400 text-xs">
        <p>© 2026 Carevita 凯维他版权所有 | 中国严肃医学营养领航品牌</p>
        <p className="mt-2">隐私政策 | 服务条款</p>
      </footer>
    </div>
  );
}