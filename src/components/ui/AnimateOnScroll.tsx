import type { ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'scale' | 'fade';
  delay?: number;
  once?: boolean;
  threshold?: number;
  as?: 'div' | 'section' | 'article';
}

export default function AnimateOnScroll({
  children,
  className = '',
  variant = 'default',
  delay,
  once = true,
  threshold = 0.1,
  as: Tag = 'div',
}: AnimateOnScrollProps) {
  const { ref, isInView } = useInView({ threshold, once });

  const baseClass =
    variant === 'scale'
      ? 'animate-scale-in'
      : variant === 'fade'
        ? 'animate-fade'
        : 'animate-in';

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      className={`${baseClass} ${isInView ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
