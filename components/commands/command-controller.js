const commandSchema = require('./model/command-model')

module.exports = {
    deleteCommands,
    editCommands,
    getCommandsForApi
}


async function deleteCommands(req, res, next) {
    commandSchema.findOne({
        _id: req.params.commandId
    }).then(command => {
        command.remove()
        res.redirect('/admin')
    }).catch(next)
}


async function editCommands(req, res, next) {
    var commandId = req.params.commandId
    if (req.method == 'GET') {
        commandSchema.findOne({
            _id: commandId
        }).then(command => {
            res.render('editCommand', {
                command: command
            })
        }).catch(next)

    } else if (req.method == 'POST') {
        commandSchema.findOne({
            _id: commandId
        }).then(command => {
            command.title = req.body.commandTitle
            command.description = req.body.commandDescription
            command.save()
            res.redirect('/admin')
        }).catch(next)
    }
}

async function getCommandsForApi(req, res, next) {
    var language = res.language
    var containCommand = req.query.commandTitle
    commandSchema.find({
        language: language._id,
        "title": {
            "$regex": containCommand
        }
    },['title','description']).then(commands => {
            res.status(200).send(commands)
    }).catch(next)






}