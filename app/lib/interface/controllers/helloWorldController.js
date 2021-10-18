const {HelloWorldUseCase} = require('../../application/use_cases/helloWorld')

const HelloWorldController = async(req, res) => {
    try {
    const usuarios = HelloWorldUseCase();
    res.status(200).send(usuarios)
    } catch (error) {
    res.status(404).send(error)
    }
}

module.exports = {
    HelloWorldController
}