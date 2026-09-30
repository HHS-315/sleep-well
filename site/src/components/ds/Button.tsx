import type { ButtonHTMLAttributes } from 'react';
import s from './Button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'deep' | 'cream' | 'outline' | 'outline-night';
export type ButtonSize = 'sm' | 'md' | 'lg';

const variantClass: Record<ButtonVariant, string> = {
  primary: s.primary,
  secondary: s.secondary,
  deep: s.deep,
  cream: s.cream,
  outline: s.outline,
  'outline-night': s.outlineNight,
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

export function Button({ variant = 'primary', size = 'md', fullWidth = false, type = 'button', className, ...rest }: Props) {
  const cls = [s.button, s[size], variantClass[variant], fullWidth && s.fullWidth, className].filter(Boolean).join(' ');
  return <button type={type} className={cls} {...rest} />;
}
