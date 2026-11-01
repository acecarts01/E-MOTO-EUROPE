import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const imagesDir = path.join(rootDir, 'public', 'images');
const productsDir = path.join(imagesDir, 'products');
const blogDir = path.join(imagesDir, 'blog');

[imagesDir, productsDir, blogDir].forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

function makeSvg(title, subtitle, badge, accent = '#FF3B30', type = 'moto') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600" style="background:#09090c;font-family:system-ui,-apple-system,sans-serif">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#14141c" />
      <stop offset="100%" stop-color="#08080a" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1f1f2a" stroke-width="0.8" opacity="0.35" />
    </pattern>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${accent}" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  
  <rect width="800" height="600" fill="url(#grad)" />
  <rect width="800" height="600" fill="url(#grid)" />
  <circle cx="400" cy="280" r="240" fill="url(#glow)" />
  
  <!-- Technical Frame lines -->
  <g stroke="#2f2f3f" stroke-width="1.2" fill="none" opacity="0.65">
    <circle cx="400" cy="280" r="180" stroke-dasharray="6,4" />
    <circle cx="400" cy="280" r="120" />
    <line x1="160" y1="280" x2="640" y2="280" />
    <line x1="400" y1="100" x2="400" y2="460" />
    <circle cx="280" cy="340" r="70" stroke="${accent}" stroke-width="2" />
    <circle cx="520" cy="340" r="70" stroke="${accent}" stroke-width="2" />
    <path d="M 280 340 L 400 240 L 520 340 L 400 340 Z" stroke="#ffffff" stroke-width="3" />
    <line x1="400" y1="240" x2="400" y2="180" stroke="#ffffff" stroke-width="3" />
    <line x1="360" y1="180" x2="440" y2="180" stroke="${accent}" stroke-width="4" />
  </g>

  <!-- Technical badges & brand watermark -->
  <rect x="50" y="45" width="140" height="28" rx="4" fill="#15151e" stroke="#2c2c3e" />
  <text x="62" y="64" fill="#00F0FF" font-size="11" font-weight="700" letter-spacing="1.5">E-MOTO EUROPE</text>

  <rect x="620" y="45" width="130" height="28" rx="4" fill="${accent}" />
  <text x="685" y="64" fill="#ffffff" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="1">${badge}</text>

  <!-- Spec overlays -->
  <g fill="#707085" font-size="11" font-family="monospace">
    <text x="50" y="480">ENGINEERING: DE-PRECISION</text>
    <text x="50" y="500">SYSTEM: HIGH-OUTPUT POWERTRAIN</text>
    <text x="50" y="520">ADR CLASS 9 VERIFIED (UN 3480)</text>
    
    <text x="750" y="480" text-anchor="end">72V / 52V HIGH-RATE CELLS</text>
    <text x="750" y="500" text-anchor="end">FOC SINE-WAVE TELEMETRY</text>
    <text x="750" y="520" text-anchor="end">ISO 9001 / EN 15194 READY</text>
  </g>

  <!-- Title banner -->
  <rect x="50" y="535" width="700" height="42" rx="6" fill="#12121a" stroke="#252535" />
  <text x="70" y="562" fill="#ffffff" font-size="15" font-weight="700">${title}</text>
  <text x="730" y="562" fill="#888899" font-size="12" text-anchor="end">${subtitle}</text>
