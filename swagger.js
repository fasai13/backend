const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User Management",
      version: "1.0.0",
      description: "API สำหรับจัดการผู้ใช้",
    },
    servers: [
      {
        url: "/",
        description: "Current Server",
      },
      {
        url: "http://localhost:3000",
        description: "Local server",
      },
    ],

    tags: [
      { name: "Auth", description: "Authentication & Authorization" },
      { name: "Users", description: "User management" },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },

  apis: [path.join(__dirname, "./routes/*.js")],
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
