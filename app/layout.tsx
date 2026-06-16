import type { Metadata } from "next";
import "@/app/globals.css";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "凯维他 CareVita | 中国严肃医学营养领航品牌",
  description: "凯维他CareVita专注严肃医学营养，提供乳清蛋白、膳食纤维、鱼油等专业营养解决方案。",
  keywords: ["凯维他", "CareVita", "乳清蛋白", "鱼油", "膳食纤维", "医学营养"],
  alternates: {
    canonical: "https://www.carevita.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <JsonLd />
      </head>
      <body className="bg-slate-50 text-brand-dark antialiased min-h-screen flex flex-col justify-between">
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}