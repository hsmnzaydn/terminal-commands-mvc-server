const languageSchema=require('./components/language/model/language-model');

module.exports.interceptor=function(req,res,next){
    var header=req.headers['app-language']
    
    languageSchema.findOne({languageShooter:header}).then(language=>{
        
        res.language=language._id
        next();
    }).catch(next)

}