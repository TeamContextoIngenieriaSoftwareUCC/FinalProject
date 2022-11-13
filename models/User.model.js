const {Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
        mail: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true
        },
        firstName: String,
        lastName: String,
        teams: [{
            type: Schema.Types.ObjectId,
            ref: 'Team',
            default: ''
        }]
    },
    {
        versionKey: false
    }
);

module.exports = model('User', userSchema);