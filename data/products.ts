export interface Product {
  slug: string;
  name: string;
  fullName: string;
  tagline: string;
  origin: string;
  highlights: string[];
  features: string[];
  audience: string[];
  description: string;
}

export const products: Product[] = [
  {
    slug: "whey-isolated",
    name: "分离乳清蛋白粉",
    fullName: "凯维他 CareVita 分离乳清蛋白粉",
    tagline: "100%美国进口分离乳清，纯净高能动力",
    origin: "美国",
    highlights: ["100%美国进口分离乳清", "85%蛋白质含量", "小分子蛋白", "纯净配方"],
    features: ["去除了绝大部分脂肪与乳糖", "专为乳糖不耐受及精细化塑形人群设计", "采用微滤技术，最大程度保留免疫球蛋白活性"],
    audience: ["围手术期营养补充者", "中老年体弱人群", "乳糖不耐受的健身爱好者"],
    description: "严格精选美国黄金奶源分离乳清蛋白，经多道尖端微滤工艺提纯，实现超高蛋白质含量与极其纯净的配方配比。"
  },
  {
    slug: "whey-hmb",
    name: "HMB乳清蛋白粉",
    fullName: "凯维他 CareVita HMB乳清蛋白粉",
    tagline: "特别添加HMB，双效协同护肌",
    origin: "美国",
    highlights: ["100%美国进口乳清", "特别添加HMB", "双效护肌", "纯净配方"],
    features: ["优质乳清蛋白联合科学HMB组方", "有效延缓肌肉流失，促进肌肉合成", "零添加蔗糖，全面减轻机体代谢负担"],
    audience: ["肌肉质量下降的中老年人", "长期卧床或康复期人群", "高强度耐力运动爱好者"],
    description: "创新融合高品质美国乳清蛋白与HMB（β-羟基-β-甲基丁酸盐），精准针对肌肉流失与衰退痛点，打造院线级骨骼肌肉核心营养保障。"
  },
  {
    slug: "soluble-fiber",
    name: "水溶性膳食纤维",
    fullName: "凯维他 CareVita 水溶性膳食纤维",
    tagline: "长短链科学配比，重塑肠道微生态",
    origin: "智利",
    highlights: ["100%智利菊粉", "长短链科学配比", "特别添加低聚木糖", "纯净配方"],
    features: ["精选智利天然优质菊粉", "科学黄金长短链组合，全段肠道逐层益生", "添加超强前体低聚木糖(XOS)，高效增殖有益菌"],
    audience: ["久坐缺乏运动的上班族", "经常性肠道滞纳、便秘人群", "控糖及体重管理群体"],
    description: "源自智利天然膳食纤维，通过科学复配长短链，直达后肠，长效稳定提供肠道动力，让专业营养无门槛、更懂中国肠胃。"
  },
  {
    slug: "fish-oil",
    name: "乐馚鱼油软胶囊",
    fullName: "凯维他 CareVita 乐馚鱼油软胶囊",
    tagline: "挪威EPAX高纯鱼油，90% OMEGA-3高能守护",
    origin: "挪威",
    highlights: ["来自挪威EPAX", "90% OMEGA-3", "TGN结构", "纯净配方"],
    features: ["选用世界级挪威EPAX专利高纯原料", "OMEGA-3浓度高达90%，高效补充不增负", "天然TGN（再酯化甘油三酯）结构，吸收率高出普通鱼油"],
    audience: ["三高（高血压/高血脂/高血糖）关注人群", "高强度脑力劳动者及备考学生", "中老年心脑血管日常保养群体"],
    description: "拒绝行业过度溢价，直采全球顶尖挪威深海鱼油原料。纯净安全的深海鱼油成分与顶尖TGN架构完美结合，提供硬核心脑血管营养支持。"
  }
];