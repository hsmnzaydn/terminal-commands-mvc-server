const router = require('express').Router()
      auth=require('../auth')
      adminController=require('../components/admin/admin-controller');
//Admin Routers
router.get('/',auth.isAuthorized,adminController.index)
router.get('/login',adminController.login)
router.post('/login',adminController.login)
router.get('/duplicate',auth.isAuthorized,adminController.duplicate)

//Category Routers
router.use('/categories',auth.isAuthorized,require('../components/categories/category-router'));

//Language Routers
router.use('/languages',auth.isAuthorized,require('../components/language/language-router'));

//Command Routers
router.use('/commands',auth.isAuthorized,require('../components/commands/command-router'));



module.exports=router;