const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

/**
 * @api {get} /api/users/current Get current user
 * @apiVersion 1.1.0
 * @apiGroup Users
 * @apiParam {String} Authorization Authorization token
 * @apiParamExample {string} Input
 *  "Authorization": "Bearer eyJhbG...UjrtSY"
 * @apiSuccess {String} user.id User id
 * @apiSuccess {String} user.username User's username
 * @apiSuccessExample {json} Success
 *  HTTP/1.1 200 OK
 *  [{
 *      "id": "602da8a866358b1622da0647",
 *      "username": "DemoUser"
 *  }]
 * @apiErrorExample {String} Unauthorized access
 *  HTTP/1.1 401 Unauthorized
 *  "Unauthorized"
 */
router.get('/current',
    passport.authenticate('jwt', {session: false}),
    (req, res) => {
        res.json({
            id: req.user.id,
            username: req.user.username,
        });
    }
)

/**
 * @api {patch} /api/users/update Update user's balance
 * @apiVersion 1.1.0
 * @apiGroup Users
 * @apiParam {String} username Current user's username
 * @apiParam {String} value Value to be added
 * @apiParam {String} choice Transaction type either deposit or withdraw
 * @apiParamExample {json} Input
 * {
 *      "username": "DemoUser",
 *      "value": "1250",
 *      "choice": "deposit"
 * }
 * @apiSuccess {Boolean} user.success Is user logged in still?
 * @apiSuccess {String} user.token User's auth token
 * @apiSuccessExample {json} Success
 *  HTTP/1.1 200 OK
 *  [{
 *      "success": true,
 *      "token" : "Bearer eyJhbG...UjrtSY"
 *  }]
 */
router.patch('/update', (req, res) => {
    let value = +(req.body.value);
    User.findOne({ username: req.body.username })
        .then(user => {
            if (req.body.choice === "deposit") {
                value += user.balance;
            }
            else {
                value = user.balance - value;
            }
            User.updateOne(
                {username: user.username},
                {balance: value.toFixed(2)},
                function (err, docs) {
                    if(err) {
                        console.log(err);
                    }
                    // else {
                    //     console.log("Updated Balance: ", docs);
                    // }
            });
            const payload = {id: user.id, username: user.username, balance: value.toFixed(2)};

            jwt.sign(
                payload,
                keys.secretOrKey,
                { expiresIn: 3600 },
                (err, token) => {
                    res.json({
                        success: true,
                        token: 'Bearer ' + token
                    });
                }
            );
        })
})

/**
 * @api {post} /api/users/register Register new user
 * @apiVersion 1.1.0
 * @apiGroup Users
 * @apiParam {String} username New username
 * @apiParam {String} password New password
 * @apiParam {String} password2 New password confirmation
 * @apiParamExample {json} Input
 * {
 *      "username": "DemoUser",
 *      "password": "123456",
 *      "password2": "123456"
 * }
 * @apiSuccess {Boolean} user.success Is user logged in after signup?
 * @apiSuccess {String} user.token User's auth token
 * @apiSuccessExample {json} Success
 *  HTTP/1.1 200 OK
 *  [{
 *      "success": true,
 *      "token" : "Bearer eyJhbG...UjrtSY"
 *  }]
 * @apiErrorExample {json} All text fields empty
 *  HTTP/1.1 400 Bad Request
 * [{
 *      "username": "Username field is required",
 *      "password": "Password must be at least 6 characters",
 *      "password2": "Confirm Password field is required"
 * }]
 * @apiErrorExample {json} Password fields empty
 *  HTTP/1.1 400 Bad Request
 * [{
 *      "password": "Password must be at least 6 characters",
 *      "password2": "Confirm Password field is required"
 * }]
 * @apiErrorExample {json} Mismatched passwords
 *  HTTP/1.1 400 Bad Request
 * [{
 *      "password2": "Passwords must match"
 * }]
 * @apiErrorExample {json} Existing user
 *  HTTP/1.1 400 Bad Request
 * [{
 *      "username": "A user has already registered with this username"
 * }]
 */
router.post('/register', (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ username: req.body.username }).then(user => {
        if (user) {
            return res
                .status(400)
                .json({username: "A user has already registered with this username"});
        }
        else {
            const newUser = new User({
                username: req.body.username,
                password: req.body.password,
                balance: 0
            })

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser
                    .save()
                    .then(user => {
                        const payload = { id: user.id, username: user.username, balance: user.balance };

                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            { expiresIn: 3600 },
                            (err, token) => {
                                res.json({
                                    success: true,
                                    token: "Bearer " + token
                                });
                            }
                        );
                    })
                    .catch(err => console.log(err));
                })
            })
        }
    })
})

/**
 * @api {post} /api/users/login Log user in
 * @apiVersion 1.1.0
 * @apiGroup Users
 * @apiParam {String} username Existing username
 * @apiParam {String} password Existing password
 * @apiParamExample {json} Input
 * {
 *      "username": "DemoUser",
 *      "password": "123456"
 * }
 * @apiSuccess {Boolean} user.success Is user logged in after login?
 * @apiSuccess {String} user.token User's auth token
 * @apiSuccessExample {json} Success
 *  HTTP/1.1 200 OK
 *  [{
 *      "success": true,
 *      "token" : "Bearer eyJhbG...UjrtSY"
 *  }]
 * @apiErrorExample {json} All text fields empty
 *  HTTP/1.1 400 Bad Request
 * [{
 *      "username": "Username field is required",
 *      "password": "Password field is required"
 * }]
 * @apiErrorExample {json} Password field empty
 *  HTTP/1.1 400 Bad Request
 * [{
 *      "password": "Password field is required"
 * }]
 * @apiErrorExample {json} Wrong password
 *  HTTP/1.1 400 Bad Request
 * [{
 *      "password": "Incorrect password"
 * }]
 */
router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const username = req.body.username;
    const password = req.body.password;

    User.findOne({username}).then(user => {
        if (!user) {
            return res.status(404).json({username: 'This user does not exist'});
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
            const payload = {id: user.id, username: user.username, balance: user.balance};

            jwt.sign(
                payload,
                keys.secretOrKey,
                { expiresIn: 3600 },
                (err, token) => {
                    res.json({
                        success: true,
                        token: 'Bearer ' + token
                    });
                });
            }
            else {
                return res.status(400).json({password: 'Incorrect password'});
            }
        })
    })
})

module.exports = router;