const PortfolioController = require('../controllers/PortfolioController');

module.exports = function(app){
  app.get('/api/Portfolio',PortfolioController.index);
}