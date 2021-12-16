const errorHandlerMiddleware = async (err, req, res, next) => {
    return res.status(500).json({ msg: 'Something went wrong' , detail: err })
}

module.exports = errorHandlerMiddleware

