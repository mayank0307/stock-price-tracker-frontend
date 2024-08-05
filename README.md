Frontend Setup
Navigate to the Frontend Directory

bash
Copy code
cd /stock-price-tracker-frontend

Install Dependencies

Ensure you are in the frontend directory and run:

bash
Copy code
npm install
Start the Frontend Application

bash
Copy code
npm start
The frontend application will be available at http://localhost:3000.

Usage
Open the Frontend Application

Visit http://localhost:3000 in your web browser to view and interact with the stock price tracker.

Backend API

Endpoint: GET /api/prices
Description: Retrieves the most recent stock prices.
Query Parameters:
symbol: (Optional) The symbol of the stock to filter results (e.g., BTC).
Example Request:

bash
Copy code
curl 'http://localhost:5000/api/prices?symbol=BTC'
Development
Backend
Fetch Data: The backend fetches stock data every 5 seconds from the LiveCoinWatch API and stores it in MongoDB.
Endpoint: /api/prices retrieves the latest stock prices, filtered by symbol.
Frontend
Price Table: Displays the latest stock prices in a table format.
Data Fetching: Uses Redux to fetch and manage stock price data from the backend.
Notes
Ensure MongoDB is running and accessible via the connection string specified in the .env file.
For production, configure environment variables and set up a production database.
Make sure to handle CORS issues if the frontend and backend are served from different domains.
