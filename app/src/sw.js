var CACHE_NAME = 'enibcal-007';
var urlsToCache = [
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        console.log("loading "+event.request.url+" with sw");
        if (response) {
          console.log("loaded "+event.request.url+" from cache");
          return response;
        }
        if(event.request.url.toLowerCase().indexOf("api")==-1 && event.request.url.toLowerCase().indexOf("proxy")==-1){
          caches.open(CACHE_NAME)
            .then(function(cache) {
              console.log('Opened cache');
              return cache.add(event.request);
            });
          console.log("added "+event.request.url+" to cache");
        }
        return fetch(event.request);
      }
    )
  );
});
self.addEventListener('activate', function(event) {

  var cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
