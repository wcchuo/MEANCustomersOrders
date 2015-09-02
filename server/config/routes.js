var customers = require('../controllers/controller.js');
var orders = require('../controllers/controller.js');

module.exports = function(app) {

	app.get('/customers', function (req, res) {
	    customers.showCustomer(req, res);
	})

	app.post('/add_customer', function (req, res) {
		customers.addCustomer(req, res);
	})

	app.get('/:id/remove_customer', function (req, res){
		customers.removeCustomer(req, res);
	})

	app.get('/orders', function (req, res) {
	    orders.showOrder(req, res);
	})

	app.post('/add_order', function (req, res) {
		orders.addOrder(req, res);
	})

	app.get('/:id/delete_order', function (req, res){
		orders.deleteOrder(req, res);
	})
};



