from flask import Flask, jsonify, Response, request
from wrapper import *


app = Flask(__name__)

@app.route('/multiple-issue',methods=['GET'])
def multipleIssue():
    if request.method == 'GET':
    	return getMultipleIssues()

@app.route('/img',methods=['GET'])
def image():
    theme = request.args.get("issue")
    if request.method == 'GET':
        return getImageUrl(theme)

if __name__ == '__main__':
    app.run()