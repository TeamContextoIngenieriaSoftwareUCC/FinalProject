const { Router } = require("express");
const { signInUser, signUpUser, deleteUser, updateUser } = require("../controllers/user.controller");
const isLogged = require('../middleware/isLogged')

const userRoutes = Router();

userRoutes
    .post('/signUp', signUpUser)
    .post('/signIn', signInUser);

userRoutes.use(isLogged);

userRoutes
    .put('/update/:id', updateUser)
    .delete('/delete/:id', deleteUser);

module.exports = userRoutes;