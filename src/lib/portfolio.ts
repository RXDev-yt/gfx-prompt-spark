import manifest from './art-manifest.json';

// Artwork lives in /public/art. Any image dropped in there is picked up automatically
// (see scripts/gen-art.mjs). Add an entry to `named` only to give a file a real title,
// a category, or to control the order.
export const profileImage = '/art/rxdev-pfp.jpg';

type Category = 'GFX' | 'Thumbnails';
const named: { file: string; title: string; category: Category }[] = [
  { file: 'character-render.jpg', title: 'Character render 1', category: 'GFX' },
  { file: 'gfx-girl.jpg', title: 'Character render 2', category: 'GFX' },
  { file: 'fan-render-13.jpg', title: 'Character render 3', category: 'GFX' },
  { file: 'fan-render-9.jpg', title: 'Character render 4', category: 'GFX' },
  { file: 'earns-offline.jpg', title: 'Earns Offline', category: 'Thumbnails' },
  { file: 'farmer.jpg', title: 'Farmer', category: 'Thumbnails' },
  { file: 'project-thumb.jpg', title: 'Level 1 → Level 67', category: 'Thumbnails' },
];

const toId = (file: string) => file.replace(/\.[^.]+$/, '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
const toTitle = (file: string) => file.replace(/\.[^.]+$/, '').replace(/[_-]+/g, ' ').replace(/[()]/g, '').replace(/\s+/g, ' ').trim();
const toCategory = (file: string): Category => (/thumb/i.test(file) ? 'Thumbnails' : 'GFX');
const toUrl = (file: string) => `/art/${encodeURIComponent(file)}`;

const present = new Set(manifest as string[]);
const known = new Set(named.map((n) => n.file));
const items = [
  ...named.filter((n) => present.has(n.file)),
  ...(manifest as string[]).filter((f) => !known.has(f)).map((f) => ({ file: f, title: toTitle(f), category: toCategory(f) })),
];

export const artwork = items.map((n) => ({ id: toId(n.file), title: n.title, category: n.category, image: toUrl(n.file) }));
export type Artwork = typeof artwork[number];
export const socials = {
  youtube: 'https://www.youtube.com/@RXDev_Studio',
  twitter: 'https://x.com/rxdev_yt_',
  roblox: 'https://www.roblox.com/users/2043222762/profile',
  discord: 'rxdev_yt',
};
export function pageHead(title: string, description: string) {
  return { meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}
