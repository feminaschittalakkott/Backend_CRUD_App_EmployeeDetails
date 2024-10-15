const express = require('express')
const empController = require('../Controllers/employeeController')

const routes = express.Router()

routes.post('/addemp', empController.addEmployee)
routes.get('/employees', empController.getEmployee)
routes.delete('/delemp/:id', empController.deleteEmployee)
routes.put('/updateemp/:id', empController.updateEmployee)

module.exports = routes