

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



