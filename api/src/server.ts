import express from 'express'
import { env } from 'process'
import { router } from './routes'

const app = express()

app.listen(env.SERVER_PORT, () => {
    console.log(`Server running in port ${env.SERVER_PORT}`)
})
app.use(express.json())
app.use(router)
