const {PORT, app} = require('./config/server.js');

app.listen(PORT, () => {
    console.log(`Server in port ${PORT}`);
});