// ------------------------------------------------------------------------------------------
// General apiDoc documentation blocks and old history blocks.
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// History.
// ------------------------------------------------------------------------------------------

/**
 * @api {get} /user/:accountId Get all of current user's transactions
 * @apiVersion 1.0.0
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

/**
 * @api {get} /user/:accountId/:description Get all of current user's transactions matching description, category, or value
 * @apiVersion 1.0.0
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

/**
 * @api {post} / Add a new transaction
 * @apiVersion 1.0.0
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

/**
 * @api {get} /current Get current user
 * @apiVersion 1.0.0
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

/**
 * @api {patch} /update Update user's balance
 * @apiVersion 1.0.0
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

/**
 * @api {post} /register Register new user
 * @apiVersion 1.0.0
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

/**
 * @api {post} /login Log user in
 * @apiVersion 1.0.0
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