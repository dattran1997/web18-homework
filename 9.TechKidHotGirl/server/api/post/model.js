const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    title: {type:String, required:true},
    description: {type:String, required:true},
    like: {type:Number, default:0},
    view: {type:Number, default:0},
    imageUrl: {type:String, required:true},
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
},{
    timestamps: true,
});
const PostModel = mongoose.model("POST", PostSchema);
module.exports = PostModel;

//khai báo ref để liên kết key đến bảng cần liên kết