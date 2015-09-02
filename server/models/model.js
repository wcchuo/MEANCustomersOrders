var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
	name: String,
	date: String,
});

mongoose.model('Customer', CustomerSchema);

var OrderSchema = new mongoose.Schema({
	customer_name: String,
  	product: String,
  	quantity: Number,
  	order_date: String
});

mongoose.model('Order', OrderSchema);
