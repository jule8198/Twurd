from flask import Flask

app = Flask(__name__)

#https://www.youtube.com/watch?v=7LNl2JlZKHA
@app.route("/frequencies")
def frequencies():
    return {"Alabama": ["dog", "football", "brother"],
            "Arkansas": ["gold", "tree", "hit"]}
    
if __name__ == "__main__":
        app.run(debug=True)