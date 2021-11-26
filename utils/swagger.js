export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CUARTO CICLO MINTIC",
      version: "1.0.0",
    },
    servers: [
      {
        url: "https://minticciclocuatro.herokuapp.com/",
        description: "Servidor local",
      },
    ],
    tags: [
      {
        name: "Users",
        description:
          "All the users that can be students, leaders or administrators",
      },
      {
        name: "Projects",
        description: "All the projects of the university",
      },
      {
        name: "Inscriptions",
        description: "All the inscriptions of the students",
      },
    ],
    paths: {
      "/users": {
        get: {
          tags: ["Users"],
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/User",
                  },
                },
              },
            },
          },
        },
      },
      "/users/New": {
        post: {
          tags: ["Users"],
          summary: "To create users",
          description: "Create users",
          security: [],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User",
                },
              },
            },
          },
          responses: {
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            201: {
              description: "Created",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            404: {
              description: "Not Found",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/users/Login": {
        post: {
          tags: ["Users"],
          summary: "To login inside the page and get the Token",
          description: "Login",
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UserLogin",
                },
              },
            },
          },
          responses: {
            401: {
              description: "Unauthorized",
            },
            200: {
              description: "Ok",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            404: {
              description: "Not Found",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/users/Update": {
        put: {
          tags: ["Users"],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User",
                },
              },
            },
          },
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            401: {
              description: "Unauthorized",
            },
            404: {
              description: "Not Found",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/users/UpdateState": {
        put: {
          tags: ["Users"],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UserState",
                },
              },
            },
          },
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            401: {
              description: "Unauthorized",
            },
            404: {
              description: "Not Found",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/users/Delete/{id}": {
        delete: {
          tags: ["Users"],
          summary: "Para que los administradores eliminen usuarios del sistema",
          description: "Para eliminar alguno de los usuarios existentes",
          parameters: [
            {
              in: "path",
              name: "id",
              description: "Identificador del usuario",
              required: true,
              schema: {
                type: "string",
                example: "600b365c79bdd616403fc73b",
              },
            },
          ],
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            401: {
              description: "Unauthorized",
            },
            404: {
              description: "Not Found",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/inscriptions": {
        get: {
          tags: ["Inscriptions"],
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Inscription",
                  },
                },
              },
            },
          },
        },
      },
      "/inscriptions/New/{id}": {
        post: {
          tags: ["Inscriptions"],
          summary: "To create users",
          description: "Create users",
          parameters: [
            {
              in: "path",
              name: "id",
              description: "Identificador del proyecto",
              required: true,
              schema: {
                type: "string",
                example: "600b365c79bdd616403fc73b",
              },
            },
          ],
          security: [],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Inscription",
                },
              },
            },
          },
          responses: {
            201: {
              description: "Created",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            404: {
              description: "Not Found",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/projects": {
        get: {
          tags: ["Projects"],
          responses: {
            200: {
              description: "Ok",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Project",
                  },
                },
              },
            },
            404: {
              description: "Not Found",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            401: {
              description: "Unauthorized",
            },
          },
        },
      },
      "/projects/New": {
        post: {
          tags: ["Projects"],
          summary: "Para empezar a llenar el esquema de pedidos",
          description: "Para empezar a llenar datos",
          responses: {
            201: {
              description: "Created",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            401: {
              description: "Unauthorized",
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            404: {
              description: "Not Found",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      "/projects/Objectives/{id}": {
        post: {
          tags: ["Projects"],
          summary:
            "Para que los usuarios terminen de crear sus pedidos en el sistema",
          description: "Para terminar de crear el pedido",
          parameters: [
            {
              in: "path",
              name: "id",
              required: true,
              schema: {
                type: "string",
                example: "600b365c79bdd616403fc73a",
              },
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Objectives",
                },
              },
            },
          },
          responses: {
            201: {
              description: "Created",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      msg: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            400: {
              description: "Bad Request",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
            404: {
              description: "Not Found",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      err: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
        },
      },
      schemas: {
        User: {
          type: "object",
          required: [
            "nombre",
            "apellido",
            "correo",
            "identificacion",
            "contraseña",
            "rol",
            "estado",
          ],
          properties: {
            nombre: {
              type: "string",
              example: "Alexander",
            },
            apellido: {
              type: "string",
              example: "Arango",
            },
            correo: {
              type: "string",
              example: "a@gmail.com",
            },
            identificacion: {
              type: "string",
              example: "1093220",
            },
            contraseña: {
              type: "string",
              example: "111111",
            },
            rol: {
              type: "string",
              example: "ESTUDIANTE",
            },
            estado: {
              type: "string",
              example: "PENDIENTE",
            },
          },
        },
        UserLogin: {
          type: "object",
          required: ["correo", "contraseña"],
          properties: {
            correo: {
              type: "string",
              example: "j.j@gmail.com",
            },
            contraseña: {
              type: "string",
              example: "111111",
            },
          },
        },
        Project: {
          type: "object",
          required: [
            "nombre",
            "presupuesto",
            "fechaInicio",
            "fechaFin",
            "estado",
            "fase",
            "lider",
            "objetivos",
          ],
          properties: {
            nombre: {
              type: "string",
              example: "Project 1",
            },
            presupuesto: {
              type: "number",
              example: 150000,
            },
            fechaInicio: {
              type: "date",
              example: "2021-11-20",
            },
            fechaFin: {
              type: "date",
              example: "2021-12-30",
            },
            estado: {
              type: "string",
              example: "ACTIVO",
            },
            fase: {
              type: "string",
              example: "INICIADO",
            },
            lider: {
              type: "string",
              example: "Andres",
            },
            objetivos: {
              type: "array",
              items: {},
              example: [],
            },
          },
        },
        Inscription: {
          type: "object",
          required: [
            "Nameproject",
            "fechaInicio",
            "fechaFin",
            "lider",
            "estudiante",
            "estado",
            "fechaIngreso",
            "fechaEgreso",
          ],
          properties: {
            Nameproject: {
              type: "string",
              example: "Project 1",
            },
            fechaInicio: {
              type: "date",
              example: "2021-11-20",
            },
            fechaFin: {
              type: "date",
              example: "2021-12-30",
            },
            lider: {
              type: "string",
              example: "Andres",
            },
            estudiante: {
              type: "string",
              example: "Andres",
            },
            estado: {
              type: "string",
              example: "ACTIVO",
            },
            fechaIngreso: {
              type: "date",
              example: "2021-11-20",
            },
            fechaEgreso: {
              type: "date",
              example: "2021-12-30",
            },
          },
        },
        Objectives: {
          type: "object",
          required: ["descripcion", "tipo"],
          properties: {
            descripcion: {
              type: "string",
              example: "Aumentar ventas",
            },
            tipo: {
              type: "string",
              example: "GENERAL",
            },
          },
        },
        UserState: {
          type: "object",
          required: ["estado"],
          properties: {
            estado: {
              type: "string",
              example: "AUTORIZADO",
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes*.js"],
};
