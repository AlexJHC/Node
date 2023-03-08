import jwt from 'jsonwebtoken'
import {Request, Response} from 'express';

export const createJWT = (user) => {
  return jwt.sign({id: user.id, username: user.username}, process.env.JWT_SECRET)
}

export const protect = (req:Request, res:Response) => {
  const bearer = req.headers.authorization

  if (!bearer) {
    res.status(401)
    res.json({message:'Not authorized'})
  }

}