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
    <div className="group relative flex items-center gap-3 p-3.5 rounded-lg bg-[#0d1017]/70 border border-white/[0.07] hover:border-[#8b9cff]/40 transition-all duration-300 hover:-translate-y-1 hover:bg-[#121722]/80 card-shadow">
      <div
        className="w-10 h-10 rounded-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
        style={{
          backgroundColor: `${skill.color}15`,
          color: skill.color,
          border: `1px solid ${skill.color}30`
        }}
      >
        <IconComponent size={20} strokeWidth={2} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-[#f5f7fb] group-hover:text-[#8b9cff] transition-colors truncate">
            {skill.name}
          </span>
        </div>
        <p className="text-xs text-[#9ba4b5] truncate mt-0.5">
          {skill.level}
        </p>
      </div>

      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[#6ee7b7] flex-shrink-0">
        <CheckCircle2 size={16} />
      </div>
    </div>
  );
}
