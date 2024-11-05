// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',  // OpenAPI version
        info: {
            title: 'SHEBA Event Management System',
            version: '1.0.0',
            description: 'A simple Express API with Swagger documentation for the SHEBA Event Management System',
        },
    },
    // Path to your API routes, make sure the path is correct
    apis: ['./routes/*.js'],  // Adjust this path according to where your route files are
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = {
    swaggerUi,
    swaggerSpec
};
