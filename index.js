const express = require('express');
const cors = require('cors')
const app = express();

require('dotenv').config()

const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

app.use('/comics', require('./routes/comics'));
app.use('/categories', require('./routes/categories'));
app.use('/orders', require('./routes/orders'));
app.use('/users', require('./routes/users'));
app.use('/reviews', require('./routes/reviews'));

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`))
