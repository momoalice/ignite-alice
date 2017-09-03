    $(function() {

       var baseurl ="https://da200f6b.ngrok.io"

       // $('#event1bg').css({"backgroundColor":"black"});

        //use YQL to get the data cross-domain
        $.ajax({
        	url: baseurl+"/multiple-issue",
        	type: 'GET',
        	dataType: 'json',
        	success: function(json) {

                var allIssues = Object.keys(json);

                var objectlen=4;

                // Deal with event1

                var currIssue = json[allIssues[0]]
                $(".event1bg").css({"background": "url("+currIssue["image_url"]+")"});
                $("#event1name").text(currIssue["issue"]);
                var eventlist1 = currIssue["events"];
                for(var i=0; i<Math.min(eventlist1.length,objectlen);i++){
                     var currId = "#event1Rel" + i;
                     var linkId = "#event1Rel" + i + "link";
                     $(currId).text(eventlist1[i].title);
                     $(linkId).attr('href',eventlist1[i].link);
                }
                var petitionlist1 = currIssue["petitions"];
                for(var i=0; i<petitionlist1.length;i++){
                     var currId = "#event1Rel" + i;
                     var linkId = "#event1Rel" + i + "link";
                     $(currId).text(petitionlist1[i].title);
                     $(linkId).attr('href',petitionlist1[i].link);
                }

                // Deal with event2
                var currIssue2 = json[allIssues[1]]
                $(".event2bg").css({"background": "url("+currIssue2["image_url"]+")"});
                $("#event2name").text(currIssue2["issue"]);
                var eventlist2 = currIssue2["events"];
                for(var i=0; i<Math.min(eventlist2.length,objectlen);i++){
                     var currId = "#event2Rel" + i;
                     var linkId = "#event2Rel" + i + "link";
                     $(currId).text(eventlist2[i].title);
                     $(linkId).attr('href',eventlist2[i].link);
                }
                var petitionlist2 = currIssue2["petitions"];
                for(var i=0; i<petitionlist2.length;i++){
                     var currId = "#event2Rel" + i;
                     var linkId = "#event2Rel" + i + "link";
                     $(currId).text(petitionlist2[i].title);
                     $(linkId).attr('href',petitionlist2[i].link);
                }

                 // Deal with event2
                var currIssue3 = json[allIssues[2]]
                $(".event3bg").css({"background": "url("+currIssue3["image_url"]+")"});
                $("#event3name").text(currIssue3["issue"]);
                var eventlist3 = currIssue3["events"];
                for(var i=0; i<Math.min(eventlist3.length,objectlen);i++){
                     var currId = "#event3Rel" + i;
                     var linkId = "#event3Rel" + i + "link";
                     $(currId).text(eventlist3[i].title);
                     $(linkId).attr('href',eventlist3[i].link);
                }
                var petitionlist3 = currIssue3["petitions"];
                for(var i=0; i<petitionlist3.length;i++){
                     var currId = "#event3Rel" + i;
                     var linkId = "#event3Rel" + i + "link";
                     $(currId).text(petitionlist3[i].title);
                     $(linkId).attr('href',petitionlist3[i].link);
                }

         }
     });

        

    });





