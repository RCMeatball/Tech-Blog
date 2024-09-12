const router = require("express").Router();
const { Blog, User } = require('../models');

router.get('/', async (res, req) => {
    try {
        const data = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['userName']
                },
            ],
        });

        const blog = blogData.map((blog) => blog.get({ plain:true }));

        res.render('homepage', {
            blogs,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.statusCode(500).json(err)
    }
});

router.get('blogs/:id', async (req, res) => {
    try {
       const data = await Blog.findByPk(req.params.id, {
        include: [
            {
                model: User,
                attributes: ['userName'],
            },
            {
                model: Comment
            }
        ]
       });
       
       const blog = blogData.get({ plain:true });
       res.render('blog', {
        blog,
        logged_in: req.session.logged_in 
       });
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/dashboard', async (res, req) => {
    try {
        const data = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Blog }],
        });

        const user = userData.get({ plain: true });

        res.render('dashboard', {
            user,
            logged_in: true
        });
    } catch (err){ 
        res.status(500).json(err)
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});

module.exports = router;