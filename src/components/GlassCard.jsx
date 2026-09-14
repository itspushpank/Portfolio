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
    ? 'transition-all duration-300 hover:border-white/20 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#8b9cff]/5'
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
