from flask import Flask, jsonify

app = Flask(__name__)

#https://www.youtube.com/watch?v=7LNl2JlZKHA
@app.route("/frequencies", methods=['GET'])
def get_all_frequencies():
        return {"Alabama": ["doge", "football", "brother"],
                "Arkansas": ["gold", "tree", "hit"]}
    
@app.route("/frequencies/<state>", methods=['GET'])
def get_one_frequency(state):
        #localhost:5000/frequencies/state
        allfreq = {"Alabama": ["dog", "football", "brother"],
                "Arkansas": ["gold", "tree", "hit"]}
        
        return jsonify({'results': allfreq[state]})
    
if __name__ == "__main__":
        app.run(debug=True)