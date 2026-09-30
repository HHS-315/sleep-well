import { Button } from './Button';
import { Tag } from './Tag';
import s from './ds.module.css';

type Props = {
  image?: string;
  name: string;
  description?: string;
  price: string;
  originalPrice?: string;
  tags?: string[];
  cta?: string;
  onAdd?: () => void;
  tone?: 'day' | 'night';
};

export function ProductCard({ image, name, description, price, originalPrice, tags = [], cta = '장바구니 담기', onAdd, tone = 'day' }: Props) {
  const night = tone === 'night';
  const fg = night ? 'var(--cream-100)' : 'var(--blue-700)';
  return (
    <article
      className={s.productCard}
      style={{ borderColor: night ? 'var(--blue-600)' : 'var(--blue-700)', background: night ? 'var(--navy-900)' : 'var(--cream-100)' }}
    >
      <div className={s.productMedia}>
        {image && <img src={image} alt={name} loading="lazy" decoding="async" />}
      </div>
      <div className={s.productBody}>
        {tags.length > 0 && (
          <div className={s.productTags}>
            {tags.map((t) => (
              <Tag key={t} variant={night ? 'night' : 'outline'}>{t}</Tag>
            ))}
          </div>
        )}
        <h3 className={s.productName} style={{ color: fg }}>{name}</h3>
        {description && (
          <p className={s.productDesc} style={{ color: night ? 'var(--cream-100)' : 'var(--text-body)' }}>{description}</p>
        )}
        <div className={s.productFoot}>
          <div className={s.productPrice} style={{ color: fg }}>
            <span className={s.priceNow}>{price}</span>
            {originalPrice && (
              <span className={s.priceWas}>
                <span className="visually-hidden">정가 </span>
                {originalPrice}
              </span>
            )}
          </div>
          <Button size="sm" variant={night ? 'cream' : 'primary'} onClick={onAdd} aria-label={`${name} ${cta}`}>
            {cta}
          </Button>
        </div>
      </div>
    </article>
  );
}
