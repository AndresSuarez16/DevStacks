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
          summary: "Administrators can see the whole list of users",
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
      "/users/UpdateData/{id}": {
        put: {
          tags: ["Users"],
          summary: "Users can update their information",
          parameters: [
            {
              in: "path",
              name: "id",
              description: "Id of the user",
              required: true,
              schema: {
                type: "string",
                example: "600b365c79bdd616403fc73b",
              },
            },
          ],
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
      "/users/UpdateState/{id}": {
        put: {
          tags: ["Users"],
          summary: "Administrators can update the state of a user",
          parameters: [
            {
              in: "path",
              name: "id",
              description: "Id of the user",
              required: true,
              schema: {
                type: "string",
                example: "600b365c79bdd616403fc73b",
              },
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/StateUser",
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
          summary: "Administrators can delelete a user",
          parameters: [
            {
              in: "path",
              name: "id",
              description: "Id of the User",
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
          summary: "Users can register in a project",
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
          summary: "To create an inscription",
          parameters: [
            {
              in: "path",
              name: "id",
              description: "Id of the project",
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
          summary: "Administrators can see all the projects",
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
          summary: "To create a project",
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ProjectNew",
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
          summary: "To create the objectives",
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
      "/projects/UpdateState/{id}": {
        put: {
          tags: ["Projects"],
          summary: "Administrators can update the state of a project",
          parameters: [
            {
              in: "path",
              name: "id",
              description: "Id of the project",
              required: true,
              schema: {
                type: "string",
                example: "600b365c79bdd616403fc73b",
              },
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/StateProject",
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
      "/projects/UpdatePhase/{id}": {
        put: {
          tags: ["Projects"],
          summary: "Administrators can update the phase of a project",
          parameters: [
            {
              in: "path",
              name: "id",
              description: "Id of the project",
              required: true,
              schema: {
                type: "string",
                example: "600b365c79bdd616403fc73b",
              },
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/PhaseProject",
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
            "Name",
            "Lastname",
            "Email",
            "Identification",
            "Password",
            "Role",
          ],
          properties: {
            Name: {
              type: "string",
              example: "Alexander",
            },
            Lastname: {
              type: "string",
              example: "Arango",
            },
            Email: {
              type: "string",
              example: "a@gmail.com",
            },
            Identification: {
              type: "string",
              example: "1093220",
            },
            Password: {
              type: "string",
              example: "111111",
            },
            Role: {
              type: "string",
              example: "STUDENT",
            },
          },
        },
        UserLogin: {
          type: "object",
          required: ["Email", "Password"],
          properties: {
            Email: {
              type: "string",
              example: "j.j@gmail.com",
            },
            Password: {
              type: "string",
              example: "111111",
            },
          },
        },
        UserLogin: {
          type: "object",
          required: ["Email", "Password"],
          properties: {
            Email: {
              type: "string",
              example: "j.j@gmail.com",
            },
            Password: {
              type: "string",
              example: "111111",
            },
          },
        },
        Project: {
          type: "object",
          required: [
            "Name",
            "Budget",
            "Initial_Date",
            "End_Date",
            "State",
            "Phase",
            "Leader",
          ],
          properties: {
            Name: {
              type: "string",
              example: "Project 1",
            },
            Budget: {
              type: "number",
              example: 150000,
            },
            Initial_Date: {
              type: "date",
              example: "2021-11-20",
            },
            End_Date: {
              type: "date",
              example: "2021-12-30",
            },
            State: {
              type: "string",
              example: "ACTIVE",
            },
            Phase: {
              type: "string",
              example: "STARTED",
            },
            Leader: {
              type: "string",
              example: "Andres",
            },
          },
        },
        ProjectNew: {
          type: "object",
          required: [
            "Name",
            "Budget",
            "Initial_Date",
            "End_Date"
          ],
          properties: {
            Name: {
              type: "string",
              example: "Project 1",
            },
            Budget: {
              type: "number",
              example: 150000,
            },
            Initial_Date: {
              type: "date",
              example: "2021-11-20",
            },
            End_Date: {
              type: "date",
              example: "2021-12-30",
            },
          },
        },
        Inscription: {
          type: "object",
          required: [
            "Name_project",
            "Initial_Date",
            "End_Date",
            "Leader",
            "Student",
            "State",
            "Income_Date",
            "Outcome_Date",
          ],
          properties: {
            Nameproject: {
              type: "string",
              example: "Project 1",
            },
            Initial_Date: {
              type: "date",
              example: "2021-11-20",
            },
            End_Date: {
              type: "date",
              example: "2021-12-30",
            },
            Leader: {
              type: "string",
              example: "Andres",
            },
            Student: {
              type: "string",
              example: "Andres",
            },
            State: {
              type: "string",
              example: "ACTIVE",
            },
            Income_Date: {
              type: "date",
              example: "2021-11-20",
            },
            Outcome_Date: {
              type: "date",
              example: "2021-12-30",
            },
          },
        },
        Objectives: {
          type: "object",
          required: ["Description", "Type"],
          properties: {
            Description: {
              type: "string",
              example: "Increase Sales",
            },
            Type: {
              type: "string",
              example: "GENERAL",
            },
          },
        },
        StateUser: {
          type: "object",
          required: ["State"],
          properties: {
            State: {
              type: "string",
              example: "AUTHORIZED",
            },
          },
        },
        StateProject: {
          type: "object",
          required: ["State"],
          properties: {
            State: {
              type: "string",
              example: "ACTIVE",
            },
          },
        },
        PhaseProject: {
          type: "object",
          required: ["Phase"],
          properties: {
            Phase: {
              type: "string",
              example: "STARTED",
            },
          },
        },
      },
    },
  },
  apis: ["./src/routes*.js"],
};
