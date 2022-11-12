const {PORT, app} = require('./config/server.js');
const userRoutes = require('./routes/user.routes.js');

app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server in port ${PORT}`);
});