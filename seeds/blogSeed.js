const { Blog }= require('../models');

const data = [
    {
        title: "Holy cow my brain is fried",
        content: "This class has officially fried my brain to a charcoal crisp",
        user_id: 1
    },
    {
        title: "Brain Hurty",
        content: "Fortunately I bought myself two new video games as a pre-reward for making it through (hopefully) this class",
        user_id: 2
    }
]

const blogSeed = () => Blog.bulkCreate(data);

module.exports = blogSeed;