import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { Candidate } from './models/candidate'
import { router } from './routes'

const app = express()

app.use(express.json())

app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Started!')
})  