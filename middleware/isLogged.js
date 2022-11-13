const User = require("../models/User.model");
const {Types} = require('mongoose');

/**
 * If the user is not found, return a 401 error, otherwise, continue with the next function.
 * @param req - the request object
 * @param res - the response object
 * @param next - The next middleware function in the stack.
 * @returns error
 */
const isLogged = async(req, res, next) => {
    try{
        const {id_user, mail} = req.headers;
        const _id = new Types.ObjectId(id_user);

        const user = await User.findOne({_id,mail})
            .catch((e)=>{
                throw new Error(e);
            });
            
        if(!user){
            return res.status(401).json({"msg": "Not Authorized"});
        }

        next();
    }catch(e){
        return res.status(500).json({"msg": "Bad Request"});
    }
};

module.exports = isLogged;