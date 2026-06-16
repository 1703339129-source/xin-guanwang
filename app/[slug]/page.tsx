// app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

// 产品数据
const products = {
  "whey-isolate": {
    name: "分离乳清蛋白粉",
    fullName: "分离乳清蛋白粉固体饮料",
    image: "/product-whey-blue.jpg",
    category: "运动营养",
   净含量: "450克",
   主要成分: "100%美国进口分离乳清蛋白",
   蛋白质含量: "85%",
   特点: ["小分子蛋白，极易吸收", "低脂低乳糖", "快速补充氨基酸"],
   适用人群: "健身人群、术后恢复、日常蛋白质补充",
   食用方法: "取1勺（约30g）与200ml温水或牛奶混合均匀即可",
   注意事项: "请勿与沸水直接冲调，以免蛋白质变性。存放于阴凉干燥处。",
   详细介绍: "采用美国进口优质分离乳清蛋白，通过微滤技术提纯，蛋白质含量高达85%。几乎不含脂肪和乳糖，吸收率高，是增肌塑形和营养补充的理想选择。",
   健康提示: "保健食品不是药物，不能代替药物治疗疾病。",
  },
  "hmb-whey": {
    name: "HMB乳清蛋白粉",
    fullName: "HMB乳清蛋白粉固体饮料",
    image: "/product-whey-green.jpg",
    category: "运动营养",
   净含量: "400克",
   主要成分: "进口乳清奶源 + CaHMB",
   特点: ["特别添加CaHMB核心成分", "科学护肌强韧骨骼", "减少肌肉分解", "促进肌肉合成"],
   适用人群: "中老年人、运动人群、肌肉流失风险者",
   食用方法: "每日1次，每次1勺（约25g）与200ml温水或牛奶冲调饮用",
   注意事项: "本品含有乳制品，过敏者慎用。",
   详细介绍: "在优质乳清蛋白基础上特别添加HMB（β-羟基-β-甲基丁酸），有效减少肌肉蛋白质分解，增强肌肉力量，尤其适合需要维持肌肉健康的中老年人和运动爱好者。",
   健康提示: "保健食品不是药物，不能代替药物治疗疾病。",
  },
  "fiber": {
    name: "水溶性膳食纤维粉",
    fullName: "水溶性膳食纤维粉固体饮料",
    image: "/product-fiber.jpg",
    category: "肠道健康",
   净含量: "400克",
   主要成分: "100%智利进口高品质膳食纤维",
   特点: ["长链科学膳食结构", "特别添加低聚果糖益生元", "促进肠道蠕动", "增加饱腹感"],
   适用人群: "便秘人群、需控制体重者、膳食纤维摄入不足者",
   食用方法: "每日1次，每次1条（约10g）溶于200ml温水或果汁中饮用",
   注意事项: "建议首次使用从半量开始，逐步增加。多喝水效果更佳。",
   详细介绍: "精选智利非转基因天然植物纤维，结合低聚果糖益生元，科学配比，温和促进肠道健康，改善便秘，同时增加饱腹感，辅助体重管理。",
   健康提示: "保健食品不是药物，不能代替药物治疗疾病。",
  },
  "fish-oil": {
    name: "乐酚鱼油软胶囊",
    fullName: "乐酚鱼油软胶囊",
    image: "/product-fishoil.jpg",
    category: "心脑血管健康",
   净含量: "400克",
   主要成分: "挪威进口EPAX®鱼油",
   特点: ["来自挪威金牌EPAX源头", "90%超高纯度OMEGA-3", "rTG黄金结构", "高效吸收"],
   适用人群: "血脂偏高者、中老年人心脑血管保健",
   食用方法: "每日2次，每次1粒，随餐服用",
   注意事项: "对鱼类过敏者慎用；手术前请咨询医生。",
   详细介绍: "选用挪威EPAX®高纯度鱼油，OMEGA-3含量高达90%，采用rTG结构，吸收率是普通EE型鱼油的3倍以上。有助于调节血脂，维护心脑血管健康。",
   健康提示: "保健食品不是药物，不能代替药物治疗疾病。",
  },
};

type ProductKey = keyof typeof products;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = products[params.slug as ProductKey];
  if (!product) return { title: "产品未找到" };
  return { title: `${product.name} - 凯维他 CareVita` };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as ProductKey];
  if (!product) notFound();

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-800">
      {/* 导航栏（与首页一致） */}
      <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.jpg" alt="CareVita Logo" width={120} height={40} className="h-10 w-auto object-contain" />
            </Link>
            <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
              <Link href="/" className="text-slate-600 hover:text-blue-600">首页</Link>
              <Link href="/#products-matrix" className="text-slate-600 hover:text-blue-600">产品</Link>
              <Link href="/about" className="text-slate-600 hover:text-blue-600">关于凯维他</Link>
              <Link href="/#contact" className="text-slate-600 hover:text-blue-600">联系我们</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 产品详情内容 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* 产品图片 */}
          <div className="bg-slate-50 rounded-2xl p-8 flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              className="w-full max-w-sm object-contain"
            />
          </div>
          {/* 产品信息 */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{product.fullName || product.name}</h1>
            <div className="mt-4 space-y-2 text-slate-600">
              <p><span className="font-semibold">净含量：</span>{product.净含量}</p>
              <p><span className="font-semibold">主要成分：</span>{product.主要成分}</p>
              <p><span className="font-semibold">适用人群：</span>{product.适用人群}</p>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-bold text-slate-900">产品特点</h2>
              <ul className="mt-2 list-disc list-inside text-slate-600 space-y-1">
                {product.特点.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <h2 className="text-xl font-bold text-slate-900">详细介绍</h2>
              <p className="mt-2 text-slate-600 leading-relaxed">{product.详细介绍}</p>
            </div>
            <div className="mt-6 bg-slate-50 p-4 rounded-xl">
              <h2 className="text-lg font-bold text-slate-900">食用方法</h2>
              <p className="mt-1 text-slate-600">{product.食用方法}</p>
            </div>
            <div className="mt-4 bg-amber-50 p-4 rounded-xl border border-amber-200">
              <p className="text-sm text-amber-800">⚠️ {product.健康提示}</p>
              {product.注意事项 && <p className="text-sm text-amber-800 mt-1">📋 {product.注意事项}</p>}
            </div>
            <div className="mt-8">
              <Link
                href="/#products-matrix"
                className="inline-block bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                返回产品列表
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-slate-900 py-8 text-center text-slate-400 text-xs">
        <p>© 2026 CareVita 凯维他版权所有 | 中国严肃医学营养领航品牌</p>
        <p className="mt-2">隐私政策 | 服务条款</p>
      </footer>
    </div>
  );
}