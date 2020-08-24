const express = require('express');

const router = express.Router();

router.post('/name', async (req, res) => {
    const {
        body: { name }
    } = req;
    console.log(name);
});

router.post('/detail', async (req, res) => {
    const {
        body: { service, genre }
    } = req;
});

module.exports = router;