const express = require("express");
const router = express.Router();
const passport = require('passport');

const Transaction = require('../../models/Transaction');
const validateTransactionInput = require('../../validation/transaction');

router.get("/test", (req, res) => res.json({ msg: "This is the transactions route" }));

// grab all transactions belonging to that user
router.get('/user/:accountId', (req, res) => {
    Transaction.find({accountId: req.params.accountId})
        .then(transactions => res.json(transactions))
        .catch(err =>
            res.status(404).json({ notransactionsfound: 'No transactions found from that user' }
        )
    );
});

// grab all transactions belonging to that user and matches category, description, or value
router.get('/user/:accountId/:description', (req, res) => {
    let amount = +(req.params.description);
    let categories = ['Salary','Food','Transport','House','Other'];
    // checks if its a value
    if(!isNaN(amount)) {
        Transaction.find({accountId: req.params.accountId, value: { $eq: amount}})
            .then(transactions => res.json(transactions))
            .catch(err =>
                res.status(404).json({ notransactionsfound: `No transactions matching ${req.params.value} found from that user` }
            )
        );
    }
    // checks if category is set to "All"
    else if(req.params.description === "All") {
        Transaction.find({accountId: req.params.accountId})
            .then(transactions => res.json(transactions))
            .catch(err =>
                res.status(404).json({ notransactionsfound: 'No transactions found from that user' }
            )
        );
    }
    // checks if description matches one of the categories
    else if(categories.includes(req.params.description)){
        Transaction.find({accountId: req.params.accountId, category: req.params.description})
            .then(transactions => res.json(transactions))
            .catch(err =>
                res.status(404).json({ notransactionsfound: `No transactions matching ${req.params.description} found from that user` }
            )
        );
    }
    // and checks for any matching description
    else {
        Transaction.find({accountId: req.params.accountId, description: { $regex: req.params.description, $options: 'i'}})
            .then(transactions => res.json(transactions))
            .catch(err =>
                res.status(404).json({ notransactionsfound: `No transactions matching ${req.params.description} found from that user` }
            )
        );
    }
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
        (req, res) => {
            const { errors, isValid } = validateTransactionInput(req.body);

            if (!isValid) {
                return res.status(400).json(errors);
            }

            const newTransaction = new Transaction({
                accountId: req.user.id,
                category: req.body.category,
                description: req.body.description,
                value: req.body.value,
                choice: req.body.choice
            });

            newTransaction.save().then(transaction => res.json(transaction));
        }
);

module.exports = router;