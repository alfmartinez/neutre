const status = (req, res) => {
  res.send('OK...');
};

module.exports = exports = function(app) {
  app.get('/api', status);
};
