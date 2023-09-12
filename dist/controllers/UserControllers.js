"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserModels_1 = __importDefault(require("../models/UserModels"));
const createUser = (req, res, next) => {
    const { first_name } = req.body;
    const { last_name } = req.body;
    const { profile } = req.body;
    const { Date } = req.body;
    const { image } = req.body;
    const user = new UserModels_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        first_name,
        last_name,
        profile,
        Date,
        image
    });
    return user
        .save()
        .then((user) => res.status(201).json({ user }))
        .catch((error) => res.status(500).json({ error }));
};
const readUser = (req, res, next) => {
    const userID = req.params.userID;
    return UserModels_1.default.findById(userID)
        .then(user => user ? res.status(200).json({ user }) : res.status(404).json({
        message: 'not found'
    }))
        .catch((error) => res.status(500).json({ error }));
};
const readAllUser = (req, res, next) => {
    return UserModels_1.default.find()
        .then((user) => res.status(200).json({ user }))
        .catch((error) => res.status(500).json({ error }));
};
const updateUser = (req, res, next) => {
    const userID = req.params.userID;
    return UserModels_1.default.findById(userID)
        .then((user) => {
        if (user) {
            user.set(req.body);
            return user
                .save()
                .then((user) => res.status(200).json({ user }))
                .catch((error) => res.status(500).json({ error }));
        }
        else {
            res.status(404).json({ message: 'not found' });
        }
    })
        .catch((error) => res.status(500).json({ error }));
};
const deleteUser = (req, res, next) => {
    const userID = req.params.userID;
    return UserModels_1.default.findByIdAndDelete(userID).then((user) => (user ? res.status(201).json({
        message: 'deleted'
    }) : res.status(404).json({ message: 'not found' })));
};
exports.default = { createUser, readAllUser, readUser, deleteUser, updateUser };
//# sourceMappingURL=UserControllers.js.map