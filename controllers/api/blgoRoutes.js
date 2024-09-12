const router = require('express').Router();
const { Blog, Comment } = require('../../models');

router.post( '/', async (req, res) => {
    try {
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newBlog);
    } catch (err) {
        res.status(400).json(err)
    }
});

router.put('/:id', async (req, res) => {
    try {
        const update = await Blog.update(
            {
            user_id: req.session.user_id,
            content: req.body.content
            },
            {
                where: {
                    id: req.params.id,
                }
            });
        res.status(200).json(update);
    } catch (err) {
        res.status(400).json(err)
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const data = await Blog.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        res.status(200).json(data);
    } catch (err) {
        res.status(400).json(err)
    }
});

module.exports = router;