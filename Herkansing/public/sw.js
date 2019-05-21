const cacheName = 'v1'
const cacheAssets = [
	// 'views/index.html',
	// 'views/layouts/main.handlebars',
	// 'views/partials/header.handlebars',
	// // 'views/partials/loadingSpinner.handlebars',
	// 'views/detail.handlebars',
	// 'views/index.handlebars',
	'css/style-min.css',
	'javascript/bundle.js'
];

self.addEventListener('install', event => event.waitUntil(
		caches
		.open(cacheName)
		.then(cache => cache.addAll(cacheAssets)
		) 
		.then(() => self.skipWaiting())
	)
)

self.addEventListener('activate', event => {
	console.log('serviceWorker activated')
})

self.addEventListener('fetch', event => { 
	console.log('fetching')
	event.respondWith(fetch(event.request).catch(() => caches.match(event.request)))
})