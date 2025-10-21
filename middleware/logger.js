// logger middleware that logs the request method, URL, and timestamp

function logger(req, res, next) {
  const time = new Date().toISOString();
  console.log(`[${time}] ${req.method} ${req.originalUrl}`);
  next(); 
}

module.exports = logger;
