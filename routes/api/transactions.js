const express = require("express");
const router = express.Router();
const passport = require('passport');

const Transaction = require('../../models/Transaction');
const validateTransactionInput = require('../../validation/transaction');

/**
 * @api {get} /user/:accountId Get all of current user's transactions
 * @apiGroup Transactions
 * @apiParam {String} accountId Current user's accountId
 * @apiParamExample {json} Input
 * {
 *      "accountId": "602da8a866358b1622da0647"
 * }
 * @apiSuccess {String} transaction._id Transaction id
 * @apiSuccess {String} transaction.accountId Transaction linked to accountId
 * @apiSuccess {String} transaction.category Transaction category
 * @apiSuccess {String} transaction.description Transaction description
 * @apiSuccess {Number} transaction.value Transaction value
 * @apiSuccess {String} transaction.choice Transaction withdraw or deposit
 * @apiSuccess {String} transaction.date Transaction date
 * @apiSuccess {Number} transaction.__v Transaction version key
 * @apiSuccessExample {json} Success
 *  HTTP/1.1 200 OK
 *  [{
 *      "_id": "602ed64007bd5aee29f96377",
 *      "accountId": "602da8a866358b1622da0647",
 *      "category": "Salary",
 *      "description": "Estateably Salary",
 *      "value": 2050,
 *      "choice": "deposit",
 *      "date": "2021-02-18T21:04:00.123Z",
 *      "__v": 0
 *  }]
 * @apiErrorExample {Array} No transactions found
 *  HTTP/1.1 200 OK
 *  []
 */
router.get('/user/:accountId', (req, res) => {
    Transaction.find({accountId: req.params.accountId})
        .then(transactions => res.json(transactions))
        .catch(err =>
            res.status(404).json({ notransactionsfound: 'No transactions found from that user' }
        )
    );
});

/**
 * @api {get} /user/:accountId/:description Get all of current user's transactions matching description, category, or value
 * @apiGroup Transactions
 * @apiParam {String} accountId Current user's accountId
 * @apiParam {String} description Transaction description, category, or value
 * @apiParamExample {json} Input
 * {
 *      "accountId": "602da8a866358b1622da0647",
 *      "description": "Estateably"
 * }
 * @apiSuccess {String} transaction._id Transaction id
 * @apiSuccess {String} transaction.accountId Transaction linked to accountId
 * @apiSuccess {String} transaction.category Transaction category
 * @apiSuccess {String} transaction.description Transaction description
 * @apiSuccess {Number} transaction.value Transaction value
 * @apiSuccess {String} transaction.choice Transaction withdraw or deposit
 * @apiSuccess {String} transaction.date Transaction date
 * @apiSuccess {Number} transaction.__v Transaction version key
 * @apiSuccessExample {json} Success
 *  HTTP/1.1 200 OK
 *  [{
 *      "_id": "602ed64007bd5aee29f96377",
 *      "accountId": "602da8a866358b1622da0647",
 *      "category": "Salary",
 *      "description": "Estateably Salary",
 *      "value": 2050,
 *      "choice": "deposit",
 *      "date": "2021-02-18T21:04:00.123Z",
 *      "__v": 0
 *  }]
 * @apiErrorExample {Array} No transactions found
 *  HTTP/1.1 200 OK
 *  []
 */
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

/**
 * @api {post} / Add a new transaction
 * @apiGroup Transactions
 * @apiParam {String} id Current user's accountId
 * @apiParam {String} category Transaction category
 * @apiParam {String} description Transaction description
 * @apiParam {Number} value Transaction value
 * @apiParam {String} choice Transaction type either deposit or withdraw
 * @apiParamExample {json} Input
 * {
 *      "id": "602da8a866358b1622da0647",
 *      "category": "Salary",
 *      "description": "Estateably Monthly Bonus",
 *      "value", "1250",
 *      "choice": "deposit"
 * }
 * @apiSuccess {String} transaction._id Transaction id
 * @apiSuccess {String} transaction.accountId Transaction linked to accountId
 * @apiSuccess {String} transaction.category Transaction category
 * @apiSuccess {String} transaction.description Transaction description
 * @apiSuccess {Number} transaction.value Transaction value
 * @apiSuccess {String} transaction.choice Transaction withdraw or deposit
 * @apiSuccess {String} transaction.date Transaction date
 * @apiSuccess {Number} transaction.__v Transaction version key
 * @apiSuccessExample {json} Success
 *  HTTP/1.1 200 OK
 *  {
 *      "_id": "6036d5a7d4b132b9be203535",
 *      "accountId": "602da8a866358b1622da0647",
 *      "category": "Salary",
 *      "description": "Estateably Monthly Bonus",
 *      "value": 1250,
 *      "choice": "deposit",
 *      "date": "2021-02-24T22:39:35.442Z",
 *      "__v": 0
 *  }
 */
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
                value: (+(req.body.value)).toFixed(2),
                choice: req.body.choice
            });

            newTransaction.save().then(transaction => res.json(transaction));
        }
);

module.exports = router;