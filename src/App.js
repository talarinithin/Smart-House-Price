import React, { useState } from 'react';
import './App.css';
import background from './assets/background.jpg'; // Make sure this file exists
import axios from 'axios';

const locations = [
  { name: 'Hyderabad', code: 0 },
  { name: 'Bangalore', code: 1 },
  { name: 'Chennai', code: 2 },
  { name: 'Mumbai', code: 3 },
  { name: 'Delhi', code: 4 },
  { name: 'Pune', code: 5 },
];

function App() {
  const [area, setArea] = useState('');
  const [bhk, setBhk] = useState('');
  const [bathroom, setBathroom] = useState('');
  const [location, setLocation] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handlePredict = async () => {
    setResult(null);
    setError(null);

    if (!area || !bhk || !bathroom || location === '') {
      setError("❗ Please fill all fields.");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", {
        area: parseFloat(area),
        bhk: parseInt(bhk),
        bathroom: parseInt(bathroom),
        location_code: parseInt(location)
      });

      setResult(`Estimated Price: ₹${response.data.predicted_price_lakhs} Lakhs`);
    } catch (err) {
      setError("⚠️ Something went wrong while predicting.");
    }
  };

  return (
    <div className="app" style={{ backgroundImage: `url(${background})` }}>
      <div className="form-container">
        <div className="logo">🏠 SmartHouse Price Predictor</div>

        <div className="form-group">
          <label>Area (sq.ft)</label>
          <input type="number" value={area} onChange={(e) => setArea(e.target.value)} />
        </div>

        <div className="form-group">
          <label>BHK</label>
          <input type="number" value={bhk} onChange={(e) => setBhk(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Bathrooms</label>
          <input type="number" value={bathroom} onChange={(e) => setBathroom(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Location</label>
          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="">Select Location</option>
            {locations.map(loc => (
              <option key={loc.code} value={loc.code}>{loc.name}</option>
            ))}
          </select>
        </div>

        <button className="btn" onClick={handlePredict}>Predict Price</button>

        {result && <div className="result">{result}</div>}
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}

export default App;
