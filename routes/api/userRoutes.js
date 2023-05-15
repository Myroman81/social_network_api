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


// EDIT EXISTING USER by ID

// DELETE USER by ID

module.exports = router;