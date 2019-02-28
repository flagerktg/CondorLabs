const User = require('../../models/User');

const getAllUsers = async () => {
    try {
        let data = await User.find();
        return data;
    } catch (error) {
        return error;
    }
};

const addUser = async (user = {}) => {
    try {
        let data = await User.create(user);
        return data;
    } catch (error) {
        return error;
    }
};

module.exports = {
    getAllUsers,
    addUser
};