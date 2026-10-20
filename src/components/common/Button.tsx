import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asLink?: boolean;
  href?: string;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  asLink = false,
  href = '#',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold transition-all duration-200 rounded-md inline-block';

  const variantStyles = {
    primary: 'bg-navy text-white hover:bg-navy/90 hover:text-white active:scale-95',
    secondary: 'bg-sky text-navy hover:bg-sky/80',
    ghost: 'text-navy hover:bg-sky/50',
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (asLink) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
