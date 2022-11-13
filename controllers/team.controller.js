const User = require("../models/User.model");
const Team = require('../models/Team.model');

/**
 * It gets the teams of a user by the user's id.
 * @param req - The request object represents the HTTP request and has properties for the request query
 * string, parameters, body, HTTP headers, and so on.
 * @param res - the response object
 */
const getTeamsByUser = async(req, res)=>{
    try{
        const { id_user } = req.headers;
        const user = await User.findById(id_user).populate('teams');
        res.status(200).json(user.teams);
    }catch(e){
        res.status(500).json({"msg": "Bad Request"});
    }
};

/**
 * It's an async function that takes in a request and a response object, and it tries to find a team by
 * its id, and if it finds it, it sends a 200 status code with the team object, and if it doesn't find
 * it, it sends a 500 status code with a message.
 * @param req - request
 * @param res - The response object.
 */
const getTeamById = async(req,res) => {
    try{
        const team = await Team.findById(req.params.id);
        res.status(200).json(team);
    }catch(e){
        res.status(500).json({"msg": "Bad Request"});
    }
};

/**
 * It creates a new team, adds the user to the team, and then adds the team to the user.
 * @param req - request
 * @param res - {
 */
const registerTeam = async(req, res) => {
    const { id_user } = req.headers;
    const newTeam = new Team(req.body);

    const user = await User.findById(id_user);
    newTeam.user = user;
    await newTeam.save();

    user.teams.push(newTeam);
    await user.save();
    res.status(201).json({
        mebers: newTeam.members, 
        area: newTeam.area,
        id: newTeam._id
    });
};

/**
 * It updates the isCompleteTask field of a document in the Team collection to true.
 * @param req - request
 * @param res - the response object
 * @returns The updated task.
 */
const updateCompleteTask = async(req,res) => {
    try{
        const {id: _id} = req.params;

        const updatedTask = await Team.findOneAndUpdate({_id}, {
            isCompleteTask: true
        },{
            new:true
        }).catch(e => {
            throw new Error(e);
        });

        return res.status(200).json({
            "isCompleteTask": updatedTask.isCompleteTask
        });
    }catch(e){
        return res.status(404).json({
            "msg": "Not Found"
        });
    }
}

module.exports = {
    getTeamsByUser,
    getTeamById,
    registerTeam,
    updateCompleteTask
};