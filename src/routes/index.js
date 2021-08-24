const { Router } = require('express');
const users = require('../users/users.json');

router = Router();

// endpoints 
router.get('/', (req, res) => {
    res.send("Welcome")
})

router.get('/api/users', (req, res) => {
    res.json(users);
})

module.exports = router;