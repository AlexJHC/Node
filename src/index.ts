import * as dotenv from 'dotenv'

dotenv.config()

import app from './server'

const port = 3001
app.listen(port, () => {
  console.log(`server at: http:://localhost:${port}`)
})
