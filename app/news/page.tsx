// app/news/page.tsx
import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    slug: "97-people-lack-nutrient",
    title: "这种97%的人都缺的营养素，让你轻松瘦下来！",
    summary: "膳食纤维不仅能让你吃得饱、瘦得快，还能全方位守护你的健康。大量研究证实，摄取更多的膳食纤维与较低的心血管疾病风险、糖尿病风险和结直肠癌发病率密切相关。",
    date: "2026-05-14",
    coverImage: "/news/营养素2.jpg",
  },
  {
    slug: "protein-powder-guide",
    title: "蛋白粉五花八门，该怎么选？看这篇就够了",
    summary: "面对市场上琳琅满目的蛋白粉产品，如何选对蛋白粉正成为减重者关心的问题。从乳清蛋白的稀缺性到分离乳清的优势，一文读懂如何挑选真正适合减重的蛋白粉。",
    date: "2026-01-22",
    coverImage: "/news/蛋白粉五花八门/五花八门1.jpg",
  },
  {
    slug: "fiber-for-weight-loss",
    title: "补够它，真能帮你减肥、控血糖",
    summary: "明明吃得不多却悄悄长肉？控制饮食坚持运动却瘦不下来？除了基因和生活习惯，还有一个容易被忽略的'减肥密码'——肠道健康。膳食纤维通过增加饱腹感、减少脂肪吸收、稳定血糖、优化肠道菌群等机制，帮你轻松控制体重。",
    date: "2025-12-18",
    coverImage: "/news/补够它/补够它3.jpg",
  },
  {
    slug: "good-fat-weight-loss",
    title: "这种好脂肪不仅帮你清血管、抗炎，更是减脂搭档",
    summary: "Omega-3多不饱和脂肪酸不仅是血管里的清道夫，更是大脑和眼睛的建筑师，还是减重路上不可或缺的神助攻。从调节血脂、抗炎到增强减重效果，一文读懂如何科学补充这种好脂肪。",
    date: "2025-12-04",
    coverImage: "/news/好脂肪/好脂肪5.jpg",
  },
  {
    slug: "skin-hair-loss-weight-loss",
    title: "减肥出现皮肤松弛、掉发怎么办？",
    summary: "秋冬季节减重，皮肤松弛、掉发是常见的困扰。掌握科学方法，通过调整饮食、合理运动、正确护理，就能在成功减脂的同时，守住紧致皮肤和发量。",
    date: "2025-11-13",
    coverImage: "/news/皮肤松弛/皮肤松弛2.jpg",
  },
];

const PAGE_SIZE = 8;
const currentPage = 1;
const totalPages = Math.ceil(articles.length / PAGE_SIZE);
const paginatedArticles = articles.slice(0, PAGE_SIZE);

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-800">
      <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.jpg" alt="CareVita Logo" width={120} height={40} className="h-10 w-auto object-contain" />
            </Link>
            <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
              <Link href="/" className="text-slate-600 hover:text-blue-600">首页</Link>
              <Link href="/products" className="text-slate-600 hover:text-blue-600">产品</Link>
              <Link href="/news" className="text-blue-600 border-b-2 border-blue-600 pb-1">营养百科</Link>
              <Link href="/about" className="text-slate-600 hover:text-blue-600">关于凯维他</Link>
              <Link href="/contact" className="text-slate-600 hover:text-blue-600">联系我们</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900">营养百科</h1>
          <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">分享科学营养知识，助力健康生活</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {paginatedArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/news/${article.slug}`}
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col"
            >
              <div className="relative h-40 bg-slate-100 flex-shrink-0">
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <p className="text-xs text-slate-400">{article.date}</p>
                <h2 className="text-base font-bold text-slate-900 mt-1 group-hover:text-blue-600 transition line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2 flex-grow">
                  {article.summary}
                </p>
                <span className="inline-block mt-3 text-blue-600 font-semibold text-xs">
                  阅读全文 →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-end items-center mt-8 gap-4 text-sm text-slate-600">
          <span className="text-xs text-slate-400">
            第 {currentPage} / {totalPages} 页
          </span>
          <button
            disabled={currentPage >= totalPages}
            className={`px-4 py-1.5 rounded-md border border-slate-200 transition ${
              currentPage >= totalPages
                ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                : "bg-white hover:bg-blue-50 hover:border-blue-300 text-slate-700"
            }`}
          >
            下一页 →
          </button>
        </div>
      </main>

      <footer className="bg-slate-900 py-8 text-center text-slate-400 text-xs">
        <p>© 2026 Carevita 凯维他版权所有 | 中国严肃医学营养领航品牌</p>
        <p className="mt-2">隐私政策 | 服务条款</p>
      </footer>
    </div>
  );
}