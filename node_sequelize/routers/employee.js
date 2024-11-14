const Employee = require('../models/employee');
const router = require('express').Router();

router.post('/add_employee', async (req, res) => {
    const { name, salary } = req.body;
    const data = await Employee.create({ name: name, salary: salary });
    return res.json(data);
});

router.get('/get_employees', async (req, res) => {
    try {
        const data = await Employee.findAll();
        return res.json(data);
    } catch (errors) {
        return res.json(errors);
    }
})

//Task to get employees based on their id using findAll and where clause
// do the same thing using 
router.get('/get_employees/:id', async (req, res) => {
    const employee_id = req.params.id;
    await Employee.findAll({
        where : {
            id: employee_id
        }
    }).then((data) => {
        if(data.length > 0){
            return res.json(data);
        } else {
            return res.json('No Employee found!');
        }
    }).catch((errors) => {
        return res.json(errors);
    });
})

router.patch('/update_employee/:id', async (req, res) => {
    const employee_id = req.params.id;
    console.log(req.body);

    try {
        const employee = await Employee.findByPk(employee_id);
        if(employee) {
            for(let i in req.body){
                employee[i] = req.body[i]
            }
            employee.save();
        }
        res.json(employee);
    } catch(errors){
        console.log(errors);
        res.json(errors);
    }
    
})

router.delete('/delete_employee/:id', async (req, res) => {
    const employee_id = req.params.id;

    try {
        const data  = await Employee.destroy({
            where : {
                id: employee_id
            }
        });
        if(data == 1){
            return res.json('Employee deleted successfully')
        } else {
            return res.json('Employee not found!')
        }
    } catch (errors){
        console.log(errors)
        return res.json(errors);
    }

})

module.exports = router;