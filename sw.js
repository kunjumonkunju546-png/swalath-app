const CACHE_NAME = "swalath-v4";

const QURAN_CACHE_NAME =
"swalath-quran-mp3-128kbps-v1";


/* =====================================
   APP FILES
===================================== */

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


/* =====================================
   INSTALL
===================================== */

self.addEventListener(
  "install",
  event => {

    event.waitUntil(

      caches
        .open(CACHE_NAME)
        .then(cache => {

          return cache.addAll(
            FILES_TO_CACHE
          );

        })

    );

    self.skipWaiting();

  }
);


/* =====================================
   ACTIVATE
===================================== */

self.addEventListener(
  "activate",
  event => {

    event.waitUntil(

      caches.keys().then(keys => {

        return Promise.all(

          keys
            .filter(
              key =>
                key !== CACHE_NAME &&
                key !== QURAN_CACHE_NAME
            )
            .map(
              key =>
                caches.delete(key)
            )

        );

      })

    );

    self.clients.claim();

  }
);


/* =====================================
   QURAN DOWNLOAD MESSAGE
===================================== */

self.addEventListener(
  "message",
  event => {

    if(
      !event.data ||
      event.data.type !==
      "CACHE_QURAN"
    ){

      return;

    }


    const url =
    event.data.url;


    const work =

      caches
        .open(QURAN_CACHE_NAME)

        .then(
          async cache => {

            /* -------------------------
               CHECK ALREADY DOWNLOADED
            ------------------------- */

            const existing =
            await cache.match(url);


            if(existing){

              return {
                success:true
              };

            }


            /* -------------------------
               DOWNLOAD AUDIO
            ------------------------- */

            const response =
            await fetch(
              url,
              {
                mode:"no-cors",
                cache:"no-store"
              }
            );


            /* -------------------------
               CHECK RESPONSE
            ------------------------- */

            if(
              !response ||
              (
                !response.ok &&
                response.type !==
                "opaque"
              )
            ){

              throw new Error(
                "Audio download failed"
              );

            }


            /* -------------------------
               SAVE TO CACHE
            ------------------------- */

            await cache.put(
              url,
              response.clone()
            );


            return {
              success:true
            };

          }
        )

        .catch(
          error => {

            return {

              success:false,

              error:
              error.message ||
              String(error)

            };

          }
        );


    /* =================================
       SEND RESULT BACK TO PAGE
    ================================= */

    if(
      event.ports &&
      event.ports[0]
    ){

      event.waitUntil(

        work.then(
          result => {

            event.ports[0]
              .postMessage(result);

          }
        )

      );

    }

  }
);


/* =====================================
   FETCH
===================================== */

self.addEventListener(
  "fetch",
  event => {

    const request =
    event.request;


    /* =================================
       QURAN AUDIO
    ================================= */

    if(
      request.url.includes(
        "cdn.islamic.network/quran/audio-surah/"
      )
    ){

      event.respondWith(

        caches
          .open(QURAN_CACHE_NAME)
          .then(
            async cache => {

              const cached =
              await cache.match(
                request
              );


              if(cached){

                return cached;

              }


              /*
               * Not downloaded yet.
               * Get it from internet.
               */

              return fetch(
                request
              );

            }
          )
          .catch(
            () => {

              return Response.error();

            }
          )

      );

      return;

    }


    /* =================================
       NAVIGATION / HTML PAGES
    ================================= */

    if(
      request.mode ===
      "navigate"
    ){

      event.respondWith(

        fetch(request)

          .then(
            response => {

              return response;

            }
          )

          .catch(
            async () => {

              const cachedPage =
              await caches.match(
                request
              );


              if(cachedPage){

                return cachedPage;

              }


              return caches.match(
                "./index.html"
              );

            }
          )

      );

      return;

    }


    /* =================================
       OTHER APP FILES
    ================================= */

    event.respondWith(

      caches
        .match(request)

        .then(
          cachedResponse => {

            if(cachedResponse){

              return cachedResponse;

            }


            return fetch(
              request
            );

          }
        )

        .catch(
          () => {

            return Response.error();

          }
        )

    );

  }
);
