// app/news/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const articlesData: Record<string, any> = {
  "97-people-lack-nutrient": {
    title: "这种97%的人都缺的营养素，让你轻松瘦下来！",
    date: "2026-05-14",
    content: `
这一次，我们要来聊聊一个非常重要的减重武器——膳食纤维！它不仅能让你吃得饱、瘦得快，还能全方位守护你的健康。👇👇

![膳食纤维好处1](/news/97%25%E4%BA%BA%E7%BC%BA%E7%9A%84%E8%90%A5%E5%85%BB%E7%B4%A01.jpg)

膳食纤维不仅是减重的好帮手，大量研究已证实——摄取更多的膳食纤维与较低的心血管疾病发病率和死亡率、较低的总死亡率、较低的糖尿病和结直肠癌发病率密切相关。它的好处很多，比如下图所示👇：

![膳食纤维好处2](/news/97%25%E4%BA%BA%E7%BC%BA%E7%9A%84%E8%90%A5%E5%85%BB%E7%B4%A02.jpg)

⏩ **饱腹感**这块不用多说了，膳食纤维能在胃里占据更多空间，让你感到饱足，减少零食和过量进食。  
⏩ 在稳定**血糖**方面，它能减缓食物中糖分的吸收速度，避免血糖飙升和胰岛素大量分泌。  
⏩ 充足的膳食纤维是**肠道益生菌**的"美食"，能促进肠道蠕动，改善**便秘**，帮助身体排出废物和毒素。  
⏩ 某些膳食纤维还能像"吸油纸"一样，吸附肠道中的脂肪，减少它们的吸收，对**心血管健康**也大有裨益。

![膳食纤维好处3](/news/97%25%E4%BA%BA%E7%BC%BA%E7%9A%84%E8%90%A5%E5%85%BB%E7%B4%A03.jpg)

世界卫生组织（WHO）建议，成年男性每天应摄入30克膳食纤维，女性为25克。大概是1把全谷物 + 2份蔬菜 + 2份水果的量。

![膳食纤维摄入量](/news/97%25%E4%BA%BA%E7%BC%BA%E7%9A%84%E8%90%A5%E5%85%BB%E7%B4%A04.jpg)

然而，令人担忧的是，根据调查，我们大多数人的膳食纤维摄入量还**不到推荐量的一半**！这意味着，**超过97%的人都处于膳食纤维"欠债"状态**。如果你觉得自己的饮食不够健康、减重不理想、经常便秘，那么增加膳食纤维，很可能是你最直接、最有效的改善方法。

![膳食纤维缺乏](/news/97%25%E4%BA%BA%E7%BC%BA%E7%9A%84%E8%90%A5%E5%85%BB%E7%B4%A05.jpg)

膳食纤维存在于植物性食物中。在众多植物性食物中，有些是膳食纤维的"王者"，有些则是"潜力股"。让我们一起来看看，哪些食物能助你一臂之力：

**（1）豆类：膳食纤维的"王者"**  
谷物、蔬菜、水果、豆类和坚果，这几类植物性食物，你猜猜哪个含有膳食纤维更多？（同等重量下）答案有点超出你认知，**豆类**才是膳食纤维含量最高的食物！

![豆类膳食纤维](/news/97%25%E4%BA%BA%E7%BC%BA%E7%9A%84%E8%90%A5%E5%85%BB%E7%B4%A06.jpg)

每100克干豆的膳食纤维，普遍有15～25克；豆类煮熟后会吸收大量水分，营养被水分稀释，每100克熟豆膳食纤维大概在5～7克。在各类食材里，豆类的平均膳食纤维含量稳居前列。比如，每100克熟米饭膳食纤维只有0.5克左右，豆类的膳食纤维含量足足是它的上百倍。根据《柳叶刀》杂志的一项全球性研究显示，我国居民的蔬菜、水果和豆类摄入量普遍未达到推荐标准。除了在南亚和中东地区外，全球大多数地区的豆类摄入量都较低，这也是导致膳食纤维摄入不足的原因之一。

![研究数据](/news/97%25%E4%BA%BA%E7%BC%BA%E7%9A%84%E8%90%A5%E5%85%BB%E7%B4%A07.jpg)

增加豆类摄入，不仅能补充大量膳食纤维，还能提供**优质植物蛋白**，让你饱腹感更强，是减重期间的绝佳选择。可以将豆类加入主食、沙拉或汤中。但要注意，豆腐、豆浆等豆制品在加工过程中会损失大量膳食纤维，并非膳食纤维理想来源。

**（2）全谷物粗粮是"潜力股"**  
全谷物是膳食纤维的另一个重要来源，特别是其中的不可溶性膳食纤维，对肠道健康非常有益。糙米、燕麦片、藜麦等都是不错的选择。早餐来一碗燕麦片（选择无糖、无果粒的），搭配牛奶或酸奶，就能轻松补充膳食纤维。  
**减重冷知识：**空气爆制的爆米花（**不加糖、不加油**）也是一种低热量、高膳食纤维的健康零食！

![全谷物](/news/97%25%E4%BA%BA%E7%BC%BA%E7%9A%84%E8%90%A5%E5%85%BB%E7%B4%A08.jpg)

**（3）水果：甜蜜的"纤维宝藏"🍒**  
水果的膳食纤维含量通常高于蔬菜，而且热量相对较低，是减重期间的理想选择。  
- **梨：**膳食纤维含量比苹果和香蕉更高，一个梨就能提供约6克膳食纤维。  
- **树莓：**低热量、高膳食纤维的典范！80克树莓只有42千卡热量，却含有丰富的膳食纤维，可以直接吃，也可以加入酸奶。  
- **牛油果：**意想不到的高纤维水果，但热量密度较高，每次适量即可（一个牛油果约250千卡）。  
连皮吃能摄入更多的不可溶性膳食纤维哦。

![水果纤维](/news/97%25%E4%BA%BA%E7%BC%BA%E7%9A%84%E8%90%A5%E5%85%BB%E7%B4%A09.jpg)

**（4）蔬菜：不可或缺的"绿色力量"🥬**  
虽然蔬菜的膳食纤维密度不如豆类和谷物，但它们热量低，富含维生素、矿物质和抗氧化剂，是减重餐桌上不可或缺的一部分。根茎类蔬菜如土豆、红薯的膳食纤维含量相对较高。每天保证足量的蔬菜摄入，对减重和整体健康都至关重要。

**（5）坚果和种子：小身材，大能量**  
坚果和种子也是膳食纤维的良好来源，特别是南瓜籽、芝麻籽、开心果、亚麻籽和奇亚籽。但由于它们热量密度较高，减重期间一定要**控制摄入量**，避免热量超标。

![坚果种子](/news/97%25%E4%BA%BA%E7%BC%BA%E7%9A%84%E8%90%A5%E5%85%BB%E7%B4%A010.jpg)
![坚果种子2](/news/97%25%E4%BA%BA%E7%BC%BA%E7%9A%84%E8%90%A5%E5%85%BB%E7%B4%A011.jpg)

想要每天摄入30克以上的膳食纤维，其实并不难，从早餐开始，一步步来：

**早餐升级：** 用燕麦片或燕麦麸皮替代精制早餐。选择无糖、无加工的纯燕麦，40克燕麦麸皮就能提供约8克膳食纤维。  
**每日一果：** 每天吃一个梨或带皮的苹果。如果你喜欢，也可以选择一盒树莓，轻松获得约7.8克膳食纤维。  
**主食替换：** 将部分精米白面换成糙米、全麦面包、杂粮饭等粗粮。  
**豆类常伴：** 每天增加50克煮熟的豆类，可以提供3-4克膳食纤维，同时也是优质蛋白质来源。  
**菌藻类：** 蘑菇、木耳、海带等菌藻类食物也富含膳食纤维，特别是干海带，每100克含有30-50克膳食纤维。

![膳食纤维获取方式](/news/97%25%E4%BA%BA%E7%BC%BA%E7%9A%84%E8%90%A5%E5%85%BB%E7%B4%A012.jpg)

**举个例子，一顿高纤维餐可以这样搭配：**  
- 一碗燕麦粥（8克膳食纤维）  
- 一个梨（6克膳食纤维）  
- 一盒树莓（7.8克膳食纤维）  
- 一份西兰花或其他绿叶蔬菜（5.5克膳食纤维）  
- 一个土豆（3克膳食纤维）  
- 一把南瓜籽（5克膳食纤维）  
- 一碗炒青豆或豌豆汤（5克膳食纤维）

![高纤维餐](/news/97%25%E4%BA%BA%E7%BC%BA%E7%9A%84%E8%90%A5%E5%85%BB%E7%B4%A013.jpg)

以上总共可以获得约34.8克膳食纤维，轻松达到甚至超过每日推荐量！

![达标](/news/97%25%E4%BA%BA%E7%BC%BA%E7%9A%84%E8%90%A5%E5%85%BB%E7%B4%A014.jpg)

*膳食纤维补充剂，适合蔬菜、全谷物、豆类吃得少，且排便不规律的人。*  
它能辅助增加饱腹感、改善排便，但使用时要循序渐进，并注意喝水。虽然我们鼓励大家从天然食物中获取膳食纤维，但现实是，很多人因为饮食习惯等原因，很难达到推荐的摄入量。在《中国肥胖预防与控制蓝皮书》和《中国超重肥胖医学营养治疗指南》中，均将代餐作为健康有效的体重管理方式之一。现在很多三甲医院营养科开展减重门诊，也会根据治疗需要采用代餐方式，膳食纤维粉就是其中一种代餐。膳食纤维粉可以作为一种减肥的"助攻"。它们通常含有高浓度的可溶性膳食纤维（如菊粉、聚葡萄糖等）。  
- **方便快捷：**轻松添加到温水、牛奶或酸奶中饮用。  
- **精准补充：**帮助你精确摄入每日的纤维量。

![膳食纤维补充剂](/news/97%25%E4%BA%BA%E7%BC%BA%E7%9A%84%E8%90%A5%E5%85%BB%E7%B4%A015.jpg)
    `,
  },
};

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articlesData[slug];
  if (!article) notFound();

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
              <Link href="/news" className="text-blue-600 border-b-2 border-blue-600 pb-1">营养资讯</Link>
              <Link href="/about" className="text-slate-600 hover:text-blue-600">关于凯维他</Link>
              <Link href="/contact" className="text-slate-600 hover:text-blue-600">联系我们</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mb-8">
          <Link href="/news" className="text-sm text-blue-600 hover:underline">
            ← 返回资讯列表
          </Link>
        </div>

        <article>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            {article.title}
          </h1>
          <p className="text-sm text-slate-400 mt-3">{article.date}</p>

          <div className="mt-8 prose prose-lg max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {article.content}
            </ReactMarkdown>
          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-slate-100">
          <Link href="/news" className="inline-block bg-blue-900 hover:bg-blue-800 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition">
            返回资讯列表
          </Link>
        </div>
      </main>

      <footer className="bg-slate-900 py-8 text-center text-slate-400 text-xs">
        <p>© 2026 Carevita 凯维他版权所有 | 中国严肃医学营养领航品牌</p>
        <p className="mt-2">隐私政策 | 服务条款</p>
      </footer>
    </div>
  );
}