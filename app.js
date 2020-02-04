var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'ejs');

// middleware : its the code that runs between the req and the response
//app.use is to set middleware function
app.use('/public', express.static(path.join(__dirname, 'static')));

app.get('/', function(req, res){
	//res.send("Hello World");
	//res.sendFile(__dirname + '/home.html');
	// can set a middleware here
	res.render('home.ejs');
});

app.get('/contact', function(req, res){
	//res.send("This is the contact page");
	//res.sendFile(__dirname + '/contact.html');

	// rendering contact page using ejs template engine
	res.render('contact', {qs: req.query});
});

app.get("/profile/:name", function(req, res){
	//res.send("You want to view profile of if "+ req.params.id);
	// sending data to ejs view
	var data = {age:29, job:"carpenter", hobbies:['Boating', 'Fishing', 'Kayaking','Trekking']};
	res.render("profile.ejs", {user: req.params.name, userData: data });
})

app.listen(3000);