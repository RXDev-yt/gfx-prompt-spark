// Scans public/art for images and writes src/lib/art-manifest.json.
// Runs automatically before `npm run dev` and `npm run build`, so any image you
// drop into public/art (or upload to GitHub) shows up on the site.
import { readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const artDir = join(root, 'public', 'art');
const out = join(root, 'src', 'lib', 'art-manifest.json');

mkdirSync(artDir, { recursive: true });
const files = readdirSync(artDir)
  .filter((f) => /\.(png|jpe?g|webp|avif|gif)$/i.test(f))
  .filter((f) => !/^rxdev-pfp\./i.test(f)) // profile picture is not gallery work
  .sort((a, b) => a.localeCompare(b));

writeFileSync(out, JSON.stringify(files, null, 2) + '\n');
console.log(`[art] ${files.length} images found in public/art`);
