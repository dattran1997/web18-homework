const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {type:String, unique:true },
    password: {type:String},
    fullname: {type:String},
    facebookAccount: {
        uid: {type: String},
        email: {type: String},
    },

},{
    timestamps: true,
});

const UserModel = mongoose.model("User",UserSchema);

module.exports = UserModel;