/* Cache somente dos recursos desta área. Nunca intercepta a página de vendas. */
const CACHE='contacerta-app-v1';
const FILES=['./','./index.html','./style.css?v=1','./app.js?v=1','./icon.svg','./manifest.webmanifest'];
self.addEventListener('install',function(event){
  event.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(FILES);}).then(function(){return self.skipWaiting();}));
});
self.addEventListener('activate',function(event){
  event.waitUntil(caches.keys().then(function(keys){return Promise.all(keys.filter(function(k){return k.startsWith('contacerta-app-')&&k!==CACHE;}).map(function(k){return caches.delete(k);}));}).then(function(){return self.clients.claim();}));
});
self.addEventListener('fetch',function(event){
  if(event.request.method!=='GET')return;
  var url=new URL(event.request.url);
  var scope=new URL(self.registration.scope);
  if(url.origin!==scope.origin||!url.pathname.startsWith(scope.pathname))return;
  event.respondWith(fetch(event.request).then(function(response){
    if(response.ok){var copy=response.clone();caches.open(CACHE).then(function(cache){cache.put(event.request,copy);});}
    return response;
  }).catch(function(){return caches.match(event.request).then(function(cached){return cached||Response.error();});}));
});