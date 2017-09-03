$(function() {
	// var baseurl =""
	// $.ajax({
	// 	url: baseurl+"/background",
 //        type: 'GET',
 //        dataType: 'json',
 //        success: function(json) {
 //        	background=json.url;
 //        	$(".body").css({"background-image" : "url("+background+")"});
 //        }
	// });

	$("#signup").click(function(){
		$.ajax({
            url: '/sign_up',
            type: 'POST',
            data: {"username":$("#username").val(),"password":$("#password").val()}, // An object with the key 'submit' and value 'true;
            success: function (result) {
              alert("Your bookmark has been saved");
            }
        }); 

	});
});