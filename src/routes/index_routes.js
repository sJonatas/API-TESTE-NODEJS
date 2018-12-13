'use strict'

const express = require('express');
const router = express.Router();

router.get('/', (req, resp, next) => {
    resp.status(200).send({
        title: 'Node Teste (store)',
        version: '1.0.2'
    });
});

module.exports = router;
