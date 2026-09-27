const CACHE_NAME = "swalath-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./manifest.json",
  "./dua.html",
  "./dhikr.html",
  "./tasbeeh.html",
  "./azkar.html",
  "./salah-guide.html",
  "./daily-reminder.html",
  "./daily-asma.html",
  "./asmaul-husna.html",
  "./quran.html",
  "./quran-data.js",
  "./umrah.html",
  "./nazyAN.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
