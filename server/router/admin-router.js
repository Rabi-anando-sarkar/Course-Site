const express = require('express');
const {getAllUsers ,getAllContacts, deleteUserById, getUserById, updateUserById} = require('../controllers/admin-controller');
const authMiddleware = require('../middleware/auth-middleware');

const router = express.Router();

router.route('/users').get(authMiddleware, getAllUsers);
router.route('/contacts').get(authMiddleware, getAllContacts);
router.route('/users/delete/:id').delete(authMiddleware, deleteUserById);
router.route('/users/:id').get(authMiddleware, getUserById);
router.route('/users/update/:id').patch(authMiddleware, updateUserById);


module.exports = router;