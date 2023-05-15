const userController = require('../../controllers/thoughtcontroller');

const router = require('express').Router()

// every route starts with '/api/thoughts'


// GET ALL THOUGHTS
router.route('/', thoughtController.getAll);


// GET SINGLE THOUGHTS
router.get('/:id', (req, res) => {
    console.log("ID: ", req.params.id);
})


// CREATE NEW THOUGHT
router.create('/:id', (req, res) => {
    console.log("ID: ", req.params.id);
})

// EDIT EXISTING THOUGHT
router.edit('/:id', (req, res) => {
    console.log("ID: ", req.params.id);
})
// DELETE THOUGHT
router.delete('/:id', (req, res) => {
    console.log("ID: ", req.params.id);
})
module.exports = router;