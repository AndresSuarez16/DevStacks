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
        const { Name, Lastname, Email, Identification, Password, Role } = req.body;
        if (Name && Lastname && Email && Identification  && Password && Role) {
            const UsuarioRepetido = await User.findOne({ Email });
            if (UsuarioRepetido) {
                res.status(400).json('The email is already registered');
            } else {
                const user = new User({
                    Name,
                    Lastname,
                    Email,
                    Identification,
                    Password: bcrypt.hashSync(contraseña, 10),
                    Role
                });
                await user.save();
                res.status(201).json('User created successfully');
            }
        } else { res.status(400).json('There is no data'); }
    } catch (error) { res.status(404).json(error); }
};

export const Login = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        if (Email && Password) {
            const user = await User.findOne({ Email: req.body.Email });
            const Password = bcrypt.compare(req.body.Password, user.Password);
            if (!user && !Password) {
                return res.status(401).send({ auth: false, token: null });
            } else {
                const token = jwt.sign({ id: user._id }, config.secret, {
                    expiresIn: 60 * 60 * 24,
                });
                res.status(200).json({ auth: true, token });
            }
        }
        else { res.status(400).json({err: 'There is no data'}); }
    } catch (error) { res.status(404).json(error); }
};

export const UpdateUsers = async (req, res) => {
    try {
        const id = req.params.id;
        const { Name, Lastname, Email, Identification, Password, Role } = req.body;
        if (Name && Lastname && Email && Identification  && Password && Role) {
            const updates = { ...req.body };
            const options = { new: true };
            await User.findByIdAndUpdate(id, updates, options);
            res.status(200).json({ msg: 'User updated successfully' });
        } else { res.status(400).json({err: 'There is no data'}); }
    } catch (error) { res.status(404).json(error); }
};

export const UpdateState = async (req, res) => {
    try {
        const { id } = req.params.id;
        const { State } = req.body;
        if (State) {
            const updates = { ...req.body };
            const options = { new: true };
            await Producto.findByIdAndUpdate(id, updates, options);
            res.status(200).json({ msg: 'State of the user updated successfully' });
        } else { res.status(400).json({err: 'There is no data'}); }
    } catch (error) { res.status(404).json(error); }
};

export const DeleteUsers = async (req, res) => {
    try {
        const { id } = req.params;
        if(id) {
            await User.findByIdAndDelete(id);
            res.status(200).json({msg: 'The user was deleted successfully'});
        } else { res.status(400).json({err: 'There is no data'}); }
    } catch (error) { res.status(404).json(error); }
};