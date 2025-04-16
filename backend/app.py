from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)

@app.route("/calculate-age", methods=["POST"])
def calculate_age():
    data = request.get_json()
    birthdate = datetime.strptime(data["birthdate"], "%Y-%m-%d")
    today = datetime.today()

    years = today.year - birthdate.year
    months = today.month - birthdate.month
    days = today.day - birthdate.day

    if days < 0:
        months -= 1
        days += 30

    if months < 0:
        years -= 1
        months += 12

    age = f"You are {years} years, {months} months, and {days} days old."
    return jsonify({"age": age})

if __name__ == "__main__":
    app.run(debug=True)
