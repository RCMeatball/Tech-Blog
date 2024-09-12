const blogSeed = require('./blogSeed');
const userSeed = require('./userSeed');
const commentSeed = require('./commentSed');

const sequelize = require('../config/connection');

const seed = async () => {
    await sequelize.sync({ force: true});
    await blogSeed();
    await userSeed();
    await commentSeed();

    process.exit(0);
};

seed();