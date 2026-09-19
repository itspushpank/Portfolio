import React from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({
  children,
  className = '',
  variant = 'default',
  interactive = false,
  as: Component = 'div',
  style,
  ...props
}) {
  const variants = {
    default: 'glass',
    light: 'glass-light',
    strong: 'glass-strong',
    gold: 'glass-gold',
  };

  const interactiveVariants = {
    initial: { y: 0, scale: 1 },
    hover: { y: -4, scale: 1.01 },
    tap: { scale: 0.99 },
  };

  const baseClass = variants[variant] || variants.default;
  const interactiveClass = interactive ? 'transition-all duration-300 hover:shadow-[0_20px_45px_rgba(56,189,248,0.2)]' : '';

  return (
    <motion.div
      className={`${baseClass} rounded-2xl ${interactiveClass} ${className}`}
      style={style}
      variants={interactiveVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function GlassButton({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  ...props
}) {
  const variants = {
    primary: 'bg-gradient-to-r from-amber-500/25 via-orange-500/25 to-amber-600/25 text-[var(--text-cream)] hover:from-amber-500/40 hover:to-orange-500/40 shadow-[0_4px_25px_rgba(249,115,22,0.25)] backdrop-blur-xl',
    secondary: 'bg-white/[0.06] hover:bg-white/[0.12] text-[var(--text-cream)] shadow-[0_4px_20px_rgba(0,0,0,0.3)] backdrop-blur-xl',
    ghost: 'bg-transparent text-[var(--text-moss)] hover:text-[var(--text-cream)] hover:bg-white/[0.04]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center gap-2 font-medium rounded-xl
        transition-all duration-300
        disabled:opacity-50 disabled:cursor-not-allowed
        focus-visible:ring-2 focus-visible:ring-[var(--accent-sunset)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-deep)]
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {children}
    </motion.button>
  );
}

export function GlassInput({
  label,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  onBlur,
  error,
  className = '',
  ...props
}) {
  const [focused, setFocused] = React.useState(false);

  return (
    <div className="relative w-full">
      <label className={`
        absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-dim)] pointer-events-none
        transition-all duration-300
        ${focused || value ? '-translate-y-4 scale-85 text-[var(--accent-sage)]' : ''}
        ${error ? 'text-[var(--terminal-red)]' : ''}
      `}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={(e) => { onBlur?.(e); setFocused(false); }}
        className={`
          w-full px-4 py-4 bg-[var(--bg-card)] border-0 rounded-xl
          text-[var(--text-cream)] placeholder-transparent
          transition-all duration-300 shadow-inner
          focus:outline-none focus:ring-2
          ${focused 
            ? 'ring-[rgba(56,189,248,0.35)]' 
            : 'ring-1 ring-white/[0.04]'
          }
          ${error ? 'ring-2 ring-[var(--terminal-red)]' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <motion.p
          className="mt-2 text-sm text-[var(--terminal-red)]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

export function GlassTextarea({
  label,
  placeholder = '',
  value,
  onChange,
  onBlur,
  error,
  className = '',
  rows = 4,
  ...props
}) {
  const [focused, setFocused] = React.useState(false);

  return (
    <div className="relative w-full">
      <label className={`
        absolute left-4 top-4 text-[var(--text-dim)] pointer-events-none
        transition-all duration-300
        ${focused || value ? '-translate-y-4 scale-85 text-[var(--accent-sage)]' : ''}
        ${error ? 'text-[var(--terminal-red)]' : ''}
      `}>
        {label}
      </label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={(e) => { onBlur?.(e); setFocused(false); }}
        rows={rows}
        className={`
          w-full px-4 py-4 bg-[var(--bg-card)] border-0 rounded-xl
          text-[var(--text-cream)] placeholder-transparent resize-none
          transition-all duration-300 shadow-inner
          focus:outline-none focus:ring-2
          ${focused 
            ? 'ring-[rgba(56,189,248,0.35)]' 
            : 'ring-1 ring-white/[0.04]'
          }
          ${error ? 'ring-2 ring-[var(--terminal-red)]' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <motion.p
          className="mt-2 text-sm text-[var(--terminal-red)]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}