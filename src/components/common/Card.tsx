import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  children: React.ReactNode;
}

export default function Card({ className, hover = true, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-border bg-white p-6',
        hover && 'hover:shadow-lg hover:scale-102 transition-all duration-300',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
