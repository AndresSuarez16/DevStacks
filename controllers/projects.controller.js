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
        const { nombre, presupuesto, fechaInicio, fechaFin } = req.body;
        const bearerHeader = req.headers['authorization'];
        if (bearerHeader) {
            const bearer = bearerHeader.split(" ");
            console.log(bearer);
            const token = bearer[1];

            const decoded = await jwt.verify(token, config.secret);
            const id = decoded.id;
            const user = await User.findById(id);
            const lider = user.nombre;

            const project = new Project({ nombre, presupuesto, fechaInicio, fechaFin, lider });
            await project.save();
            res.status(201).json('Project created successfully');
        } else { res.status(400).json('There is no data'); }
    } catch (error) { res.status(404).json(error); }
};

export const Objectives = async (req, res) =>
{
    try {
        const {descripcion, tipo} = req.body;

        if(descripcion && tipo)
        {
            const Add = await Project.findById(req.params.id);
            Add.objetivos.push({...req.body});
            await Add.save();
            res.status(201).json({msg: 'Objective created successfully'});
        } else { res.status(400).json('There is no data'); }
    } catch (error) { res.status(404).json(error); }
};


