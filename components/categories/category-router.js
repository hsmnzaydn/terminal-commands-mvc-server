const router = require('express').Router();
      categoryController=require('./category-controller');
      upload=require('../../app')  

router.get('/',categoryController.getCategories);
router.get('/add',categoryController.addCategory);
router.post('/add',categoryController.addCategory);

router.get('/:categoryId/commands',categoryController.getCommands)
router.get('/:categoryId/commands/add',categoryController.addCommands)
router.post('/:categoryId/commands/add',categoryController.addCommands)
router.post('/:categoryId/upload',upload.upload.single('photo'),categoryController.uploadFile)



module.exports=router