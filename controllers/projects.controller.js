import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import config from '../config.js';
import Project from '../models/projects.model.js';
import User from '../models/users.model.js';

export const AllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) { res.status(404).json(error); }
};

export const CreateProject = async (req, res) => {
    try {
        const { Name, Budget, Initial_Date, End_Date } = req.body;
        const bearerHeader = req.headers['authorization'];
        if (bearerHeader) {
            const bearer = bearerHeader.split(" ");
            console.log(bearer);
            const token = bearer[1];

            const decoded = await jwt.verify(token, config.secret);
            const id = decoded.id;
            const user = await User.findById(id);
            const Leader = user.Name;

            const project = new Project({ Name, Budget, Initial_Date, End_Date, Leader });
            await project.save();
            res.status(201).json('Project created successfully');
        } else { res.status(400).json('There is no data'); }
    } catch (error) { res.status(404).json(error); }
};

export const Objectives = async (req, res) =>
{
    try {
        const {Description, Type} = req.body;

        if(Description && Type)
        {
            const Add = await Project.findById(req.params.id);
            Add.Objectives.push({...req.body});
            await Add.save();
            res.status(201).json({msg: 'Objective created successfully'});
        } else { res.status(400).json('There is no data'); }
    } catch (error) { res.status(404).json(error); }
};

export const UpdateState = async (req, res) => {
    try {
        const { id } = req.params.id;
        const { State } = req.body;
        const project = await Project.findById(id);
        if (project) {
            const updates = { ...req.body };
            const options = { new: true };
            await Producto.findByIdAndUpdate(id, updates, options);
            res.status(200).json({ msg: 'State of the project updated successfully' });
        } else { res.status(400).json({err: 'There is no data'}); }
    } catch (error) { res.status(404).json(error); }
};

export const UpdatePhase = async (req, res) => {
    try {
        const { id } = req.params.id;
        const { Phase } = req.body;
        const project = await Project.findById(id);
        if (project) {
            const updates = { ...req.body };
            const options = { new: true };
            await Producto.findByIdAndUpdate(id, updates, options);
            res.status(200).json({ msg: 'Phase updated successfully' });
        } else { res.status(400).json({err: 'There is no data'}); }
    } catch (error) { res.status(404).json(error); }
};


