export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Brand",
    "name": "CareVita 凯维他",
    "url": "https://www.carevita.com",
    "logo": "https://www.carevita.com/placeholder.svg",
    "description": "中国严肃医学营养领航品牌，精准营养，凯维他为健康赋能。",
    "keywords": "凯维他,CareVita,乳清蛋白,鱼油,膳食纤维,医学营养",
    "slogan": "精准营养，凯维他为健康赋能"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}