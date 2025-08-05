from flask import Flask, request, jsonify
from flask_cors import CORS
from joblib import load
import numpy as np

app = Flask(__name__)
CORS(app)

# Load trained model
model = load('house_price_model.joblib')

# ✅ This must match the locations used during model training
location_mapping = {
    "Hyderabad": 0,
    "Banglore": 1,
    "Mumbai": 2,
    "Delhi": 3,
    "Chennai": 4,
    "Pune": 5,
    # Add more as per your training dataset
}

@app.route('/')
def home():
    return "🏠 House Price Prediction API is running!"

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        print("📥 Received data:", data)  # Debug input

        # Extract and debug input values
        area = data.get("area")
        bhk = data.get("bhk")
        bathroom = data.get("bathroom")
        location_code = data.get("location_code")

        print(f"➡️ Area: {area}, BHK: {bhk}, Bathroom: {bathroom}, Location Code: {location_code}")

        # Validate input
        if None in (area, bhk, bathroom, location_code):
            return jsonify({"error": "Missing input values"}), 400

        # Convert types
        area = float(area)
        bhk = int(bhk)
        bathroom = int(bathroom)
        location_code = int(location_code)

        # Predict
        input_data = [area, bathroom, bhk, location_code]
        print("📊 Input to model:", input_data)  # Debug model input

        prediction = model.predict([input_data])[0]
        print("📤 Prediction:", prediction)  # Debug output

        return jsonify({"predicted_price_lakhs": round(prediction, 2)})

    except Exception as e:
        print("❌ Error:", e)
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000, debug=True)
