const { Comic, Category, Sequelize } = require('../models/index.js');
const { Op }= Sequelize;

const ComicController = {
    async create(req, res) {
        try {
            if(!req.body.name || !req.body.description || !req.body.image || !req.body.price || !req.body.categories){
                return res.status(400).json({msg:'Por favor rellene los campos que faltan'})
            }
            const { categories, ...data} = req.body
            const post = await Comic.create(data);

            if (categories && categories.length > 0) {
                    post.setCategories(categories)
                }

            return res.status(200).send({ message: 'Comic creado con éxito', post })    
        } catch (error) {
            console.error(error)
            res.status(500).send({message:"Ha habido un problema al crear el comic"})
        }
    },
    getAll(req,res){
        Comic.findAll({
            include: [{model: Category, as: 'categories', through: {attributes: []}}]
        })
        .then(comics => res.send(comics))
        .catch(err => {
            console.log(err)
            res.status(500).send({ message: 'Ha habido un problema al cargar los comics' })
        })
    },
    getById(req, res) {
        Comic.findByPk(req.params.id)
            .then(comic => res.send(comic))
            .catch(err => {
                console.error(err)
                res.status(500).send({ message :'No se ha podido cargar el comic'})
            })
    },
    getOneByName(req, res) {
        Comic.findOne({
                where: {
                    name: {
                        [Op.like]: `%${req.params.name}%`
                    }
                }
            })
            .then(comic => res.send(comic))
            .catch(err => {
                console.error(err)
                res.status(500).send({ message :'No se ha podido cargar el comic'})
            })
    },
    getAllByPrice(req, res) {
        Comic.findAll({
                where: {
                    price: {
                        [Op.like]: `${req.params.price}`
                    }
                }
            })
            .then(comic => res.send(comic))
            .catch(err => {
                console.error(err)
                res.status(500).send({ message :'No se ha podido cargar el comic'})
            })
    },
    getAllOrder(req,res){
        Comic.findAll({
            include: [{model: Category, as: 'categories', through: {attributes: []}}],
            order: [
                ['price', 'DESC']
            ]
        })
        .then(comics => res.send(comics))
        .catch(err => {
            console.log(err)
            res.status(500).send({ message: 'Ha habido un problema al cargar los comics' })
        })
    },
    async update(req, res) {
        try {
            const { categories, ...data} = req.body 
            const put = await Comic.findByPk(req.params.id)
            put.update(data)

            if (categories && categories.length > 0) {
                put.setCategories(categories)
            }

            return res.status(200).send({ message: 'Comic actualizado con éxito', put })  
        } catch (error) {
            console.error(error)
            res.status(500).send({message:"No ha sido posible actualizar el comic"})
        }
    },
    async delete(req, res) {
        try {
            await Comic.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.send(
                'El comic ha sido eliminado con éxito'
            )
        } catch (error) {
            console.error(error)
            res.status(500).send({message:"Ha habido un problema al eliminar el comic"})
        }
    }
}

module.exports = ComicController