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

  const handleDoubleClick = (img: string) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* 横向滚动容器 */}
      <div className="w-full overflow-x-auto pb-4" style={{ scrollbarWidth: 'thin', scrollbarColor: '#9CA3AF #E5E7EB' }}>
        <div className="flex flex-nowrap gap-4 w-max">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-72 h-72 bg-gray-50 rounded-lg shadow-md overflow-hidden flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow relative"
              onDoubleClick={() => handleDoubleClick(img)}
              onMouseEnter={() => setTooltipVisible(true)}
              onMouseLeave={() => setTooltipVisible(false)}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setTooltipPos({
                  x: e.clientX - rect.left,
                  y: e.clientY - rect.top,
                });
              }}
            >
              <img
                src={img}
                alt={`${alt} 详情图 ${idx + 1}`}
                className="w-full h-full object-contain"
              />
              {/* 跟随鼠标的提示 */}
              {tooltipVisible && (
                <div
                  className="absolute pointer-events-none text-xs bg-black/70 text-white px-2 py-1 rounded whitespace-nowrap transition-opacity duration-150"
                  style={{
                    left: tooltipPos.x + 10,
                    top: tooltipPos.y - 10,
                    transform: 'translateY(-100%)',
                  }}
                >
                  双击图片查看大图
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

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