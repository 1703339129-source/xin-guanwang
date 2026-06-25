// app/news/page.tsx
import Link from "next/link";
import Image from "next/image";

// 文章数据（您后续替换）
const articles = [
  {
    slug: "sample-article",
    title: "文章标题示例",
    summary: "这是文章摘要，将在列表页显示，吸引读者点击进入详情页阅读完整内容。",
    date: "2026-06-25",
    coverImage: "/news/sample-cover.jpg",
  },
  // 后续添加更多文章...
];

export default function NewsPage() {
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

      {/* 页面主体 */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900">营养资讯</h1>
          <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">分享科学营养知识，助力健康生活</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/news/${article.slug}`}
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all overflow-hidden"
            >
              <div className="relative h-48 bg-slate-100">
                {article.coverImage ? (
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                    暂无配图
                  </div>
                )}
              </div>
              <div className="p-6">
                <p className="text-xs text-slate-400">{article.date}</p>
                <h2 className="text-xl font-bold text-slate-900 mt-2 group-hover:text-blue-600 transition">
                  {article.title}
                </h2>
                <p className="text-sm text-slate-500 mt-2 line-clamp-2">{article.summary}</p>
                <span className="inline-block mt-4 text-blue-600 font-semibold text-sm">
                  阅读全文 →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* 暂无文章提示 */}
        {articles.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            <p className="text-lg">暂无文章，敬请期待...</p>
          </div>
        )}
      </main>

      {/* 页脚 */}
      <footer className="bg-slate-900 py-8 text-center text-slate-400 text-xs">
        <p>© 2026 Carevita 凯维他版权所有 | 中国严肃医学营养领航品牌</p>
        <p className="mt-2">隐私政策 | 服务条款</p>
      </footer>
    </div>
  );
}