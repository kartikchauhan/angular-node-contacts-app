var express = require('express');
var routes = express.Router();
var Contact = require('../models/contacts');

routes.get('/contacts', function(req, res) {
    Contact.find((err, contacts) => {
        if(err)
            res.send("couldn't get the data");
            
        res.json(contacts);
    });
});

routes.post('/contact', function(req, res) {
    var newContact = new Contact({
        name: req.body.name,
        phone: req.body.phone
    });

    newContact.save((err, contact) => {
        if(err)
        {
            res.send('data could not be stored');
        }

        res.send('data stored successfully');
    });
});

routes.delete('/contact/:id', function(req, res) {
    Contact.remove({id: req.params.id}, (err, contact) => {
        if(err)
            res.send(err);
        
        res.json(contact);
    });
});

module.exports = routes;