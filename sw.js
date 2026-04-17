const CACHE_NAME = 'quesillo-v1';
const urlsToCache = [
  '/pwa1-front/',
  '/pwa1-front/index.html',
  '/pwa1-front/manifest.json',
  '/pwa1-front/script.js'
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caché abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Interceptar peticiones (Estrategia Cache-First para recursos estáticos)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si el archivo está en caché, lo devuelve. Si no, va a internet.
        return response || fetch(event.request);
      })
  );
});

// Actualización del Service Worker (borra cachés viejos)
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});