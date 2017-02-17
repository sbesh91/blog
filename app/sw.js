importScripts('bower_components/sw-toolbox/sw-toolbox.js');

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('sbesh').then(cache => {
      return cache.addAll([
        '/'
      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
