const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

// Serve static files from React build
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api', (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Serve React frontend for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
