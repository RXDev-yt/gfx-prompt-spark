import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { Hero, MotionStrip, Gallery, ContactBand, MotionManager } from '@/components/portfolio';
import { artwork, pageHead } from '@/lib/portfolio';

export const Route = createFileRoute('/')({
  head: () => pageHead('RXDev — Roblox GFX Artist & Creator', 'Roblox character GFX, thumbnails and UI design by RXDev. Explore a world of character and creativity.'),
  component: Index,
});
function Index() {
  return <><MotionManager/><Hero/><MotionStrip/><section id="selected-work" className="container-wide section-space"><div className="section-heading"><div><p className="eyebrow"><i/> THE PORTFOLIO</p><h2>Selected work<span> /</span></h2></div><Link to="/work" className="text-action">View all work <ArrowUpRight size={16}/></Link></div><Gallery items={artwork.slice(0,4)}/></section><ContactBand/></>;
}
