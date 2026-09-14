import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, RotateCcw } from 'lucide-react';
import { INITIAL_TERMINAL_ENTRIES, processCommand } from '../data/terminalCommands';

export default function DeveloperTerminal() {
  const [entries, setEntries] = useState(INITIAL_TERMINAL_ENTRIES);
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState(['whoami', 'skills', 'projects']);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isFocused, setIsFocused] = useState(false);
  
  // 3D Tilt state
  const terminalRef = useRef(null);
  const contentEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom of terminal content on update
  useEffect(() => {
    if (contentEndRef.current) {
      contentEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [entries]);

  // Handle 3D pointer tilt calculation
  const handleMouseMove = (e) => {
    // Check for reduced motion or touch screen
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (!terminalRef.current) return;

    const rect = terminalRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;

    const rotateX = (-deltaY * 3.5).toFixed(2);
    const rotateY = (deltaX * 4.5).toFixed(2);

    terminalRef.current.style.setProperty('--rotate-x', `${rotateX}deg`);
    terminalRef.current.style.setProperty('--rotate-y', `${rotateY}deg`);
  };

  const handleMouseLeave = () => {
    if (!terminalRef.current) return;
    terminalRef.current.style.setProperty('--rotate-x', '2deg');
    terminalRef.current.style.setProperty('--rotate-y', '-3deg');
  };

  const executeCommand = (cmdText) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    const result = processCommand(trimmed);

    setHistory((prev) => [...prev.filter((h) => h !== trimmed), trimmed]);
    setHistoryIndex(-1);

    if (result && result.type === 'clear') {
      setEntries([]);
      setInputValue('');
      return;
    }

    setEntries((prev) => [
      ...prev,
      { type: 'command', text: trimmed },
      result || { type: 'output', text: '' }
    ]);
    setInputValue('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(inputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex = historyIndex + 1 < history.length ? historyIndex + 1 : historyIndex;
      setHistoryIndex(nextIndex);
      setInputValue(history[history.length - 1 - nextIndex] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIndex = historyIndex - 1;
        setHistoryIndex(nextIndex);
        setInputValue(history[history.length - 1 - nextIndex] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputValue('');
      }
    }
  };

  const quickActions = ['help', 'skills', 'projects', 'about', 'clear'];

  return (
    <div className="terminal-scene w-full max-w-2xl mx-auto select-none">
      <div
        ref={terminalRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => inputRef.current?.focus()}
        className="terminal rounded-2xl glass-elevated border border-white/10 spatial-shadow overflow-hidden cursor-text transition-all duration-300"
        style={{
          '--rotate-x': '2deg',
          '--rotate-y': '-3deg',
        }}
      >
        {/* Terminal Header */}
        <div className="terminal-header flex items-center justify-between px-4 py-3 bg-[#0a0a0a]/95 border-b border-white/[0.08] select-none">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#e07a5f]/90 hover:opacity-80 transition-opacity" title="Close" />
            <div className="w-3 h-3 rounded-full bg-[#f0db7d]/90 hover:opacity-80 transition-opacity" title="Minimize" />
            <div className="w-3 h-3 rounded-full bg-[#d4e09b]/90 hover:opacity-80 transition-opacity" title="Maximize" />
            
            <div className="ml-3 hidden sm:flex items-center gap-2 text-xs font-mono text-[#a1a1aa]">
              <TerminalIcon size={13} className="text-[#f0db7d]" />
              <span className="text-white/90 font-medium">pushpank@workspace</span>
              <span className="text-white/30">:</span>
              <span className="text-[#f0db7d]">~</span>
              <span className="text-white/40">(zsh)</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Status indicator */}
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#f0db7d]/10 border border-[#f0db7d]/25 text-[11px] font-mono text-[#f0db7d]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f0db7d] pulse-dot" />
              <span>live</span>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setEntries([]);
              }}
              title="Clear terminal"
              className="text-[#a1a1aa] hover:text-white transition-colors p-1 rounded hover:bg-white/5"
            >
              <RotateCcw size={13} />
            </button>
          </div>
        </div>

        {/* Terminal Content / Log */}
        <div className="terminal-content p-4 sm:p-5 font-mono text-xs sm:text-sm h-[320px] sm:h-[360px] overflow-y-auto terminal-scroll bg-[#050505]/90 text-white space-y-3">
          {entries.map((entry, index) => (
            <div key={index} className="leading-relaxed">
              {entry.type === 'command' ? (
                <div className="flex items-center gap-2 text-[#f0db7d]">
                  <span className="text-[#f0db7d] font-semibold">$</span>
                  <span className="font-semibold text-white">{entry.text}</span>
                </div>
              ) : entry.type === 'error' ? (
                <pre className="text-[#e07a5f] whitespace-pre-wrap font-mono mt-1 text-xs">
                  {entry.text}
                </pre>
              ) : (
                <pre className="text-[#a1a1aa] whitespace-pre-wrap font-mono mt-1 text-xs leading-5">
                  {entry.text}
                </pre>
              )}
            </div>
          ))}

          {/* Active Command Input Line */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-1">
            <span className="text-[#f0db7d] font-semibold text-sm">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Type 'help' or try a command..."
              aria-label="Terminal command prompt"
              className="flex-1 bg-transparent border-none outline-none font-mono text-xs sm:text-sm text-white placeholder:text-white/25 caret-[#f0db7d]"
              autoComplete="off"
              spellCheck="false"
            />
            <button
              type="submit"
              aria-label="Execute command"
              className="p-1 text-[#f0db7d] hover:text-white opacity-70 hover:opacity-100 transition-opacity"
            >
              <CornerDownLeft size={14} />
            </button>
          </form>

          <div ref={contentEndRef} />
        </div>

        {/* Quick Command Suggestion Bar */}
        <div className="px-4 py-2 bg-[#0a0a0a] border-t border-white/[0.06] flex items-center justify-between gap-2 overflow-x-auto select-none">
          <div className="flex items-center gap-1.5 flex-nowrap">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#a1a1aa]/70 mr-1 flex items-center gap-1">
              <Sparkles size={11} className="text-[#f0db7d]" /> Quick:
            </span>
            {quickActions.map((cmd) => (
              <button
                key={cmd}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  executeCommand(cmd);
                }}
                className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/[0.04] text-[#a1a1aa] hover:text-white hover:bg-[#f0db7d]/15 hover:border-[#f0db7d]/35 border border-white/[0.06] transition-all whitespace-nowrap"
              >
                {cmd}
              </button>
            ))}
          </div>
          <span className="text-[10px] font-mono text-white/30 hidden sm:inline">
            ↑/↓ for history
          </span>
        </div>
      </div>
    </div>
  );
}
