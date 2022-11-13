const User = require('../models/User.model');

/**
 * It takes the request body, creates a new user, saves the user, and returns a response.
 * @param req - The request object.
 * @param res - The response object.
 * @returns The user object is being returned.
 */
const signInUser = async(req, res) => {
    try{
        const newUser = new User(req.body);
        const user = await newUser.save();
        return res.status(201).json(user);
    }catch(e){
        return res.status(500).json({
            "msg": "Bad Request"
        });
    }
};

/**
 * It takes a user's email and password, checks if the user exists, and if the password is correct,
 * returns the user's id and name.
 * @param req - request object
 * @param res - The response object.
 * @returns The user's id and name.
 */
const signUpUser = async(req, res) => {
    try{
        let fullName;
        const {mail, password} = req.body;
        const user = await User.findOne({mail});
        if(!user) throw new Error(404);
        if(password != user.password) throw new Error(400);
        if(!user.firstName && !user.lastName) fullName = 'Anonymous';
        return res.status(200).json({
            "id": user._id,
            "name": fullName || `${user.firstName} ${user.lastName}`
        });
    }catch({message}){
        console.log(message);
        return res.status(500).json({
            "msg": "Bad Request"
        });
    }
};

/**
 * It takes a user id, and updates the user with the new data
 * @param req - The request object.
 * @param res - The response object.
 * @returns The updated user.
 */
const updateUser = async(req, res) => {
    try{
        const updatedUser = await User.findOneAndUpdate(req.params.id, req.body,{
            new:true
        }).catch(e => {
            throw new Error(e);
        });

        return res.status(200).json({
            "name": updatedUser.firstName + updatedUser.lastName,
            "mail": updatedUser.mail,
            "id": updatedUser._id
        });
    }catch(e){
        return res.status(404).json({
            "msg": "Not Found"
        });
    }
};

/**
 * It deletes a user from the database if the user's id, email and password match the ones in the
 * database.
 * @param req - request
 * @param res - response object
 * @returns a promise.
 */
const deleteUser = async(req, res) => {
    try{
        const {id: _id} = req.params;
        const {mail, password} = req.body;
        const {deletedCount} = await User.deleteOne({_id,mail, password});
        if(!deletedCount) throw new Error(400);
        return res.status(202).json({
            "msg": `User with email ${mail} was successfully deleted`
        });
    }catch(e){
        console.log(e);
        return res.status(500).json({
            "msg": "Bad Request"
        });
    }
};

module.exports = {
    signInUser,
    signUpUser,
    updateUser,
    deleteUser
};