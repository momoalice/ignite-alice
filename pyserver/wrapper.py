import requests
import json
import random
from events import *
from WhiteHouseAPI import *


results = {}

Default_Image_Url = "https://static1.squarespace.com/static/54d57ae4e4b0e0aa3845dada/t/55b875e0e4b0f7f880404deb/1438152161779/columbia1.jpg?format=2500w" 

# Returns all issues with image url, petitions, and events for each issue
def getMultipleIssues():
	global results
	if results == {}:
		print("Loading white house")
		results = json.loads(getWhiteHouseInfo())
	newDict = dict()
	issues = random.sample(list(results), 3)

	for x in issues:
		issue = x.replace("&amp;","and")
		imageURL = getImageUrl(issue)
		petitionList = results.get(x)
		eventList = json.loads(getEvents(issue))
		events = eventList["events"]

		temp_dict = {"issue": issue, "image_url": imageURL, "petitions": petitionList, "events": events}
		newDict[issue] = temp_dict

	convertedJSON = json.dumps(newDict, indent=4, sort_keys=True)
	return convertedJSON
	
	# entry for each issue = [issue, image_url, petitions, events]


def getImageUrl(issue):
	try:
		url="https://www.googleapis.com/customsearch/v1?searchType=image&key=AIzaSyAxo9_2TA6EXg_BAOsvxKzYd2BWNchVKfc&cx=004539666338750100807:ur38g12kgjc"
		query="&q="+issue
		data=requests.get(url+query).text
		string=json.dumps(data)
		convertedtopython=json.loads(data)
		imgUrl=convertedtopython["items"][0]["link"]
	except Exception as e:
		imgUrl = Default_Image_Url
	finally:
		return imgUrl

