import dotenv from 'dotenv'
dotenv.config()

import express, { Request, Response } from 'express'

const app = express()

const router = express.Router()

router.get('/', (req: Request, res:Response) => {res.json({ hello: 'Hello, world!' })})

app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Started!')
})