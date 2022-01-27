const { User, Token, Sequelize } = require('../models');
const { Op } = Sequelize;
const jwt = require('jsonwebtoken');

const authentication = async(req, res, next) => {
    try {
        const token = req.headers.authorization;
        const payload = jwt.verify(token, process.env.Jwt_Secret);
        const user = await User.findByPk(payload.id);
        const tokenFound = await Token.findOne({
            where: {
                [Op.and]: [
                    { UserId: user.id },
                    { token: token }
                ]
            }
        });
        if (!user || !tokenFound) {
            res.status(401).send({ message: 'No estas autorizado' });
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error)
        res.status(500).send({ error, message: 'Ha habido un problema con el token' })
    }
}
const isAdmin = async(req, res, next) => {
    console.log(req.user.rol);
    const admins = ['admin'];
    if (!admins.includes(req.user.rol)) {
        return res.status(403).send({
            message: 'You do not have permission'
        });
    }
    next();
}

const isEmployee = async(req, res, next) => {
    const employee = ['admin','employee'];
    if (!employee.includes(req.user.rol)) {
        return res.status(403).send({
            message: 'You do not have permission'
        });
    }
    next();
}

module.exports = { authentication, isAdmin, isEmployee }