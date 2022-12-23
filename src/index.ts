process.env.NODE_ENV = process.env.NODE_ENV || process.argv.includes("--development") ? "development" : "production";
process.env.PORT = process.env.PORT || 3000;


// Load logger
require("./core/Logger");


// Capture rejections
process.on("unhandledRejection", (err) => {
    const logger = console.getLogger("unhandledRejection");
    logger.error(err);
    process.exit(1);
});


// Server
import path from "path";
import express from "express";
import bodyParser from "body-parser"

// Create server
const app = express()
const pub = path.join(process.cwd(), "client", "build");
app.use(express.static(pub))
app.use(bodyParser.json());

// Routers
import API from "./core/API";
app.use("/", API);

// Start server
app.listen(process.env.PORT, () => console.info(`App listening on port ${process.env.PORT} (http://localhost:${process.env.PORT})`))
