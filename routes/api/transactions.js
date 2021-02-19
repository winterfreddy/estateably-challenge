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