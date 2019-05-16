(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){


	"use strict"

const routes = require('./modules/routes.js')
// const template = require('./template.js')
// const storage = require('./storage.js')
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







},{"./modules/addCategory.js":2,"./modules/addYourVideos.js":3,"./modules/filterCategory.js":4,"./modules/routes.js":5}],2:[function(require,module,exports){

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
},{}]},{},[1]);
