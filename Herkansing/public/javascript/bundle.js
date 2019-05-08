(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){


	"use strict"

const routes = require('./modules/routes.js')
const template = require('./modules/template.js')
const storage = require('./modules/storage.js')
const addCategory = require('./modules/addCategory.js')
const addYourVideos = require('./modules/addYourVideos.js')
const filterCategory = require('./modules/filterCategory.js')



const app = {
	init: function() {
		addCategory.choose()
		addYourVideos.searchVideos()
		routes.init()
		storage.render()
		filterCategory.filter()
	}
}

app.init()




},{"./modules/addCategory.js":2,"./modules/addYourVideos.js":3,"./modules/filterCategory.js":4,"./modules/routes.js":5,"./modules/storage.js":6,"./modules/template.js":7}],2:[function(require,module,exports){

module.exports = {
	choose: function() {
		document.querySelector('.addVideo').addEventListener('click', function() {
			let category = document.querySelector('input[name="category"]:checked').id
			storage.addVideo.category = category
			template.createVideo()
		})
	}
}
},{}],3:[function(require,module,exports){
module.exports = {
	searchVideos: function() {

		const searchGO = document.querySelector('.searchContainer button')
		console.log(searchGO)

		searchInput.addEventListener("keyup", function (event) {
			console.log('nani?')
			event.preventDefault()
			if (event.keyCode === 13) {
				fetchVideos()
			}
		})

		searchGO.addEventListener('click', fetchVideos);
		function fetchVideos() {

			let searchValue = document.getElementById('searchInput').value;

			var queryurl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchValue}&type=video&maxResults=10&key=AIzaSyBrCwrC5hYMfnXd4AllfVGsG2IA-8i58aU`;
	
			fetch(queryurl)
			.then(response => response.json()) 
			.then(function (data) {
				let videofetch = data.items

				let videoObject = videofetch.map(function (video) {
					return {title: video.snippet.title, id: video.id.videoId, thumbnail: video.snippet.thumbnails.high.url} 
				})

				storage.searchYoutube = videoObject

				template.searchYoutube()
			})
		}
	}
}


},{}],4:[function(require,module,exports){
module.exports = {	
	filter: function() {

		let categorySelection = {}
		console.log(categorySelection)
		let filterCategory = document.querySelectorAll('input[name="filterCategory"]')
		console.log(filterCategory)
		filterCategory.forEach( function (filter) {
			
			if (filter.checked == true) {
				let checkboxValue = filter.id
				categorySelection.push(checkboxValue)
			} else if (filter.checked != true) {
				let checkboxValue = filter.id
				categorySelection.pop(checkboxValue)
			}

		})

	}
}
},{}],5:[function(require,module,exports){
module.exports = {

	init: function() {
		const addVideo = document.getElementById('add-video')
		const detail = document.getElementById('detail')
		const iframe = document.querySelector('#detail iframe')
		const addCategory = document.getElementById('add-category')
		const categories = document.getElementById('categories')

		routie({
			'add-video': function() {
				detail.classList.remove('showDetail')
				addCategory.classList.remove('showPage')
				document.querySelector('body').classList.remove('overflow')
				detail.classList.remove('showDetail')
				categories.classList.remove('show')
				addVideo.classList.add('show')
			},
			'categories': function() {
				detail.classList.remove('showDetail')
				addCategory.classList.remove('showPage')
				document.querySelector('body').classList.remove('overflow')
				addVideo.classList.remove('show')
				detail.classList.remove('showDetail')
				categories.classList.add('show')
			},
			'videos': function() {
				detail.classList.remove('showDetail')
				addCategory.classList.remove('showPage')
				categories.classList.remove('show')
				addVideo.classList.remove('show')
				document.querySelector('body').classList.remove('overflow')
				iframe.src = ''
			},
			'add-category': function() {
				addCategory.classList.add('showPage')
				document.querySelector('body').classList.add('overflow')
			}
		});

		routie('videos/:id', function(id) {
				detail.classList.add('showDetail')
				document.querySelector('body').classList.add('overflow')
				template.detail(id)
		});
	}
}
},{}],6:[function(require,module,exports){

	const storage = {
			videos: [],
			searchYoutube: [],
			detailTitle: {},
			addVideo: {},
			render: function() {

					template.overview()

			}
		}

	module.exports = storage
	

},{}],7:[function(require,module,exports){


// const storage = '1'

// const JSONStorage = JSON.stringify(storage)

// console.log(JSONStorage)

// localStorage.setItem('storage', JSONStorage)

// console.log(localStorage)

// const LoadLocalStorage = JSON.parse(localStorage['storage'])

// console.log(LoadLocalStorage)


module.exports = {
	overview: function(id) {

		let directives = {
			thumbnail: {
				"data-src": function() {
				return this.thumbnail
				}
			},

			videoId: {
				href: function() {
					return "#videos/" + this.id
				},
				title: function() {
					return this.title
				}
			}
		}

		Transparency.render(document.getElementById('template2'), storage.videos, directives);

		// const loadingSpinner = document.querySelector('.loadingSpinner') // spinner while loading
		// loadingSpinner.classList.add('showSpinner');

		[].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) { //lazy loader
			img.setAttribute('src', img.getAttribute('data-src'))
			img.onload = function() {
			  img.removeAttribute('data-src')
			//   loadingSpinner.classList.remove('showSpinner')
			}
		})

		let selectedVideo = document.querySelectorAll('.videoId')
		selectedVideo.forEach( function(video) {
			video.addEventListener('click', function() {
				storage.detailTitle.title = this.title
			})
		})
	},


	detail: function(id) {
		let detailVideoId = id
		const iframe = document.querySelector('#detail iframe')
		iframe.src = `https://www.youtube.com/embed/${detailVideoId}?rel=0&amp;showinfo=0&amp;autoplay=1`

		console.log(storage.detailTitle)
		Transparency.render(document.getElementById('detailTemplate'), storage.detailTitle)

		const closeVideo = document.querySelector('#detail button a')

		console.log(closeVideo)
		document.onkeydown = function (e) { 
			if (e.keyCode === 27) {
				closeVideo.click()
			}   
		} 

		const detail = document.getElementById('detail')

		detail.addEventListener('click', function() {
			closeVideo.click()
		})
	},

	searchYoutube: function() {
		console.log('gelukt?')
		console.log(storage.searchYoutube)

		let directives = {
			thumbnail: {
				src: function() {
				return this.thumbnail
				}
			},

			videoId: {
				href: function() {
					return "#add-category" 
				},
				title: function() {
					return this.title
				},
				id: function() {
					return this.id
				},
				thumbnail: function() {
					return this.thumbnail
				}
			}
		}
		
		Transparency.render(document.getElementById('videoContainer'), storage.searchYoutube, directives)
		document.getElementById('videoContainer').style.display = "flex"

		let youtubeVideos = document.querySelectorAll('.individualContainer a')
		youtubeVideos.forEach( function(video) {
			video.addEventListener('click', function() {
				let videoTitle = this.title
				let videoThumbnail = this.thumbnail
				let videoId = this.id
				let videoArray = {}
				videoArray.title = videoTitle
				videoArray.thumbnail = videoThumbnail
				videoArray.id = videoId
				storage.addVideo = videoArray
				console.log(storage.addVideo)
				template.videoPreview()
			})
		})
	},

	videoPreview: function() {
		let directives = {
			thumbnail: {
				"src": function() {
				return this.thumbnail
				}
			}
		}
		Transparency.render(document.getElementById('addVideoContainer'), storage.addVideo, directives);
	},

	createVideo: function() {
		storage.videos.unshift(storage.addVideo)
		template.overview()
	}
}

},{}]},{},[1]);
