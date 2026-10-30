// Apenas recursos visuais ficam em cache. HTML e dados permanecem online.
const CACHE='terca-fc-pwa-icons-v1';
const ICONS=['./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ICONS)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim());});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==self.location.origin||!ICONS.some(p=>u.pathname.endsWith(p.slice(1))))return;e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request)));});
