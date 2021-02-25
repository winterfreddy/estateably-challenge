define({ "api": [
  {
    "type": "get",
    "url": "/api/transactions/user/:accountId",
    "title": "Get all of current user's transactions",
    "version": "1.1.0",
    "group": "Transactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accountId",
            "description": "<p>Current user's accountId</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n     \"accountId\": \"602da8a866358b1622da0647\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction._id",
            "description": "<p>Transaction id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.accountId",
            "description": "<p>Transaction linked to accountId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.category",
            "description": "<p>Transaction category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.description",
            "description": "<p>Transaction description</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transaction.value",
            "description": "<p>Transaction value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.choice",
            "description": "<p>Transaction withdraw or deposit</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.date",
            "description": "<p>Transaction date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transaction.__v",
            "description": "<p>Transaction version key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n    \"_id\": \"602ed64007bd5aee29f96377\",\n    \"accountId\": \"602da8a866358b1622da0647\",\n    \"category\": \"Salary\",\n    \"description\": \"Estateably Salary\",\n    \"value\": 2050,\n    \"choice\": \"deposit\",\n    \"date\": \"2021-02-18T21:04:00.123Z\",\n    \"__v\": 0\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "No transactions found",
          "content": "HTTP/1.1 200 OK\n[]",
          "type": "Array"
        }
      ]
    },
    "filename": "./routes/api/transactions.js",
    "groupTitle": "Transactions",
    "name": "GetApiTransactionsUserAccountid"
  },
  {
    "type": "get",
    "url": "/api/transactions/user/:accountId/:description",
    "title": "Get all of current user's transactions matching description, category, or value",
    "version": "1.1.0",
    "group": "Transactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accountId",
            "description": "<p>Current user's accountId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Transaction description, category, or value</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n     \"accountId\": \"602da8a866358b1622da0647\",\n     \"description\": \"Estateably\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction._id",
            "description": "<p>Transaction id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.accountId",
            "description": "<p>Transaction linked to accountId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.category",
            "description": "<p>Transaction category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.description",
            "description": "<p>Transaction description</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transaction.value",
            "description": "<p>Transaction value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.choice",
            "description": "<p>Transaction withdraw or deposit</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.date",
            "description": "<p>Transaction date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transaction.__v",
            "description": "<p>Transaction version key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n    \"_id\": \"602ed64007bd5aee29f96377\",\n    \"accountId\": \"602da8a866358b1622da0647\",\n    \"category\": \"Salary\",\n    \"description\": \"Estateably Salary\",\n    \"value\": 2050,\n    \"choice\": \"deposit\",\n    \"date\": \"2021-02-18T21:04:00.123Z\",\n    \"__v\": 0\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "No transactions found",
          "content": "HTTP/1.1 200 OK\n[]",
          "type": "Array"
        }
      ]
    },
    "filename": "./routes/api/transactions.js",
    "groupTitle": "Transactions",
    "name": "GetApiTransactionsUserAccountidDescription"
  },
  {
    "type": "get",
    "url": "/user/:accountId",
    "title": "Get all of current user's transactions",
    "version": "1.0.0",
    "group": "Transactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accountId",
            "description": "<p>Current user's accountId</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n     \"accountId\": \"602da8a866358b1622da0647\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction._id",
            "description": "<p>Transaction id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.accountId",
            "description": "<p>Transaction linked to accountId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.category",
            "description": "<p>Transaction category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.description",
            "description": "<p>Transaction description</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transaction.value",
            "description": "<p>Transaction value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.choice",
            "description": "<p>Transaction withdraw or deposit</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.date",
            "description": "<p>Transaction date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transaction.__v",
            "description": "<p>Transaction version key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n    \"_id\": \"602ed64007bd5aee29f96377\",\n    \"accountId\": \"602da8a866358b1622da0647\",\n    \"category\": \"Salary\",\n    \"description\": \"Estateably Salary\",\n    \"value\": 2050,\n    \"choice\": \"deposit\",\n    \"date\": \"2021-02-18T21:04:00.123Z\",\n    \"__v\": 0\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "No transactions found",
          "content": "HTTP/1.1 200 OK\n[]",
          "type": "Array"
        }
      ]
    },
    "filename": "./routes/api/_apidoc.js",
    "groupTitle": "Transactions",
    "name": "GetUserAccountid"
  },
  {
    "type": "get",
    "url": "/user/:accountId/:description",
    "title": "Get all of current user's transactions matching description, category, or value",
    "version": "1.0.0",
    "group": "Transactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accountId",
            "description": "<p>Current user's accountId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Transaction description, category, or value</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n     \"accountId\": \"602da8a866358b1622da0647\",\n     \"description\": \"Estateably\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction._id",
            "description": "<p>Transaction id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.accountId",
            "description": "<p>Transaction linked to accountId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.category",
            "description": "<p>Transaction category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.description",
            "description": "<p>Transaction description</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transaction.value",
            "description": "<p>Transaction value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.choice",
            "description": "<p>Transaction withdraw or deposit</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.date",
            "description": "<p>Transaction date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transaction.__v",
            "description": "<p>Transaction version key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n    \"_id\": \"602ed64007bd5aee29f96377\",\n    \"accountId\": \"602da8a866358b1622da0647\",\n    \"category\": \"Salary\",\n    \"description\": \"Estateably Salary\",\n    \"value\": 2050,\n    \"choice\": \"deposit\",\n    \"date\": \"2021-02-18T21:04:00.123Z\",\n    \"__v\": 0\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "No transactions found",
          "content": "HTTP/1.1 200 OK\n[]",
          "type": "Array"
        }
      ]
    },
    "filename": "./routes/api/_apidoc.js",
    "groupTitle": "Transactions",
    "name": "GetUserAccountidDescription"
  },
  {
    "type": "post",
    "url": "/",
    "title": "Add a new transaction",
    "version": "1.0.0",
    "group": "Transactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Current user's accountId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Transaction category</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Transaction description</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>Transaction value</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "choice",
            "description": "<p>Transaction type either deposit or withdraw</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n     \"id\": \"602da8a866358b1622da0647\",\n     \"category\": \"Salary\",\n     \"description\": \"Estateably Monthly Bonus\",\n     \"value\", \"1250\",\n     \"choice\": \"deposit\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction._id",
            "description": "<p>Transaction id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.accountId",
            "description": "<p>Transaction linked to accountId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.category",
            "description": "<p>Transaction category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.description",
            "description": "<p>Transaction description</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transaction.value",
            "description": "<p>Transaction value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.choice",
            "description": "<p>Transaction withdraw or deposit</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.date",
            "description": "<p>Transaction date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transaction.__v",
            "description": "<p>Transaction version key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"6036d5a7d4b132b9be203535\",\n    \"accountId\": \"602da8a866358b1622da0647\",\n    \"category\": \"Salary\",\n    \"description\": \"Estateably Monthly Bonus\",\n    \"value\": 1250,\n    \"choice\": \"deposit\",\n    \"date\": \"2021-02-24T22:39:35.442Z\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/api/_apidoc.js",
    "groupTitle": "Transactions",
    "name": "Post"
  },
  {
    "type": "post",
    "url": "/api/transactions/",
    "title": "Add a new transaction",
    "version": "1.1.0",
    "group": "Transactions",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Current user's accountId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>Transaction category</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Transaction description</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "value",
            "description": "<p>Transaction value</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "choice",
            "description": "<p>Transaction type either deposit or withdraw</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n     \"id\": \"602da8a866358b1622da0647\",\n     \"category\": \"Salary\",\n     \"description\": \"Estateably Monthly Bonus\",\n     \"value\", \"1250\",\n     \"choice\": \"deposit\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction._id",
            "description": "<p>Transaction id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.accountId",
            "description": "<p>Transaction linked to accountId</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.category",
            "description": "<p>Transaction category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.description",
            "description": "<p>Transaction description</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transaction.value",
            "description": "<p>Transaction value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.choice",
            "description": "<p>Transaction withdraw or deposit</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "transaction.date",
            "description": "<p>Transaction date</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "transaction.__v",
            "description": "<p>Transaction version key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"6036d5a7d4b132b9be203535\",\n    \"accountId\": \"602da8a866358b1622da0647\",\n    \"category\": \"Salary\",\n    \"description\": \"Estateably Monthly Bonus\",\n    \"value\": 1250,\n    \"choice\": \"deposit\",\n    \"date\": \"2021-02-24T22:39:35.442Z\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/api/transactions.js",
    "groupTitle": "Transactions",
    "name": "PostApiTransactions"
  },
  {
    "type": "get",
    "url": "/api/users/current",
    "title": "Get current user",
    "version": "1.1.0",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "\"Authorization\": \"Bearer eyJhbG...UjrtSY\"",
          "type": "string"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>User's username</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n    \"id\": \"602da8a866358b1622da0647\",\n    \"username\": \"DemoUser\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized access",
          "content": "HTTP/1.1 401 Unauthorized\n\"Unauthorized\"",
          "type": "String"
        }
      ]
    },
    "filename": "./routes/api/users.js",
    "groupTitle": "Users",
    "name": "GetApiUsersCurrent"
  },
  {
    "type": "get",
    "url": "/current",
    "title": "Get current user",
    "version": "1.0.0",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Authorization token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "\"Authorization\": \"Bearer eyJhbG...UjrtSY\"",
          "type": "string"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.username",
            "description": "<p>User's username</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n    \"id\": \"602da8a866358b1622da0647\",\n    \"username\": \"DemoUser\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Unauthorized access",
          "content": "HTTP/1.1 401 Unauthorized\n\"Unauthorized\"",
          "type": "String"
        }
      ]
    },
    "filename": "./routes/api/_apidoc.js",
    "groupTitle": "Users",
    "name": "GetCurrent"
  },
  {
    "type": "patch",
    "url": "/api/users/update",
    "title": "Update user's balance",
    "version": "1.1.0",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Current user's username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Value to be added</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "choice",
            "description": "<p>Transaction type either deposit or withdraw</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n     \"username\": \"DemoUser\",\n     \"value\": \"1250\",\n     \"choice\": \"deposit\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "user.success",
            "description": "<p>Is user logged in still?</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.token",
            "description": "<p>User's auth token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n    \"success\": true,\n    \"token\" : \"Bearer eyJhbG...UjrtSY\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/api/users.js",
    "groupTitle": "Users",
    "name": "PatchApiUsersUpdate"
  },
  {
    "type": "patch",
    "url": "/update",
    "title": "Update user's balance",
    "version": "1.0.0",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Current user's username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>Value to be added</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "choice",
            "description": "<p>Transaction type either deposit or withdraw</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n     \"username\": \"DemoUser\",\n     \"value\": \"1250\",\n     \"choice\": \"deposit\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "user.success",
            "description": "<p>Is user logged in still?</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.token",
            "description": "<p>User's auth token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n    \"success\": true,\n    \"token\" : \"Bearer eyJhbG...UjrtSY\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/api/_apidoc.js",
    "groupTitle": "Users",
    "name": "PatchUpdate"
  },
  {
    "type": "post",
    "url": "/api/users/login",
    "title": "Log user in",
    "version": "1.1.0",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Existing username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Existing password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n     \"username\": \"DemoUser\",\n     \"password\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "user.success",
            "description": "<p>Is user logged in after login?</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.token",
            "description": "<p>User's auth token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n    \"success\": true,\n    \"token\" : \"Bearer eyJhbG...UjrtSY\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "All text fields empty",
          "content": " HTTP/1.1 400 Bad Request\n[{\n     \"username\": \"Username field is required\",\n     \"password\": \"Password field is required\"\n}]",
          "type": "json"
        },
        {
          "title": "Password field empty",
          "content": " HTTP/1.1 400 Bad Request\n[{\n     \"password\": \"Password field is required\"\n}]",
          "type": "json"
        },
        {
          "title": "Wrong password",
          "content": " HTTP/1.1 400 Bad Request\n[{\n     \"password\": \"Incorrect password\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/api/users.js",
    "groupTitle": "Users",
    "name": "PostApiUsersLogin"
  },
  {
    "type": "post",
    "url": "/api/users/register",
    "title": "Register new user",
    "version": "1.1.0",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>New username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>New password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password2",
            "description": "<p>New password confirmation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n     \"username\": \"DemoUser\",\n     \"password\": \"123456\",\n     \"password2\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "user.success",
            "description": "<p>Is user logged in after signup?</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.token",
            "description": "<p>User's auth token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n    \"success\": true,\n    \"token\" : \"Bearer eyJhbG...UjrtSY\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "All text fields empty",
          "content": " HTTP/1.1 400 Bad Request\n[{\n     \"username\": \"Username field is required\",\n     \"password\": \"Password must be at least 6 characters\",\n     \"password2\": \"Confirm Password field is required\"\n}]",
          "type": "json"
        },
        {
          "title": "Password fields empty",
          "content": " HTTP/1.1 400 Bad Request\n[{\n     \"password\": \"Password must be at least 6 characters\",\n     \"password2\": \"Confirm Password field is required\"\n}]",
          "type": "json"
        },
        {
          "title": "Mismatched passwords",
          "content": " HTTP/1.1 400 Bad Request\n[{\n     \"password2\": \"Passwords must match\"\n}]",
          "type": "json"
        },
        {
          "title": "Existing user",
          "content": " HTTP/1.1 400 Bad Request\n[{\n     \"username\": \"A user has already registered with this username\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/api/users.js",
    "groupTitle": "Users",
    "name": "PostApiUsersRegister"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Log user in",
    "version": "1.0.0",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Existing username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Existing password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n     \"username\": \"DemoUser\",\n     \"password\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "user.success",
            "description": "<p>Is user logged in after login?</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.token",
            "description": "<p>User's auth token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n    \"success\": true,\n    \"token\" : \"Bearer eyJhbG...UjrtSY\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "All text fields empty",
          "content": " HTTP/1.1 400 Bad Request\n[{\n     \"username\": \"Username field is required\",\n     \"password\": \"Password field is required\"\n}]",
          "type": "json"
        },
        {
          "title": "Password field empty",
          "content": " HTTP/1.1 400 Bad Request\n[{\n     \"password\": \"Password field is required\"\n}]",
          "type": "json"
        },
        {
          "title": "Wrong password",
          "content": " HTTP/1.1 400 Bad Request\n[{\n     \"password\": \"Incorrect password\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/api/_apidoc.js",
    "groupTitle": "Users",
    "name": "PostLogin"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Register new user",
    "version": "1.0.0",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>New username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>New password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password2",
            "description": "<p>New password confirmation</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n     \"username\": \"DemoUser\",\n     \"password\": \"123456\",\n     \"password2\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "user.success",
            "description": "<p>Is user logged in after signup?</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.token",
            "description": "<p>User's auth token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n    \"success\": true,\n    \"token\" : \"Bearer eyJhbG...UjrtSY\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "All text fields empty",
          "content": " HTTP/1.1 400 Bad Request\n[{\n     \"username\": \"Username field is required\",\n     \"password\": \"Password must be at least 6 characters\",\n     \"password2\": \"Confirm Password field is required\"\n}]",
          "type": "json"
        },
        {
          "title": "Password fields empty",
          "content": " HTTP/1.1 400 Bad Request\n[{\n     \"password\": \"Password must be at least 6 characters\",\n     \"password2\": \"Confirm Password field is required\"\n}]",
          "type": "json"
        },
        {
          "title": "Mismatched passwords",
          "content": " HTTP/1.1 400 Bad Request\n[{\n     \"password2\": \"Passwords must match\"\n}]",
          "type": "json"
        },
        {
          "title": "Existing user",
          "content": " HTTP/1.1 400 Bad Request\n[{\n     \"username\": \"A user has already registered with this username\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "./routes/api/_apidoc.js",
    "groupTitle": "Users",
    "name": "PostRegister"
  }
] });
