const CACHE_NAME = "swalath-v4";

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
  "./quran-mp3.html",
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

  const request = event.request;


  /*
   * AUDIO FILES
   *
   * Never return index.html for an audio request.
   * First look in every cache.
   */

  if (
    request.url.includes(
      "cdn.islamic.network/quran/audio-surah/"
    )
  ) {

    event.respondWith(

      caches.match(request).then(cachedResponse => {

        if (cachedResponse) {

          return cachedResponse;

        }

        return fetch(request);

      }).catch(() => {

        return Response.error();

      })

    );

    return;

  }


  /*
   * HTML NAVIGATION
   */

  if (request.mode === "navigate") {

    event.respondWith(

      fetch(request).then(response => {

        return response;

      }).catch(() => {

        return caches.match(request).then(cachedPage => {

          return cachedPage ||
                 caches.match("./index.html");

        });

      })

    );

    return;

  }


  /*
   * NORMAL FILES
   */

  event.respondWith(

    caches.match(request).then(cachedResponse => {

      if (cachedResponse) {

        return cachedResponse;

      }

      return fetch(request);

    }).catch(() => {

      return Response.error();

    })

  );

});
