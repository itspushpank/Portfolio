import React from 'react';

export default function GlassCard({
  children,
  className = '',
  elevated = false,
  interactive = false,
  as: Component = 'div',
  ...props
}) {
  const baseClasses = elevated ? 'glass-elevated' : 'glass';
  const interactiveClasses = interactive
    ? 'transition-all duration-300 hover:border-[#f0db7d]/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#f0db7d]/5'
    : '';

  return (
    <Component
      className={`rounded-xl p-6 ${baseClasses} ${interactiveClasses} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
