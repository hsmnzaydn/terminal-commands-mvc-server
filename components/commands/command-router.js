const router = require('express').Router()
      commandController=require('./command-controller')  


    router.get('/:commandId/delete',commandController.deleteCommands)
    router.get('/:commandId/edit',commandController.editCommands)
    router.post('/:commandId/edit',commandController.editCommands)



module.exports = router
