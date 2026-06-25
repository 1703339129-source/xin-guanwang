// app/components/HorizontalCarousel.tsx
'use client';

import { useState, useEffect } from 'react';

interface CarouselProps {
  images: string[];
  alt: string;
}

export default function HorizontalCarousel({ images, alt }: CarouselProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  // 双击放大
  const handleDoubleClick = (img: string) => {
    setSelectedImage(img);
  };

  // 关闭大图
  const closeModal = () => {
    setSelectedImage(null);
  };

  // ESC 键关闭
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // 鼠标进入图片
  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  // 鼠标离开图片
  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  // 鼠标在图片上移动，更新提示位置
  const handleMouseMove = (e: React.MouseEvent) => {
    setTooltipPos({
      x: e.clientX + 15,
      y: e.clientY + 10,
    });
  };

  return (
    <>
      {/* 横向滚动容器 */}
      <div className="w-full overflow-x-auto pb-4" style={{ scrollbarWidth: 'thin', scrollbarColor: '#9CA3AF #E5E7EB' }}>
        <div className="flex flex-nowrap gap-4 w-max">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-72 h-72 bg-gray-50 rounded-lg shadow-md overflow-hidden flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
              onDoubleClick={() => handleDoubleClick(img)}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              <img
                src={img}
                alt={`${alt} 详情图 ${idx + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 跟随鼠标的提示 */}
      {tooltipVisible && (
        <div
          className="fixed pointer-events-none text-xs bg-black/70 text-white px-2 py-1 rounded z-50 whitespace-nowrap shadow-md"
          style={{ left: tooltipPos.x, top: tooltipPos.y }}
        >
          双击图片查看大图
        </div>
      )}

      {/* 双击放大的模态框 */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl">
            <img
              src={selectedImage}
              alt="放大视图"
              className="w-full h-auto max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-black/70 transition"
              onClick={closeModal}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}