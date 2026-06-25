// app/news/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// 文章数据（您后续替换）
const articlesData: Record<string, any> = {
  "sample-article": {
    title: "文章标题示例",
    date: "2026-06-25",
    content: [
      { type: "text", value: "这是文章的第一段文字内容。您可以在这里介绍文章的核心观点。" },
      { type: "image", value: "/news/sample-01.jpg" },
      { type: "text", value: "这是第二段文字内容。图片已插入在上一段和本段之间。" },
      { type: "text", value: "这是第三段文字，可以继续展开论述。" },
      { type: "image", value: "/news/sample-02.jpg" },
      { type: "text", value: "最后一段文字，总结全文观点。" },
    ],
  },
  // 后续添加更多文章...
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

      {/* 文章主体 */}
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

          <div className="mt-8 space-y-6 text-slate-700 leading-relaxed">
            {article.content.map((block: any, index: number) => {
              if (block.type === "text") {
                return (
                  <p key={index} className="text-base md:text-lg">
                    {block.value}
                  </p>
                );
              }
              if (block.type === "image") {
                return (
                  <div key={index} className="my-4">
                    <img
                      src={block.value}
                      alt="文章配图"
                      className="w-full h-auto rounded-xl shadow-md"
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-slate-100">
          <Link href="/news" className="inline-block bg-blue-900 hover:bg-blue-800 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition">
            返回资讯列表
          </Link>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-slate-900 py-8 text-center text-slate-400 text-xs">
        <p>© 2026 Carevita 凯维他版权所有 | 中国严肃医学营养领航品牌</p>
        <p className="mt-2">隐私政策 | 服务条款</p>
      </footer>
    </div>
  );
}