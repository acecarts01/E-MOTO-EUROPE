import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SITE, COMPLIANCE, PRODUCTS, CATEGORIES, FAQ } from '../src/config/site.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('[crosscheck] Running WebForge v9.1 Pre-Ship Crosscheck...');

let failures = 0;
let warnings = 0;

function fail(msg) {
  console.error(`❌ [FAIL] ${msg}`);
  failures++;
}

function pass(msg) {
  console.log(`✅ [PASS] ${msg}`);
}

function warn(msg) {
  console.warn(`⚠️ [WARN] ${msg}`);
  warnings++;
}

// B1: Domain Check
if (SITE.domain === 'DOMAIN.com' || !SITE.domain) {
  fail('B1: SITE.domain is unset or still DOMAIN.com');
} else {
  pass(`B1: SITE.domain is '${SITE.domain}'`);
}

// B6: Missing Agent Files A-N
const requiredAgentFiles = [
  'public/robots.txt',
  'public/llms.txt',
  'public/auth.md',
  'public/.well-known/api-catalog',
  'public/.well-known/agent-skills/index.json',
  'public/.well-known/mcp/server-card.json',
  'public/.well-known/oauth-protected-resource',
  'public/.well-known/oauth-authorization-server',
  'public/.well-known/openid-configuration',
  'public/.well-known/acp.json',
  'public/.well-known/ucp',
  'public/js/webmcp.js',
  `public/${SITE.indexNowKey}.txt`,
  'vercel.json'
];

for (const relPath of requiredAgentFiles) {
  const fullPath = path.join(rootDir, relPath);
  if (!fs.existsSync(fullPath)) {
    fail(`B6: Missing required agent file: ${relPath}`);
  } else {
    pass(`B6: Found agent file: ${relPath}`);
  }
}

// Check auth.md starts with '# Auth.md'
const authMdPath = path.join(rootDir, 'public/auth.md');
if (fs.existsSync(authMdPath)) {
  const firstLine = fs.readFileSync(authMdPath, 'utf8').split('\n')[0].trim();
  if (firstLine !== '# Auth.md') {
    fail(`auth.md first line must be exactly '# Auth.md', got: '${firstLine}'`);
  } else {
    pass("auth.md starts with exact '# Auth.md' heading");
  }
}

// Check ucp contains "ucp": "1.0"
const ucpPath = path.join(rootDir, 'public/.well-known/ucp');
if (fs.existsSync(ucpPath)) {
  const ucpContent = JSON.parse(fs.readFileSync(ucpPath, 'utf8'));
  if (ucpContent.ucp !== '1.0') {
    fail('ucp must contain "ucp": "1.0" field');
  } else {
    pass('ucp contains mandatory "ucp": "1.0" field');
  }
}

// Check server-card.json tools match standard tools
const serverCardPath = path.join(rootDir, 'public/.well-known/mcp/server-card.json');
if (fs.existsSync(serverCardPath)) {
  const serverCard = JSON.parse(fs.readFileSync(serverCardPath, 'utf8'));
  const tools = serverCard.capabilities?.tools?.map(t => t.name) || [];
  const expectedTools = ['search_products', 'get_product', 'list_categories', 'get_policies', 'create_order_draft'];
  const missing = expectedTools.filter(t => !tools.includes(t));
  if (missing.length > 0) {
    fail(`B8: server-card.json missing tools: ${missing.join(', ')}`);
  } else {
    pass(`B8: server-card.json has all live tools: ${tools.join(', ')}`);
  }
}

// B7: Compliance scan for banned terms
const bannedTerms = COMPLIANCE.bannedTerms;
function scanDirectoryForBannedTerms(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', '.next', '.git', 'docs'].includes(entry.name)) continue;
      scanDirectoryForBannedTerms(fullPath);
    } else if (entry.isFile()) {
      if (fullPath.includes('crosscheck.mjs') || fullPath.includes('CLAUDE.md') || fullPath.includes('site.js') || fullPath.includes('site.ts')) continue;
      const content = fs.readFileSync(fullPath, 'utf8');
      for (const term of bannedTerms) {
        if (content.toLowerCase().includes(term.toLowerCase())) {
          fail(`B7: Found banned term "${term}" in ${path.relative(rootDir, fullPath)}`);
        }
      }
    }
  }
}

scanDirectoryForBannedTerms(path.join(rootDir, 'public'));
scanDirectoryForBannedTerms(path.join(rootDir, 'src'));

// Check Products have images and prices
for (const p of PRODUCTS) {
  if (!p.images || p.images.length === 0) {
    fail(`Product ${p.slug} has no images`);
  }
  if (typeof p.price !== 'number' || p.price <= 0) {
    fail(`Product ${p.slug} invalid price: ${p.price}`);
  }
}
pass(`All ${PRODUCTS.length} products verified with images and prices`);

// Check FAQ direct-answer length
for (const faq of FAQ) {
  const wordCount = faq.answer.split(/\s+/).length;
  if (wordCount < 20 || wordCount > 90) {
    warn(`FAQ "${faq.question.slice(0, 30)}..." answer length is ${wordCount} words (ideal: 40-60)`);
  }
}
pass(`Checked ${FAQ.length} FAQ direct answers`);

console.log('----------------------------------------------------');
if (failures > 0) {
  console.error(`❌ Crosscheck failed with ${failures} failure(s) and ${warnings} warning(s).`);
  process.exit(1);
} else {
  console.log(`✅ All crosschecks passed successfully with ${warnings} warning(s)! Ready for deployment.`);
  process.exit(0);
}
