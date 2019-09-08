const authentication = {}

authentication.signup = (req, res) => {
    res.json(req.body)
}

export default authentication;