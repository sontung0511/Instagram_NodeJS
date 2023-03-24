import { NextFunction, Response, Request } from "express";
import mongoose from "mongoose";
import UserModels from "../models/UserModels";
const createUser = (req: Request, res: Response, next: NextFunction ) =>{
    const {first_name} = req.body;
    const {last_name} = req.body;  
    const {profile} = req.body;
    const {Date} = req.body;
    const {image} = req.body;
    const user = new UserModels({
        _id: new mongoose.Types.ObjectId(),
        first_name,
        last_name,
        profile,
        Date,
        image

    });
    return user
    .save()
    .then((user) => res.status(201).json({user}))
    .catch((error) => res.status(500).json({error}));

};
const readUser = (req: Request, res: Response, next: NextFunction ) =>{
    const userID = req.params.userID;
    return UserModels.findById(userID)
    .then(user => user ? res.status(200).json({user}): res.status(404).json({
        message : 'not found' }))
        .catch((error) => res.status(500).json({error}))  
    
};
const readAllUser = (req: Request, res: Response, next: NextFunction ) =>{
    return UserModels.find()
    .then((user) =>res.status(200).json({user}))
    .catch((error) => res.status(500).json({error}))  ;
}
const updateUser = (req: Request, res: Response, next: NextFunction ) =>{
    const userID = req.params.userID;

    return UserModels.findById(userID)
    .then((user) => {
        if(user){
            user.set(req.body)
            return user
            .save()
            .then((user) =>res.status(200).json({user}))
            .catch((error) => res.status(500).json({error}))  ;
        }
        else {
             res.status(404).json({message : 'not found' })
        }
    })
    .catch((error) => res.status(500).json({error}));
};
const deleteUser = (req: Request, res: Response, next: NextFunction ) =>{
    const userID = req.params.userID;
    return UserModels.findByIdAndDelete(userID).then((user) => (user ? res.status(201).json({
        message:'deleted'}):res.status(404).json({message: 'not found'})));
};
export default {createUser , readAllUser, readUser,deleteUser,updateUser};