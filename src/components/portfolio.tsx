import { useEffect, useRef, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowDown, ArrowUpRight, Expand, Pause, Play, Youtube, Globe, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { artwork, socials, type Artwork } from '@/lib/portfolio';

export function SiteHeader() {
  return <header className="container-wide site-nav"><Link to="/" className="brand" aria-label="RXDev home">RX<span>DEV</span><small>ROBLOX GFX<br/>ARTIST & CREATOR</small></Link><nav className="nav-links" aria-label="Main navigation"><Link to="/work" className="nav-link">Work</Link><Link to="/about" className="nav-link">About</Link><Link to="/contact" className="nav-link">Contact</Link><Button asChild variant="subtle" className="nav-cta"><Link to="/contact">Let’s talk <ArrowUpRight/></Link></Button></nav></header>;
}
export function SiteFooter() {
  return <footer className="container-wide site-footer"><Link to="/" className="brand">RX<span>DEV</span></Link><p className="footer-note">© 2026 RXDev · Made with imagination. Based in Czech Republic.</p><div className="footer-socials"><a href={socials.youtube} target="_blank" rel="noreferrer" aria-label="RXDev on YouTube"><Youtube size={17}/></a><a href={socials.twitter} target="_blank" rel="noreferrer" aria-label="RXDev on X"><span className="text-sm">𝕏</span></a><a href={socials.roblox} target="_blank" rel="noreferrer" aria-label="RXDev on Roblox"><Globe size={16}/></a></div></footer>;
}
export function ContactBand() {
  return <section className="cta-band"><div className="container-wide cta-content"><div><h2>Your idea.<br/><span>A new dimension.</span></h2><p>Have something in mind? Let’s make it a reality.</p></div><Button asChild variant="portfolio" size="lg"><Link to="/contact">Let’s create together <ArrowUpRight/></Link></Button></div></section>;
}
export function Gallery({ items = artwork }: { items?: Artwork[] }) {
  const [selected, setSelected] = useState<Artwork | null>(null);
  return <><div className={`art-grid ${items.length > 4 ? 'work-grid' : ''}`}>{items.map((item, i) => <article key={item.id} className={`art-item ${item.category === 'Thumbnails' ? 'thumbnail' : ''}`}><Button variant="artwork" aria-label={`View ${item.title}`} onClick={() => setSelected(item)}><img src={item.image} alt={`${item.title} — Roblox ${item.category}`} loading="lazy"/><span className="art-expand"><Expand size={14}/></span></Button><div className="art-caption"><div><h3>{item.title}</h3><p>{item.category === 'GFX' ? 'Character GFX' : 'Roblox thumbnail'}</p></div><span>{String(i + 1).padStart(2, '0')} <ArrowUpRight className="inline ml-2" size={12}/></span></div></article>)}</div><Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}><DialogContent className="viewer">{selected && <><DialogTitle>{selected.title}</DialogTitle><DialogDescription>RXDev · {selected.category}</DialogDescription><img className="viewer-image" src={selected.image} alt={selected.title}/></>}</DialogContent></Dialog></>;
}
export function Hero() {
  return <section className="hero container-wide"><img className="hero-art hero-art-one" src={artwork[2].image} alt="White-haired Roblox character GFX"/><img className="hero-art hero-art-two" src={artwork[0].image} alt="Purple Roblox character GFX"/><img className="hero-art hero-art-three" src={artwork[1].image} alt="Roblox character with headphones"/><img className="hero-art hero-art-four" src={artwork[3].image} alt="Monochrome Roblox silhouette GFX"/><div className="hero-copy reveal"><p className="eyebrow"><i/> ROBLOX GFX · THUMBNAILS · UI DESIGN</p><h1 className="hero-title">RX<span>DEV</span><span>.</span></h1><p className="hero-subtitle">A little blocky.<br/>A lot of character.</p><p className="hero-description">Turning Roblox characters into visuals<br/>that don’t just blend in.</p><div className="hero-actions"><Button asChild variant="portfolio" size="lg"><Link to="/work">Explore my work <ArrowUpRight/></Link></Button><Button asChild variant="subtle" size="lg"><Link to="/contact">Let’s talk</Link></Button></div></div><div className="hero-bottom"><span><Globe size={12}/> CZECH REPUBLIC · CREATING WORLDWIDE</span><a href="#selected-work" className="hero-scroll">A little more below <ArrowDown size={14}/></a><span><Sparkles size={12}/> IDEAS INTO PIXELS</span></div></section>;
}
export function MotionStrip() {
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => el.classList.toggle('offscreen-motion', !entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`marquee ${paused ? 'motion-paused' : ''}`}><div className="marquee-window"><div className="marquee-track">{[0,1].map(n => <div className="flex" aria-hidden={n === 1} key={n}>{['CHARACTER GFX','THUMBNAILS','ROBLOX','UI DESIGN','BUILT DIFFERENT'].map(text => <span key={text}>{text}<b>✳</b></span>)}</div>)}</div></div><Button variant="ghost" size="icon" className="marquee-control" onClick={() => setPaused(v => !v)} aria-label={paused ? 'Play moving strip' : 'Pause moving strip'} title={paused ? 'Play motion' : 'Pause motion'}>{paused ? <Play/> : <Pause/>}</Button></div>;
}
export function MotionManager() {
  useEffect(() => {
    const update = () => document.documentElement.classList.toggle('tab-hidden', document.hidden);
    document.addEventListener('visibilitychange', update);
    const hero = document.querySelector('.hero');
    const observer = new IntersectionObserver(([entry]) => hero?.classList.toggle('offscreen-motion', !entry.isIntersecting));
    if (hero) observer.observe(hero);
    return () => { document.removeEventListener('visibilitychange', update); observer.disconnect(); document.documentElement.classList.remove('tab-hidden'); };
  }, []);
  return null;
}