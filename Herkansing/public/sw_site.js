const cacheName = 'v2'

self.addEventListener('install', event => {
	console.log('serviceWorker installed')
	caches.open('v2')
	.then(cache => cache.addAll([
		'offline.html'
	]))
})

self.addEventListener('activate', event => {
	console.log('serviceWorker activated')
})

self.addEventListener('fetch', event => { 
	console.log('fetching')
	event.respondWith(
		fetch(event.request)
			.then(res => {
				const resClone = res.clone()
				caches
				.open(cacheName)
				.then(cache => {
					cache.put(event.request, resClone)
				})
				return res
			})
			.catch(err => caches.match(event.request).then(res => res))
			.catch(err => fetchOffline('offline.html'))
	)
})

function fetchOffline(url) {
	return caches.open('v2')
	  .then(cache => cache.match(url))
	  .then(response => response ? response : Promise.reject());
  }
