import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import config from '../config.js';
import Project from '../models/projects.model.js';
import User from '../models/users.model.js';
import Inscription from '../models/inscriptions.model.js';

export const AllInscriptions = async (req, res) => {
    try {
        const inscriptions = await Inscription.find();
        res.json(inscriptions);
    } catch (error) { res.status(404).json(error); }
};

export const CreateInscription = async (req, res) => {
    try {
        const { Income_Date, Outcome_Date } = req.body;
        const bearerHeader = req.headers['authorization'];
        if (bearerHeader) {
            const bearer = bearerHeader.split(" ");
            console.log(bearer);
            const token = bearer[1];

            const decoded = await jwt.verify(token, config.secret);
            const id = decoded.id;
            const user = await User.findById(id);
            const Student = user.Name;
            const project = await Project.findById(req.params.id);
            const Leader = project.Leader;
            const Name_project = project.Name;
            const Initial_Date = project.Initial_Date;
            const End_Date = project.End_Date;
            const inscription = new Inscription({ Name_project, Initial_date, End_Date, Leader, Student, Income_Date, Outcome_Date });
            await inscription.save();
            res.status(201).json('Project created successfully');
        } else { res.status(400).json('There is no data'); }
    } catch (error) { res.status(404).json(error); }
};



