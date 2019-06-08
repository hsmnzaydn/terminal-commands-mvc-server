const languageSchema = require('./model/language-model');


module.exports = {
    getLanguages,
    addLanguages,
    getLanguagesForApi
}


async function getLanguages(req, res, next) {

}

async function addLanguages(req, res, next) {
    if (req.method == 'GET') {
        res.render('addLanguage')
    } else if (req.method == 'POST') {
        var language=new languageSchema({
            language:req.body.language,
            languageShooter:req.body.languageshooter
        })
        language.save();
        res.redirect('/admin/')

    }
}

async function getLanguagesForApi(req,res,next){
    languageSchema.find({},['language','languageShooter']).then(languages=>{
            res.status(200).send(languages)
    }).catch(next)
}