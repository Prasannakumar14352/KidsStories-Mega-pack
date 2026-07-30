import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'md' | 'lg';
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]';

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-gradient-to-b from-brand-orange-light to-brand-orange-dark text-white shadow-orange-glow hover:shadow-orange-glow-lg hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'bg-surface-raised text-text-primary border border-border hover:border-border-bright hover:-translate-y-0.5',
  ghost: 'text-text-primary hover:text-brand-orange-light',
};

const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...rest
}: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
