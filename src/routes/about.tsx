import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profileImage, pageHead, socials } from '@/lib/portfolio';
export const Route = createFileRoute('/about')({ head: () => pageHead('About — RXDev', 'RXDev is a Roblox GFX artist from the Czech Republic. Also makes Roblox games and UI.'), component: About });
function About() {
  return <main className="container-wide reveal"><div className="page-intro"><p className="eyebrow"><i/> ABOUT</p><h1>I’m RXDev.</h1></div><div className="about-layout"><img src={profileImage} alt="RXDev’s purple Roblox avatar" className="about-image"/><div className="about-text"><h2>Roblox GFX artist.</h2><p>I’m from the Czech Republic. I make Roblox GFX: character renders and game thumbnails. I also build Roblox games and UI.</p><p>I post Roblox dev videos on YouTube.</p><div className="skill-list"><span>Roblox GFX</span><span>Thumbnails</span><span>UI design</span><span>Luau</span><span>Blender</span><span>Photoshop</span></div><div className="flex flex-wrap gap-3"><Button asChild variant="portfolio"><Link to="/work">View work <ArrowUpRight/></Link></Button><Button asChild variant="subtle"><a href={socials.youtube} target="_blank" rel="noreferrer">YouTube <ArrowUpRight/></a></Button></div></div></div></main>;
}