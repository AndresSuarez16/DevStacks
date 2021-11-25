import User from '../models/users.model.js';
import jwt from 'jsonwebtoken';
import config from '../config.js';

export const Admin = async (req, res, next) =>
{
    const bearerHeader = req.headers['authorization'];
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];

    //Decodificar el token
    const decoded = await jwt.verify(token, config.secret);
    const UsuarioAdministrador = await User.findById(decoded.id);
    if(UsuarioAdministrador.rol === 'ADMINISTRADOR')
    {
        next();
    }
    else {
        return res
        .status(401)
        .send({ auth: false, msg: "No eres administrador" });
    }
};