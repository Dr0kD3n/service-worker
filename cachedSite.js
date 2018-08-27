const cacheNane = "v1";

self.addEventListener("install", e => {
	console.log("installed");
});
self.addEventListener("activate", e => {
	console.log("activated");
	e.waitUntil(caches.keys().then(cacheName => Promise.all(cacheName.map(cache => {if(cache !== cacheName) return caches.delete(cache)}))));
});
self.addEventListener("fetch", e => {
	e.respondWith(fetch(e.request).then(res => {
		const resClone = res.clone();
		caches.open(cacheName).then(cache => {
			cache.put(e.request, resClone);	
		});
		return res;
	}).cathc(err => caches.match(e.request).then(res => res))
	);

})
