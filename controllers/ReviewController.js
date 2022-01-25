const { Review, Comic, User } = require('../models/index.js');

const ReviewController = {
    async create(req, res) {
        try {
            if(!req.body.title || !req.body.content || !req.body.ComicId){
                return res.status(400).json({msg:'Por favor rellene los campos que faltan'})
            }
            const review = await Review.create({...req.body, UserId: req.user.id });

            return res.status(200).send({ message: 'Review creada con éxito', review })    
        } catch (error) {
            console.error(error)
            res.status(500).send({message:"Ha habido un problema al crear la review"})
        }
    },
    getAll(req,res){
        Review.findAll({
            include: [User, Comic]
        })
        .then(reviews => res.send(reviews))
        .catch(err => {
            console.log(err)
            res.status(500).send({ message: 'Ha habido un problema al cargar las reviews' })
        })
    },
    async update(req, res) {
        try {
            const put = await Review.findByPk(req.params.id)
            put.update({...req.body, UserId: req.user.id })

            return res.status(200).send({ message: 'Categoria actualizada con éxito', put })  
        } catch (error) {
            console.error(error)
            res.status(500).send({message:"No ha sido posible actualizar la categoría"})
        }
    },
    async delete(req, res) {
        try {
            await Review.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.send(
                'La review ha sido eliminada con éxito'
            )
        } catch (error) {
            console.error(error)
            res.status(500).send({message:"Ha habido un problema al eliminar la review"})
        }
    }
}

module.exports = ReviewController