/*Tibo*/
let transaction = require('../data_access/transaction');

module.exports = {
	configure: (app)=>{
		app.get('/contact', (req, res)=>{
			transaction.getAllContacts(res);
		});
	}
}