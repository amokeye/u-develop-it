// Import express js
const express = require('express');

// PORT designation and app expression
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
});

// Fxn to start express.js server on PORT 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });