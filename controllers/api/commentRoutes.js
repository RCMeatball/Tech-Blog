const router = require('express').Router();
const { where } = require('../../config/connection');
const { Comment } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const data = await Comment.findAll();
        const comments = data.map(comment => comment.toJSON());

        res.status(200).render('/', { comments});
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const update = await Comment.update(
            {
                user_id: req.session.user_id,
                comment: req.body.comment
            },
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.status(200).json(update);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const comment = await Comment.create({
            ...req.body,
            comment: req.body.comment,
            blog_id: req.body.blog_id,
            user_id: req.body.user_id
        });
        res.status(200).json(comment);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const comment = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }
        });
    } catch (err) {
        res.status(400).json(err)
    }
});

module.exports = router;