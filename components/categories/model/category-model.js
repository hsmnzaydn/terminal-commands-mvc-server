var mongoose=require("mongoose");

var Schema=mongoose.Schema;


var category=new Schema(
    {

        title:{type:String, default: NaN},
        language: {type: mongoose.Schema.Types.ObjectId, ref: "Language",required:true, default: null},
        iconPath:{type:String,default:'/'}

    }
)

module.exports=mongoose.model('Category',category);

