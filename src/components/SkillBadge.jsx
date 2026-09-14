import React from 'react';
import {
  Code2,
  Layout,
  FileCode2,
  Atom,
  Palette,
  TerminalSquare,
  Coffee,
  Binary,
  Boxes,
  GitBranch,
  Cpu,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { Github } from './Icons';

const iconMap = {
  Code2,
  Layout,
  FileCode2,
  Atom,
  Palette,
  TerminalSquare,
  Coffee,
  Binary,
  Boxes,
  GitBranch,
  Github,
  Cpu,
  Zap,
};

export default function SkillBadge({ skill }) {
  const IconComponent = iconMap[skill.icon] || Code2;

  return (
    <div className="group relative flex items-center gap-3 p-3.5 rounded-lg bg-[#0a0a0a]/80 border border-white/[0.07] hover:border-[#f0db7d]/40 transition-all duration-300 hover:-translate-y-1 hover:bg-[#121212] card-shadow">
      <div
        className="w-10 h-10 rounded-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
        style={{
          backgroundColor: `${skill.color || '#f0db7d'}15`,
          color: skill.color || '#f0db7d',
          border: `1px solid ${skill.color || '#f0db7d'}30`
        }}
      >
        <IconComponent size={20} strokeWidth={2} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-white group-hover:text-[#f0db7d] transition-colors truncate">
            {skill.name}
          </span>
        </div>
        <p className="text-xs text-[#a1a1aa] truncate mt-0.5">
          {skill.level}
        </p>
      </div>

      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#f0db7d] flex-shrink-0">
        <CheckCircle2 size={16} />
      </div>
    </div>
  );
}
