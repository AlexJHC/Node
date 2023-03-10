import prisma from '../../prisma/db'
import { type Request, type Response } from 'express'
import { comparePasswords, createJWT, hashPasswords } from '../modules/auth'

export const createNewUser = async (
  req: Request<{ body: { username: string; password: string } }>,
  res: Response
) => {
  console.log(1)
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: await hashPasswords(req.body.password),
    },
  })

  const token = createJWT(user)
  res.json({ token })
}

export const signIn = async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  })
  const isValid = await comparePasswords(req.body.password, user.password)

  if (!isValid) {
    res.status(401)
    res.json({ message: 'Not valid password' })
    return
  }

  const token = createJWT(user)
  res.json({ token })
}
