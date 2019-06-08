var mongoose=require("mongoose");

var Schema=mongoose.Schema;


var command=new Schema(
    {

        title:{type:String, default: NaN},
        description:{type:String,default:NaN},
        category:{type: mongoose.Schema.Types.ObjectId, ref: "Category",required:true, default: null},
        language: {type: mongoose.Schema.Types.ObjectId, ref: "Language",required:true, default: null}

    }
)

module.exports=mongoose.model('Command',command);

