const User = require("../models/user-model");
const Contact = require("../models/contact-model");


//get all users logic
const getAllUsers = async (req,res) => {
    try {
        const users = await User.find({},{password:0});
        if(!users || users.length === 0) {
            return res.status(404).json({ message: "No users Found"});
        }

        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

//get all contacts logic
const getAllContacts = async (req,res) => {
    try {
        const contacts = await Contact.find();
        if(!contacts || contacts.length === 0) {
            return res.status(404).json({ message: "No contacts Found"});
        }
        res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
}

//delete user in admin
const deleteUserById = async(req,res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({_id : id});
        return res.status(200).json({ message : "succesfully deleted"}); 
    } catch (error) {
        next(error);
    }
}

//update single user in admin
const getUserById = async(req,res) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({_id : id},{password:0});
        return res.status(200).json(data); 
    } catch (error) {
        next(error);
    }
}

const updateUserById = async (req,res) => {
    try {
       const id = req.params.id;
       const updatedUserData = req.body;

       const updatedData= await User.updateOne(
        {_id:id},{
        $set : updatedUserData,
       });
       return res.status(200).json(updatedData);
    } catch (error) {
        next(error);
    }
}

module.exports = { getAllUsers, getAllContacts ,deleteUserById,getUserById,updateUserById};