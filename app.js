const {PORT, app} = require('./config/server.js');
const isLogged = require('./middleware/isLogged.js');
const userRoutes = require('./routes/user.routes.js');
const teamRoutes = require('./routes/team.routes.js');

app.use('/users', userRoutes);

app.use(isLogged);
app.use('/teams', teamRoutes);

app.listen(PORT, () => {
    console.log(`Server in port ${PORT}`);
});