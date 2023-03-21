const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');

// Serve static files from the Angular app
app.use(express.static(path.join(__dirname, 'dist/payment-gateway')));

// Set up the proxy middleware
const apiProxy = createProxyMiddleware('/api', { target: 'https://api-sandbox.dwolla.com', changeOrigin: true });

// Proxy the API requests
app.use('/api/*', apiProxy);

// Serve the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/your-app-name/index.html'));
});

// Start the server
const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Server running on port ${port}`));
