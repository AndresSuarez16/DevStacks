import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import config from '../config.js';
import User from '../models/users.model.js';

export const AllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) { res.status(404).json(error); }
};

export const CreateUser = async (req, res) => {
    try {
        const { nombre, apellido, correo, identificacion, contraseña, rol } = req.body;
        if (nombre && apellido && correo && identificacion  && contraseña && rol) {
            const UsuarioRepetido = await User.findOne({ correo });
            if (UsuarioRepetido) {
                res.status(400).json('The email is already registered');
            } else {
                const user = new User({
                    nombre,
                    apellido,
                    correo,
                    identificacion,
                    contraseña: bcrypt.hashSync(contraseña, 10),
                    rol
                });
                await user.save();
                res.status(201).json('User created successfully');
            }
        } else { res.status(400).json('There is no data'); }
    } catch (error) { res.status(404).json(error); }
};

export const Login = async (req, res) => {
    try {
        const { correo, contraseña } = req.body;
        if (correo && contraseña) {
            const user = await User.findOne({ correo: req.body.correo });
            const contraseña = bcrypt.compare(req.body.contraseña, user.contraseña);
            if (!user && !contraseña) {
                return res.status(401).send({ auth: false, token: null });
            } else {
                const token = jwt.sign({ id: user._id }, config.secret, {
                    expiresIn: 60 * 60 * 24,
                });
                res.status(200).json({ auth: true, token });
            }
        }
        else { res.status(400).json({msg: 'There is no data'}); }
    } catch (error) { res.status(404).json(error); }
};

export const UpdateUsers = async (req, res) => {
    try {
        const { nombre, apellido, correo, identificacion, contraseña, rol } = req.body;
        const bearerHeader = req.headers['authorization'];
        if (nombre && apellido && correo && identificacion  && contraseña && rol && bearerHeader) {
            const bearer = bearerHeader.split(" ");
            console.log(bearer);
            const token = bearer[1];

            const decoded = await jwt.verify(token, config.secret);
            const id = decoded.id;
            const user = await User.findById(id);
            console.log(user);
            if(user.rol === 'ESTUDIANTE' || user.rol === 'LIDER') {
                const updates = { ...req.body };
                const options = { new: true };
                await Producto.findByIdAndUpdate(id, updates, options);
                res.status(200).json({ msg: 'User updated successfully' });
            }
        } else { res.status(400).json({msg: 'There is no data'}); }
    } catch (error) { res.status(404).json(error); }
};

export const UpdateState = async (req, res) => {
    try {
        const { estado } = req.body;
        if (bearerHeader) {
            const bearer = bearerHeader.split(" ");
            console.log(bearer);
            const token = bearer[1];

            const decoded = await jwt.verify(token, config.secret);
            const id = decoded.id;
            const user = await User.findById(id);
            const updates = { estado };
            const options = { new: true };
            await Producto.findByIdAndUpdate(id, updates, options);
            res.status(200).json({ msg: 'User updated successfully' });
        } else { res.status(400).json({msg: 'There is no data'}); }
    } catch (error) { res.status(404).json(error); }
};

export const DeleteUsers = async (req, res) => {
    try {
        const { id } = req.params;
        if(id) {
            await User.findByIdAndDelete(id);
            res.status(200).json({msg: 'The user was deleted successfully'});
        } else { res.status(400).json({msg: 'There is no data'}); }
    } catch (error) { res.status(404).json(error); }
};