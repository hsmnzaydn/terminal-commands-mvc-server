var express = require('express')
    router = express.Router();
    categoryController=require('../components/categories/category-controller')
    commandController=require('../components/commands/command-controller')
    languageController=require('../components/language/language-controller')
    interceptor=require('../interceptor')

router.get('/categories', interceptor.interceptor,categoryController.getCategoriesForApi)
router.get('/categories/:categoryId/commands',categoryController.getCategoryForApi)
router.get('/commands', interceptor.interceptor,commandController.getCommandsForApi)
router.get('/languages',languageController.getLanguagesForApi)




module.exports = router