</svg>`;
}

const assets = [
  // Products
  { path: 'products/hyper-drive-2000w-bundle.webp', title: 'HYPER-DRIVE 2000W MOTOR & 52V BUNDLE', subtitle: '125 Nm / CNC Throttle Grip', badge: 'BESTSELLER' },
  { path: 'products/hyper-drive-2000w-motor.webp', title: '2000W HIGH-TORQUE REAR HUB MOTOR', subtitle: 'Precision Bearings / Sine-Wave', badge: 'COMPONENTS' },
  { path: 'products/etm-rtr-sport.webp', title: '2026 ETM™ RTR SPORT E-MOTO', subtitle: '8000W Peak / 72V 35Ah', badge: 'MODELL 2026' },
  { path: 'products/etm-rtr-side.webp', title: 'ETM™ RTR CHASSIS & GEOMETRY', subtitle: 'Inverted Suspension / 4-Piston', badge: 'DETAILS' },
  { path: 'products/strike-shadow-72v.webp', title: 'STRIKE CYCLES SHADOW 72V', subtitle: '7000W Motocross Output', badge: 'HIGH OUTPUT' },
  { path: 'products/strike-shadow-detail.webp', title: 'STRIKE SHADOW FRAME', subtitle: 'T6 Aircraft Grade Aluminum', badge: 'SPEC SHEET' },
  { path: 'products/ultra-drive-3000w-bundle.webp', title: 'ULTRA-DRIVE 3000W & 72V BUNDLE', subtitle: '165 Nm / 5000W Peak Output', badge: 'EXTREME' },
  { path: 'products/ultra-drive-3000w-parts.webp', title: '3000W COMPONENT SET', subtitle: '80A Bluetooth Controller', badge: 'UPGRADE' },
  { path: 'products/cnc-throttle-grip.webp', title: 'GENUINE FX CNC THROTTLE GRIP', subtitle: 'HiGo Plug-and-Play', badge: 'IN STOCK' },
  { path: 'products/pedelec-250w-kit.webp', title: '250W PEDELEC CONVERSION KIT', subtitle: '100% StVZO & EN 15194', badge: 'STVZO LEGAL', accent: '#00F0FF' },
  { path: 'products/battery-72v-42ah.webp', title: '72V 42Ah MOLICEL TRACTION PACK', subtitle: 'ADR Class 9 / 3024Wh / Smart BMS', badge: 'HIGH-AMP' },
  { path: 'products/torp-tc500-controller.webp', title: 'TORP TC500 CONTROLLER', subtitle: 'Up to 25kW Peak FOC', badge: 'PLUG & PLAY' },
  
  // Categories
  { path: 'cat-motos.webp', title: 'COMPLETE E-MOTOS & DIRT BIKES', subtitle: 'ETM, Strike, Sur-Ron, Talaria Upgrades', badge: 'CATEGORY' },
  { path: 'cat-kits.webp', title: 'E-BIKE CONVERSION KITS & MOTORS', subtitle: '250W StVZO to 5000W Offroad', badge: 'CATEGORY' },
  { path: 'cat-batteries.webp', title: 'BATTERIES & CHARGERS', subtitle: '52V & 72V Smart BMS (ADR Class 9)', badge: 'CATEGORY' },
  { path: 'cat-components.webp', title: 'COMPONENTS & COCKPIT', subtitle: 'CNC Grips, Brakes, Chains, Adapters', badge: 'CATEGORY' },
  { path: 'cat-gear.webp', title: 'SAFETY GEAR & RACKS', subtitle: 'ECE 22.06 Helmets & Heavy-Duty Racks', badge: 'CATEGORY' },

  // Blog
  { path: 'blog/blog-stvzo.webp', title: 'STVZO & E-MOTO LEGAL GUIDE', subtitle: 'Private Grounds vs. L1e-B CoC Registration', badge: 'LEGAL GUIDE' },
  { path: 'blog/blog-battery-adr.webp', title: 'ADR CLASS 9 HAZMAT LOGISTICS', subtitle: 'UN 3480 / 3481 Certified Pallet Transport', badge: 'LOGISTICS' },
  { path: 'blog/blog-comparison.webp', title: 'PEDELEC VS S-PEDELEC VS E-MOTO', subtitle: 'The Comprehensive 2026 Comparison', badge: 'BUYING GUIDE' }
];

for (const a of assets) {
  const fullPath = path.join(imagesDir, a.path);
  const svg = makeSvg(a.title, a.subtitle, a.badge, a.accent || '#FF3B30');
  fs.writeFileSync(fullPath, svg, 'utf8');
}

console.log(`[generate-assets] Generated ${assets.length} visual product, category & blog assets.`);
