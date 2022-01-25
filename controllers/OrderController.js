const { Comic, Order } = require('../models/index.js');

const OrderController = {
    async create(req, res) {
        try {
            if(!req.body.details || !req.body.status || !req.body.delivery || !req.body.comics){
                return res.status(400).json({msg:'Por favor rellene los campos que faltan'})
            }
            const { comics, ...data} = req.body
            const post = await Order.create({data, UserId: req.user.id });

            if (comics && comics.length > 0) {
                    post.setComics(comics)
                }

            return res.status(200).send({ message: 'Pedido creado con éxito', post })    
        } catch (error) {
            console.error(error)
            res.status(500).send({message:"Ha habido un problema al crear el pedido"})
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
    }
}

module.exports = OrderController