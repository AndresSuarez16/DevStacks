import User from '../models/users.model.js';
import jwt from 'jsonwebtoken';
import config from '../config.js';

export async function NoStudent (req, res, next)
{
  const bearerHeader = req.headers['authorization'];
  const bearer = bearerHeader.split(" ");
  const token = bearer[1];

  const decoded = await jwt.verify(token, config.secret);
  const UserRole = await User.findById(decoded.id);
  if (UserRole.Role != 'STUDENT') {
    next();
  }
  else {
    return res
      .status(401)
      .send({ auth: false, msg: "Unauthorized" });
  }
};
