from flask import Flask, jsonify, request

app = Flask(__name__)

#https://www.youtube.com/watch?v=7LNl2JlZKHA
@app.route("/frequencies", methods=['GET'])
def get_all_frequencies():
        return {"state": "Alabama", "words": ["doge", "football", "brother"]}
    
@app.route("/frequencies/<state>", methods=['GET'])
def get_one_frequency(state):
        return {"state": state, "words": ["doge", "football", "brother"]}
    
if __name__ == "__main__":
        app.run(debug=True)