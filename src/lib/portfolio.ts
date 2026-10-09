import earns from '@/assets/earns.png.asset.json';
import farmer from '@/assets/farmer.png.asset.json';
import roblox from '@/assets/roblox.png.asset.json';
import girl from '@/assets/girl.png.asset.json';
import render from '@/assets/render.png.asset.json';
import fan13 from '@/assets/fan13.png.asset.json';
import fan9 from '@/assets/fan9.png.asset.json';
import avatar from '@/assets/avatar.png.asset.json';

export const profileImage = avatar.url;
export const artwork = [
  { id: 'purple', title: 'Purple energy', category: 'GFX', image: render.url },
  { id: 'headphones', title: 'Headphones on', category: 'GFX', image: girl.url },
  { id: 'monochrome', title: 'Monochrome', category: 'GFX', image: fan13.url },
  { id: 'silhouette', title: 'In the shadows', category: 'GFX', image: fan9.url },
  { id: 'offline', title: 'Earns Offline', category: 'Thumbnails', image: earns.url },
  { id: 'farmer', title: 'Farming Legends', category: 'Thumbnails', image: farmer.url },
  { id: 'levels', title: 'Level 1 → Level 67', category: 'Thumbnails', image: roblox.url },
];
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