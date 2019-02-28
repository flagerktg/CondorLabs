const {
    getAllUsers,
    addUser
} = require('./repository');

const getUsers = async (req, res) => {
    try {
        let users = await getAllUsers();
        return res.status(200).send(users);
    } catch (error) {
        return res.send({
            message: error.message
        })
    }
};
//add a new User
const postUser = async (req, res) => {
    try {
        const {
            userName,
            userPhone
        } = req.body;
        let user = await addUser({
            userName,
            userPhone
        });
        return res.status(200).send(user);
    } catch (error) {
        return res.send({
            message: error.message
        })
    }
}


module.exports = {
    getUsers,
    postUser
};