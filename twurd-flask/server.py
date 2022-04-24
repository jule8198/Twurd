from flask import Flask, jsonify, request
from flask_pymongo import  MongoClient
from dotenv import load_dotenv
import pprint
import os
import json

app = Flask(__name__)

#open file

with open('./frequencies.json', 'r') as f:
                data = json.load(f)

#https://www.youtube.com/watch?v=7LNl2JlZKHA
@app.route("/frequencies", methods=['GET'])
def get_all_frequencies():
        return data
    
@app.route("/frequencies/<state>", methods=['GET'])
def get_one_frequency(state):
        return data[state]
    
if __name__ == "__main__":
        app.run(debug=True)
