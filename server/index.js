import express from "express";
import cookieparser from "cookie-parser";
import dotenv from "dotenv";
import cors from 'cors';
import routes from './router.js'
const app = express();

const urlsCors = [" http://localhost:4321/"];

dotenv.config();
app.use(express.json());
app.use(cookieparser());
app.use(cors("http://localhost:4321/"));

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || urlsCors.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not Allowed by CORS"));
      }
    },
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
  })
);
app.use(routes);

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor en puerto  3000");
});
