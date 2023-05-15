const userController = require('../../controllers/usercontroller');

const router = require('express').Router()

// every route starts with '/api/users'


// GET ALL USERS
router.route('/', userController.getAll);


// GET SINGLE USERS by ID
router.get('/:id', (req, res) => {
    console.log("ID: ", req.params.id);
})


// CREATE NEW USER
router.create('/:id', (req, res) => {
    console.log("ID: ", req.params.id);
})

// EDIT EXISTING USER by ID
router.edit('/:id', (req, res) => {
    console.log("ID: ", req.params.id);
})
// DELETE USER by ID
router.delete('/:id', (req, res) => {
    console.log("ID: ", req.params.id);
})
module.exports = router;