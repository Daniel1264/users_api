const express = require('express')
const port = 9000
const app = express()
const userRouter = require('./users/users.router')
const db = require('./utils/database')

db.authenticate()
.then(() => console.log('OK'))
.catch((err) => console.log(err))

db.sync()
.then(() => console.log('database synced'))
.catch((err) => console.log(err))

app.use(express.json())

app.use('/api/v1/users', userRouter)

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok!'})
}) 

app.listen(port, () => {
    console.log(`server stared ${port}`);
})
