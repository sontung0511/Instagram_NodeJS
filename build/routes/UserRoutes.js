"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const UserControllers_1 = __importDefault(require("../controllers/UserControllers"));
const router = express_1.default.Router();
router.post('/create', UserControllers_1.default.createUser);
router.get('/get/:userID', UserControllers_1.default.readUser);
router.get('/get/', UserControllers_1.default.updateUser);
router.patch('/update/:userID', UserControllers_1.default.updateUser);
router.delete('/delete/:userID', UserControllers_1.default.deleteUser);
module.exports = router;
