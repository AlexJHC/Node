import express, { type Request, type Response } from 'express'
import router from './router'
import morgan from 'morgan'
import { protect } from './modules/auth'
import { createNewUser, signIn } from './handlers/users'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.status(200)
  res.json({ message: 'hello' })
})

app.use('/api', protect, router)

app.use('/user', createNewUser)

app.use('/signIn', signIn)

export default app
