import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Gallery } from '@/components/portfolio';
import { Button } from '@/components/ui/button';
import { artwork, pageHead } from '@/lib/portfolio';
export const Route = createFileRoute('/work')({ head: () => pageHead('Work — RXDev', 'Roblox character renders and game thumbnails by RXDev.'), component: Work });
function Work() {
  const [filter, setFilter] = useState('All work');
  const items = filter === 'All work' ? artwork : artwork.filter(item => item.category === filter);
  return <main className="container-wide reveal"><div className="page-intro"><p className="eyebrow"><i/> WORK</p><h1>Work.</h1><p>Character renders and game thumbnails.</p></div><div className="gallery-filters" aria-label="Artwork categories">{['All work','GFX','Thumbnails'].map(label => <Button key={label} variant={filter === label ? 'portfolio' : 'subtle'} aria-pressed={filter === label} onClick={() => setFilter(label)}>{label}<span className="text-xs opacity-60">{label === 'All work' ? artwork.length : artwork.filter(a => a.category === label).length}</span></Button>)}</div><Gallery items={items}/><div className="h-16"/></main>;
}