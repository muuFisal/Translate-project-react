import type { ButtonHTMLAttributes } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { cn } from '@/utils/cn';

const base = 'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300';

export function ButtonLink({ className, ...props }: LinkProps & { className?: string }) {
  return <Link className={cn(base, 'bg-brand-700 text-white shadow-card hover:bg-brand-800', className)} {...props} />;
}

export function GhostLink({ className, ...props }: LinkProps & { className?: string }) {
  return <Link className={cn(base, 'soft-border bg-surface-strong hover:bg-surface-muted', className)} {...props} />;
}

export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className={cn(base, 'bg-brand-700 text-white shadow-card hover:bg-brand-800', className)} {...props} />;
}
