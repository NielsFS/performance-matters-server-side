const cache = 'v1'
const cacheAssets = [
	// 'index.html'
	'views/layouts/main.handlebars',
	'views/partials/header.handlebars',
	// 'views/partials/loadingSpinner.handlebars',
	'views/detail.handlebars',
	'views/index.handlebars',
	'public/css/style-min.css',
	'public/javascript/bundle.js'
]

self.addEventListener('install', (event) => {
	console.log('service worker installed')

	event.waitUntil(
		caches
		.open(cache)
		.then(cache => {
			console.log('caching files')
			cache.addAll(cacheAssets)
		}) 
		.then(() => self.skipWaiting())
	)
})

self.addEventListener('activate', (event) => {
	console.log('serviceWorker activated')
})
