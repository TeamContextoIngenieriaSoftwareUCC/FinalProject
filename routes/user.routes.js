const { Router } = require("express");
const { signInUser, signUpUser, deleteUser, updateUser } = require("../controllers/user.controller");

const userRoutes = Router();

userRoutes
    .post('/signIn', signInUser)
    .post('/signUp', signUpUser)
    .put('/update/:id', updateUser)
    .delete('/delete/:id', deleteUser);

module.exports = userRoutes;