const jwt = require('jsonwebtoken')
const { BadRequestError } = require('../errors')

const login = async (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        throw new BadRequestError('Please provide email and password')
    }

    const id = Math.random()

    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' })
    res.status(200).json({ msg: 'user created', token: token })
}

const dashboard = async (req, res) => {
    // const authHeader = req.headers.authorization

    // if (!authHeader || !authHeader.startsWith('Bearer')) {
    //     throw new BadRequestError('No token provided')
    // }

    // const token = authHeader.split(' ')[1]

    // try {
    //     const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const luckyNubmer = Math.floor(Math.random() * 100)
    res.status(200).json({ msg: `Hello, ${req.user.username}`, secret: `your lucky number is ${luckyNubmer}` })
    // }
    // catch (err) {
    //     throw new BadRequestError('Not authorized to access this route', 401)
    // }
}

module.exports = {
    login, dashboard
}