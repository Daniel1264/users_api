const userServices = require('./users.services')
const router = require('express').Router()

router.get('/', userServices.getAllUsers)
router.post('/', userServices.postUser)
router.delete('/:id', userServices.deleteUser)
router.get('/:id', userServices.getUserById)
router.put('/:id', userServices.patchUser)

module.exports = router;