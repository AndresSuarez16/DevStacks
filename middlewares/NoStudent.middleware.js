export async function NoStudent(req, res, next)
{
  const bearerHeader = req.headers['authorization'];
  const bearer = bearerHeader.split(" ");
  const token = bearer[1];

  const decoded = await jwt.verify(token, config.secret);
  const UserRole = await User.findById(decoded.id);
  if (UserRole.rol != 'STUDENT') {
    next();
  }
  else {
    return res
      .status(401)
      .send({ auth: false, msg: "Unauthorized" });
  }
};
