const { User } = require('../models');

const data = [
    {
        userName: "Billy Bob",
        email: "illbillyyourbob@gmail.com",
        password: "billybob!"
    },
    {
        userName: "Bob Billy",
        email: "illbobyourbilly@gmail.com",
        password: "billybobisapieceofsh"
    }
]

const userSeed = () => User.bulkCreate(data);

module.exports = userSeed;