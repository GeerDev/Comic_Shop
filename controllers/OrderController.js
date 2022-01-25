const { Comic, Order } = require('../models/index.js');

const OrderController = {
    async create(req, res) {
        try {
            if(!req.body.details || !req.body.status || !req.body.delivery || !req.body.comics){
                return res.status(400).json({msg:'Por favor rellene los campos que faltan'})
            }
            const { comics, ...data} = req.body
            const post = await Order.create({...data, UserId: req.user.id });

            if (comics && comics.length > 0) {
                    post.setComics(comics)
                }

            return res.status(200).send({ message: 'Pedido creado con éxito', post })    
        } catch (error) {
            console.error(error)
            res.status(400).send({ msg: error.errors[0].message })
        }
    },
    getAll(req,res){
        Order.findAll({
            include: [{model: Comic, as: 'comics', through: {attributes: []}}]
        })
        .then(orders => res.send(orders))
        .catch(err => {
            console.log(err)
            res.status(500).send({ message: 'Ha habido un problema al cargar los pedidos' })
        })
    },
    async update(req, res) {
        try {
            const { comics, ...data} = req.body 
            const put = await Order.findByPk(req.params.id)
            put.update({...data, UserId: req.user.id })

            if (comics && comics.length > 0) {
                put.setComics(comics)
            }

            return res.status(200).send({ message: 'Pedido actualizado con éxito', put })  
        } catch (error) {
            console.error(error)
            res.status(500).send({message:"No ha sido posible actualizar el pedido"})
        }
    },
    async delete(req, res) {
        try {
            await Order.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.send(
                'El pedido ha sido eliminado con éxito'
            )
        } catch (error) {
            console.error(error)
            res.status(500).send({message:"Ha habido un problema al eliminar el pedido"})
        }
    }
}

module.exports = OrderController