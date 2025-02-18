const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger/swaggerConfig");
const connectDB = require("./config/db");
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));


// Swagger Setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Connect to MongoDB
connectDB();


// Routes
app.use("/api", require("./routes/Routes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
