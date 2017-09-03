"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  pw: { type: String, required: true }
});
var User = mongoose.model('User', userSchema);
module.exports = User;

mongoose.connect('mongodb://localhost/myappdatabase');
var db = mongoose.connection;


const express = require("express");
const http = require("http");
const path = require('path');
const bodyParser = require("body-parser");

const { app: appConf } = require("./config");

const app = express();
const server = http.createServer(app);

server.listen(appConf.port);

app.set('views', path.join(__dirname, 'template'));
app.use(express.static(__dirname + '/template'));
app.use(express.static(path.join(__dirname, '/static')));

var engines = require('consolidate');


app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// require("./routes")(app);

app.get('/', function(req, res){ 
		res.render('page.html');
	});

	app.get('/sign_up', function(req, res){ 
		res.render('sign_up.html');
	});

	app.get('/login', function(req, res){ 
		res.render('login.html');
	});

	app.get('/about', function(req, res){ 
		res.render('about.html');
	});

	app.get('/test', function(req, res){ 
		res.render('test.html');
	});
	app.post('/sign_up', function(request, response){
		console.log(request.body)
	    var u = new User({
	    	username : request.body.username,
	        pw : request.body.password
	    });
	    

	    u.save(function(err) {
	        if (err)
	           throw err;
	        else 
	           console.log('save user successfully...');
	    });
	});

console.log(`${appConf.name} running at port: ${appConf.port}`);

var firebase = require("firebase");
var config = {
  apiKey: "AIzaSyBFnyWH1RpOPdn_VhZYgnNgw77HhAOsPYc",
  authDomain: "ignite-3028c.firebaseapp.com",
  databaseURL: "https://ignite-3028c.firebaseio.com",
  storageBucket: "ignite-3028c.appspot.com",
};
firebase.initializeApp(config);