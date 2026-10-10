import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight, Copy, Check, Youtube, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pageHead, socials } from '@/lib/portfolio';
export const Route = createFileRoute('/contact')({ head: () => pageHead('Contact — RXDev', 'Contact RXDev for Roblox GFX and thumbnails. Discord: rxdev_yt.'), component: Contact });
function Contact() {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  async function copy() { try { await navigator.clipboard.writeText(socials.discord); setCopied(true); setError(false); } catch { setError(true); } }
  return <main className="container-wide reveal"><div className="page-intro"><h1>Contact.</h1><p>DM me on Discord.</p></div><div className="contact-layout"><div><div className="discord-block"><h2>DISCORD</h2><div className="discord-name"><span>{socials.discord}</span><Button variant="subtle" size="icon" onClick={copy} aria-label="Copy Discord username" title="Copy Discord username">{copied ? <Check/> : <Copy/>}</Button></div><p className="text-xs text-muted-foreground mt-3" aria-live="polite">{copied ? 'Username copied.' : error ? 'Select the username above to copy it.' : 'For GFX enquiries'}</p></div><a className="contact-link" href={socials.youtube} target="_blank" rel="noreferrer"><Youtube/><div><h2>YouTube</h2><p>@RXDev_Studio</p></div><ArrowUpRight/></a><a className="contact-link" href={socials.twitter} target="_blank" rel="noreferrer"><span className="text-xl">𝕏</span><div><h2>X / Twitter</h2><p>@rxdev_yt_</p></div><ArrowUpRight/></a><a className="contact-link" href={socials.roblox} target="_blank" rel="noreferrer"><Globe/><div><h2>Roblox</h2><p>rxdev</p></div><ArrowUpRight/></a></div><aside className="contact-aside"><h2>What to send</h2><p>What you want made, any references, and when you need it.</p></aside></div></main>;
}