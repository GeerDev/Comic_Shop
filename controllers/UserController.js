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
            if (/^[a-zA-Z]\w{3,14}$/i.test(password) !== true) {
                return res.send(
                  "El primer carácter de la contraseña debe ser una letra, debe contener al menos 4 caracteres y no más de 15 caracteres y no se pueden usar más  caracteres que letras, números y guiones bajos."
                );
            }
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
            if(error.errors?.length > 0){
                res.status(400).send({ msg: error?.errors?.[0]?.message })
            }
            res.status(500).send({message:"Ha habido un problema al crear el usuario"})
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
            res.status(500).send({message:"Ha habido un problema al intentar hacer el login"})
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
            res.status(500).send({ message: 'Hubo un problema al tratar de desconectarte' })
        }
    },
    getUserByIdAuth(req, res) {
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
    async update(req, res) {
        try {
            const user = await User.findByPk(req.params.id)
            if (req.body.password) {
                const { password } = req.body

                const hash = await bcrypt.hash( password, 10)
    
                user.update({...req.body, password: hash, rol: 'user'})
            }

            user.update({...req.body, rol: 'user'})

            return res.status(200).send({ message: 'Usuario actualizado con éxito', user })  
        } catch (error) {
            if(error.errors?.length > 0){
                res.status(400).send({ msg: error?.errors?.[0]?.message })
            }
            res.status(500).send({message:"Ha habido un problema al actualizar el usuario"})
        }
    },
    async delete(req, res) {
        try {
            await User.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.send(
                'El usuario ha sido eliminado con éxito'
            )
        } catch (error) {
            console.error(error)
            res.status(500).send({message:"Ha habido un problema al eliminar el usuario"})
        }
    },
    async deletemyself(req, res) {
        try {
            await User.destroy({
                where: {
                    id: req.user.id
                }
            })
            res.send(
                'El usuario ha sido eliminado con éxito'
            )
        } catch (error) {
            console.error(error)
            res.status(500).send({message:"Ha habido un problema al eliminar el usuario"})
        }
    },
}

module.exports = UserController