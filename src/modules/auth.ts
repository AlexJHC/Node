import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

export const comparePasswords = (password: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(password, hash)
}

export const hashPasswords = (password:string) => {
  return bcrypt.hash(password, 6)
}

export const createJWT = (user) => {
  return jwt.sign({id: user.id, username: user.username}, process.env.JWT_SECRET)
}

export const protect = (req, res, next) => {
  const bearer = req.headers.authorization

  if (!bearer) {
    res.status(401)
    res.json({message: 'Not authorized'})
  }

  const [, token] = bearer.split(' ')

  if (!token) {
    res.status(401)
    res.json({message: 'Token not found'})
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET)
    next()
  } catch (err) {
    res.status(401)
    res.json({message: 'Not valid token'})
    return
  }
}