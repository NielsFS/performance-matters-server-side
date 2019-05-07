const express = require('express');
const app = express();
const path = require('path');
const hbs = require('express-handlebars');

app.engine('handlebars', hbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// Load view engine
app.set('views', path.join(__dirname, 'views'));

const storage = {
	videos: [
		{
			title: "A Framework Author's Case Against Frameworks",
			id: 'VvOsegaN9Wk',
			thumbnail: 'https://i.ytimg.com/vi/k7n2xnOiWI8/hqdefault.jpg',
			category: 'webdev'
		},
		{
			title: 'Material Design',
			id: 'rrT6v5sOwJg',
			thumbnail: 'https://i.ytimg.com/vi/rrT6v5sOwJg/hqdefault.jpg',
			category: 'webdev'
		},
		{
			title: 'The Most Beautiful Shots In Movie History',
			id: 'xBasQG_6p40',
			thumbnail: 'https://static.twentytwowords.com/wp-content/uploads/featured20godfather.jpg',
			category: 'movie'
		},
		{
			title: 'How I Take Portraits - Canon 1DX Mark 2',
			id: '_AuGO05RRN8',
			thumbnail: 'https://i.ytimg.com/vi/_AuGO05RRN8/hqdefault.jpg',
			category: 'other'
		},
		{
			title: 'Khalid - Young Dumb & Broke (Official Video)',
			id: 'IPfJnp1guPc',
			thumbnail: 'https://i.ytimg.com/vi/IPfJnp1guPc/hqdefault.jpg',
			category: 'music'
		},
		{
			title: 'Saitama vs Genos Fight | One Punch Man (60FPS)',
			id: 'km2OPUctni4',
			thumbnail: 'https://i.ytimg.com/vi/km2OPUctni4/hqdefault.jpg',
			category: 'other'
		},
		{
			title: 'De Jeugd van Tegenwoordig - Glasbak',
			id: 'I36tGmo-zKU',
			thumbnail: 'https://i.ytimg.com/vi/I36tGmo-zKU/hqdefault.jpg',
			category: 'music'
		},
		{
			title: '10 rules to help you rule type',
			id: 'QrNi9FmdlxY',
			thumbnail: 'https://cdn-images-1.medium.com/max/1598/1*aom6VwAyjh03cOY15_x4nA.png',
			category: 'webdev'
		},
		{
			title: 'True Hollywood stories - Prince',
			id: 'QrNi9FmdlxY',
			thumbnail: 'https://i.ytimg.com/vi/ff8LEx9Mw54/hqdefault.jpg',
			category: 'ff8LEx9Mw54'
		},
		{
			title: 'Faberyayo X Tom Trago feat. Willem de Bruin - Lekker Niet',
			id: 'KkvTfn_kQgU',
			thumbnail: 'https://i.ytimg.com/vi/KkvTfn_kQgU/maxresdefault.jpg',
			category: 'music'
		},
		{
			title: '10 rules to help you rule type',
			id: 'QrNi9FmdlxY',
			thumbnail: 'https://cdn-images-1.medium.com/max/1598/1*aom6VwAyjh03cOY15_x4nA.png',
			category: 'webdev'
		},
		{
			title: '10 rules to help you rule type',
			id: 'QrNi9FmdlxY',
			thumbnail: 'https://cdn-images-1.medium.com/max/1598/1*aom6VwAyjh03cOY15_x4nA.png',
			category: 'webdev'
		},
	],
}

// home route
app.get('/', function(req, res){

	let overview = storage.videos
	console.log(overview)
	
	res.render('index', {
		overview
	})
});

// title: overview.title,
		// id: overview.id,
		// thumbnail: overview.thumbnail,
		// category: overview.category


// detail route
app.get('/:title/:id', function(req, res){
	let detailId = req.params.id
	let title = req.params.title

	res.render('detail', {
		id: detailId,
		title: title

	});
	
});

// start server
app.listen(5000, function(){
	console.log('server started on port 5000')
});




