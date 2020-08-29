# Crypto Info Go

Crypto Info Go tracks and charts over 5000 cryptocurrencies through the nomics API.  It is built with a React frontend and Node/Express backend and uses Chart.js to chart
out the data. It has a scratch build pagination system and search feature and uses Bootstrap 4 for styling.


Installation & Start

After cloning and npm install, run

npm start

From the root file this command starts the app. Server runs on localhost:8080. To just start the frontend run

npm run client

Frontend runs on localhost:3000.


Nomics API

Go to https://p.nomics.com/cryptocurrency-bitcoin-api and sign up for a free nomics API key. Add a .env file to the root folder and add you API key in the following format

NOMICS_API_KEY=yourAPIkey
