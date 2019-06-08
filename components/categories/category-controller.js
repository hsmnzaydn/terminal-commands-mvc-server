const categorySchema = require('./model/category-model');
      languageSchema = require('../language/model/language-model');
      commandSchema= require('../commands/model/command-model')
      multer = require('multer');
      fs = require('fs');




module.exports = {
    getCategories,
    getCategoriesForApi,
    getCategoryForApi,
    addCategory,
    getCommands,
    addCommands,
    uploadFile
}

async function getCategories(req, res, next) {
    var languageQuery=req.query.language
    languageSchema.findOne({languageShooter:languageQuery})
    .then(language=>{
           categorySchema.find({language:language._id}).then(categories=>{
            res.render('categories',{
                categories:categories,
                languageQuery:languageQuery
            })
           }).catch(next) 
           
    }).catch(next)
}

async function addCategory(req, res, next) {
    var languageQuery = req.query.language
    if (req.method == 'GET') {

        categorySchema.find({language:languageQuery}).find(categories=>{
            res.render('addCategory',{
                languageQuery:languageQuery,
                categories:categories
            })
        }).catch(next)

    } else if (req.method == 'POST') {
        languageSchema.findOne({languageShooter:languageQuery}).then(async language => {
            category = new categorySchema({
                title: req.body.categoryName,
                language: language._id
            })
            await category.save()

            res.redirect('/admin/categories?language='+languageQuery)

        }).catch(next)

    }

}

async function getCommands(req,res,next) {
    commandSchema.find({category:req.params.categoryId}).then(commands=>{
        res.render('commands',{
            commands:commands,
            categoryId:req.params.categoryId
        })
    }).catch(next)
}

async function addCommands(req,res,next) {
    var categoryId=req.params.categoryId
    if(req.method == 'GET'){
        res.render('addCommand')
    }else if(req.method == 'POST'){
        categorySchema.findOne({_id:categoryId}).then(async category=>{
            var command=new commandSchema({
               title:req.body.commandTitle,
               description: req.body.commandDescription,
               category:categoryId,
               language:category.language     
            })
             command.save()
            res.redirect('/admin/categories/'+categoryId+'/commands')
        }).catch(next)//
    }
}

async function getCategoriesForApi(req,res,next) {
    var language=res.language
    categorySchema.find({language:language._id},['title','iconPath']).then(async categories=>{
            await categories.map(category=>{
                category.iconPath=process.env.BASE_URL+category.iconPath
            })
            res.status(200).send(categories)
    }).catch(next)

}

async function getCategoryForApi(req,res,next) {
    var categoryId=req.params.categoryId
    commandSchema.find({category:categoryId},['title','description']).then(commands=>{
        res.status(200).send(commands)
    }).catch(next)
}

async function uploadFile(req,res,next) {
    var categoryId=req.params.categoryId
    var languageQuery=req.query.language
    var imagePath='public/img/'+req.file.filename
    categorySchema.findOne({_id:categoryId}).then(async category=>{
        category.iconPath=imagePath
       await category.save() 
        
        res.redirect('/admin/categories?language='+languageQuery)
 }).catch(next)
}