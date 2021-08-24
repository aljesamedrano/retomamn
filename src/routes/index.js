const { Router } = require('express');
router = Router();

router.get('/', (req, res) => {
    res.json({
        'Title': 'Welcome'
    })
})

module.exports = router;