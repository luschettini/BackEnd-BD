const userModel = require("../models/userModel");

const getAllUsers = async (req, res) => {
    try {
    const users = await userModel.getUsers();
    res.status(200).json(users);
} catch (error) {
    res.status(404).json({ mensagem: "Erro ao buscar usuários" });
    }
};

const getUser = async (req, res) => {
    try {
    const user = await userModel.getUserById(req.params.id);
    if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado." });
    }	
} catch (error) {
    res.status(500).json({ message: "Erro ao buscar usuário." 
    });
    }
};


const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const newUser = await userModel.createUser(name, email);
        res.status(201).json(newUser);
    } catch (error) {
	 console.log(error);
        if (error.code === "23505") { 
            return res.status(400).json({ message: "E-mail já cadastrado." });
        }
        res.status(500).json({ message: "Erro ao criar usuário." });
    }
};

module.exports = { getAllUsers, getUser, createUser };