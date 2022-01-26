const { Comic, Category, Sequelize } = require('../models/index.js');
const { Op }= Sequelize;

const CategoryController = {
    async create(req, res) {
        try {
            if(!req.body.name || !req.body.description || !req.body.comics){
                return res.status(400).json({msg:'Por favor rellene los campos que faltan'})
            }
            const { comics, ...data} = req.body
            const category = await Category.create(data);

            if (comics && comics.length > 0) {
                    category.setComics(comics)
                }

            return res.status(200).send({ message: 'Categoría creada con éxito', category })    
        } catch (error) {
            console.error(error)
            res.status(500).send({message:"Ha habido un problema al crear la categoría"})
        }
    },
    getAll(req,res){
        Category.findAll({
            include: [{model: Comic, as: 'comics', through: {attributes: []}}]
        })
        .then(categories => res.send(categories))
        .catch(err => {
            console.log(err)
            res.status(500).send({ message: 'Ha habido un problema al cargar las categorías' })
        })
    },
    getById(req, res) {
        Category.findByPk(req.params.id)
            .then(category => res.send(category))
            .catch(err => {
                console.error(err)
                res.status(500).send({ message :'No se ha podido cargar la categoría'})
            })
    },
    getOneByName(req, res) {
        Category.findOne({
                where: {
                    name: {
                        [Op.like]: `%${req.params.name}%`
                    }
                }
            })
            .then(category => res.send(category))
            .catch(err => {
                console.error(err)
                res.status(500).send({ message :'No se ha podido cargar la categoría'})
            })
    },
    async update(req, res) {
        try {
            const { comics, ...data} = req.body 
            const category = await Category.findByPk(req.params.id)
            category.update(data)

            if (comics && comics.length > 0) {
                category.setComics(comics)
            }

            return res.status(200).send({ message: 'Categoria actualizada con éxito', category })  
        } catch (error) {
            console.error(error)
            res.status(500).send({message:"No ha sido posible actualizar la categoría"})
        }
    },
    async delete(req, res) {
        try {
            await Category.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.send(
                'La categoría ha sido eliminada con éxito'
            )
        } catch (error) {
            console.error(error)
            res.status(500).send({message:"Ha habido un problema al eliminar la categoría"})
        }
    }
}

module.exports = CategoryController