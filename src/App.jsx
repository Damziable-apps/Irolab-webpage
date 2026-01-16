import { useState, useEffect } from 'react';
import { 
  Pipette, 
  Palette, 
  Cloud, 
  Monitor, 
  Layers, 
  Check, 
  Zap, 
  Eye, 
  Code, 
  Copy, 
  Download,
  History,
  Settings,
  Image as ImageIcon,
  X,
  ZoomIn
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
    primary: `bg-[${COLORS.magenta}] hover:opacity-90 text-white shadow-lg shadow-[${COLORS.magenta}]/30 border border-transparent`,
    secondary: "bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800",
    outline: `bg-transparent hover:bg-zinc-900 text-[${COLORS.green}] border border-[${COLORS.green}]/50 hover:border-[${COLORS.green}]`,
    glow: `bg-gradient-to-r from-[${COLORS.magenta}] to-[${COLORS.green}] text-white hover:opacity-90 shadow-lg shadow-[${COLORS.magenta}]/20 border border-transparent`
  };

  const style = variant === 'primary' ? { backgroundColor: COLORS.magenta, boxShadow: `0 10px 25px -5px ${COLORS.magenta}50` } :
                variant === 'glow' ? { backgroundImage: `linear-gradient(to right, ${COLORS.magenta}, #b00b9e)` } : 
                variant === 'outline' ? { color: COLORS.green, borderColor: COLORS.green } : {};

  return (
    <button className={`${baseStyle} ${variants[variant === 'primary' || variant === 'glow' || variant === 'outline' ? 'custom' : variant]} ${className}`} style={style} {...props}>
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

// --- Demo Interactive (App Interface Mockup) ---

const DemoPlayground = () => {
  const [activeColor, setActiveColor] = useState(COLORS.magenta);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('picker');

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden flex h-[400px]">
      
      {/* Sidebar Vertical */}
      <div className="w-16 bg-black border-r border-zinc-800 flex flex-col items-center py-4 gap-6">
        <div 
          className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-lg"
          style={{ backgroundColor: COLORS.magenta }}
        >
          IL
        </div>
        <div className="flex flex-col gap-4 w-full px-2">
          <button 
            onClick={() => setActiveTab('picker')}
            className={`p-2 rounded-lg transition-colors ${activeTab === 'picker' ? 'bg-zinc-800 text-[#d60cbd]' : 'text-zinc-500 hover:text-zinc-300'}`}
          >
            <Pipette size={20} />
          </button>
          <button className="p-2 text-zinc-500 hover:text-zinc-300 rounded-lg transition-colors">
            <History size={20} />
          </button>
          <button className="p-2 text-zinc-500 hover:text-zinc-300 rounded-lg transition-colors">
            <Palette size={20} />
          </button>
        </div>
        <div className="mt-auto pb-2">
          <button className="p-2 text-zinc-500 hover:text-zinc-300 rounded-lg transition-colors">
            <Settings size={20} />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-[#050505]">
        
        {/* Header with "Tips" */}
        <div className="h-12 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between px-4">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="text-xs font-bold px-2 py-0.5 rounded bg-[#05d723]/10 text-[#05d723] border border-[#05d723]/20 whitespace-nowrap">
              TIP
            </span>
            <p className="text-xs text-zinc-400 truncate">
              Press <kbd className="font-mono bg-zinc-800 px-1 rounded border border-zinc-700 text-white">Space</kbd> to capture.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.green }}></div>
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-md mx-auto space-y-6">
            
            {/* Main Color Block */}
            <div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800 shadow-xl relative overflow-hidden">
               {/* Decorative glow behind */}
               <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[50px] opacity-10 pointer-events-none" style={{ backgroundColor: COLORS.magenta }}></div>

               <div className="flex justify-between items-center mb-4 relative z-10">
                 <h3 className="text-sm font-medium text-zinc-300">Active Color</h3>
                 <span className="text-xs text-zinc-500 font-mono">OKLCH / HEX</span>
               </div>
               
               <div 
                  className="h-24 rounded-lg flex items-center justify-center cursor-pointer transition-transform active:scale-[0.98] group relative border border-zinc-700/50"
                  style={{ backgroundColor: activeColor }}
                  onClick={handleCopy}
               >
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[2px] rounded-lg">
                    <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 border border-zinc-700">
                      {copied ? <Check size={12} className="text-[#05d723]" /> : <Copy size={12}/>} 
                      {copied ? 'COPIED' : 'COPY'}
                    </span>
                 </div>
               </div>

               <div className="mt-4 grid grid-cols-2 gap-2 relative z-10">
                 <div className="bg-black/50 p-2 rounded border border-zinc-800 text-center">
                   <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">Hex</div>
                   <div className="font-mono text-sm text-zinc-200">{activeColor}</div>
                 </div>
                 <div className="bg-black/50 p-2 rounded border border-zinc-800 text-center">
                   <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1">HSL</div>
                   <div className="font-mono text-sm text-zinc-200">239, 84%, 67%</div>
                 </div>
               </div>
            </div>

            {/* Quick History Grid */}
            <div>
              <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3 pl-1">Recent</h4>
              <div className="grid grid-cols-6 gap-2">
                {[COLORS.magenta, COLORS.green, '#f59e0b', '#ef4444', '#3b82f6', '#0ea5e9', '#8b5cf6', '#14b8a6'].map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveColor(c)}
                    className={`aspect-square rounded-md border border-zinc-800 hover:border-zinc-500 transition-all hover:scale-110 ${activeColor === c ? 'ring-2 ring-white ring-offset-2 ring-offset-black' : ''}`}
                    style={{ backgroundColor: c }}
                  />
                ))}
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
  const [zoomedImage, setZoomedImage] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setZoomedImage(null);
    };
    if (zoomedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [zoomedImage]);

  return (
    <div className="min-h-screen bg-black text-zinc-200 selection:bg-[#d60cbd]/30 selection:text-white font-sans">
      
      {/* Lightbox Modal */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setZoomedImage(null)}
        >
          <button
            onClick={() => setZoomedImage(null)}
            className="absolute top-4 right-4 p-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-full transition-colors z-10"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          
          <div className="relative max-w-5xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={zoomedImage.src}
              alt={zoomedImage.alt}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
              <p className="text-white text-center font-medium">{zoomedImage.alt}</p>
            </div>
          </div>
        </div>
      )}

      
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
            <a href="#gallery" className="hover:text-white transition-colors">Overview</a>
            <a href="#tech" className="hover:text-white transition-colors">Tech</a>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="secondary" className="hidden md:flex text-sm py-2 px-4 h-9" icon={Download}>
              Add to Chrome
            </Button>
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
                <Button variant="primary" icon={Download} className="w-full sm:w-auto">
                  Add to Chrome
                </Button>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-zinc-500">
                <span className="flex items-center gap-1"><Check size={14} style={{ color: COLORS.green }} /> Free & Open Source</span>
                <span className="flex items-center gap-1"><Check size={14} style={{ color: COLORS.green }} /> No tracking</span>
              </div>
            </div>

            {/* Hero Visual / Demo */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none relative z-10">
              <div className="absolute inset-0 rounded-3xl blur-3xl -z-10 opacity-20" style={{ backgroundImage: `linear-gradient(to top right, ${COLORS.magenta}, transparent)` }} />
              <DemoPlayground />
            </div>

          </div>
        </div>
      </section>

      {/* Screenshot Gallery Section */}
      <section id="gallery" className="py-20 bg-[#050505] border-y border-zinc-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">App Overview</h2>
            <p className="text-zinc-400">Minimalist design, powerful features.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Capture 1 */}
            <div className="space-y-4 group">
               <div 
                 className="bg-black rounded-2xl overflow-hidden border-4 border-black group-hover:border-[#84CC16] transition-all shadow-2xl relative cursor-pointer"
                 onClick={() => setZoomedImage({ src: '/screenshots/capture-1.png', alt: 'Color Selection - IROLAB Interface' })}
               >
                  <img 
                    src="/screenshots/capture-1.png" 
                    alt="Eyedropper interface" 
                    className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Zoom indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[1px]">
                    <div className="bg-black/80 text-white px-4 py-2 rounded-full flex items-center gap-2 border border-zinc-700">
                      <ZoomIn size={18} />
                      <span className="text-sm font-medium">Click to zoom</span>
                    </div>
                  </div>
                  {/* Fallback if image not found */}
                  <div className="hidden absolute inset-0 flex-col items-center justify-center text-zinc-600 bg-zinc-950 p-4 text-center">
                    <ImageIcon size={48} className="mb-2 opacity-50" />
                    <span className="text-xs font-mono">Screenshot placeholder<br/>Add your images to /public/screenshots/</span>
                  </div>
               </div>
               <p className="text-center text-sm font-medium text-zinc-300 group-hover:text-[#84CC16] transition-colors">Color Selection</p>
            </div>

            {/* Capture 2 */}
            <div className="space-y-4 group md:-mt-8">
               <div 
                 className="bg-black rounded-2xl overflow-hidden border-4 border-black group-hover:border-[#d60cbd] transition-all shadow-2xl shadow-[#d60cbd]/20 relative ring-2 ring-zinc-800 cursor-pointer"
                 onClick={() => setZoomedImage({ src: '/screenshots/capture-2.png', alt: 'Test Area - Interactive Color Playground' })}
               >
                  <img 
                    src="/screenshots/capture-2.png" 
                    alt="Test area interface" 
                    className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Zoom indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[1px]">
                    <div className="bg-black/80 text-white px-4 py-2 rounded-full flex items-center gap-2 border border-zinc-700">
                      <ZoomIn size={18} />
                      <span className="text-sm font-medium">Click to zoom</span>
                    </div>
                  </div>
                  <div className="hidden absolute inset-0 flex-col items-center justify-center text-zinc-600 bg-zinc-950 p-4 text-center">
                    <ImageIcon size={48} className="mb-2 opacity-50" />
                    <span className="text-xs font-mono">Screenshot placeholder<br/>Add your images to /public/screenshots/</span>
                  </div>
               </div>
               <p className="text-center text-sm font-bold text-white group-hover:text-[#d60cbd] transition-colors">Test Area</p>
            </div>

            {/* Capture 3 */}
            <div className="space-y-4 group">
               <div 
                 className="bg-black rounded-2xl overflow-hidden border-4 border-black group-hover:border-[#84CC16] transition-all shadow-2xl relative cursor-pointer"
                 onClick={() => setZoomedImage({ src: '/screenshots/capture-3.png', alt: 'Collections - Color Organization & History' })}
               >
                  <img 
                    src="/screenshots/capture-3.png" 
                    alt="Collections view" 
                    className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-300"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Zoom indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[1px]">
                    <div className="bg-black/80 text-white px-4 py-2 rounded-full flex items-center gap-2 border border-zinc-700">
                      <ZoomIn size={18} />
                      <span className="text-sm font-medium">Click to zoom</span>
                    </div>
                  </div>
                  <div className="hidden absolute inset-0 flex-col items-center justify-center text-zinc-600 bg-zinc-950 p-4 text-center">
                    <ImageIcon size={48} className="mb-2 opacity-50" />
                    <span className="text-xs font-mono">Screenshot placeholder<br/>Add your images to /public/screenshots/</span>
                  </div>
               </div>
               <p className="text-center text-sm font-medium text-zinc-300 group-hover:text-[#84CC16] transition-colors">Collections</p>
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
              icon={Eye}
              title="Accessibility"
              description="Built-in Protanopia, Deuteranopia, Tritanopia simulations."
              badge="WCAG"
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
