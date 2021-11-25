export async function Check(req, res, next)
{

  const bearerHeader = req.headers['authorization'];
  const bearer = bearerHeader.split(" ");
  const token = bearer[1];

  if (!token) {
    return res
      .status(401)
      .send({ auth: false, msg: "You need the token to go on" });
  }
  else { next() }
}