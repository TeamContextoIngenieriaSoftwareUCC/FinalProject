const {Schema, model} = require('mongoose');

const teamSchema = new Schema(
    {
        members: [{
            type: String,
            required: true,
            trim: true
        }],
        area: {
            type: String,
            required: true
        },
        isCompleteTask: {
            type: Boolean,
            default: false
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = model('Team', teamSchema);