self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('v2.3').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icon.jpg',
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
