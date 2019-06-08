var mongoose=require("mongoose");

var Schema=mongoose.Schema;


var language=new Schema(
    {

        language:{type:String, default:"English"},
        languageShooter:{type:String,default: "ENG"}

    }
)

module.exports=mongoose.model('Language',language);

