const createUsers = require('../models/createUsers');

module.exports = {
    async store(req,res,) {
        const {firstName, lastName, email,password} = req.body;
        const user = await createUsers.create({firstName, lastName, email, password});
    }
}