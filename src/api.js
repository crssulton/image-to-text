'use strict';

const express = require('express')
const serverless = require('serverless-http')

const app = express()
const router = express.Router()

router.get('/', (reg, res) => {
  res.json({
    'code': 200,
    'status': 'success',
    reg
  })
})

app.use("/.netlify/functions/api/", router)

module.exports.handler = serverless(app)