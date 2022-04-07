from flask import Flask

app = Flask(__name__)

# @app.route("/")
# def index():
#     return {"Group 2": "Group Project"}

@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}

if __name__ == "__main__":
    app.run(debug=True)