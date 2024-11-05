const express       = require('express');
const sequelize     = require('./config/database');
const eventRoutes   = require('./routes/index');

const { swaggerUi, swaggerSpec } = require('./swagger'); // Import swagger setup


const cors = require('cors');
const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(cors());
app.use(express.json());
// Use Swagger UI for API documentation

app.use('/api',eventRoutes);

app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
  });
  




sequelize.sync({ force: true }).then(()=>{
    console.log('Success: DB connected and Models synced');
    
}).catch((err)=>{
    console.log('Error: DB connection failed',err);
});

module.exports = app;
