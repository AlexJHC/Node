import prisma from '../../prisma/db';
import {Request, Response} from 'express';
import {hashPasswords} from '../modules/auth';

export const createNewUser = async (req: Request<{ body: { username: string, password: string } }>, res: Response) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: await hashPasswords(req.body.password)
    }
  })
}