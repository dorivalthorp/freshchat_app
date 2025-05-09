self.addEventListener('install', e => {
  console.log('Service Worker instalado');
});

self.addEventListener('fetch', e => {
  // Para um PWA básico, só deixamos passar
});
