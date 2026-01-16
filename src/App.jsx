import { useState, useEffect } from 'react';
import { 
  Pipette, 
  Palette, 
  Cloud, 
  Monitor, 
  Layers, 
  Check, 
  Zap, 
  Code, 
  Copy, 
  Download,
  History,
  Settings,
  Tags,
  Mail,
  Shield,
  HelpCircle
} from 'lucide-react';

// --- Color Configuration (IROLAB Brand) ---
const COLORS = {
  magenta: '#d60cbd',
  green: '#05d723',
  black: '#000000',
  dark: '#0a0a0a',
  gray: '#1a1a1a'
};

// --- UI Components ---

const Button = ({ children, variant = 'primary', className = '', icon: Icon, ...props }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 text-base font-bold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black";
  
  const variants = {
    primary: "hover:opacity-90 text-white shadow-lg border border-transparent",
    secondary: "bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800",
    outline: "bg-transparent hover:bg-zinc-900 border",
    glow: "text-white hover:opacity-90 shadow-lg border border-transparent"
  };

  const getInlineStyle = () => {
    if (variant === 'primary') {
      return { 
        backgroundColor: 'rgb(214, 12, 189)', 
        boxShadow: '0 10px 25px -5px rgba(214, 12, 189, 0.3)' 
      };
    }
    if (variant === 'glow') {
      return { 
        backgroundImage: `linear-gradient(to right, ${COLORS.magenta}, #b00b9e)`,
        boxShadow: `0 10px 25px -5px ${COLORS.magenta}20`
      };
    }
    if (variant === 'outline') {
      return { 
        color: COLORS.green, 
        borderColor: COLORS.green 
      };
    }
    return {};
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} style={getInlineStyle()} {...props}>
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </button>
  );
};

