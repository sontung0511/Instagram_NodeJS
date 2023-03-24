
import express from 'express'
import controller from '../controllers/UserControllers'
const router = express.Router()

router.post('/create', controller.createUser);
router.get('/get/:userID', controller.readUser);
router.get('/get/',controller.updateUser);
router.patch('/update/:userID',controller.updateUser);
router.delete('/delete/:userID', controller.deleteUser);

export = router;