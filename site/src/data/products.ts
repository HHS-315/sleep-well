import tunnel from '../assets/textures/tunnel_texture.webp';
import grain from '../assets/textures/texture4.webp';
import floor from '../assets/textures/floor_texture.webp';
import floorLamp from '../assets/textures/floor_lamp_texture.webp';

export type Product = {
  name: string;
  desc: string;
  price: string;
  originalPrice?: string;
  tags: string[];
  image: string;
};

// Placeholder catalogue from the design handoff — names, copy, prices and
// images (design-system textures) are to be replaced with real product data.
export const products: Product[] = [
  { name: 'Deep Night 3mg', desc: '가끔 잠이 늦게 오는 밤을 위한 기본 제품. 60정, 2개월분.', price: '₩32,000', tags: ['BEST', '60정'], image: tunnel },
  { name: 'Soft Night 1mg', desc: '처음 시작하는 분을 위한 저함량. 부드러운 체리맛 츄어블.', price: '₩28,000', tags: ['NEW', '츄어블'], image: grain },
  { name: 'Night Drop', desc: '물에 한 방울씩 떨어뜨려 마시는 액상 타입. 30ml.', price: '₩34,000', tags: ['LIQUID'], image: floor },
  { name: 'Deep Night 90', desc: '매일 밤 루틴이 된 분을 위한 대용량. 90정, 3개월분.', price: '₩44,000', originalPrice: '₩48,000', tags: ['90정'], image: floorLamp },
  { name: 'Moon Gummy', desc: '블루베리맛 젤리 타입. 가방에 넣어 다니기 좋은 파우치.', price: '₩26,000', tags: ['GUMMY'], image: tunnel },
  { name: 'Night Tea Blend', desc: '캐모마일과 라벤더를 섞은 저녁용 허브티. 20티백.', price: '₩18,000', tags: ['TEA'], image: grain },
  { name: 'Night Ritual Set', desc: 'Deep Night 2병과 캐모마일 티, 수면 안대를 함께 담은 선물 세트.', price: '₩69,000', originalPrice: '₩78,000', tags: ['GIFT', 'SET'], image: floor },
];