const FeatureCard = ({ icon: Icon, title, description, badge }) => (
  <div className="group p-6 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl hover:border-[#d60cbd]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#d60cbd]/10 hover:-translate-y-1">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-black rounded-lg text-[#d60cbd] group-hover:text-[#05d723] group-hover:scale-110 transition-all duration-300 ring-1 ring-zinc-800 group-hover:ring-[#05d723]/30">
        <Icon size={24} />
      </div>
      {badge && (
        <span className="px-2 py-1 text-xs font-bold text-[#05d723] bg-[#05d723]/10 rounded-full border border-[#05d723]/20">
          {badge}
        </span>
      )}
    </div>
    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#d60cbd] transition-colors">{title}</h3>
    <p className="text-zinc-400 leading-relaxed">{description}</p>
  </div>
);

const CodeSnippet = ({ label, code }) => (
  <div className="bg-black rounded-lg border border-zinc-800 overflow-hidden my-2">
    <div className="flex items-center justify-between px-3 py-1 bg-zinc-900 border-b border-zinc-800">
      <span className="text-xs font-mono text-zinc-500">{label}</span>
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
        <div className="w-2 h-2 rounded-full bg-zinc-700"></div>
      </div>
    </div>
    <div className="p-3 font-mono text-sm text-[#05d723] overflow-x-auto">
      {code}
    </div>
  </div>
);

// --- Browser Mockup with Extension Demo ---

const BrowserMockup = () => {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      {/* Browser Window */}
      <div className="bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-zinc-700">
        
        {/* Browser Header */}
        <div className="bg-zinc-950 border-b border-zinc-800 px-4 py-3 flex items-center gap-3">
          {/* Traffic lights */}
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          
          {/* Address Bar */}
          <div className="flex-1 flex items-center gap-2 bg-zinc-900 rounded-lg px-4 py-2 border border-zinc-800">
            <div className="w-4 h-4 rounded-full bg-zinc-700 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-zinc-500"></div>
            </div>
            <span className="text-sm text-zinc-400 font-mono">irolab.app</span>
          </div>
          
          {/* Extension Icon */}
          <div className="relative">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#d60cbd] to-[#b00b9e] flex items-center justify-center shadow-lg shadow-[#d60cbd]/30 ring-2 ring-[#d60cbd]/50">
              <img 
                src="/pipette-icon.svg" 
                alt="IROLAB Extension" 
                className="w-5 h-5"
              />
            </div>
            {/* Active indicator */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#05d723] rounded-full border-2 border-zinc-950 animate-pulse"></div>
          </div>
        </div>

        {/* Browser Body with Extension Interface */}
        <div className="relative bg-zinc-950 overflow-hidden">
          {/* Background pattern to simulate webpage */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-8 left-8 w-32 h-4 bg-zinc-700 rounded"></div>
            <div className="absolute top-16 left-8 w-48 h-3 bg-zinc-800 rounded"></div>
            <div className="absolute top-24 left-8 w-64 h-20 bg-zinc-800 rounded"></div>
            <div className="absolute top-52 right-8 w-40 h-40 bg-zinc-800 rounded-lg"></div>
          </div>

          {/* Extension Popup Overlay */}
          <div className="relative py-8 px-4 flex justify-center">
            <div className="w-full max-w-sm">
              {/* Extension Interface Image */}
              <img 
                src="/demo/extension-interface.png" 
                alt="IROLAB Extension Interface" 
                className="w-full h-auto rounded-2xl shadow-2xl shadow-[#d60cbd]/50 border-4 border-[#d60cbd]"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              
              {/* Fallback UI if image not found */}
              <div className="hidden flex-col bg-gradient-to-b from-[#84cc16] via-[#a3e635] to-[#84cc16] rounded-2xl shadow-2xl border-4 border-[#d60cbd] ring-2 ring-[#d60cbd]/50 overflow-hidden max-h-[800px]">
                {/* Header with Ko-fi button */}
                <div className="bg-black px-4 py-3 flex items-center justify-between border-b-2 border-zinc-700">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#d60cbd] to-[#b00b9e] flex items-center justify-center">
                      <span className="text-white font-bold text-xs">IL</span>
                    </div>
                    <span className="font-bold text-white text-lg">IROLAB</span>
                  </div>
                  <button className="px-3 py-1.5 bg-[#29abe0] hover:bg-[#1a8bb8] text-white text-xs rounded-lg font-medium transition-colors flex items-center gap-1">
                    ☕ Support me on Ko-fi
                  </button>
                  <button className="p-1 text-zinc-500 hover:text-zinc-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto">
                  <div className="p-4 space-y-4">
                    
                    {/* Color Selection Section */}
                    <div className="bg-white/95 rounded-xl p-4 border-2 border-zinc-300 shadow-lg">
                      <h3 className="text-black font-bold mb-3">Color Selection</h3>
                      <button className="w-full py-3 bg-[#d60cbd] hover:bg-[#b00b9e] text-white rounded-lg font-medium transition-colors mb-2 flex items-center justify-center gap-2">
                        <Pipette size={18} />
                        Pick a Color
                      </button>
                      <div className="text-center text-zinc-600 text-sm my-2">OR</div>
                      <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="3"/>
                          <path d="M12 1v6m0 6v6m6-6h6M1 12h6"/>
                        </svg>
                        Extract Site Colors
                      </button>
                      
                      <div className="mt-4">
                        <h4 className="text-xs text-zinc-600 uppercase mb-2 font-semibold">Recent Colors</h4>
                        <div className="grid grid-cols-8 gap-1.5">
                          {[COLORS.magenta, '#c47ac0', '#e88388', '#6ee787', '#996633', '#3b82f6', '#84cc16', '#dc2626'].map((color, i) => (
                            <div 
                              key={i}
                              className="aspect-square rounded border-2 border-zinc-700"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Test Area Section */}
                    <div className="bg-white/95 rounded-xl p-4 border-2 border-zinc-300 shadow-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-black font-bold">Test Area</h3>
                        <button className="text-xs px-2 py-1 bg-zinc-200 text-zinc-700 rounded flex items-center gap-1 hover:bg-zinc-300 transition-colors">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Open in detached mode
                        </button>
                      </div>
                      
                      {/* Interactive Test Panel */}
                      <div className="bg-[#d60cbd] rounded-lg p-6 relative">
                        <div className="flex items-center gap-2 mb-4">
                          <button className="p-1.5 bg-white rounded text-black">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <rect width="18" height="18" x="3" y="3" rx="2"/>
                            </svg>
                          </button>
                          <button className="p-1.5 bg-white/20 rounded text-white">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"/>
                            </svg>
                          </button>
                        </div>
                        
                        <h4 className="text-black font-bold text-xl mb-2">Section Title</h4>
                        <button className="px-3 py-1.5 bg-white/20 text-white text-xs rounded mb-3 inline-flex items-center gap-1">
                          A <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        
                        <p className="text-black text-sm mb-4">
                          This is an example text in the test area. You can see how colors interact together and test different combinations to create harmonious palettes.
                        </p>
                        
                        <div className="bg-blue-800 rounded-lg p-3 flex items-center justify-between">
                          <span className="text-white text-sm font-medium">Test Button</span>
                          <div className="flex gap-2">
                            <button className="p-1 bg-white rounded text-blue-800">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>
                            </button>
                            <button className="p-1 bg-white/20 rounded text-white">
                              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"/></svg>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Palette Controls */}
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-zinc-600 font-medium">Used Palette</span>
                          <button className="p-1 text-zinc-500 hover:text-zinc-700">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <circle cx="12" cy="12" r="10"/>
                              <path d="M12 16v-4M12 8h.01"/>
                            </svg>
                          </button>
                        </div>
                        <div className="flex gap-1">
                          <button className="p-1.5 text-zinc-500 hover:text-zinc-700">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" /></svg>
                          </button>
                          <button className="p-1.5 text-zinc-500 hover:text-zinc-700">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                          </button>
                          <button className="p-1.5 text-zinc-500 hover:text-zinc-700">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                          </button>
                        </div>
                      </div>

                      {/* Palette Sections */}
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        <button className="px-3 py-2 bg-orange-600 text-white rounded-lg text-xs font-medium flex items-center justify-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>
                          Section
                        </button>
                        <button className="px-3 py-2 bg-[#d60cbd] text-white rounded-lg text-xs font-medium flex items-center justify-center gap-1">
                          + Section
                        </button>
                        <button className="px-3 py-2 bg-black text-white rounded-lg text-xs font-medium flex items-center justify-center gap-1">
                          ■ Section
                        </button>
                        <button className="px-3 py-2 bg-blue-700 text-white rounded-lg text-xs font-medium flex items-center justify-center gap-1">
                          ■ Button
                        </button>
                        <button className="px-3 py-2 bg-zinc-200 text-black rounded-lg text-xs font-medium flex items-center justify-center gap-1">
                          🖊 Button
                        </button>
                        <button className="px-3 py-2 bg-blue-900 text-white rounded-lg text-xs font-medium flex items-center justify-center gap-1">
                          ● Button
                        </button>
                      </div>

                      {/* Colorblind Simulator */}
                      <div className="mt-3">
                        <label className="text-xs text-zinc-600 font-medium block mb-1">Color Blindness Simulator:</label>
                        <select className="w-full px-3 py-2 bg-white text-zinc-800 border border-zinc-300 rounded-lg text-sm">
                          <option>Normal Vision</option>
                          <option>Protanopia</option>
                          <option>Deuteranopia</option>
                          <option>Tritanopia</option>
                        </select>
                      </div>
                    </div>

                    {/* Collections Section */}
                    <div className="bg-white/95 rounded-xl p-4 border-2 border-zinc-300 shadow-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-black font-bold">Collections</h3>
                        <button className="p-1 text-zinc-500 hover:text-zinc-700">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                          </svg>
                        </button>
                      </div>

                      {/* Web Palette */}
                      <div className="bg-zinc-100 rounded-lg p-3 mb-2 border border-zinc-200">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            <span className="text-zinc-800 text-sm font-medium">♥ Web palet...</span>
                            <span className="text-zinc-500 text-xs">8</span>
                          </div>
                          <div className="flex gap-1">
                            <button className="p-1 text-zinc-500 hover:text-zinc-700">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                            </button>
                            <button className="p-1 text-zinc-500 hover:text-zinc-700">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                            </button>
                            <button className="p-1 text-zinc-500 hover:text-zinc-700">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            </button>
                          </div>
                        </div>
                        <div className="flex gap-1.5">
                          {['#000', '#8b9dc3', '#000', '#000', '#696969', '#fff', '#e0e0e0', '#999'].map((color, i) => (
                            <div 
                              key={i}
                              className="w-8 h-8 rounded border-2 border-zinc-700"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Untagged Collection */}
                      <div className="bg-zinc-100 rounded-lg p-3 border border-zinc-200">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            <span className="text-zinc-800 text-sm font-medium">♥ Untagged</span>
                            <span className="text-zinc-500 text-xs">11</span>
                          </div>
                          <div className="flex gap-1">
                            <button className="p-1 text-zinc-500 hover:text-zinc-700">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                            </button>
                            <button className="p-1 text-zinc-500 hover:text-zinc-700">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            </button>
                          </div>
                        </div>
                        <div className="grid grid-cols-8 gap-1.5">
                          {[COLORS.magenta, '#c47ac0', '#e88388', '#6ee787', '#996633', '#3b82f6', '#84cc16', '#dc2626', '#fff', '#e88388', '#000'].map((color, i) => (
                            <div 
                              key={i}
                              className="w-8 h-8 rounded border-2 border-zinc-700"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation */}
                <div className="bg-black px-4 py-3 flex items-center justify-around border-t-2 border-zinc-700">
                  <button className="p-2 text-zinc-400 hover:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  </button>
                  <button className="p-2 text-zinc-400 hover:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
                  </button>
                  <button className="p-2 text-zinc-400 hover:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Page Principale ---

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-zinc-200 selection:bg-[#d60cbd]/30 selection:text-white font-sans">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-zinc-800 py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-white">
            <img 
              src="/pipette-icon.svg" 
              alt="IROLAB Icon" 
              className="w-8 h-8 rounded-lg shadow-lg shadow-[#84CC16]/20"
            />
            IROLAB
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#tech" className="hover:text-white transition-colors">Tech</a>
            <a href="#support" className="hover:text-white transition-colors">Support</a>
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://chromewebstore.google.com/detail/biopihomjliklkkenjijbahopjeefmle" target="_blank" rel="noreferrer">
              <Button variant="primary" className="hidden md:flex text-sm py-2 px-4 h-9" icon={Download}>
                Add to Chrome
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full blur-[120px] -z-10 opacity-30 pointer-events-none mix-blend-screen"
             style={{ background: `radial-gradient(circle, ${COLORS.magenta}, transparent)` }} />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] rounded-full blur-[100px] -z-10 opacity-20 pointer-events-none"
             style={{ background: `radial-gradient(circle, ${COLORS.green}, transparent)` }} />

        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Hero Content */}
            <div className="flex-1 text-center lg:text-left z-10">
              <div 
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium mb-6 animate-fade-in-up"
                style={{ color: COLORS.green }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: COLORS.green }}></span>
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: COLORS.green }}></span>
                </span>
                Manifest V3 & Sync Cloud Ready
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
                Your colors, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${COLORS.magenta}, ${COLORS.green})` }}>
                  mastered.
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                The ultimate Chrome extension. Native EyeDropper, accessibility validation, and Cloud synchronization.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a href="https://chromewebstore.google.com/detail/biopihomjliklkkenjijbahopjeefmle" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                  <Button variant="primary" icon={Download} className="w-full sm:w-auto">
                    Add to Chrome
                  </Button>
                </a>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-zinc-500">
                <span className="flex items-center gap-1"><Check size={14} style={{ color: COLORS.green }} /> Free & Open Source</span>
                <span className="flex items-center gap-1"><Check size={14} style={{ color: COLORS.green }} /> No tracking</span>
              </div>
            </div>

            {/* Hero Visual / Demo */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none relative z-10">
              <div className="absolute inset-0 rounded-3xl blur-3xl -z-10 opacity-20" style={{ backgroundImage: `linear-gradient(to top right, ${COLORS.magenta}, transparent)` }} />
              <BrowserMockup />
            </div>

          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-zinc-400 text-lg">More than just an eyedropper.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={() => <img src="/pipette-icon.svg" alt="Pipette" className="w-6 h-6" />}
              title="EyeDropper API"
              description="Select any color on your screen with native precision."
              badge="Native"
            />
            <FeatureCard 
              icon={Layers}
              title="Site Extraction"
              description="Analyze the web page and automatically extract all used colors."
            />
            <FeatureCard 
              icon={Cloud}
              title="Supabase Cloud Sync"
              description="Access your palettes on all your devices (optional)."
              badge="Sync"
            />
            <FeatureCard 
              icon={Monitor}
              title="Test Area"
              description="Interactive playground to test your color combinations."
            />
            <FeatureCard 
              icon={Tags}
              title="Custom Palettes"
              description="Save and organize your palettes with a smart tagging system."
              badge="Tags"
            />
            <FeatureCard 
              icon={Code}
              title="OKLCH Formats"
              description="Full support for modern color spaces and conversions."
            />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="py-20 overflow-hidden relative border-t border-zinc-900 bg-[#050505]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            
            <div className="flex-1 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Tech Stack
              </h2>
              <p className="text-zinc-400 text-lg">
                IROLAB follows modern standards.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Zap, text: "Vite + WXT" },
                  { icon: Layers, text: "React 18" },
                  { icon: Cloud, text: "Supabase" },
                  { icon: Palette, text: "Tailwind CSS" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-[#d60cbd]/30 transition-colors">
                    <item.icon className="text-[#d60cbd]" size={20} />
                    <span className="font-mono text-sm text-zinc-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg">
               <div className="relative rounded-xl bg-zinc-950 border border-zinc-800 shadow-2xl p-6 font-mono text-sm">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r rounded-t-xl" style={{ backgroundImage: `linear-gradient(to right, ${COLORS.magenta}, ${COLORS.green})` }} />
                 
                 <div className="mb-4 text-zinc-500 font-mono">
                   {'// Modern color management (OKLCH)'}
                 </div>
                 
                 <CodeSnippet label="OKLCH CSS" code=".btn { background: oklch(0.65 0.25 45); }" />
                 <CodeSnippet label="React Hooks" code="const { sync } = useCloudSync(user);" />
                 
                 <div className="mt-4 p-4 rounded bg-zinc-900 border border-zinc-800">
                   <p className="mb-1 font-bold" style={{ color: COLORS.green }}>🚀 Performance</p>
                   <div className="w-full bg-zinc-800 h-1.5 rounded-full mt-2">
                     <div className="w-[98%] h-full rounded-full shadow-[0_0_10px_rgba(5,215,35,0.5)]" style={{ backgroundColor: COLORS.green }}></div>
                   </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 bg-black border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium mb-6"
                   style={{ color: COLORS.green }}>
                <HelpCircle size={16} />
                We're here to help
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Support</h2>
              <p className="text-zinc-400 text-lg">Get assistance with IROLAB and make the most of your color workflow.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-20">
              <FeatureCard 
                icon={Mail}
                title="Email Support"
                description="Contact us at support@irolab.app for technical questions, feature requests, or bug reports. We typically respond within 24-48 hours."
              />
              <FeatureCard 
                icon={Settings}
                title="How It Works"
                description="Learn how to use IROLAB with our step-by-step guide covering all features from color picking to cloud sync."
              />
            </div>

            <div className="mb-12 text-center">
              <a href="mailto:support@irolab.app">
                <Button variant="primary" icon={Mail}>
                  Contact Support
                </Button>
              </a>
            </div>

            {/* How It Works Guide */}
            <div id="how-it-works" className="mt-20 pt-16 border-t border-zinc-800">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">How It Works</h3>
                <p className="text-zinc-400">Get started with IROLAB in minutes. Follow these simple steps.</p>
              </div>

              <div className="space-y-8">
                
                {/* Step 1 */}
                <div className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl border-2 transition-all duration-300"
                       style={{ borderColor: COLORS.magenta, backgroundColor: 'transparent' }}>
                    1
                  </div>
                  <div className="flex-1 pt-2">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#d60cbd] transition-colors">Install the Extension</h4>
                    <p className="text-zinc-400 leading-relaxed mb-3">
                      Add IROLAB to Chrome from the Chrome Web Store. The extension is free, lightweight, and respects your privacy.
                    </p>
                    <a href="https://chromewebstore.google.com/detail/biopihomjliklkkenjijbahopjeefmle" target="_blank" rel="noreferrer">
                      <Button variant="outline" className="text-xs py-2 px-4 h-8">
                        Go to Chrome Store
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl border-2 transition-all duration-300"
                       style={{ borderColor: COLORS.magenta, backgroundColor: 'transparent' }}>
                    2
                  </div>
                  <div className="flex-1 pt-2">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#d60cbd] transition-colors">Pick Colors</h4>
                    <p className="text-zinc-400 leading-relaxed">
                      Click the extension icon and use the EyeDropper to pick any color from your screen. Colors are automatically saved to your history with support for HEX, RGB, HSL, and OKLCH formats.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl border-2 transition-all duration-300"
                       style={{ borderColor: COLORS.magenta, backgroundColor: 'transparent' }}>
                    3
                  </div>
                  <div className="flex-1 pt-2">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#d60cbd] transition-colors">Extract Site Colors</h4>
                    <p className="text-zinc-400 leading-relaxed">
                      Visit any website and use the "Extract Website Colors" feature to automatically capture the entire color palette used on the page. Perfect for design inspiration!
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl border-2 transition-all duration-300"
                       style={{ borderColor: COLORS.magenta, backgroundColor: 'transparent' }}>
                    4
                  </div>
                  <div className="flex-1 pt-2">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#d60cbd] transition-colors">Test & Validate</h4>
                    <p className="text-zinc-400 leading-relaxed">
                      Use the interactive Test Area to preview color combinations and check accessibility (WCAG AA/AAA). Test colorblind simulations to ensure your palette works for everyone.
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl border-2 transition-all duration-300"
                       style={{ borderColor: COLORS.green, backgroundColor: 'transparent' }}>
                    5
                  </div>
                  <div className="flex-1 pt-2">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#05d723] transition-colors">Sync Across Devices (Optional)</h4>
                    <p className="text-zinc-400 leading-relaxed">
                      Enable cloud sync to access your color palettes on all your devices. Your data is encrypted and stored securely with Supabase. No sync? No problem—everything works locally too.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="py-20 bg-[#050505] border-t border-zinc-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium mb-6"
                   style={{ color: COLORS.magenta }}>
                <Shield size={16} />
                Your data, your control
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Privacy First</h2>
              <p className="text-zinc-400 text-lg">We take your privacy seriously. Here's how we protect your data.</p>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Check size={20} style={{ color: COLORS.green }} />
                  No Tracking
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  IROLAB doesn't collect analytics, usage data, or any personal information without your explicit consent. 
                  Your color picks stay on your device unless you choose to enable cloud sync.
                </p>
              </div>

              <div className="p-6 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Check size={20} style={{ color: COLORS.green }} />
                  Optional Cloud Sync
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  Cloud synchronization through Supabase is completely optional. If you choose to enable it, 
                  your data is encrypted and stored securely with industry-standard security practices.
                </p>
              </div>

              <div className="p-6 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Check size={20} style={{ color: COLORS.green }} />
                  Open Source
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  IROLAB is open source under MIT License. You can review our code on GitHub and verify 
                  exactly what the extension does. Transparency is our commitment to you.
                </p>
              </div>

              <div className="p-6 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Check size={20} style={{ color: COLORS.green }} />
                  Minimal Permissions
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  We request only the permissions necessary for core functionality: active tab access for color extraction 
                  and storage for saving your palettes locally. No invasive permissions required.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-black rounded-xl border border-zinc-800">
              <p className="text-zinc-400 text-sm text-center">
                <strong className="text-white">Questions about privacy?</strong> Contact us at{' '}
                <a href="mailto:support@irolab.app" className="text-[#d60cbd] hover:underline">support@irolab.app</a>
                {' '}or review our full privacy policy on{' '}
                <a href="https://github.com/damienbrosseau/irolab" target="_blank" rel="noreferrer" className="text-[#d60cbd] hover:underline">GitHub</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-black py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
               <div className="flex items-center gap-2 font-bold text-xl tracking-tighter text-white mb-4">
                <img 
                  src="/pipette-icon.svg" 
                  alt="IROLAB Icon" 
                  className="w-5 h-5 rounded"
                />
                IROLAB
              </div>
              <p className="text-zinc-500 max-w-xs">
                The essential tool to capture and organize web colors.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Links</h4>
              <ul className="space-y-2 text-zinc-400 text-sm">
                <li><a href="https://github.com/damienbrosseau/irolab" target="_blank" rel="noreferrer" className="hover:text-[#d60cbd] transition-colors">GitHub</a></li>
                <li><a href="mailto:support@irolab.app" className="hover:text-[#d60cbd] transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
            <p>© {new Date().getFullYear()} Damien Brosseau. MIT License.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
