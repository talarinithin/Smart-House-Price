#  🏠 Smart-House-Price

This project is a full-stack machine learning web application that predicts the price of a house based on inputs like area (in sqft), number of BHKs, bathrooms, and location. The application combines a **Flask API** for backend logic and a **React.js frontend** for user interaction.

---

## 🚀 Tech Stack

### 🔧 Backend (ML + API)
- Python
- Flask
- Pandas
- Scikit-learn
- Pickle (for model serialization)

### 💻 Frontend (Web Interface)
- React.js
- HTML5 / CSS3
- Axios (for API calls)
- JavaScript (ES6+)

---

## 📌 Features

- User inputs:
  - Area (in square feet)
  - Number of BHKs
  - Number of Bathrooms
  - Location (from dropdown)
- Predicts house price instantly
- Clean and responsive UI
- Integrated with a trained machine learning model
- Logo and background image support for better design
- Input validations and error handling

---

## 🖼 Preview

> Add a screenshot to show how it looks:

![App Screenshot](./screenshot.png)

---

## 📁 Project Structure

house-price-api/
│
├── app.py # Flask server
├── model.pkl # Trained ML model
├── location_mapping.py # Location encoding dictionary
├── requirements.txt # Python dependencies
│
└── smarthouseprice/ # React frontend
├── public/
└── src/
├── App.js
├── App.css
├── logo.png
└── background.jpg

yaml
Copy
Edit

---

## ⚙️ Setup Instructions

### 📌 Prerequisites
- Python 3.9+
- Node.js + npm
- Git

---

### 🐍 Backend Setup (Flask API)

1. Clone the repository:
   ```bash
   git clone https://github.com/talarinithin/house-price-api.git
   cd house-price-api
Create and activate virtual environment:

bash
Copy
Edit
python -m venv venv
venv\Scripts\activate  # For Windows
Install dependencies:

bash
Copy
Edit
pip install -r requirements.txt
Run the Flask API:

bash
Copy
Edit
python app.py
⚛️ Frontend Setup (React)
Navigate to frontend directory:

bash
Copy
Edit
cd smarthouseprice
Install React dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm start
The React app will be available at http://localhost:3000, and the Flask API at http://localhost:5000.

🌐 Deployment Instructions (Optional)
Frontend (Vercel or Netlify)
Build your React app:

bash
Copy
Edit
npm run build
Deploy using Vercel/Netlify dashboard or CLI

Backend (Render or Railway)
Deploy your app.py + model.pkl using platforms like:

Render

Railway

📊 Example Input
yaml
Copy
Edit
Area       : 1200 sqft
BHK        : 3
Bathrooms  : 2
Location   : Hyderabad
➡️ Predicted Price: ₹85.3 Lakhs

🧠 Machine Learning Model
Linear Regression (or any chosen algorithm)

Trained on Bangalore housing data

Cleaned and preprocessed with encoding

Pickled model served via Flask

🤝 Contributors
👤 Nithin Talarini
GitHub: @talarinithin
Email: talarinithin@gmail.com 

📌 License
This project is licensed under the MIT License.

⭐️ Star the Repository
If you like this project, give it a ⭐️ to support the developer!




