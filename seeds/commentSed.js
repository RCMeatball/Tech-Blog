const { Comment } = require('../models');

const data = [
    {
        user_id: 1,
        blog_id: 2,
        comment: "I feel that my dude"
    },
    {
        user_id: 2,
        blog_id: 1,
        comment: "Space Marine 2 looks severely cool"
    }
]

const commentSeed = () => Comment.bulkCreate(data);

module.exports = commentSeed;