// 食谱数据
const recipes = [
  {
    id: 1,
    name: '南瓜小米粥',
    type: 'breakfast',
    icon: '��',
    description: '适合1岁宝宝，营养丰富',
    ingredients: [
      '南瓜 50g',
      '小米 30g',
      '清水 200ml',
      '配方奶 50ml (可选)'
    ],
    steps: [
      '南瓜去皮切小块',
      '小米淘洗干净',
      '锅中加水烧开',
      '放入小米煮10分钟',
      '加入南瓜块继续煮5分钟',
      '煮至粘稠即可'
    ],
    notes: [
      '确保南瓜完全煮熟',
      '可根据宝宝喜好调整稠度',
      '首次食用建议少量尝试'
    ],
    image: '/images/pumpkin-porridge.png'
  },
  {
    id: 2,
    name: '胡萝卜土豆泥',
    type: 'lunch',
    icon: '',
    description: '富含维生素A，促进视力发育',
    ingredients: [
      '胡萝卜 60g',
      '土豆 40g',
      '配方奶 30ml',
      '橄榄油 5ml'
    ],
    steps: [
      '胡萝卜和土豆去皮切块',
      '蒸锅加水烧开',
      '放入胡萝卜和土豆蒸15分钟',
      '取出后压成泥',
      '加入配方奶和橄榄油',
      '搅拌均匀即可'
    ],
    notes: [
      '确保食材完全蒸熟',
      '可根据宝宝喜好调整稠度',
      '建议现做现吃'
    ],
    image: '/images/carrot-potato.png'
  },
  {
    id: 3,
    name: '菠菜鸡蛋羹',
    type: 'dinner',
    icon: '',
    description: '补充铁质，预防贫血',
    ingredients: [
      '菠菜 30g',
      '鸡蛋 1个',
      '配方奶 50ml',
      '盐 少许'
    ],
    steps: [
      '菠菜洗净切碎',
      '鸡蛋打散',
      '加入配方奶和盐',
      '搅拌均匀',
      '蒸锅加水烧开',
      '蒸8-10分钟即可'
    ],
    notes: [
      '菠菜要焯水去除草酸',
      '蒸制时间不宜过长',
      '可根据宝宝喜好调整盐量'
    ],
    image: '/images/spinach-egg.png'
  },
  {
    id: 4,
    name: '苹果燕麦粥',
    type: 'breakfast',
    icon: '',
    description: '富含膳食纤维，促进消化',
    ingredients: [
      '苹果 40g',
      '燕麦 25g',
      '配方奶 60ml',
      '蜂蜜 5ml (可选)'
    ],
    steps: [
      '苹果去皮切丁',
      '燕麦淘洗干净',
      '锅中加水烧开',
      '放入燕麦煮5分钟',
      '加入苹果丁继续煮3分钟',
      '加入配方奶和蜂蜜即可'
    ],
    notes: [
      '苹果要选择甜度适中的',
      '燕麦要选择即食型',
      '蜂蜜1岁以下宝宝不建议食用'
    ],
    image: '/images/apple-oatmeal.png'
  },
  {
    id: 5,
    name: '西兰花鸡肉泥',
    type: 'lunch',
    icon: '',
    description: '富含蛋白质和维生素C',
    ingredients: [
      '西兰花 40g',
      '鸡胸肉 30g',
      '配方奶 20ml',
      '橄榄油 5ml'
    ],
    steps: [
      '西兰花洗净切小朵',
      '鸡胸肉切小块',
      '蒸锅加水烧开',
      '放入西兰花和鸡肉蒸12分钟',
      '取出后压成泥',
      '加入配方奶和橄榄油即可'
    ],
    notes: [
      '确保鸡肉完全煮熟',
      '西兰花要蒸至软烂',
      '可根据宝宝喜好调整稠度'
    ],
    image: '/images/broccoli-chicken.png'
  },
  {
    id: 6,
    name: '紫薯山药泥',
    type: 'dinner',
    icon: '',
    description: '富含花青素，增强免疫力',
    ingredients: [
      '紫薯 50g',
      '山药 30g',
      '配方奶 40ml',
      '蜂蜜 5ml (可选)'
    ],
    steps: [
      '紫薯和山药去皮切块',
      '蒸锅加水烧开',
      '放入紫薯和山药蒸20分钟',
      '取出后压成泥',
      '加入配方奶和蜂蜜',
      '搅拌均匀即可'
    ],
    notes: [
      '山药要选择新鲜无斑点的',
      '蒸制时间要足够长',
      '蜂蜜1岁以下宝宝不建议食用'
    ],
    image: '/images/purple-sweet-potato.png'
  },
  {
    id: 7,
    name: '香蕉燕麦粥',
    type: 'breakfast',
    icon: '',
    description: '富含钾元素，促进消化',
    ingredients: [
      '香蕉 50g',
      '燕麦 30g',
      '配方奶 60ml',
      '蜂蜜 5ml (可选)'
    ],
    steps: [
      '香蕉去皮切小块',
      '燕麦淘洗干净',
      '锅中加水烧开',
      '放入燕麦煮8分钟',
      '加入香蕉块继续煮2分钟',
      '加入配方奶和蜂蜜即可'
    ],
    notes: [
      '香蕉要选择熟透的',
      '燕麦要选择即食型',
      '蜂蜜1岁以下宝宝不建议食用'
    ],
    image: '/images/banana-oatmeal.png'
  },
  {
    id: 8,
    name: '南瓜蒸蛋',
    type: 'lunch',
    icon: '',
    description: '营养丰富，口感细腻',
    ingredients: [
      '南瓜 40g',
      '鸡蛋 1个',
      '配方奶 40ml',
      '盐 少许'
    ],
    steps: [
      '南瓜去皮切小块',
      '蒸锅加水烧开',
      '放入南瓜蒸10分钟',
      '鸡蛋打散',
      '加入配方奶和盐',
      '蒸8-10分钟即可'
    ],
    notes: [
      '确保南瓜完全煮熟',
      '蒸制时间不宜过长',
      '可根据宝宝喜好调整盐量'
    ],
    image: '/images/pumpkin-egg.png'
  },
  {
    id: 9,
    name: '青菜豆腐汤',
    type: 'dinner',
    icon: '',
    description: '清淡易消化，补充蛋白质',
    ingredients: [
      '青菜 30g',
      '嫩豆腐 50g',
      '高汤 200ml',
      '盐 少许'
    ],
    steps: [
      '青菜洗净切碎',
      '豆腐切小块',
      '锅中加入高汤烧开',
      '放入豆腐煮3分钟',
      '加入青菜继续煮2分钟',
      '加盐调味即可'
    ],
    notes: [
      '青菜要选择嫩叶',
      '豆腐要选择嫩豆腐',
      '高汤可以用清水代替'
    ],
    image: '/images/vegetable-tofu.png'
  }
];

// 常见过敏食材
const commonAllergies = [
  { name: '花生', icon: '🥜' },
  { name: '鸡蛋', icon: '🥚' },
  { name: '牛奶', icon: '' },
  { name: '虾', icon: '' },
  { name: '蟹', icon: '🦀' },
  { name: '坚果', icon: '🥜' },
  { name: '小麦', icon: '🌾' },
  { name: '大豆', icon: '🫘' },
  { name: '鱼类', icon: '🐟' },
  { name: '苹果', icon: '🍎' },
  { name: '桃子', icon: '🍑' },
  { name: '草莓', icon: '🍓' }
];

module.exports = {
  recipes,
  commonAllergies
}; 