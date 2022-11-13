const {Router} = require('express');
const { getTeamsByUser, getTeamById, registerTeam, updateCompleteTask } = require('../controllers/team.controller');

const teamRoutes = Router();

teamRoutes
    .get('/', getTeamsByUser)
    .get('/:id', getTeamById)
    .post('/register', registerTeam)
    .put('/:id/complete', updateCompleteTask);

module.exports = teamRoutes;