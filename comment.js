// Create Web Server
const express = require('express');
const app = express();
const port = 3000;

// Create Router
const router = express.Router();

// Create Router Middleware
router.get('/comment', (req, res) => {
    res.send('GET /comment');
});

router.post('/comment', (req, res) => {
    res.send('POST /comment');
});

// Register Router Middleware
app.use('/', router);

// Start Web Server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// Run Web Server