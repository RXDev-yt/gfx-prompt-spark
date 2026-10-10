// Artwork lives in /public/art so it is served by the site itself.
export const profileImage = '/art/rxdev-pfp.jpg';
export const artwork = [
  { id: 'render-1', title: 'Character render 1', category: 'GFX', image: '/art/character-render.jpg' },
  { id: 'render-2', title: 'Character render 2', category: 'GFX', image: '/art/gfx-girl.jpg' },
  { id: 'render-3', title: 'Character render 3', category: 'GFX', image: '/art/fan-render-13.jpg' },
  { id: 'render-4', title: 'Character render 4', category: 'GFX', image: '/art/fan-render-9.jpg' },
  { id: 'offline', title: 'Earns Offline', category: 'Thumbnails', image: '/art/earns-offline.jpg' },
  { id: 'farmer', title: 'Farmer', category: 'Thumbnails', image: '/art/farmer.jpg' },
  { id: 'levels', title: 'Level 1 → Level 67', category: 'Thumbnails', image: '/art/project-thumb.jpg' },
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
