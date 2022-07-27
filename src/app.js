import express from "express";
import IndexRoutes from "./routes/index.routes";
import { create } from "express-handlebars";
import path from "path";
import morgan from "morgan";

const app = express();

app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaulLayout: "main",
    extname: ".hbs",
  }).engine
);
app.set("view engine", ".hbs");
// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extend: false }));
// routes
app.use(IndexRoutes);

export default app;
