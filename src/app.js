const express =require ('express');
const cors= require('cors');
const app= express();

//settings
app.set('port',process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());
//routes
app.use('/api/categorias',require('./routes/categorias'))
app.use('/api/encargados',require('./routes/encargados'))
app.use('/api/actividades',require('./routes/actividades'))
app.use('/api/establecimientos',require('./routes/establecimientos'))
app.use('/api/horariodeactividades',require('./routes/horariodeactividades'))
app.use('/api/platos',require('./routes/platos'))
//app.use('/api/alimentacions',require('./routes/alimentacions'))
//app.use('/api/reservaalimentacions',require('./routes/reserva-alimentacions'))
//app.use('/api/reservas',require('./routes/reservas'))
app.use('/api/admins',require('./routes/admins'))

module.exports=app;

