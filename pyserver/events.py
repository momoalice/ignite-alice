import requests
import json

def getEvents(topic):
	myToken = 'W4SFWNBFPCE2AUSO2KJV'
	url = "https://www.eventbriteapi.com/v3/events/search/?token="+myToken+"&q="+topic
	resp=requests.get(url)
	string = json.loads(resp.content)
	try:
		eventList=string["events"]
		newEventList=[]
		for i in range(min(10,len(eventList))):
			newEventList.append({"title": eventList[i]["name"]["text"], "link": eventList[i]["url"]})
		json_response={"issue": topic, "events": newEventList}
	except Exception as e:
		json_response={"issue": topic, "events": []}
	finally:
		return json.dumps(json_response)
	
	
	



	