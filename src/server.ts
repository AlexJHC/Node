import express, {type Request, type Response} from 'express'
import router from './router';
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))

app.get('/', (req: Request, res: Response) => {
  res.status(200)
  res.json({message: 'hello'})
})

app.use('/api', router)

export default app
