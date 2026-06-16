'use client';

export default function ScrollButton() {
  const scrollToDetail = () => {
    const element = document.getElementById('product-detail');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <button
      onClick={scrollToDetail}
      className="inline-block bg-blue-900 hover:bg-blue-800 text-white px-4 py-1.5 rounded-md font-semibold text-xs transition"
    >
      下滑查看产品详情
    </button>
  );
}