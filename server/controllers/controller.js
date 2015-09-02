var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
var customerController = {};
var Order = mongoose.model('Order');
var orderController = {};

module.exports = (function() {
   	return {
    		showCustomer: function(req, res) {
      		  Customer.find({}, function(err, results) {
         			  if(err) {
          			    console.log(err);
         			  } else {
          			    res.json(results);
         			  }
     			  })
    		},

    		addCustomer: function(req, res) {
    			  var customer = new Customer({name: req.body.name, date: req.body.date});
    			  customer.save(function(err) {
    		    	  if(err) {
    			          console.log('Something went wrong.');
                    res.redirect('/');
    			      } else { 
    			          console.log('Successfully added a customer: Name: '+req.body.name+'!');
                    res.redirect('/');
    			      }
  			    })
    		},

    		removeCustomer: function(req, res) {
    			  Customer.remove({_id: req.params.id}, function (err, customers){
    		    	  console.log('Removed!');
                res.redirect('/');
   		  	  })
    		},

        showOrder: function(req, res) {
            Order.find({}, function(err, results) {
                if(err) {
                    console.log(err);
                } else {
                    res.json(results);
                }
            })
        },

        addOrder: function(req, res) {
            var order = new Order({customer_name: req.body.customer_name, product: req.body.product, quantity: req.body.quantity, order_date: req.body.order_date});
            order.save(function(err) {
                if(err) {
                    console.log('Something went wrong.');
                } else { 
                    console.log('Successfully added a order: Name: '+req.body.customer_name+', Product: '+req.body.product+', Qty: '+req.body.quantity+'!');
                }
                res.redirect('/#/orders');
            })
        },

        deleteOrder: function(req, res) {
            Order.remove({_id: req.params.id}, function (err, orders){
                res.redirect('/#/orders');
            })
        }
   	}
})();


