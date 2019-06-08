require('dotenv').config()


module.exports.isAuthorized= async function (req, res, next) {
    if(req.session.userName==process.env.ADMIN_USERNAME && req.session.password==process.env.ADMIN_PASSWORD){
        next()
    }else{
        res.redirect('/admin/login')
    }

};