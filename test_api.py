import requests


url = "http://localhost:5000/predict"


payload = {
    "area": 1000,
    "bedrooms": 1,
    "bathrooms": 1,
    "location_code": 4
}


response = requests.post(url, json=payload)


print("✅ Response from API:")
print(response.json())
