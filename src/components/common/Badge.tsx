import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'outlined';
  children: React.ReactNode;
}

export default function Badge({ variant = 'primary', className, children, ...props }: BadgeProps) {
  const variantStyles = {
    primary: 'bg-navy text-white',
    secondary: 'bg-sky text-navy',
    outlined: 'border border-navy text-navy',
  };

  return (
    <span
      className={cn(
        'inline-block px-3 py-1 rounded-full text-xs font-semibold',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
