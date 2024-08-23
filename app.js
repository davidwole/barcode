// app.js
const express = require('express');
const cors = require('cors');
const { checkProductRating } = require('./ai');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

// Function to generate random data
function generateData() {
  return Array.from({ length: 5 }, (_, i) => ({
    search: `Search term ${i + 1}`,
    time: new Date().toISOString(),
  }));
}

// Define a route to return the generated data
app.get('/data', (req, res) => {
  const data = generateData();
  res.json(data);
});

// Define a POST route that echoes back the received data
app.post('/api/scan', async (req, res) => {
  const receivedData = req.body.scanned_code;
  console.log(receivedData);
  try {
    const rating = await checkProductRating(receivedData);
    console.log(rating);

    res.json({
      rating
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to retrieve rating'
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${process.env.NODE_ENV == 'development' ? `http://localhost:${port}` : `${process.env.PORT}`}`);
});
