const express = require("express");
const app = express();
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const PORT = 3000;

// data parser - used to parse post data
//const bodyParser = require("body-parser");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/*
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads
*/
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Library API",
      version: "1.0.0",
    },
  },
  apis: ["app.js"],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

/*
app.get("/", (req, res) => {
  res.send("Hello JOE the best!");
});
*/

/**
 * @swagger
 * /books:
 *  get:
 *      description: Get all books
 *      responses:
 *          200:
 *              description: Success
 *
 */

app.get("/books", (req, res) => {
  res.send([
    {
      isbn: "9781781100486",
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      publisher: "Scholastic",
    },
  ]);
});

/**
 * @swagger
 * /book:
 *  post:
 *      description: Get one book
 *      parameters:
 *      - name: title
 *        description: Book title
 *        in: body
 *        required: true
 *        type: string
 *      responses:
 *          200:
 *              description: Success
 *
 */

app.post("/book", (req, res) => {
  const title = req.body.title;
  res.send({ title });
});

app.listen(PORT, () => console.log(`The server is running on port: ${PORT}`));

//********************************* */
/*
const cors = require("cors");
const morgan = require("morgan");
const low = require("lowdb");

const PORT = process.env.PORT || 4000;

const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({ books: [] }).write();

app.db = db;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.listen(PORT, () => console.log(`The server is running on port: ${PORT}`));
*/
