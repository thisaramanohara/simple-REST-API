const express = require('express')

const app = express()

app.use(express.json())

let users = []

app.post('/api/v1/users', (req, res)=>{
    const { firstName, lastName } = req.body

    if(!firstName || !lastName){
        return res.status(401).json({error:'Validation error'})
    }

    const newUser = {id:users.length+1, firstName, lastName}
    console.log(newUser);
    users.push(newUser)
    res.status(200).json(newUser)
})

const PORT = process.env.PORT || 5001

app.listen(PORT, console.log(`Server started on ${PORT}`))