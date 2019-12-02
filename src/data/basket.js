require('dotenv').config();

const router = require('express').Router();
const db = require('json-server');

router.use(db.rewriter({
    '/?filter=most-popular*': '/?_sort=votes&_order=desc&_limit=5$1',
    '/?filter=recent*': '/?_sort=created_at&_order=desc&_limit=5$1',
    '/?filter=free*': '/?price=0$1'
}));

//-------- receive requests --------
function prepareBook(data) {
    const book = {
        ...data
    }

    return book;
}

router.put('/:id', (req, res, next) => {
    upload(req, res, err => {
        if (err) {
            res.send('Error: File upload error.');
        } else {
            if (!req.body.id) {
                res.send('Error: ID was not received.');
            } else {
                req.body = prepareBook(req.body);
                next();
            }
        }
    });
});

module.exports = router;