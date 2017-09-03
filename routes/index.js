// "use strict";
// require("../model.js")
// module.exports = (app) => {
//   app.get("/", (_, res) => {
//     res.send("Hello");
//   });
// 	// app.get('/', function(req, res){ 
// 	// 	res.render('main.html');
// 	// });

// 	app.get('/', function(req, res){ 
// 		res.render('page.html');
// 	});

// 	app.get('/sign_up', function(req, res){ 
// 		res.render('sign_up.html');
// 	});

// 	app.get('/login', function(req, res){ 
// 		res.render('login.html');
// 	});

// 	app.get('/about', function(req, res){ 
// 		res.render('about.html');
// 	});

// 	app.get('/test', function(req, res){ 
// 		res.render('test.html');
// 	});
// 	app.post('/sign_up', function(request, response){
// 	    var u = new User({
// 	    	username : request.body.username
// 	        // password : request.body.password
// 	    });

// 	    u.save(function(err) {
// 	        if (err)
// 	           throw err;
// 	        else 
// 	           console.log('save user successfully...');
// 	    });
// 	});

// };