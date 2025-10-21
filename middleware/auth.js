// an authentication middleware that checks for an API key
require('dotenv').config();

function auth(req, res, next) {
  const apiKey = req.header('x-api-key');

  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ message: 'Unauthorized: Invalid or missing API key' });
  }

  next(); // user is authorized
}

module.exports = auth;
