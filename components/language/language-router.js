const router = require('express').Router()
      languageController=require('./language-controller');

router.get('/',languageController.getLanguages)
router.get('/add',languageController.addLanguages)
router.post('/add',languageController.addLanguages)


module.exports = router