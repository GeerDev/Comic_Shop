const { User, Token, Sequelize, Order, Comic } = require('../models/index.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Op } = Sequelize;

const UserController = {
    async register(req, res) {
        try {
            if(!req.body.name || !req.body.email || !req.body.password){
                return res.status(400).json({msg:'Por favor rellene los campos que faltan'})
            }
            const { password } = req.body
            const user = await User.findOne({
                where:{
                    email:req.body.email
                }
            })
            if (user) {
                return res.status(400).send({ message: 'Este correo ya existe' });
            }
            const hash = await bcrypt.hash( password, 10)
            const newUser = await User.create({...req.body, password: hash, rol: 'user'})
            res.status(201).send({ newUser })
        } catch (error) {
            console.error(error);
            res.status(500).send({ error, message: 'Hubo un problema al tratar de registar' })
        }
    },
    async login(req, res) {
        try {
            const user = await User.findOne({
                where:{
                    email:req.body.email
                }
            })
            if (!user) {
                return res.status(400).send({ message: 'Contraseña o nombre incorrectos' });
            }
            const isMatch = await bcrypt.compare(req.body.password, user.password)

            if (!isMatch) {
                return res.status(400).send({ message: 'Contraseña o nombre incorrectos' });
            }

            token = jwt.sign({ id: user.id }, process.env.Jwt_Secret);
            Token.create({ token, UserId: user.id });

            res.send({ message: 'Bienvenid@ ' + user.name, token });

        } catch (error) {
            console.error(error);
        }
    },
    async logout(req, res) {
        try {
            await Token.destroy({
                where: {
                    [Op.and]: [
                        { UserId: req.user.id },
                        { token: req.headers.authorization }
                    ]
                }
            });
            res.send({ message: 'Desconectado con éxito' })
        } catch (error) {
            console.log(error)
            res.status(500).send({ message: 'hubo un problema al tratar de desconectarte' })
        }
    },
    getUserById(req, res) {
        User.findByPk(req.user.id, {
            include: [
            {model: Order, include: [{model: Comic, as: 'comics', through: {attributes: []}}]} 
        ]
        })
            .then(user => res.send(user))
            .catch(err => {
                console.error(err)
                res.status(500).send({ message :'No se ha podido cargar el usuario'})
            })
    },
}

module.exports = UserController