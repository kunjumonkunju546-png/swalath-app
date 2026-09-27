const CACHE_NAME = "swalath-v3";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",

  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",

  "./swalath.html",
  "./asmaul-husna.html",
  "./quran.html",
  "./quran-data.js",
  "./quran-uthmani.txt",

  "./dua.html",
  "./dhikr.html",
  "./tasbeeh.html",
  "./azkar.html",
  "./salah-guide.html",
  "./daily-reminder.html",
  "./daily-asma.html",

  "./umrah.html",
  "./bashairul-khairat.pdf",

  "./nazyAN.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  self.skipWaiting();
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

  self.clients.claim();
});


self.addEventListener("fetch", event => {

  if (event.request.mode === "navigate") {

    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match("./index.html");
      })
    );

    return;
  }

  event.respondWith(

    caches.match(event.request).then(cachedResponse => {

      return cachedResponse || fetch(event.request);

    }).catch(() => {

      return caches.match("./index.html");

    })

  );

});
