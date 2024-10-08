const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const data = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = data.id;
            req.session.logged_in = true;

            res.status(200).json(data)
        });
    } catch (err) {
        res.status(400).json(err)
    }
});

router.post('/login', async (req, res) => {
    try {
        const data = await User.findOne(
            {
                where: {email: req.body.email }
            }
        );

        if (!data) {
            res.status(400).json({ message: 'Incorrect email or password, try again '});
            return;
        }
         req.session.save(() => {
            req.session.user_id = data.id;
            req.session.logged_in = true;

            res.json({ message: 'You are now logged in!' });
         })
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else (
        res.status(404).end()
    )
});

module.exports = router;