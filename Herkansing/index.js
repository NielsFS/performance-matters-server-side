const express = require('express');
const app = express();
const path = require('path');
const hbs = require('express-handlebars');

app.engine('handlebars', hbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

// Load view engine
app.set('views', path.join(__dirname, 'views'));


// home route
app.get('/', function(req, res){
	res.render('index');
});



// set static folder
// app.use(express.static(path.join(__dirname, 'public')));

// start server
app.listen(5000, function(){
	console.log('server started on port 5000')
});




