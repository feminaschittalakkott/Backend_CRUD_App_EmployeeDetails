const empModel = require('../Models/employeeModel')

exports.addEmployee = async (req, res) => {
    try {
        const { firstname, lastname, age, qual, email } = req.body;
        const newEmployee = new empModel({
            firstname, lastname, age, qual, email
        })
        await newEmployee.save()
        res.status(200).json(newEmployee)
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

exports.getEmployee = async (req, res) => {
    try {
        const emp = await empModel.find()
        res.status(200).json(emp)
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

exports.deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params
        const emp = await empModel.findOneAndDelete({ _id: id })
        res.status(200).json(emp)
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}

exports.updateEmployee = async (req, res) => {
    try {
        const { id } = req.params
        const { firstname, lastname, age, qual, email } = req.body
        const existing = await empModel.findById({ _id: id })
        existing.firstname = firstname
        existing.lastname = lastname
        existing.age = age
        existing.qual = qual
        existing.email = email
        await existing.save()
        res.status(200).json(existing)
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
}